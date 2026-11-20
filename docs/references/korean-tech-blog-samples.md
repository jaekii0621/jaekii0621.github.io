# 기술 블로그 글 유형 분석용 샘플 목록

> 작성일: 2026-10-27 · 대상: `korean-tech-bloggers.md`의 블로거 31명 · 샘플 124편 (반례 1편 별도)
>
> 모든 URL은 각 블로그의 목록 페이지나 검색 결과에서 확인했다. 아래 표의 "유형"과 "분야"는 제목과 요약만 보고 붙인 **최초 가설**이다.
>
> **2026-10-28 본문 분석 완료:** 확정된 유형, 새 유형 A(논증·반론), 가중치를 낮춘 샘플은 `korean-tech-blog-analysis.md` §0, §2를 기준으로 한다.

## 분석 축

- **유형 (주 축):** 글의 구조와 흐름을 분석한다.
- **분야 (보조 축):** 분야마다 근거를 어떻게 제시하는지만 분석한다. 주로 다룰 분야는 AI, BE, INF다.

### 유형 코드

| 코드 | 유형 | 설명 |
|---|---|---|
| T | 트러블슈팅 | 실제 문제 상황 → 원인 추적 → 해결 |
| C | 개념 해설 | 원리나 개념을 설명 ("왜 ~인가", "~의 동작 원리") |
| H | 실습·검증 | 직접 구현하거나 측정하고, 그 결과를 기록 |
| G | 가이드 | 도구나 기능의 사용법, 단계별 튜토리얼 |
| R | 리서치·리뷰 | 논문, 발표, 책, 외부 글을 요약하거나 해설 |
| E | 회고·에세이 | 경험, 의견, 커리어, 조직 이야기 |

### 분야 코드

| 코드 | 분야 |
|---|---|
| AI | AI/ML/LLM (학습, 서빙, 에이전트) |
| BE | 백엔드/DB |
| INF | 시스템 인프라 (리눅스, 쿠버네티스, 클라우드, CI) |
| FE | 프론트엔드/웹 |
| NET | 네트워크 |
| CS | CS 일반 |
| TOOL | 개발 도구 |
| CAR | 커리어/조직 |

---

# Part 1. 기본 블로거 20명 (96편)

## 1. 정상혁 – 개발수양록 (6)

| # | 제목 | 날짜 | 유형 | 분야 | URL |
|---|---|---|---|---|---|
| 1 | Java에서 외부 프로세스를 실행하기: JDK 25와 Linux 6.x 기준 | 2026-09-03 | H | BE | https://blog.benelog.net/java-external-process |
| 2 | VO vs DTO: 정의와 용어 혼용의 역사 | 2026-08-29 | C | BE | https://blog.benelog.net/vo-vs-dto |
| 3 | GitHub Actions 워크플로 튜닝: 저장소 다섯 곳의 적용 사례 | 2026-08-28 | H | INF | https://blog.benelog.net/github-actions-tuning-cases |
| 4 | Claude Code에서 작업 중에 보낸 프롬프트가 전달되는 시점 | 2026-08-22 | H | AI | https://blog.benelog.net/claude-code-steering |
| 5 | IEEE 754 부동소수점 오차와 Java의 대안 | 2026-08-15 | C | BE | https://blog.benelog.net/floating-point-java |
| 6 | BTrace로 MySQL JDBC 드라이버의 내부 동작 측정하기 | 2026-08-14 | H | BE | https://blog.benelog.net/btrace-jdbc-monitoring |

## 2. Outsider (변정훈) (6)

| # | 제목 | 날짜 | 유형 | 분야 | URL |
|---|---|---|---|---|---|
| 7 | Istio의 재시도 정책과 관련 메트릭 살펴보기 | 2026-08-22 | H | INF | https://blog.outsider.ne.kr/1810 |
| 8 | Istio External Authorization의 로컬리티 로드 밸런싱 확인하기 | 2026-08-04 | H | INF | https://blog.outsider.ne.kr/1807 |
| 9 | Istio ServiceEntry로 외부 서비스 등록하기 | 2026-08-02 | G | INF | https://blog.outsider.ne.kr/1806 |
| 10 | [Side Project] 코딩 세션을 모아 보는 Agentic Engineering History | 2026-08-15 | H | AI | https://blog.outsider.ne.kr/1808 |
| 11 | istio 스터디 후기 | 2026-10-18 | E | INF | https://blog.outsider.ne.kr/1815 |
| 12 | [Book] Istio in Action | 2021-12-23 | R | INF | https://blog.outsider.ne.kr/1574 |

