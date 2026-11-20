// 사이트 전체에서 쓰는 상수. 블로그를 시작할 때 이 파일의 값을 자기 것으로 바꾼다.
// 사이트 주소는 astro.config.mjs의 `site`에서 바꾼다.

export const SITE_TITLE = '내 블로그';
export const SITE_DESCRIPTION = '공부하고 만든 것을 기록하는 블로그';

// 홈 첫 화면 문구
export const HOME_INTRO = {
	label: '공부 기록 · 개발 노트',
	// 줄바꿈 위치는 배열로 나눈다
	title: ['배운 것을', '코드와 함께 기록합니다'],
	lead: '여기에 블로그를 소개하는 두세 문장을 쓴다. 누가, 무엇을, 왜 기록하는지 적으면 된다.',
};

// 소개 페이지 프로필 칸. 본문은 src/content/about.mdx에 쓴다.
export const PROFILE = {
	// 동그란 아바타에 보이는 글자 하나
	initial: 'B',
	name: '이름',
	role: '한 줄 소개',
	// 요약 표. 필요 없으면 빈 배열로 둔다.
	summary: [
		{ term: '경력', desc: '20XX년부터 개발' },
		{ term: '관심사', desc: '관심 있는 분야' },
	],
};

export interface Cert {
	name: string;
	// 배지 이미지 URL
	badge: string;
	// 검증 페이지 URL
	verify: string;
}

// 소개 페이지의 자격증 카드. 보여 줄 자격증이 없으면 null로 둔다.
export const CERT: Cert | null = null;

export interface NavItem {
	label: string;
	href: string;
	// 이 경로로 시작하는 주소도 현재 항목으로 친다(예: /blog/는 /blog/category/…/도 포함)
	match: string;
}

// 상단 메뉴. 순서대로 보인다.
export const NAV_ITEMS: NavItem[] = [
	{ label: '홈', href: '/', match: '/' },
	{ label: '블로그', href: '/blog/', match: '/blog/' },
	{ label: '스크랩', href: '/links/', match: '/links/' },
	{ label: '소개', href: '/about/', match: '/about/' },
];

// 하단 링크
export const FOOTER_LINKS = [
	{ label: '블로그', href: '/blog/' },
	{ label: '스크랩', href: '/links/' },
];

export interface Contact {
	label: string;
	// 화면에 보이는 값(예: 이메일 주소, GitHub 아이디)
	value: string;
	href: string;
	icon: 'mail' | 'github' | 'linkedin';
	external: boolean;
}

// 연락처. 하단과 소개 페이지에서 같이 쓴다. 쓰지 않는 항목은 지운다.
export const CONTACTS: Contact[] = [
	{
		label: '이메일',
		value: 'you@example.com',
		href: 'mailto:you@example.com',
		icon: 'mail',
		external: false,
	},
	{ label: 'GitHub', value: 'your-id', href: 'https://github.com/your-id', icon: 'github', external: true },
	{
		label: 'LinkedIn',
		value: '프로필 보기',
		href: 'https://www.linkedin.com/in/your-id/',
		icon: 'linkedin',
		external: true,
	},
];
