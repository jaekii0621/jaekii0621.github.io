// 마크다운 본문용 Sätteri hast 플러그인. astro.config.mjs의 markdown.processor에 건다.

/**
 * 표를 테두리 상자 div로 감싼다. 넓은 표는 상자 안에서만 가로로 밀린다.
 * @type {import('satteri').HastPluginDefinition}
 */
export const tableWrap = {
	name: 'table-wrap',
	element: {
		filter: ['table'],
		visit(node, ctx) {
			ctx.wrapNode(node, {
				type: 'element',
				tagName: 'div',
				properties: { className: ['table-wrap'] },
				children: [],
			});
		},
	},
};

/**
 * http(s)로 시작하는 링크에 external 클래스와 ↗ 아이콘을 붙인다.
 * @type {import('satteri').HastPluginDefinition}
 */
export const externalLinks = {
	name: 'external-links',
	element: {
		filter: ['a'],
		visit(node, ctx) {
			const href = node.properties?.href;
			if (typeof href !== 'string' || !/^https?:\/\//.test(href)) return;
			const className = /** @type {string[]} */ (node.properties.className ?? []);
			ctx.setProperty(node, 'className', [...className, 'external']);
			ctx.appendChild(node, {
				type: 'element',
				tagName: 'svg',
				properties: {
					className: ['external-icon'],
					viewBox: '0 0 16 16',
					width: 12,
					height: 12,
					fill: 'none',
					stroke: 'currentColor',
					strokeWidth: 1.75,
					strokeLinecap: 'round',
					strokeLinejoin: 'round',
					ariaHidden: 'true',
					focusable: 'false',
				},
				children: [
					{ type: 'element', tagName: 'path', properties: { d: 'M5 11 11 5M6 5h5v5' }, children: [] },
				],
			});
		},
	},
};

// ---------- 인용문 → 상자 ----------

// 선 아이콘(24x24, Feather Icons MIT)
const CALLOUT_ICONS = {
	term: ['M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z', 'M12 16v-4', 'M12 8h.01'],
	check: ['M20 6 9 17l-5-5'],
	warning: [
		'M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z',
		'M12 9v4',
		'M12 17h.01',
	],
};
const CALLOUT_LABELS = { term: '용어', check: '체크', warning: '주의' };
// 첫 줄이 `**용어:**`, `**체크:**`로 시작하면 그 상자. 머리말은 상자 라벨이 대신한다
const LEAD_LABELS = { '용어:': 'term', '체크:': 'check' };

/** @param {any} node */
const isElement = (node, tag) => node?.type === 'element' && (!tag || node.tagName === tag);
/** @param {any} node */
const textOf = (node) =>
	node.type === 'text' ? node.value : (node.children ?? []).map((/** @type {any} */ c) => textOf(c)).join('');

/** @param {string[]} paths */
const iconNode = (paths) => ({
	type: 'element',
	tagName: 'svg',
	properties: {
		viewBox: '0 0 24 24',
		width: 16,
		height: 16,
		fill: 'none',
		stroke: 'currentColor',
		strokeWidth: 1.75,
		strokeLinecap: 'round',
		strokeLinejoin: 'round',
		ariaHidden: 'true',
		focusable: 'false',
	},
	children: paths.map((d) => ({ type: 'element', tagName: 'path', properties: { d }, children: [] })),
});

/**
 * hast 노드를 새 객체로 옮긴다. Sätteri 노드에는 복사할 수 없는 내부 값이 붙어 있어 structuredClone을 쓸 수 없다.
 * @param {any} node
 * @returns {any}
 */
function copyNode(node) {
	/** @type {any} */
	const out = { type: node.type };
	if ('tagName' in node) out.tagName = node.tagName;
	if ('value' in node) out.value = node.value;
	if (node.properties) {
		out.properties = Object.fromEntries(
			Object.entries(node.properties).map(([k, v]) => [k, Array.isArray(v) ? [...v] : v]),
		);
	}
	if (node.children) out.children = node.children.map(copyNode);
	return out;
}

/** 첫 문단 맨 앞의 머리말(굵은 "용어:" 또는 "⚠" 기호)을 지운다 */
function stripLead(/** @type {any[]} */ children, /** @type {'strong' | 'symbol'} */ kind) {
	const out = children.map(copyNode);
	const p = out.find((c) => isElement(c, 'p'));
	if (!p) return out;
	if (kind === 'strong') p.children.shift();
	const first = p.children[0];
	if (first?.type === 'text') {
		first.value = kind === 'symbol' ? first.value.replace(/^\s*⚠️?\s*/, '') : first.value.replace(/^\s+/, '');
	}
	return out;
}

/**
 * 인용문을 상자로 바꾼다.
 * - `> **용어:** …` → 용어 설명 상자, `> **체크:** …` → 체크 상자, `> ⚠ …` → 주의 상자(테두리 + 아이콘 라벨)
 * - `> **굵은 문장.** …` → 핵심 문장 상자(회색 바탕 + 강조색 점)
 * 어느 것에도 맞지 않는 인용문은 그대로 둔다.
 * @type {import('satteri').HastPluginDefinition}
 */
export const calloutBoxes = {
	name: 'callout-boxes',
	element: {
		filter: ['blockquote'],
		visit(node, ctx) {
			const children = /** @type {any[]} */ (node.children ?? []);
			const p = children.find((c) => isElement(c, 'p'));
			if (!p) return;
			const lead = p.children?.[0];
			/** @type {'term' | 'check' | 'warning' | 'key' | undefined} */
			let kind;
			let body;
			if (isElement(lead, 'strong') && LEAD_LABELS[textOf(lead).trim()]) {
				kind = LEAD_LABELS[textOf(lead).trim()];
				body = stripLead(children, 'strong');
			} else if (lead?.type === 'text' && /^\s*⚠/.test(lead.value)) {
				kind = 'warning';
				body = stripLead(children, 'symbol');
			} else if (isElement(lead, 'strong')) {
				kind = 'key';
				body = children.map(copyNode);
			}
			if (!kind) return;

			if (kind === 'key') {
				ctx.replaceNode(node, {
					type: 'element',
					tagName: 'div',
					properties: { className: ['callout', 'callout-key'] },
					children: [
						{ type: 'element', tagName: 'span', properties: { className: ['callout-dot'], ariaHidden: 'true' }, children: [] },
						{ type: 'element', tagName: 'div', properties: { className: ['callout-body'] }, children: body },
					],
				});
				return;
			}
			ctx.replaceNode(node, {
				type: 'element',
				tagName: 'aside',
				properties: { className: ['callout', `callout-${kind}`] },
				children: [
					{
						type: 'element',
						tagName: 'p',
						properties: { className: ['callout-label'] },
						children: [iconNode(CALLOUT_ICONS[kind]), { type: 'text', value: CALLOUT_LABELS[kind] }],
					},
					{ type: 'element', tagName: 'div', properties: { className: ['callout-body'] }, children: body },
				],
			});
		},
	},
};

// ---------- 코드 블록 ----------

// 강조 없이 그리는 언어. output은 실행 결과, 나머지는 식·도식 블록이다.
const PLAIN_LANGS = new Set(['output', 'txt', 'text', 'plaintext', 'plain']);
const LABELS = { output: '출력', txt: '식', text: '식', plaintext: '식', plain: '식' };

/**
 * Shiki transformer: 코드 블록을 figure로 감싸고 머리 줄(언어 라벨 + 복사 버튼)을 붙인다.
 * 식 블록(```txt)은 밝은 상자로 그리므로 복사 버튼과 글자색을 뺀다. 복사 동작은 BlogPost 레이아웃의 스크립트가 맡는다.
 * @type {import('shiki').ShikiTransformer}
 */
export const codeBlockTransformer = {
	name: 'code-block-head',
	span(node) {
		// 강조 없는 블록은 테마의 글자색을 지워 CSS 색을 쓴다(식 블록은 밝은 바탕)
		if (PLAIN_LANGS.has(this.options.lang)) delete node.properties.style;
	},
	root(root) {
		const lang = this.options.lang || 'plaintext';
		const pre = root.children.find((n) => n.type === 'element' && n.tagName === 'pre');
		if (!pre) return;
		const kind = lang === 'output' ? 'output' : PLAIN_LANGS.has(lang) ? 'formula' : 'code';
		if (kind !== 'code') delete pre.properties.style;
		const head = {
			type: 'element',
			tagName: 'div',
			properties: { className: ['code-head'] },
			children: [
				{
					type: 'element',
					tagName: 'span',
					properties: { className: ['code-lang'] },
					children: [{ type: 'text', value: LABELS[lang] ?? lang }],
				},
				...(kind === 'formula'
					? []
					: [
							{
								type: 'element',
								tagName: 'button',
								properties: { type: 'button', className: ['copy-btn'], dataCopy: '', ariaLive: 'polite' },
								children: [{ type: 'text', value: '복사' }],
							},
						]),
			],
		};
		root.children = [
			{
				type: 'element',
				tagName: 'figure',
				properties: { className: ['code-block', `code-${kind}`] },
				children: [head, pre],
			},
		];
	},
};