## 3. Dale Seo (조대현) (6)

| # | 제목 | 날짜 | 유형 | 분야 | URL |
|---|---|---|---|---|---|
| 13 | Model Context Protocol: AI 애플리케이션의 통신 표준 | 2025-08-10 | C | AI | https://www.daleseo.com/mcp/ |
| 14 | 컨트롤 플레인과 데이터 플레인: 시스템을 두 층으로 나누는 이유 | 2026 | C | CS | https://www.daleseo.com/control-plane-data-plane/ |
| 15 | 파이썬 3.15 lazy import로 프로그램 시작 시간 줄이기 | 2026 | G | BE | https://www.daleseo.com/python-lazy-import/ |
| 16 | 클로드 코드에서 MCP 서버 연동하기 | 2025-09-08 | G | AI | https://www.daleseo.com/claude-code-mcp/ |
| 17 | 1Password MCP 서버: 클로드 코드로 .env 안전하게 관리하기 | 2026 | G | AI | https://www.daleseo.com/1password-mcp/ |
| 18 | Stack Overflow 2026 개발자 설문: AI 시대 개발자의 현주소 | 2026 | R | AI | https://www.daleseo.com/stack-overflow-survey-2026/ |

## 4. yceffort (김용찬) (7)

| # | 제목 | 날짜 | 유형 | 분야 | URL |
|---|---|---|---|---|---|
| 19 | web-vitals는 언제 핵심 웹 지표를 보고하는가 | 2026-10-17 | T | FE | https://yceffort.kr/2026/10/web-vitals-report-timing |
| 20 | 성능 개선에서 기법은 짧았고 판단은 길었다: 준비, 관측, 대응, 검증, 측정 | 2026-10 | E | FE | https://yceffort.kr/2026/10/performance-improvement-workflow |
| 21 | 실행하지 않는 JavaScript를 10MiB까지 늘려봤다 | 2026-09 | H | FE | https://yceffort.kr/2026/09/unused-javascript-cost |
| 22 | 드롭인 호환의 진짜 비용: markdownlint-cli2를 Rust로 옮기며 버린 것들 | 2026-09 | H | TOOL | https://yceffort.kr/2026/09/porting-markdownlint-cli2-to-rust |
| 23 | Next.js turbopack에서 싱글톤이 두 개가 됐다: scope hoisting 버그와 순환 import | 2026-08 | T | FE | https://yceffort.kr/2026/08/turbopack-scope-hoisting-singleton-split |
| 24 | 서비스 워커 캐싱의 동작 원리: 프록시, 라이프사이클, 다섯 가지 전략 | 2026-08 | C | FE | https://yceffort.kr/2026/08/service-worker-caching-1 |
| 25 | Rails가 왜 좋았는지는, 만든 사람이 내려놓고 나서야 보였다 | 2026-09 | R | BE | https://yceffort.kr/2026/09/dhh-rails-world-2026-keynote |

## 5. 향로 (이동욱) (6)

| # | 제목 | 날짜 | 유형 | 분야 | URL |
|---|---|---|---|---|---|
| 26 | NodeJS 와 PostgreSQL Query Timeout | 2022-01-14 | T | BE | https://jojoldu.tistory.com/631 |
| 27 | 테스트 데이터 초기화에 @Transactional 사용하는 것에 대한 생각 | 2023-11-26 | C | BE | https://jojoldu.tistory.com/761 |
| 28 | Spring Batch와 Querydsl (우아한형제들 기술블로그) | 2020-02-05 | H | BE | https://techblog.woowahan.com/2662/ |
| 29 | 일의 난이도 높이기 | 2023-02-14 | E | CAR | https://jojoldu.tistory.com/701 |
| 30 | 블로그 누적 1,000만 조회수 후기 | 2024-03-24 | E | CAR | https://jojoldu.tistory.com/775 |
| 31 | 2025년 CTO 회고 | 2026-01-07 | E | CAR | https://jojoldu.tistory.com/856 |

