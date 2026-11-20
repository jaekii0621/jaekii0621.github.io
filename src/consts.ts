// 사이트 전체에서 쓰는 상수. 블로그를 시작할 때 이 파일의 값을 자기 것으로 바꾼다.
// 사이트 주소는 astro.config.mjs의 `site`에서 바꾼다.

export const SITE_TITLE = 'Jaeki’s AI Log';
export const SITE_DESCRIPTION = 'AI 공부 기록이자 만든 것을 담아두는 블로그';

// 빈 문자열('')로 둔 칸은 화면에 어떤 자리인지 연한 글자로 보인다. 값을 채우면 그 값이 보인다.

// 홈 첫 화면 문구
export const HOME_INTRO = {
	label: '',
	// 줄바꿈 위치는 배열로 나눈다
	title: ['', ''],
	lead: '',
};

// 소개 페이지 프로필 칸. 본문은 src/content/about.mdx에 쓴다.
export const PROFILE = {
	// 동그란 아바타에 보이는 글자 하나
	initial: '',
	name: '',
	role: '',
	// 요약 표. 필요 없으면 빈 배열로 둔다.
	summary: [
		{ term: '', desc: '' },
		{ term: '', desc: '' },
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
// href가 빈 칸이면 소개 페이지에는 연한 안내 글자로 보이고, 하단에는 나오지 않는다.
export const CONTACTS: Contact[] = [
	// 예: value: 'me@example.com', href: 'mailto:me@example.com'
	{ label: '이메일', value: '', href: '', icon: 'mail', external: false },
	{
		label: 'GitHub',
		value: 'jaekii0621',
		href: 'https://github.com/jaekii0621',
		icon: 'github',
		external: true,
	},
	// 예: value: '프로필 보기', href: 'https://www.linkedin.com/in/<아이디>/'
	{ label: 'LinkedIn', value: '', href: '', icon: 'linkedin', external: true },
];
