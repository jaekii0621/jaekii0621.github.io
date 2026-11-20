// 스크랩 초안을 만든다: URL의 og 메타데이터를 읽어 src/content/links/에 YAML 파일을 쓰고,
// og:image는 카드 비율 썸네일(WebP)로 줄여 src/assets/links/에 저장한다.
// 사용법:
//   pnpm scrap <url> [태그 ...]      새 스크랩 초안
//   pnpm scrap --thumb <yaml 파일>   imageSource로 썸네일을 다시 만든다
// 만든 뒤 summary를 직접 다듬고 comment를 채운다.
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { basename, join } from 'node:path';
import sharp from 'sharp';

const ROOT = join(import.meta.dirname, '..');
const LINKS_DIR = join(ROOT, 'src', 'content', 'links');
const THUMBS_DIR = join(ROOT, 'src', 'assets', 'links');
// 카드 썸네일 비율(1.91:1)에 맞춘다. 카드 너비의 약 2배.
const THUMB = { width: 800, height: 419, quality: 80 };
const UA = 'Mozilla/5.0 (compatible; blog-link-preview)';

// JSON 문자열은 그대로 YAML 문자열이 된다
const q = JSON.stringify;

// 원본 이미지를 받아 썸네일을 쓰고, YAML에 넣을 상대 경로를 돌려준다. 실패하면 undefined.
async function makeThumbnail(imageUrl, slug) {
	try {
		const res = await fetch(imageUrl, { headers: { 'user-agent': UA } });
		if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
		const input = Buffer.from(await res.arrayBuffer());
		mkdirSync(THUMBS_DIR, { recursive: true });
		const file = join(THUMBS_DIR, `${slug}.webp`);
		const info = await sharp(input)
			.resize(THUMB.width, THUMB.height, { fit: 'cover', withoutEnlargement: false })
			.webp({ quality: THUMB.quality })
			.toFile(file);
		console.log(
			`썸네일: ${file} (원본 ${(input.length / 1024).toFixed(0)}KB → ${(info.size / 1024).toFixed(0)}KB)`,
		);
		return `../../assets/links/${slug}.webp`;
	} catch (e) {
		console.error(`썸네일을 만들지 못했다 (${imageUrl}): ${e.message}`);
		return undefined;
	}
}

if (process.argv[2] === '--thumb') {
	const yamlFile = process.argv[3];
	if (!yamlFile) {
		console.error('사용법: pnpm scrap --thumb <yaml 파일>');
		process.exit(1);
	}
	const text = readFileSync(yamlFile, 'utf8');
	const source = text.match(/^imageSource:\s*"([^"]+)"/m)?.[1];
	if (!source) {
		console.error('imageSource가 없다');
		process.exit(1);
	}
	const path = await makeThumbnail(source, basename(yamlFile).replace(/\.ya?ml$/, ''));
	if (!path) process.exit(1);
	const line = `image: ${q(path)}`;
	writeFileSync(
		yamlFile,
		/^image:.*$/m.test(text)
			? text.replace(/^image:.*$/m, line)
			: text.replace(/^imageSource:/m, `${line}\nimageSource:`),
	);
	process.exit(0);
}

const [url, ...tags] = process.argv.slice(2);
if (!url) {
	console.error('사용법: pnpm scrap <url> [태그 ...]');
	process.exit(1);
}

const res = await fetch(url, { headers: { 'user-agent': UA }, redirect: 'follow' });
if (!res.ok) {
	console.error(`가져오기 실패: ${res.status} ${res.statusText}`);
	process.exit(1);
}
const html = await res.text();
const finalUrl = res.url || url;

const decode = (s) =>
	s
		.replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCodePoint(parseInt(h, 16)))
		.replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(Number(d)))
		.replace(/&quot;/g, '"')
		.replace(/&#39;|&apos;/g, "'")
		.replace(/&lt;/g, '<')
		.replace(/&gt;/g, '>')
		.replace(/&amp;/g, '&')
		.replace(/\s+/g, ' ')
		.trim();

// <meta property="og:title" content="..."> 와 속성 순서가 반대인 경우를 모두 찾는다
function meta(...keys) {
	for (const tag of html.match(/<meta\s[^>]*>/gi) ?? []) {
		const key = tag.match(/(?:property|name)\s*=\s*["']([^"']+)["']/i)?.[1]?.toLowerCase();
		const content = tag.match(/content\s*=\s*("([^"]*)"|'([^']*)')/i);
		if (key && content && keys.includes(key)) return decode(content[2] ?? content[3]);
	}
	return undefined;
}

const host = new URL(finalUrl).hostname.replace(/^www\./, '');
const title =
	meta('og:title', 'twitter:title') ?? decode(html.match(/<title[^>]*>([^<]*)/i)?.[1] ?? host);
const summary = meta('og:description', 'twitter:description', 'description') ?? '';
const source = meta('og:site_name') ?? host;
const rawImage = meta('og:image', 'og:image:url', 'twitter:image');
const imageSource = rawImage ? new URL(rawImage, finalUrl).href : undefined;

// 같은 날 추가한 스크랩도 순서가 정해지도록 시각까지 한국 시간으로 적는다
const kst = new Date(Date.now() + 9 * 60 * 60 * 1000).toISOString().slice(0, 19);
const date = kst.slice(0, 10);
const datetime = `${kst}+09:00`;
const tail =
	new URL(finalUrl).pathname
		.split('/')
		.filter(Boolean)
		.pop()
		?.replace(/\.[a-z]+$/i, '')
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/^-|-$/g, '')
		.slice(0, 40) || 'index';
const slug = `${date}-${host.replace(/[^a-z0-9]+/gi, '-')}-${tail}`;

mkdirSync(LINKS_DIR, { recursive: true });
const file = join(LINKS_DIR, `${slug}.yaml`);
if (existsSync(file)) {
	console.error(`이미 있다: ${file}`);
	process.exit(1);
}

const image = imageSource && (await makeThumbnail(imageSource, slug));

const lines = [
	`url: ${q(finalUrl)}`,
	`title: ${q(title)}`,
	`source: ${q(source)}`,
	image ? `image: ${q(image)}` : '# image: 썸네일 없음',
	imageSource ? `imageSource: ${q(imageSource)}` : '# imageSource: 원문에 og:image가 없다',
	'# 원문 og:description을 넣어 두었다. 60자 이내 1~2문장으로 직접 다듬는다.',
	`summary: ${q(summary)}`,
	'# 왜 골랐는지 한 줄',
	'comment: ""',
	`tags: ${q(tags)}`,
	`date: ${datetime}`,
];
writeFileSync(file, lines.join('\n') + '\n');
console.log(`만들었다: ${file}`);