## 6. MangKyu (6)

| # | 제목 | 날짜 | 유형 | 분야 | URL |
|---|---|---|---|---|---|
| 32 | [Java] String.format의 성능 문제와 개선 사항들 | 2026-10-06 | C | BE | https://mangkyu.tistory.com/478 |
| 33 | [Spring] Jackson ObjectMapper 설정으로 JSON 역직렬화 비용 줄이기 | 2026-09-29 | H | BE | https://mangkyu.tistory.com/477 |
| 34 | [Redis] Lettuce 라이브러리 내부 구성에 대한 이해 및 Connection is already closed 로그 발생 원인 분석 | 2026-09-15 | T | BE | https://mangkyu.tistory.com/476 |
| 35 | [Java] 멀티 코어 기반의 처리량 극대화를 위한 Fork/Join 프레임워크 | 2026-09-08 | C | BE | https://mangkyu.tistory.com/475 |
| 36 | [SpringBoot] 도커 이미지 빌드 최적화를 위한 Layered Jar | 2026-09-01 | G | BE | https://mangkyu.tistory.com/474 |
| 37 | [Redis] Lettuce를 사용하는 경우에 MGET 동작 방식과 해시태그(HashTag) | 2025-03-18 | T | BE | https://mangkyu.tistory.com/419 |

## 7. Evan Moon (문동욱) (7)

| # | 제목 | 날짜 | 유형 | 분야 | URL |
|---|---|---|---|---|---|
| 38 | CORS는 왜 이렇게 우리를 힘들게 하는걸까? | 2020-05-21 | C | NET | https://evan-moon.github.io/2020/05/21/about-cors/ |
| 39 | HTTP/3는 왜 UDP를 선택한 것일까? | 2019-10-08 | C | NET | https://evan-moon.github.io/2019/10/08/what-is-http3/ |
| 40 | TCP의 헤더에는 어떤 정보들이 담겨있는걸까? | 2019-11-10 | C | NET | https://evan-moon.github.io/2019/11/10/header-of-tcp/ |
| 41 | 펑터를 넘어서, 모나드까지 | 2026-02-07 | C | CS | https://evan-moon.github.io/2026/02/07/monads-in-typescript/ |
| 42 | 동일성은 왜 프로그래밍에서 가장 어려운 문제인가 | 2026-08-02 | C | CS | https://evan-moon.github.io/2026/08/02/why-identity-is-hard-in-programming/ |
| 43 | 클로드는 왜 날씨를 계산하지 못할까 | 2026-10-03 | R | AI | https://evan-moon.github.io/2026/10/03/why-claude-cannot-compute-weather/ |
| 44 | AI를 도입하면 팀은 정말 빨라질까 | 2026-10-12 | E | CAR | https://evan-moon.github.io/2026/10/12/does-ai-make-teams-faster/ |

## 8. 이선협 (kciter) (2)

| # | 제목 | 날짜 | 유형 | 분야 | URL |
|---|---|---|---|---|---|
| 45 | 브라우저의 메인 스레드는 비싸다 | 2026-07-12 | C | FE | https://kciter.so/posts/the-expensive-main-thread/ |
| 46 | 서버 모니터링 분석 가이드 | 2026-07-20 | G | INF | https://kciter.so/posts/server-monitoring-analysis-guide/ |

## 9. 남윤호 (Yun Blog) (2)

| # | 제목 | 날짜 | 유형 | 분야 | URL |
|---|---|---|---|---|---|
| 47 | Querydsl을 이용한 Batch Update 성능 개선 | 2026-04-14 | H | BE | https://cheese10yun.github.io/querydsl-batch-update/ |
| 48 | Spring Batch Test 작성 방법 및 고찰 | 2021-02-14 | G | BE | https://cheese10yun.github.io/spring-batch-test-2/ |

## 10. 김충섭 (subicura) (3)

