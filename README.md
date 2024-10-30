# 가상화리스트 공부

## 개발 환경 설정

### 네이버 개발자 센터에서 검색API KEY 발급 필요

### 1. node.js 설치

vite를 이용해 프로젝트가 build되기 때문에 18.20.2 이상의 node.js를 설치해 주세요.

**node.js 사이트에서 설치**

- https://nodejs.org/ko/

**nvm으로 node.js 설치**

```
# 18.20.2 이상의 버전이 설치되어 있지 않은 경우 설치해 주세요.
$ nvm install 18.20.2

$ nvm use 18.20.2
```

### 2. 의존성 설치

```
# yarn이 설치되어 있지 않은 경우 설치해 주세요.
$ npm install --global yarn

$ yarn install
```

### 3. 로컬 서버 실행

```
$ yarn dev
```

- http://localhost:5173

## 질문

### 1. 자신의 기술적인 역량을 바탕으로 가장 크게 임팩트(테크적인 임팩트, 비즈니스 임팩트 등)를 만들어 낸 사례가 있다면 그 이유와 함께 작성해주시기 바랍니다.

    NHN 공식 홈페이지 리뉴얼 프로젝트는 기술적 도전과 함께 여러 법인 및 부서와의 긴밀한 협업, 다국어 지원 문제를 해결해야 하는 복잡한 프로젝트였습니다.
    이 과정에서 저는 기술적 역량과 커뮤니케이션 능력을 바탕으로 큰 임팩트를 만들어냈습니다.

    기술적 임팩트:
        프로젝트의 주요 목표 중 하나는 웹사이트 성능 최적화, 유지보수성이 높은 컴포넌트 설계, 그리고 SEO 최적화였습니다. 이를 위해 저는 Next.js를 도입하여 서버사이드 렌더링(SSR)을 구현하고, 코드 스플리팅, 이미지 최적화, 레이지 로딩 등의 최신 웹 성능 최적화 기법을 적용했습니다. 특히, 재사용 가능하고 모듈화된 컴포넌트를 설계함으로써 유지보수성을 극대화했습니다. 이러한 설계를 통해 QA 과정에서 발견된 문제나 추가 요구사항을 신속하게 반영할 수 있었으며, SEO 최적화를 통해 검색 엔진 노출이 크게 개선되었습니다.
        이러한 최적화 작업의 결과로 페이지 로딩 속도가 크게 향상되었으며, 구글 페이지 스피드 인사이트 점수를 84점에서 98점으로 끌어올릴 수 있었습니다. 또한, LCP(Largest Contentful Paint)를 3.2초에서 2.2초로 단축하여 사용자 체감 성능이 크게 개선되었고, 전체 트래픽 증가와 전환율 향상에 크게 기여하였습니다.

    비즈니스 임팩트:
        다양한 법인의 요구를 신속하게 반영함으로써 비즈니스 전반에 걸쳐 긍정적인 영향을 미쳤습니다. 특히, 유지보수성이 높은 VAC 컴포넌트 설계를 통해 QA 및 추가 기능 반영 시간을 크게 단축할 수 있었습니다. 이로 인해 개발 효율성이 20% 이상 향상되었으며, 프로젝트의 민첩성이 증가함에 따라 비즈니스 요구사항에 대한 빠른 대응이 가능해졌습니다. 이러한 신속한 대응은 법인들 간의 신뢰를 구축하는 데 중요한 역할을 했고, 결과적으로 법인의 비즈니스 목표를 보다 효과적으로 달성할 수 있었습니다.

### 2. 인생이나 커리어 관점에서 향후 목표가 있으시다면 작성해 주시기 바랍니다.

    제 커리어 목표는 조직의 기술적 혁신을 이루고, 다양한 이해관계자와의 협업을 통해 지속가능한 비즈니스 가치를 창출하는 것입니다.

    장기적으로는 글로벌 시장에서 경쟁력을 갖춘 솔루션을 개발하는 것을 목표로 하고 있습니다. 특히, 프론트엔드 아키텍처 최적화와 다국어 지원을 포함한 사용자 중심의 인터페이스 설계를 통해 다양한 시장의 요구사항에 신속하게 대응할 수 있는 역량을 키우고자 합니다. 이러한 경험을 바탕으로,  궁극적으로는 창업을 통해 지속 가능한 비즈니스를 구축하는 것을 꿈꾸고 있습니다.

## 구현 설명 및 개선 사항

### 주요 구현 사항

