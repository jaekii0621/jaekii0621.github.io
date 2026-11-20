import { defineCollection, reference } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			// 'AI/머신러닝'처럼 '/'로 단계를 나눈 카테고리 경로
			category: z
				.string()
				.transform((s) => s.split('/').map((p) => p.trim()).filter(Boolean).join('/'))
				.refine((s) => s.length > 0, '카테고리를 적어야 한다'),
			// Transform string to Date object
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: z.optional(image()),
			// 시리즈 글이면 시리즈 id(src/content/series/<id>.yaml)와 편 번호(1부터)
			series: reference('series').optional(),
			seriesOrder: z.number().int().positive().optional(),
			// 실행 환경 버전 목록. 제목 아래 꼬리표로 보여 준다(예: ['Python 3.14.8', 'NumPy 2.5.4'])
			env: z.array(z.string()).optional(),
			// true면 /notebooks/<글 id>.ipynb 내려받기 카드를 보여 준다
			notebook: z.boolean().default(false),
		})
		.refine((d) => !d.series === !d.seriesOrder, {
			message: 'series와 seriesOrder는 함께 적는다',
			path: ['seriesOrder'],
		}),
});

const series = defineCollection({
	// 시리즈 하나당 YAML 파일 하나. 편 제목 목록에 아직 쓰지 않은 편도 적는다.
	loader: glob({ base: './src/content/series', pattern: '**/*.{yaml,yml}' }),
	schema: z.object({
		title: z.string(),
		// 편 제목. 순서가 편 번호다. 전체 편수는 길이로 계산한다.
		parts: z.array(z.string()).min(1),
	}),
});

const links = defineCollection({
	// 스크랩 한 건당 YAML 파일 하나. `pnpm scrap <url>`로 초안을 만든다.
	loader: glob({ base: './src/content/links', pattern: '**/*.{yaml,yml}' }),
	schema: ({ image }) =>
		z.object({
			url: z.url(),
			title: z.string(),
			// 원문 사이트 이름. 없으면 도메인을 쓴다.
			source: z.string().optional(),
			// og:image를 줄인 카드 썸네일 (src/assets/links/). 없으면 카드에 도메인을 보여준다.
			image: image().optional(),
			// 썸네일을 만든 원본 og:image URL. `pnpm scrap --thumb`으로 다시 만들 때 쓴다.
			imageSource: z.url().optional(),
			// 원문 요약 60자 이내 1~2문장. 직접 쓴다.
			summary: z.string(),
			// 왜 골랐는지 한 줄
			comment: z.string().optional(),
			tags: z.array(z.string()).default([]),
			// 스크랩한 시각 (예: 2026-10-29T15:20:00+09:00). 목록 정렬 기준이다.
			date: z.coerce.date(),
		}),
});

export const collections = { blog, series, links };