| # | 제목 | 날짜 | 유형 | 분야 | URL |
|---|---|---|---|---|---|
| 49 | 초보를 위한 Claude Code 안내서 | 2025-09-08 | G | AI | https://subicura.com/2025/09/08/ai-coding.html |
| 50 | 개발 자동화에서 조직 AX까지 | 2026-07-14 | E | AI | https://subicura.com/2026/07/14/ax-journey.html |
| 51 | 쿠버네티스 안내서 – 시작하기 | 2022-04-13 | G | INF | https://subicura.com/k8s/guide/ |

## 11. 박해선 – 텐서 플로우 블로그 (2)

| # | 제목 | 날짜 | 유형 | 분야 | URL |
|---|---|---|---|---|---|
| 52 | "트랜스포머를 활용한 자연어 처리" 번역을 마쳤습니다. | 2022-09-14 | R | AI | https://tensorflow.blog/2022/09/14/finish-transformer-book/ |
| 53 | 어떤 책을 봐야 하나요? | 2018-10-17 | R | AI | https://tensorflow.blog/book-roadmap/ |

## 12. 홍민희 (4)

| # | 제목 | 날짜 | 유형 | 분야 | URL |
|---|---|---|---|---|---|
| 54 | I added ActivityPub to this blog | 2026-07-16 | H | BE | https://writings.hongminhee.org/2026/07/fedified-blog/ |
| 55 | Why craft-lovers are losing their craft | 2026-03-21 | E | AI | https://writings.hongminhee.org/2026/03/craft-alienation-llm/ |
| 56 | Histomat of F/OSS: We should reclaim LLMs, not reject them | 2026-01-16 | E | AI | https://writings.hongminhee.org/2026/01/histomat-foss-llm/ |
| 57 | A year with the fediverse | 2024-12-24 | E | CAR | https://writings.hongminhee.org/2024/12/a-year-with-the-fediverse/ |

## 13. 조대협 (Terry Cho) (7)

| # | 제목 | 날짜 | 유형 | 분야 | URL |
|---|---|---|---|---|---|
| 58 | Jev 간단 분석 | 2026-09-21 | R | AI | https://bcho.tistory.com/1510 |
| 59 | LangChain // DeepAgent를 이용한 자율형 에이전트 구현 | 2026-03-18 | H | AI | https://bcho.tistory.com/1509 |
| 60 | AI 코딩의 발전단계 - 하네스 엔지니어링과 완전 자율형 에이전트 | 2026-03-16 | R | AI | https://bcho.tistory.com/1508 |
| 61 | Claude Code SubAgent - 전문화된 AI 서브에이전트로 생산성 높이기 | 2026-03-14 | G | AI | https://bcho.tistory.com/1505 |
| 62 | Claude Code - #2 요금제 이해하기 | 2026-03-09 | G | AI | https://bcho.tistory.com/1502 |
| 63 | AI 코딩이 오히려 개발자의 생산성을 떨어뜨린다? - Anthropic 논문 | 2026-02-10 | R | AI | https://bcho.tistory.com/1500 |
| 64 | 쿠버네티스 Gateway의 이해 | 2025-12-03 | C | INF | https://bcho.tistory.com/1496 |

## 14. 기계인간 John Grib (이종립) (6)

| # | 제목 | 날짜 | 유형 | 분야 | URL |
|---|---|---|---|---|---|
| 65 | git rerere | 2025-05-18 | G | TOOL | https://johngrib.github.io/wiki/git/rerere/ |
| 66 | ctags 명령어 | 2025-08-28 | G | TOOL | https://johngrib.github.io/wiki/ctags/ |
| 67 | 구글링하는 방법 | 2025-08-30 | G | TOOL | https://johngrib.github.io/wiki/googling/ |
| 68 | 텍사스 명사수의 오류(Texas Sharpshooter fallacy) | 2025-12-13 | C | CS | https://johngrib.github.io/wiki/jargon/texas-sharpshooter-fallacy/ |
| 69 | (요약) AGENTIC MISALIGNMENT - HOW LLMS COULD BE INSIDER THREATS | 2026-01-04 | R | AI | https://johngrib.github.io/wiki/clipping/agentic-misalignment-how-llms-could-be-insider-threats/ |
| 70 | 내가 책을 읽는 방법 | 2025-12-26 | E | CAR | https://johngrib.github.io/wiki/my-book-reading/ |

