import type { CollectionEntry } from 'astro:content';

type Post = CollectionEntry<'blog'>;

export interface CategoryNode {
	name: string;
	// 'AI/머신러닝'처럼 루트부터의 경로
	path: string;
	// 이 노드와 하위 노드에 속한 글 수
	count: number;
	children: CategoryNode[];
	// 이 노드에 직접 속한 글 (최신순)
	posts: Post[];
}

export const splitCategory = (category: string) =>
	category
		.split('/')
		.map((s) => s.trim())
		.filter(Boolean);

export const categoryUrl = (path: string) =>
	`/blog/category/${splitCategory(path).map(encodeURIComponent).join('/')}/`;

const byDateDesc = (a: Post, b: Post) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf();

export function buildCategoryTree(posts: Post[]): CategoryNode[] {
	const root: CategoryNode = { name: '', path: '', count: 0, children: [], posts: [] };
	for (const post of posts) {
		let node = root;
		for (const name of splitCategory(post.data.category)) {
			const path = node.path ? `${node.path}/${name}` : name;
			let child = node.children.find((c) => c.name === name);
			if (!child) {
				child = { name, path, count: 0, children: [], posts: [] };
				node.children.push(child);
			}
			child.count++;
			node = child;
		}
		node.posts.push(post);
	}
	const sort = (nodes: CategoryNode[]) => {
		nodes.sort((a, b) => a.name.localeCompare(b.name, 'ko'));
		for (const n of nodes) {
			n.posts.sort(byDateDesc);
			sort(n.children);
		}
	};
	sort(root.children);
	return root.children;
}

export function flattenCategories(nodes: CategoryNode[]): CategoryNode[] {
	return nodes.flatMap((n) => [n, ...flattenCategories(n.children)]);
}

// 경로가 같거나 그 하위 카테고리인지
export const isWithin = (category: string, path: string) =>
	category === path || category.startsWith(`${path}/`);