1. **커스텀 WindowScroller 구현**

   - `react-virtualized`의 WindowScroller에서 내부에서 사용되는 findDOMNode는 더 이상 사용되지 않고 다음 버전에서 제거 된다는 에러를 발견했기에 이를 해결하기 위해 직접 구현했습니다.
   - 전체 페이지 스크롤과 무한 스크롤 컴포넌트를 효과적으로 연동하여 자연스러운 사용자 경험을 제공했습니다.

2. **무한 스크롤 구현**

   - `react-virtualized`의 `InfiniteLoader`와 `List` 컴포넌트를 사용하여 효율적인 무한 스크롤을 구현했습니다.
   - 커스텀 WindowScroller와 연동하여 전체 페이지 스크롤에서도 원활하게 작동하도록 했습니다.

3. **React Query를 통한 자동 캐싱**

   - `React Query`를 도입하여 서버 상태 관리와 자동 캐싱을 구현했습니다.
   - 데이터 fetching, 캐싱, 동기화, 업데이트를 효율적으로 관리하여 애플리케이션의 성능을 크게 향상시켰습니다.

4. **VAC 패턴과 Headless UI를 활용한 Card 합성 컴포넌트**

   - View Asset Component (VAC) 패턴을 적용하여 프레젠테이션과 로직을 분리했습니다.
   - Headless UI 개념을 참고하여 스타일과 기능을 분리한 유연한 Card 컴포넌트를 구현했습니다. 합성 컴포넌트 패턴을 사용하여 Card의 각 부분을 독립적으로 커스터마이즈할 수 있게 했습니다.

5. **성능 최적화**

   - `useMemo`와 `useCallback`을 적극 활용하여 불필요한 리렌더링을 방지했습니다.

6. **반응형 디자인**

   - `AutoSizer`를 사용하여 다양한 화면 크기에 대응할 수 있도록 했습니다.

7. **타입 안정성**
   - TypeScript를 사용하여 타입 안정성을 확보했습니다.

### 설계 의도

- **라이브러리 한계 극복**: 기존 WindowScroller 라이브러리의 한계를 극복하기 위해 커스텀 구현을 선택했습니다.
- **효율적인 데이터 관리**: React Query를 도입하여 서버 상태 관리를 최적화하고, 사용자 경험을 개선했습니다.
- **컴포넌트 재사용성 및 유연성 증대**: VAC 패턴과 Headless UI 개념을 적용하여 높은 재사용성과 커스터마이징이 용이한 컴포넌트를 설계했습니다.
- **사용자 경험 개선**: 무한 스크롤과 가상화를 통해 대량의 데이터를 부드럽게 탐색할 수 있도록 했습니다.
- **성능 최적화**: 가상화 기술을 도입하여 메모리 사용량을 줄이고 렌더링 성능을 개선했습니다.
- **코드 재사용성**: 컴포넌트를 모듈화하여 재사용성을 높였습니다.

## 강조하고 싶은 부분

- Card 합성 컴포넌트
- 커스텀 WindowScroller 및 가상화 스크롤 라이브러리

### 아쉬웠던 점 및 개선 여지

1. **초기 로딩 속도**: 초기 데이터 로딩 시간을 더욱 최적화할 수 있을 것 같습니다. 서버 사이드 렌더링(SSR) 도입 및 초기 데이터 서버 서빙을 고려해볼 수 있습니다.

2. **로딩 처리**: Loading만 처리 하는 컴포넌트를 만들어 선언적 컴포넌트로 설계할 수 있을 것 같습니다.

3. **스켈레톤 UI**: 데이터 로딩 중 사용자 경험을 개선하기 위해 스켈레톤 UI를 추가할 수 있습니다.

4. **접근성**: 웹 접근성 가이드라인을 더욱 철저히 준수하여 모든 사용자가 쉽게 이용할 수 있도록 개선할 수 있습니다.

5. **폴더구조**: 도메인 별로 폴더를 만들어 hooks, model, services를 합쳐 명확성을 부여했으면 좋았을 것 같습니다.

이 프로젝트를 통해 라이브러리의 한계를 극복하고 커스텀 솔루션을 개발하는 과정, 효율적인 상태 관리 및 캐싱 전략을 구현하는 과정, 그리고 유연하고 재사용 가능한 컴포넌트를 설계하는 과정에서 많은 것을 배웠습니다. 특히 WindowScroller를 직접 구현하고, React Query를 활용하며, VAC 패턴과 Headless UI 개념을 적용하면서 React의 내부 동작, 효율적인 데이터 관리, 그리고 컴포넌트 설계 철학에 대해 깊이 있게 이해할 수 있었습니다. 앞으로도 사용자 경험과 성능 최적화, 그리고 코드의 재사용성과 유지보수성 향상에 중점을 두겠습니다.