## 15. 김정환 (5)

| # | 제목 | 날짜 | 유형 | 분야 | URL |
|---|---|---|---|---|---|
| 71 | 리액트 쿼리, 내부는 이렇게 움직인다 | 2025-05-11 | C | FE | https://jeonghwan-kim.github.io/2025/05/11/how-react-query-works |
| 72 | 모듈 페더레이션 구조와 동작 원리 | 2025-01-07 | C | FE | https://jeonghwan-kim.github.io/2025/01/07/module-federation |
| 73 | [HTTP] 1편. HTTP 기본 | 2024-07-07 | C | NET | https://jeonghwan-kim.github.io/2024/07/07/lecture-http-part1 |
| 74 | HTTP 캐싱 | 2024-02-08 | C | NET | https://jeonghwan-kim.github.io/2024/02/08/http-caching |
| 75 | 코드 리뷰: 협업으로 배우고 성장하기 | 2025-01-20 | E | CAR | https://jeonghwan-kim.github.io/2025/01/20/code-review |

## 16. 토비 (이일민) (4)

| # | 제목 | 날짜 | 유형 | 분야 | URL |
|---|---|---|---|---|---|
| 76 | 테스트가 관리하는 트랜잭션 - 향로 님의 @Transactional 글을 읽고 | 2024-03-04 | C | BE | https://toby.epril.com/8 |
| 77 | 테스팅 프레임워크는 직접 만들어 써보자 | 2023-10-10 | H | BE | https://toby.epril.com/5 |
| 78 | 클린 스프링 - 인프콘 2024 | 2024-09-10 | E | BE | https://toby.epril.com/10 |
| 79 | 토비의 스프링이 나오기까지 | 2024-01-13 | E | CAR | https://toby.epril.com/7 |

## 17. 박성범 (5)

| # | 제목 | 날짜 | 유형 | 분야 | URL |
|---|---|---|---|---|---|
| 80 | 인터넷이 동작하는 아주 구체적인 원리 | 2020-01-27 | C | NET | https://parksb.github.io/article/36.html |
| 81 | 캐시가 동작하는 아주 구체적인 원리 | 2019-03-30 | C | CS | https://parksb.github.io/article/29.html |
| 82 | 웹은 왜 복잡해졌나? | 2025 | C | FE | https://parksb.github.io/article/43.html |
| 83 | 읽기 쉬운 웹을 위한 타이포그래피 | 2021-01-13 | G | FE | https://parksb.github.io/article/37.html |
| 84 | Git 사용 중 자주 만나는 이슈 정리 | 2019-02-17 | G | TOOL | https://parksb.github.io/article/28.html |

## 18. hudi.blog (5)

| # | 제목 | 날짜 | 유형 | 분야 | URL |
|---|---|---|---|---|---|
| 85 | 안정 해시 (Consistent Hash) | 2026-02-21 | C | BE | https://hudi.blog/consistent-hash/ |
| 86 | Redlock 알고리즘 알아보기 | 2024-11-23 | C | BE | https://hudi.blog/redlock-algorithm/ |
| 87 | 코틀린 동시성 환경에서 컬렉션 잘 다루기 | 2024-08-11 | T | BE | https://hudi.blog/handling-collections-concurrency-in-kotlin/ |
| 88 | Bulkhead 패턴을 사용한 장애 격리 | 2024-07-07 | T | BE | https://hudi.blog/bulkhead-pattern/ |
| 89 | MySQL는 Order By가 없다면 정렬을 보장하지 않는다 | 2024-07-06 | T | BE | https://hudi.blog/mysql-no-order-by-no-sorting-guarantee/ |

## 19. 변성윤 – 어쩐지 오늘은 (4)

