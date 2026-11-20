import type { AboutContent, HomeContent, SiteSettings } from '../types/content';

export const siteSettings: SiteSettings = {
  brandName: 'UNFOLD GREEN',
  wordmarkFirst: 'unfold',
  wordmarkSecond: 'green',
  studioTitle: 'Garden Design Studio',
  tagline: 'Designing spaces through plants and nature.',
  contact: {
    email: 'kyungwonyoun@gmail.com',
    instagramUrl: 'https://www.instagram.com/gyeongone_garden/',
    naverBlogUrl: 'https://blog.naver.com/gyeongone_garden',
    showEmail: true,
    showInstagram: true,
    showNaverBlog: true,
  },
};

export const homeContent: HomeContent = {
  hero: {
    image: '/src/assets/images/hero_garden_sanctuary_1795169605076.jpg',
    imageAlt: '아침 햇살이 단풍나무 가지와 그라스 식재 위로 부드럽게 내려앉은 정원 전경',
    studioLabel: 'garden design studio',
    headlineKo: '공간의 가능성을 발견하고, 자연을 통해 새로운 풍경을 펼칩니다.',
    headlineEn: 'Unfolding the potential of space through nature.',
  },
  introduction: {
    headline: '공간을 읽고,\n자연스러운 머무름을 디자인하다.',
    description:
      'UNFOLD GREEN은 식물을 공간의 단순한 장식으로 보지 않습니다.\n장소의 빛과 바람, 건축의 여백을 읽어 식물의 밀도와 질감을 배치하고,\n계절의 시간이 천천히 쌓여 편안히 머물 수 있는 정원을 설계합니다.',
    image: '/src/assets/images/intro_terrace_garden_1795169605479.jpg',
    imageAlt: '자연광이 머무는 미니멀한 테라스 정원과 석재 플랜터의 다년생 식재',
  },
  contactBanner: {
    headline: "Let's create a garden to stay.",
    subcopy: '공간에 어울리는 정원에 대해 이야기 나누고 싶습니다.',
  },
};

