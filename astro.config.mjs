// @ts-check

import { readFileSync } from 'node:fs';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig, fontProviders } from 'astro/config';
import { satteri } from '@astrojs/markdown-satteri';
import { calloutBoxes, codeBlockTransformer, externalLinks, tableWrap } from './src/lib/markdown-plugins.mjs';
import { codeTheme } from './src/lib/shiki-theme.mjs';

// Pretendard 동적 서브셋: 조각마다 unicode-range를 달아 페이지에 쓰인 글자의 조각만 내려받게 한다.
/** @type {Record<string, string[]>} */
const pretendardRanges = JSON.parse(
	readFileSync(new URL('./src/assets/fonts/pretendard/unicode-ranges.json', import.meta.url), 'utf8'),
);
const pretendardWeights = /** @type {const} */ ([
	['Regular', 400],
	['Medium', 500],
	['SemiBold', 600],
]);
const pretendardVariants = pretendardWeights.flatMap(([name, weight]) =>
	Object.entries(pretendardRanges).map(([index, ranges]) => ({
		src: [`./src/assets/fonts/pretendard/Pretendard-${name}.subset.${index}.woff2`],
		weight,
		style: /** @type {const} */ ('normal'),
		display: /** @type {const} */ ('swap'),
		unicodeRange: /** @type {[string, ...string[]]} */ (ranges),
	})),
);

// https://astro.build/config
export default defineConfig({
	// 블로그 주소. GitHub Pages 기본 주소면 'https://<아이디>.github.io', 개인 도메인이면 그 주소를 쓴다.
	site: 'https://example.github.io',
	integrations: [mdx(), sitemap()],
	markdown: {
		processor: satteri({ hastPlugins: [tableWrap, externalLinks, calloutBoxes] }),
		shikiConfig: {
			// ```output은 코드 실행 결과. 강조 없이 그리고 머리 줄에 "출력" 라벨을 붙인다(codeBlockTransformer)
			langAlias: { output: 'txt' },
			theme: codeTheme,
			transformers: [codeBlockTransformer],
		},
	},
	fonts: [
		{
			provider: fontProviders.local(),
			name: 'Pretendard',
			cssVariable: '--font-sans',
			fallbacks: ['-apple-system', 'Segoe UI', 'sans-serif'],
			options: { variants: pretendardVariants },
		},
		{
			provider: fontProviders.google(),
			name: 'Geist Mono',
			cssVariable: '--font-mono',
			weights: [400, 500],
			styles: ['normal'],
			subsets: ['latin'],
			fallbacks: ['monospace'],
		},
	],
});