| # | 제목 | 날짜 | 유형 | 분야 | URL |
|---|---|---|---|---|---|
| 90 | Gemini CLI 사용법 - QnA 게시판 만들기(feat. SpecKit) | 2025-12-21 | G | AI | https://zzsza.github.io/ai/2025/12/21/gemini-cli-qna-board/ |
| 91 | Google Antigravity 사용법 | 2025-12-08 | G | AI | https://zzsza.github.io/ai/2025/12/08/how-to-use-antigravity/ |
| 92 | AI가 다 해주는데, 나는 뭘 해야 할까? 요즘 자주 받는 커리어 고민 10가지 | 2026-09-24 | E | CAR | https://zzsza.github.io/diary/2026/09/24/2026-developer-career-worries/ |
| 93 | 데이터 사이언티스트가 되기 위해 진행한 다양한 노력들 | 2019-04-05 | E | CAR | https://zzsza.github.io/diary/2019/04/05/how-to-study-datascience/ |

## 20. 이기창 (ratsgo) (3)

| # | 제목 | 날짜 | 유형 | 분야 | URL |
|---|---|---|---|---|---|
| 94 | 트랜스포머 살펴보기 (NLPBOOK) | - | C | AI | https://ratsgo.github.io/nlpbook/docs/language_model/transformers/ |
| 95 | 단어/문장을 벡터로 변환하기 (NLPBOOK) | - | G | AI | https://ratsgo.github.io/nlpbook/docs/language_model/tutorial/ |
| 96 | Transformer (insight notes) | - | R | AI | https://ratsgo.github.io/insight-notes/docs/interpretable/transformer/bottom |

---

# Part 2. 분야별 보충 블로거 11명 (28편)

## 21. 조재경 (3)

| # | 제목 | 날짜 | 유형 | 분야 | URL |
|---|---|---|---|---|---|
| 97 | vLLM 의 cascade attention | 2025-07-08 | T | AI | https://jackyoung96.github.io/2025/07/08/disable-cascade-attention/ |
| 98 | EFA와 InfiniBand, LLM 아래 숨겨진 인프라 이야기 | 2026-01-16 | C | AI | https://jackyoung96.github.io/2026/01/16/EFA-and-InfiniBand/ |
| 99 | LLM에서 효율적인 강화학습이란 무엇일까 1 | 2026-02-21 | R | AI | https://jackyoung96.github.io/2026/02/21/Experiential-RL/ |

## 22. 신재솔 (2)

| # | 제목 | 날짜 | 유형 | 분야 | URL |
|---|---|---|---|---|---|
| 100 | MTP와 diffusion으로 LLM 추론 가속하기 | 2026-06-25 | H | AI | https://jaesolshin.com/posts/mtp-diffusion-gemma4-qwen36/ko/ |
| 101 | codex CLI에 로컬 Qwen 물리기 — ollama·vLLM 배선기 | 2026-07-02 | G | AI | https://jaesolshin.com/posts/codex-local-qwen/ko/ |

## 23. 손성준 (3)

| # | 제목 | 날짜 | 유형 | 분야 | URL |
|---|---|---|---|---|---|
| 102 | vLLM vs LMDeploy vs SGLang: LLM 서빙 프레임워크 3종 벤치마크 비교 | - | H | AI | https://infoedu.co.kr/ai/model-serve/vllm-vs-lmdeploy-vs-sglang/ |
| 103 | Embedding 모델 서빙: batch size 최적화로 긴 문서 처리 | - | H | AI | https://infoedu.co.kr/ai/XGEN/embedding-model-serving-batch-size-optimization/ |
| 104 | 884만 문서에서 알게 된 것 | 2026-09 | H | AI | https://infoedu.co.kr/ai/agent/synaptic-memory-msmarco-agent-loop-scale/ |

## 24. 임희호 (4, AI·인프라 겸)

| # | 제목 | 날짜 | 유형 | 분야 | URL |
|---|---|---|---|---|---|
| 105 | GPU 한 장으로 LLM을 서빙하며 배운 것 — Ollama에서 vLLM으로, 그리고 양자화의 값 | 2026-06-25 | H | AI | https://heeho.net/contents/devops/vllm-quantization-single-gpu/ |
| 106 | 거짓 CI 알림을 따라 내려가니 CNI 데드락 — 위아래 두 곳을 근본 수정한 기록 | - | T | INF | https://heeho.net/contents/devops/code-analysis-alert-to-cni-deadlock/ |
| 107 | 정의서 밖의 GPU — daemon-reload 한 번에 컨테이너가 장치를 잃는 구조와 CDI 전환 | - | T | INF | https://heeho.net/contents/kubernetes/nvidia-gpu-cdi-daemon-reload/ |
| 108 | Cilium BGP+ECMP 구성 — 1.18.5 버그를 만난 기록 | - | T | INF | https://heeho.net/contents/kubernetes/gateway-api-migration/ |