export const aboutContent: AboutContent = {
  philosophy: [
    {
      id: 'read-the-space',
      indexLabel: '01',
      titleEn: 'READ THE SPACE',
      titleKo: '공간을 읽다',
      description:
        '정원은 식물을 심기 전에 장소를 읽는 것에서 시작합니다. 건축의 비례와 동선, 시선이 닿는 창 너머의 풍경, 일조와 바람의 결을 면밀히 관찰해 그 공간에만 가능한 식재의 언어를 찾습니다.',
      image: '/src/assets/images/shindong_rooftop_garden_1795169605054.jpg',
      imageAlt: '도시 풍경과 건축적 선이 어우러진 신원동 갤러리 옥상정원 전경',
    },
    {
      id: 'create-a-pause',
      indexLabel: '02',
      titleEn: 'CREATE A PAUSE',
      titleKo: '머무름을 만들다',
      description:
        '채움보다 여백의 힘에 집중합니다. 식재의 배치와 밀도, 돌과 흙의 질감, 벽면에 번지는 그림자의 움직임을 통해 걸음이 자연스레 늦춰지고 시선이 편안히 머무르는 쉼의 장면을 만듭니다.',
      image: '/src/assets/images/goseong_gallery_garden_1795169605438.jpg',
      imageAlt: '절제된 소나무와 은빛 그라스가 석회 벽면과 조화를 이루는 고성 갤러리 정원',
    },
    {
      id: 'grow-with-time',
      indexLabel: '03',
      titleEn: 'GROW WITH TIME',
      titleKo: '시간과 함께 성장하다',
      description:
        '완공일이 정원의 완성은 아닙니다. 새순이 돋는 봄과 짙어지는 여름, 말라가는 씨앗의 겨울까지 계절마다 달라지는 표정이 공간에 고스란히 축적되도록 계획부터 유지관리까지 하나의 흐름으로 연결합니다.',
      image: '/src/assets/images/hannam_residence_garden_1795169605722.jpg',
      imageAlt: '시간의 결이 쌓인 석재 벤치와 울창한 그늘 식재가 어우러진 한남동 주택정원 A',
    },
  ],
  profile: {
    name: 'Youn Kyung Won',
    title: 'Garden Designer',
    bio: '공간디자인을 바탕으로 식물과 정원, 건축 공간의 관계를 탐구하고 설계합니다. 실내 주거·선실 공간 설계에서 쌓은 구조적 시선과 현장 중심의 정원 실무 경험을 잇는 정원 디자인을 이어갑니다.',
  },
  career: {
    professional: [
      {
        period: '2021.04 — 2026.07',
        organization: '농업회사법인(주)정원사의오랑쥬리',
        role: '실장',
        note: '주거·상업·전시 등 다양한 정원 프로젝트 설계 및 시공 총괄',
      },
      {
        period: '2019.05 — 2021.03',
        organization: '정원사의 작업실, 오랑쥬리',
        role: '파트타임',
        note: '정원 식재 시공 보조 및 현장 관리 실무',
      },
      {
        period: '2019.04 — 2020.05',
        organization: '햇살이 가득한 곳, 경원',
        role: '대표',
        note: '식물 판매 및 고객 맞춤형 상담, 일상 속 식물 활용 디렉팅',
      },
    ],
    previous: [
      {
        period: '2008.07 — 2014.02',
        organization: '(주)STX조선해양',
        role: '선실설계팀',
        note: '공간 구조 이해 및 제한된 환경 내 동선·마감 설계 경험',
      },
      {
        period: '2005.12 — 2007.10',
        organization: '(주)한샘',
        role: '상품기획팀',
        note: '주거 공간 라이프스타일 분석 및 인테리어 상품 기획',
      },
    ],
    education: [
      {
        period: '2021.09 — 2021.12',
        detail: '3.SPACE BERLIN 식물적용학 시즌1',
      },
      {
        period: '2020.06 — 2020.08',
        detail: '신구대학교 조경가든대학',
      },
      {
        period: '2019.04 — 2019.05',
        detail: 'sohomarsil x fox, the green garden class',
      },
      {
        period: '2019.03 — 2019.10',
        detail: '오랑쥬리 가든아카데미 STEP3 정원화단 AtoZ',
      },
      {
        period: '2018.09 — 2018.12',
        detail: '오랑쥬리 가든아카데미 STEP2 홈가드닝 심화과정',
      },
      {
        period: '2004.03 — 2006.02',
        detail: '이화여자대학교 대학원 환경디자인',
      },
      {
        period: '2000.03 — 2004.02',
        detail: '이화여자대학교 환경디자인',
      },
    ],
    awards: [
      {
        date: '2025',
        detail: "RHS Flower Show 참여 / 'Garden Whispers' 식재팀",
      },
      {
        date: '2020.11',
        detail: "제1회 서울식물원 식물정원 식재설계공모전 동상 / Garden 'MoDoo'",
      },
    ],
  },
  studio: {
    title: 'UNFOLD GREEN — Garden Design Studio',
    description:
      '식물과 공간의 관계를 읽고, 장소에 어울리는 정원을 디자인합니다. 공간에 자연스럽게 스며드는 식재와 시간에 따라 변화하는 풍경을 통해 사람들이 잠시 걸음을 늦추고 머물 수 있는 정원을 만들어갑니다. 정원의 계획부터 설계, 시공과 관리까지 하나의 흐름으로 연결합니다.',
    services: [
      {
        number: '01',
        title: 'GARDEN DESIGN',
        subtitle: '정원 계획 및 설계',
        description:
          '대상지의 일조·토양·건축 맥락을 분석해 공간 구성안, 식재 계획, 재료 팔레트 및 상세 도면을 설계합니다.',
      },
      {
        number: '02',
        title: 'GARDEN CONSTRUCTION',
        subtitle: '정원 시공 및 조성',
        description:
          '토양 개량과 배수 기반 조성부터 수목·다년생 초본 식재, 자연석 및 하드스케이프 디테일까지 직접 디렉팅합니다.',
      },
      {
        number: '03',
        title: 'GARDEN CARE',
        subtitle: '정원 유지관리 및 계절별 관리',
        description:
          '조성 이후 정원이 안정적으로 자리 잡을 수 있도록 계절별 전정, 병해충 관리, 보식 및 식재 리뉴얼을 지원합니다.',
      },
    ],
  },
};
