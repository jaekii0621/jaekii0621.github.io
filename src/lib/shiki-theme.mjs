// 코드 블록 하이라이트 테마. 문자열 색은 Material 계열에서 골랐다.

/** @type {import('shiki').ThemeRegistration} */
export const codeTheme = {
	name: 'blog-dark',
	type: 'dark',
	colors: {
		'editor.background': '#1c1c1e',
		'editor.foreground': '#f5f5f5',
	},
	settings: [
		{ settings: { foreground: '#f5f5f5', background: '#1c1c1e' } },
		{ scope: ['comment', 'punctuation.definition.comment'], settings: { foreground: '#8e8e93' } },
		{
			scope: ['keyword', 'storage.type', 'storage.modifier', 'keyword.operator.logical', 'keyword.control'],
			settings: { foreground: '#c792ea' },
		},
		{ scope: ['constant.numeric', 'constant.language'], settings: { foreground: '#f5a97f' } },
		{
			scope: ['entity.name.function', 'support.function', 'meta.function-call.generic', 'support.type.builtin'],
			settings: { foreground: '#82aaff' },
		},
		{ scope: ['string', 'punctuation.definition.string'], settings: { foreground: '#c3e88d' } },
		{ scope: ['keyword.operator'], settings: { foreground: '#f5f5f5' } },
	],
};