## 25. Gukin Han (3)

| # | 제목 | 날짜 | 유형 | 분야 | URL |
|---|---|---|---|---|---|
| 109 | EXPLAIN ANALYZE로 슬로우 쿼리 읽기: 타입 불일치가 만든 10,000번의 반복 조회 | 2026-07-10 | T | BE | https://gukin.dev/posts/mysql-explain-analyze-walkthrough/ |
| 110 | Virtual Thread로 인한 HikariCP 커넥션 풀 고갈 해결 과정 | 2026-03-19 | T | BE | https://gukin.dev/posts/virtual-thread-hikaricp-pool-exhaustion/ |
| 111 | 시간당 34GB Spring Boot 로깅이 TPS에 미치는 영향과 병목점 분석 | 2026-03-01 | H | BE | https://gukin.dev/posts/spring-boot-logging-tps-bottleneck/ |

## 26. 정정일 (3)

| # | 제목 | 날짜 | 유형 | 분야 | URL |
|---|---|---|---|---|---|
| 112 | MySQL 컬럼의 타입을 bigint에서 varchar로 변경했더니 8배나 느려졌어요 | 2025-10-20 | T | BE | https://jeongil.dev/ko/blog/backend/troubleshooting/mysql-collation-performace/ |
| 113 | JPA, MyBatis 동시 사용 시 발생할 수 있는 HikariCP Deadlock 해결 여정 | 2024-01-09 | T | BE | https://jeongil.dev/ko/blog/backend/troubleshooting/hikaricp-deadlock-with-jpa-mybatis/ |
| 114 | API 성능 P95 7초 → 0.1초 백엔드 성능 최적화 | 2026-03-04 | T | BE | https://jeongil.dev/ko/blog/backend/performance/backend-api-performance-optimization/ |

## 27. 김태훈 (1)

| # | 제목 | 날짜 | 유형 | 분야 | URL |
|---|---|---|---|---|---|
| 115 | MSA 장애 원인 분석 회고 [MSK(kafka) 장애와 동기로직] | 2025-08-08 | T | BE | https://velog.io/@goat_hoon/sync-kafka-logic-fails-msa |

## 28. 개발하는 히포 (3)

| # | 제목 | 날짜 | 유형 | 분야 | URL |
|---|---|---|---|---|---|
| 116 | Kafka send()가 반환되지 않는 구간 - max.block.ms 이해하기 | 2026-09-26 | H | BE | https://gkdbssla97.tistory.com/33 |
| 117 | 재고 차감: Redis + Lua와 MySQL 비교 | 2026-07-12 | H | BE | https://gkdbssla97.tistory.com/29 |
| 118 | 아무도 몰랐던 Choreography Saga 정체 | 2026-08-08 | T | BE | https://gkdbssla97.tistory.com/31 |

## 29. kimdubi (1)

| # | 제목 | 날짜 | 유형 | 분야 | URL |
|---|---|---|---|---|---|
| 119 | MySQL Out of sort memory 에러 발생 원인 디버깅 | 2024-08-13 | T | BE | https://kimdubi.github.io/mysql/sort_buffer/ |

## 30. ssup2 (2)

| # | 제목 | 날짜 | 유형 | 분야 | URL |
|---|---|---|---|---|---|
| 120 | Istio Gateway API Inference Extension | - | C | INF | https://ssup2.github.io/blog-software/docs/theory-analysis/istio-gateway-api-inference-extension/ |
| 121 | Kubernetes HAMi 설치 및 vLLM 모델 서빙 / GPU Ubuntu 26.04 환경 | - | G | INF | https://ssup2.github.io/blog-software/docs/record/kubernetes-hami-vllm-gpu-ubuntu-26.04/ |

## 31. 이승우 (3)

