import { type CollectionEntry, getCollection } from 'astro:content';

type Post = CollectionEntry<'blog'>;
type Series = CollectionEntry<'series'>;

export const postUrl = (post: Post) => `/blog/${post.id}/`;
export const notebookUrl = (post: Post) => `/notebooks/${post.id}.ipynb`;

export interface SeriesPart {
	// 1부터 시작하는 편 번호
	order: number;
	title: string;
	// 발행한 편이면 글이 있다. 없으면 "준비 중"
	post?: Post;
}

export interface SeriesInfo {
	id: string;
	title: string;
	parts: SeriesPart[];
	total: number;
	published: number;
	// 모든 편을 발행했는지
	complete: boolean;
	// 가장 최근에 발행한 편의 날짜(정렬용)
	lastPubDate?: Date;
}

const byDateAsc = (a: Post, b: Post) =>
	a.data.pubDate.valueOf() - b.data.pubDate.valueOf() || a.id.localeCompare(b.id);

/** 시리즈 정의와 발행한 글을 합쳐 편 목록을 만든다. 편 번호가 겹치거나 범위를 넘으면 빌드를 멈춘다. */
export function buildSeriesInfo(series: Series, posts: Post[]): SeriesInfo {
	const parts: SeriesPart[] = series.data.parts.map((title, i) => ({ order: i + 1, title }));
	for (const post of posts) {
		if (post.data.series?.id !== series.id) continue;
		const order = post.data.seriesOrder!;
		const part = parts[order - 1];
		if (!part) {
			throw new Error(`${post.id}: seriesOrder ${order}는 시리즈 '${series.id}'의 편 수(${parts.length})를 넘는다`);
		}
		if (part.post) {
			throw new Error(`${post.id}: 시리즈 '${series.id}' ${order}편을 ${part.post.id}도 쓰고 있다`);
		}
		part.post = post;
	}
	const publishedPosts = parts.flatMap((p) => (p.post ? [p.post] : []));
	const lastPubDate = publishedPosts.map((p) => p.data.pubDate).sort((a, b) => b.valueOf() - a.valueOf())[0];
	return {
		id: series.id,
		title: series.data.title,
		parts,
		total: parts.length,
		published: publishedPosts.length,
		complete: publishedPosts.length === parts.length,
		lastPubDate,
	};
}

/** 시리즈 이름을 눌렀을 때 갈 글. 연재 중이면 가장 최근에 발행한 편, 완결이면 첫 편 */
export function seriesEntryUrl(s: SeriesInfo): string | undefined {
	const published = s.parts.filter((p) => p.post);
	const part = s.complete ? published[0] : published[published.length - 1];
	return part?.post ? postUrl(part.post) : undefined;
}

/** 글이 한 편 이상 있는 시리즈 전체. 최근에 발행한 시리즈가 앞에 온다. */
export async function getAllSeries(posts?: Post[]): Promise<SeriesInfo[]> {
	const allPosts = posts ?? (await getCollection('blog'));
	const series = await getCollection('series');
	return series
		.map((s) => buildSeriesInfo(s, allPosts))
		.filter((s) => s.published > 0)
		.sort((a, b) => (b.lastPubDate?.valueOf() ?? 0) - (a.lastPubDate?.valueOf() ?? 0));
}

/** 글이 속한 시리즈. 시리즈 글이 아니면 undefined */
export async function getSeriesOf(post: Post, posts?: Post[]): Promise<SeriesInfo | undefined> {
	if (!post.data.series) return undefined;
	const all = await getAllSeries(posts);
	return all.find((s) => s.id === post.data.series!.id);
}

/**
 * 이전·다음 글 카드에 넣을 것.
 * - post: 링크할 글
 * - upcoming: 시리즈의 다음 편이 아직 없음(편 제목과 "준비 중")
 * - none: 그쪽에 글이 없음(시리즈의 첫 글, 카테고리의 첫·마지막 글)
 */
export type Neighbor =
	| { kind: 'post'; post: Post; order?: number }
	| { kind: 'upcoming'; order: number; title: string }
	| { kind: 'none' };

export interface Neighbors {
	prev: Neighbor;
	next: Neighbor;
}

/**
 * 이전·다음 글. 시리즈 글은 시리즈 순서, 시리즈가 아닌 글은 같은 카테고리 안 날짜 순서다.
 * 시리즈의 바로 앞뒤 편이 아직 없으면 그 편을 "준비 중"으로 돌려준다.
 */
export async function getNeighbors(post: Post, posts?: Post[]): Promise<Neighbors> {
	const allPosts = posts ?? (await getCollection('blog'));
	const series = await getSeriesOf(post, allPosts);
	if (series) {
		const order = post.data.seriesOrder!;
		const side = (o: number): Neighbor => {
			const part = series.parts[o - 1];
			if (!part) return { kind: 'none' };
			return part.post ? { kind: 'post', post: part.post, order: o } : { kind: 'upcoming', order: o, title: part.title };
		};
		return { prev: side(order - 1), next: side(order + 1) };
	}
	const sameCategory = allPosts.filter((p) => p.data.category === post.data.category).sort(byDateAsc);
	const i = sameCategory.findIndex((p) => p.id === post.id);
	const side = (p?: Post): Neighbor => (p ? { kind: 'post', post: p } : { kind: 'none' });
	return { prev: side(sameCategory[i - 1]), next: side(sameCategory[i + 1]) };
}
