---
title: '블로그 시작하기 1편: 첫 글 쓰기'
description: '이 블로그에서 글 하나를 만드는 데 필요한 프런트매터와 본문 문법을 정리한 샘플 글이다.'
category: '블로그/사용법'
pubDate: '2026-11-19'
series: getting-started
seriesOrder: 1
env: ['Node.js 24', 'Astro 7']
---

이 글은 템플릿에 들어 있는 샘플이다. 자기 글을 하나 올린 뒤 `src/content/blog/`에서 이 파일을 지운다. 시리즈 샘플(`src/content/series/getting-started.yaml`)과 스크랩 샘플(`src/content/links/`)도 함께 지운다.

## 글 파일 만들기

글은 `src/content/blog/<slug>.md`(또는 `.mdx`)에 쓴다. 파일 이름이 주소가 된다. 이 글의 주소는 `/blog/getting-started-1-first-post/`다.

맨 위 프런트매터에 다음을 적는다.

| 항목 | 필수 | 설명 |
|---|---|---|
| `title` | 예 | 글 제목 |
| `description` | 예 | 목록 카드와 공유 미리보기에 쓰는 한 문장 요약 |
| `category` | 예 | `'AI/머신러닝'`처럼 `/`로 단계를 나눈 카테고리 |
| `pubDate` | 예 | 발행일 `'YYYY-MM-DD'` |
| `heroImage` | 아니요 | 카드와 공유 미리보기용 이미지(2:1) |
| `series`, `seriesOrder` | 아니요 | 시리즈 id와 편 번호. 함께 쓴다 |
| `env` | 아니요 | 실행 환경 버전 목록. 제목 아래 꼬리표로 보인다 |
| `notebook` | 아니요 | `true`면 `public/notebooks/<slug>.ipynb` 내려받기 카드를 보여 준다 |

## 코드와 실행 결과 쓰기

코드는 언어 이름을 붙인 코드 블록으로 쓴다.

```python
print(sum(range(1, 11)))
```

실행 결과는 언어 자리에 `output`을 쓴다. 머리 줄에 "출력" 라벨이 붙는다.

```output
55
```

## 상자 쓰기

인용문은 첫 줄에 따라 상자로 그려진다.

> **용어:** 프런트매터는 마크다운 파일 맨 위 `---` 사이에 쓰는 YAML 메타데이터다.

> **체크:** 글을 올리기 전에 `pnpm build`가 통과하는지 확인하자.

> ⚠ 표 안에서 `|` 문자를 쓰려면 `\|`로 적는다.

> **핵심 문장은 굵게 시작한다.** 뒤에 설명을 붙인다.

## 미리 보기와 배포

`pnpm dev`로 개발 서버를 띄우면 `http://localhost:4321`에서 바로 확인할 수 있다. `main` 브랜치에 push하면 GitHub Actions가 빌드해서 GitHub Pages에 배포한다.