| # | 제목 | 날짜 | 유형 | 분야 | URL |
|---|---|---|---|---|---|
| 122 | Kubernetes 환경에서 발생하는 DNS Query Failed 이슈와 NodeLocal DNSCache를 이용한 해결 | 2023-12-30 | T | INF | https://nangman14.tistory.com/108 |
| 123 | Kubernetes 환경에서 gRPC 어플리케이션 통신 이슈 해결하기 | 2024-07-11 | T | INF | https://nangman14.tistory.com/116 |
| 124 | Opentelemetry로 Kubernetes Observability 확보하기 : Tracing | 2024-04-30 | G | INF | https://nangman14.tistory.com/113 |

## 반례 샘플 (집계 제외)

| # | 제목 | 유형 | 분야 | URL | 반례로 쓰는 이유 |
|---|---|---|---|---|---|
| X1 | LLM 추론 엔지니어링 튜토리얼 | G | AI | https://javaexpert.tistory.com/1795 | 글 안에 "실습 명령을 실제로 실행하지 않았다, 결과는 미검증"이라고 적혀 있다. 검증하지 않은 튜토리얼의 반례다. 다만 한계를 스스로 밝힌 점은 좋은 예로 쓸 수 있다. |

---

## 분포

### 유형별

| 유형 | Part 1 | Part 2 | 합계 |
|---|---|---|---|
| C 개념 해설 | 27 | 2 | 29 |
| H 실습·검증 | 15 | 8 | 23 |
| T 트러블슈팅 | 8 | 14 | 22 |
| G 가이드 | 19 | 3 | 22 |
| E 회고·에세이 | 16 | 0 | 16 |
| R 리서치·리뷰 | 11 | 1 | 12 |
| **합계** | **96** | **28** | **124** |

### 분야별

| 분야 | 편수 | 작성자 수 | 비고 |
|---|---|---|---|
| BE 백엔드/DB | 37 | 14 | |
| AI AI/ML/LLM | 34 | 15 | 학습·서빙 실무 샘플은 #97~105 |
| INF 시스템 인프라 | 17 | 8 | Outsider 쏠림 해소 |
| FE 프론트엔드 | 10 | 4 | 주 분야 아님 |
| CAR 커리어/조직 | 10 | 7 | |
| NET 네트워크 | 6 | 3 | |
| CS CS 일반 | 5 | 4 | |
| TOOL 개발 도구 | 5 | 3 | |

### 주 분야 × 유형 교차표

| 분야 | T | C | H | G | R | E |
|---|---|---|---|---|---|---|
| BE | 14 | 8 | 10 | 3 | 1 | 1 |
| AI | 1 | 3 | 8 | 9 | 10 | 3 |
| INF | 5 | 2 | 3 | 5 | 1 | 1 |

## 분석할 때 참고할 점

- **같은 주제를 다르게 쓴 글:** 27번(향로)과 76번(토비)은 같은 주제(테스트의 @Transactional)를 서로 참조하며 쓴 글이다. 논증 방식을 비교하기 좋다.
- **반례:** 62번(조대협 요금제 글)에는 출처 없는 수치가 있다. 체크리스트 항목 "수치에 출처가 있는가"의 반례로 쓴다. X1도 반례로 쓴다.
- **구조 샘플로만 쓸 글:** 109~118번은 경력 1~3년 차 작성자의 글이다. 트러블슈팅 글의 구조를 분석하는 데 쓰고, 기술 판단의 근거로는 쓰지 않는다.
- **AI 분야의 빈칸:** AI × T(트러블슈팅)가 1편뿐이다. 학습이나 서빙 장애를 다룬 글을 더 찾아야 한다.
- **날짜 없음:** ssup2(120, 121)와 손성준·임희호의 일부 글은 페이지에 날짜가 없다.
- **언어:** 12번(홍민희)은 한국어판을 기준으로 분석한다. 101번(신재솔)은 영어판이 기본으로 열린다.
- **샘플이 적은 블로거:** kciter, Yun Blog, 김태훈, kimdubi는 1~2편뿐이다. 11번(박해선)은 출간 안내 글이 대부분이라 비중을 낮게 둔다.
