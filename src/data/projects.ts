import type { ProjectItem } from '../types/content';

export const projects: ProjectItem[] = [
  {
    id: 'proj-01',
    slug: 'sinwondong-gallery-rooftop',
    title: '신원동 갤러리 옥상정원',
    titleEn: 'Sinwon-dong Gallery Rooftop Garden',
    location: '서울 서초구 신원동',
    year: '2024',
    category: 'Commercial',
    clientOrLead: '농업회사법인(주)정원사의오랑쥬리',
    contribution: '기본 및 실시 설계, 옥상 식재 팔레트 구성 및 시공 총괄',
    plantMaterial: 'Living Plants',
    plantPalette: [
      'Calamagrostis × acutiflora',
      'Thymus vulgaris',
      'Pinus mugo',
      'Sesleria autumnalis',
    ],
    coverImage: '/src/assets/images/shindong_rooftop_garden_1795169605054.jpg',
    coverAlt: '자갈 동선을 따라 그라스와 허브류가 자연스럽게 펼쳐진 신원동 갤러리 옥상정원',
    summary:
      '전시를 감상한 뒤 방문객이 하늘과 바람을 마주하며 천천히 걸을 수 있도록 설계한 상업 갤러리 옥상정원.',
    gallerySize: 'lg',
    aspectRatio: 'landscape',
    order: 1,
    featuredOnHome: true,
    featuredOrder: 1,
    overview: {
      background:
        '전시 관람 동선의 마지막 지점인 옥상 슬래브를 도심 속 열린 사유의 정원으로 전환하고자 기획된 프로젝트입니다.',
      siteCondition:
        '강한 직사광선과 옥상 특유의 바람, 제한된 토심과 하중 조건을 동시에 고려해야 하는 노출 환경이었습니다.',
      concept:
        '건축의 담백한 회색 파라펫을 배경으로 건조와 바람에 강한 그라스와 낮은 상록 관목이 물결치듯 이어지는 경관을 구상했습니다.',
      plantingAndSpace:
        '중앙의 부드러운 쇄석 보행로를 기준으로 양측 화단의 높낮이를 조절해, 걸음마다 도시 스카이라인과 식물이 교차하도록 배치했습니다.',
      processSummary:
        '방수 및 경량 토양 층위 설계 후 다년생 위주의 소형 포트 묘목을 밀식해 초기 뿌리 활착을 안정화했습니다.',
      maintenance:
        '연 2회(늦겨울 그라스 예초 및 여름철 관수 점검) 최소한의 개입으로 자연스러운 계절 순환을 유지하고 있습니다.',
    },
    blocks: [
      {
        id: 'b1-sub1',
        type: 'subtitle',
        content: '노출된 옥상 환경에서 읽어낸 바람의 동선',
      },
      {
        id: 'b1-txt1',
        type: 'text',
        content:
          '하늘이 온전히 열려 있는 옥상 공간은 실내 전시실의 정적인 긴장감을 풀어주는 역할을 합니다. 바람이 지나가는 결을 따라 실새풀과 사초류를 배치해, 시선보다 먼저 움직임이 느껴지는 정원을 의도했습니다. (Phase 1 프로토타입 예시 프로젝트 설명)',
      },
      {
        id: 'b1-proc1',
        type: 'designProcess',
        title: '설계 프로세스',
        steps: [
          '옥상 구조 하중 및 배수 드레인 위치 검측',
          '전시실 출구에서의 시선축 분석 및 곡선 산책로 설정',
          '건조·내풍성 중심의 14종 식재 조합 및 계절별 개화 타임라인 수립',
        ],
      },
      {
        id: 'b1-draw1',
        type: 'drawing',
        src: '/src/assets/images/studio_planting_desk_1795169605019.jpg',
        alt: '식재 배치 구상 도면 및 소재 스터디',
        title: '식재 배치 및 소재 스터디',
        caption: '옥상 경량 토양과 자갈 포장재, 다년생 식물 조합을 검토한 초기 스터디 자료.',
      },
      {
        id: 'b1-const1',
        type: 'constructionProcess',
        title: '시공 및 토양 기반 조성',
        summary: '경량 인공토와 배수판 구성을 통해 슬래브 부담을 줄이면서도 건강한 근권 환경을 확보했습니다.',
        details: [
          '방근 시트 및 30mm 배수판 전면 시공',
          '펄라이트·피트모스·마사토를 배합한 경량 식재 기반 조성',
          '아연도강판 엣징으로 쇄석 산책로와 화단 경계 정리',
        ],
      },
    ],
  },
  {
    id: 'proj-02',
    slug: 'goseong-gallery-garden',
    title: '고성 갤러리 정원',
    titleEn: 'Goseong Gallery Courtyard Garden',
    location: '강원 고성군',
    year: '2024',
    category: 'Commercial',
    clientOrLead: '농업회사법인(주)정원사의오랑쥬리',
    contribution: '공간 콘셉트 제안, 주요 수목 선정 및 식재 디자인 주도',
    plantMaterial: 'Living Plants',
    plantPalette: [
      'Pinus thunbergii',
      'Festuca glauca',
      'Panicum virgatum',
      'Santolina chamaecyparissus',
    ],
    coverImage: '/src/assets/images/goseong_gallery_garden_1795169605438.jpg',
    coverAlt: '거친 석회 벽면 앞에 선 조형 소나무와 해안 초본류가 어우러진 고성 갤러리 정원',
    summary:
      '해안의 짠 바람과 거친 건축 벽면을 배경으로 빛과 그림자의 여백을 빚어낸 갤러리 중정 정원.',
    gallerySize: 'md',
    aspectRatio: 'portrait',
    order: 2,
    featuredOnHome: true,
    featuredOrder: 2,
    overview: {
      background:
        '동해안 인근에 자리한 소규모 문화 공간의 진입 마당과 중정을 겸하는 외부 정원 프로젝트입니다.',
      siteCondition:
        '해풍과 염분에 노출되는 입지로 인해 내염성이 뛰어난 수종 선정이 필수적이었습니다.',
      concept:
        '건물의 비워진 벽면을 하나의 캔버스로 삼아, 한 그루의 조형 소나무와 은빛 해안 그라스가 그리는 그림자를 주된 요소로 삼았습니다.',
      plantingAndSpace:
        '과도한 장식을 배제하고 마사토와 쇄석 바닥 위에 듬성듬성 군락을 배치해 바람과 햇빛이 바닥까지 닿도록 여백을 남겼습니다.',
      processSummary:
        '인근 농장에서 수형이 자연스럽게 휘어진 해송을 선별하고, 저관리형 다년생 그라스로 하부를 감쌌습니다.',
      maintenance:
        '계절별 표토 정리 및 해풍 피해 가지 확인 위주의 간결한 관리 체계를 구축했습니다.',
    },
    blocks: [
      {
        id: 'b2-sub1',
        type: 'subtitle',
        content: '건축의 여백과 그림자가 만드는 정지된 시간',
      },
      {
        id: 'b2-txt1',
        type: 'text',
        content:
          '해안의 강한 햇빛 아래에서는 식물의 색감보다 실루엣과 그림자의 농도가 더욱 선명해집니다. 벽면에서 일정 거리를 두고 식재한 수목이 오후의 긴 그림자를 드리우며 방문객의 시선을 멈추게 합니다.',
      },
      {
        id: 'b2-img1',
        type: 'image',
        src: '/src/assets/images/journal_morning_foliage_1795169605401.jpg',
        alt: '석벽 앞에서 빛을 머금은 그라스와 양치식물의 질감 디테일',
        caption: '시간대에 따라 달라지는 빛의 투과성과 잎의 질감 변화.',
      },
    ],
  },
  {
    id: 'proj-03',
    slug: 'hannam-residence-garden-a',
    title: '한남동 주택정원 A',
    titleEn: 'Hannam Residence Garden A',
    location: '서울 용산구 한남동',
    year: '2023',
    category: 'Residential',
    clientOrLead: '농업회사법인(주)정원사의오랑쥬리',
    contribution: '정원 전체 마스터플랜 설계, 음지 식재 구성 및 사후 관리 자문',
    plantMaterial: 'Living Plants',
    plantPalette: [
      'Acer palmatum',
      'Dryopteris erythrosora',
      'Hosta sieboldiana',
      'Asarum sieboldii',
    ],
    coverImage: '/src/assets/images/hannam_residence_garden_1795169605722.jpg',
    coverAlt: '오래된 나무 그늘 아래 고사리류와 돌벤치가 놓인 한남동 주택정원 A',
    summary:
      '기존 수목의 깊은 그늘을 보존하면서 고사리와 호스타, 자연석 벤치로 일상의 쉼을 채운 단독주택 정원.',
    gallerySize: 'md',
    aspectRatio: 'landscape',
    order: 3,
    featuredOnHome: true,
    featuredOrder: 3,
    overview: {
      background:
        '오래된 교목이 자라고 있던 기존 주택 마당을 가족이 사계절 머물며 산책할 수 있는 우드랜드 정원으로 재정비했습니다.',
      siteCondition:
        '성목의 수관 아래 반음지·음지 면적이 넓어 기존의 잔디가 고사하고 배수 불균형이 발생한 상태였습니다.',
      concept:
        '기존 나무를 베어내는 대신 그늘을 긍정적인 조건으로 받아들이고, 숲의 하층 식생을 닮은 음지 정원으로 전환했습니다.',
      plantingAndSpace:
        '자연 판석 디딤돌 주변으로 잎의 크기와 결이 다른 양치식물과 호스타, 지피식물을 층위별로 심어 입체적인 녹음을 구현했습니다.',
      processSummary:
        '기존 표토의 부엽토층을 보강한 뒤, 수목 뿌리를 손상시키지 않는 수작업 중심의 식재를 진행했습니다.',
      maintenance:
        '봄철 묵은 잎 정리와 가을철 낙엽 멀칭을 통해 토양 생태가 스스로 순환하도록 관리하고 있습니다.',
    },
    blocks: [
      {
        id: 'b3-sub1',
        type: 'subtitle',
        content: '그늘을 피하지 않고 받아들인 숲의 하층 식재',
      },
      {
        id: 'b3-txt1',
        type: 'text',
        content:
          '꽃이 화려하지 않아도 잎의 형태와 짙고 옅은 초록의 대비만으로도 정원은 충분히 깊어집니다. 시간에 따라 이끼가 자연스럽게 번진 돌벤치는 마당의 중심에서 조용한 머무름을 제안합니다.',
      },
      {
        id: 'b3-const1',
        type: 'constructionProcess',
        title: '노목 보호 및 지피 식재 디테일',
        summary: '성목의 세근(잔뿌리) 손상을 최소화하기 위해 중장비 반입을 배제하고 수작업으로 지반을 다듬었습니다.',
        details: [
          '기존 고사 잔디층 제거 및 부숙 우드칩·부엽토 혼합 토양 개량',
          '자연 판석의 틈새에 이끼와 낮은 지피류 안착',
          '점적 관수 라인을 지표 아래로 매립해 시각적 노출 최소화',
        ],
      },
    ],
  },
  {
    id: 'proj-04',
    slug: 'seongbuk-courtyard-garden',
    title: '성북동 중정 정원',
    titleEn: 'Seongbuk Courtyard Garden',
    location: '서울 성북구 성북동',
    year: '2023',
    category: 'Residential',
    clientOrLead: '농업회사법인(주)정원사의오랑쥬리',
    contribution: '중정 공간 연출, 수공간 디테일 협의 및 식재 시공 참여',
    plantMaterial: 'Living Plants',
    plantPalette: [
      'Phyllostachys nigra',
      'Leucobryum glaucum',
      'Polystichum polyblepharum',
      'Acer palmatum',
    ],
    coverImage: '/src/assets/images/seongbuk_courtyard_garden_1795169605534.jpg',
    coverAlt: '통창 프레임 너머로 이끼와 대나무, 돌수반이 어우러진 성북동 중정 정원',
    summary:
      '실내 모든 실에서 창을 통해 사계절의 변화와 빗소리를 마주할 수 있는 ㄷ자형 주택의 내향적 중정.',
    gallerySize: 'sm',
    aspectRatio: 'portrait',
    order: 4,
    featuredOnHome: false,
    overview: {
      background:
        '도심 주택의 프라이버시를 확보하면서도 실내 깊숙이 자연광과 계절감을 들이기 위해 계획된 소형 중정입니다.',
      siteCondition:
        '사방이 목재와 유리 외벽으로 둘러싸여 통풍이 완만하고 습도가 비교적 일정하게 유지되는 반음지 공간이었습니다.',
      concept:
        '실내에서 바라보는 한 폭의 정적인 프레임으로서, 이끼의 부드러운 굴곡과 가는 대나무의 수직선, 물그릇의 정갈한 반사를 대비시켰습니다.',
      plantingAndSpace:
        '비단결 같은 깃털이끼 군락 사이에 자연석을 안치하고, 중심부에 화강암 물확을 두어 하늘의 표정을 담아냈습니다.',
      processSummary:
        '습도 유지가 중요한 이끼 생육을 위해 배수층과 보습층을 이중으로 설계하고 미세 안개 분무 시스템을 연동했습니다.',
      maintenance:
        '낙엽이 이끼 위에 오래 머물지 않도록 정기적으로 정리하며 수질과 대나무 세순 밀도를 조절합니다.',
    },
    blocks: [
      {
        id: 'b4-sub1',
        type: 'subtitle',
        content: '창의 프레임 안에서 완성되는 실내와 외부의 경계',
      },
      {
        id: 'b4-txt1',
        type: 'text',
        content:
          '중정은 직접 밟고 거니는 정원이기 이전에, 매일 거실과 복도에서 가장 오래 바라보게 되는 풍경입니다. 창호의 세로 프레임과 대나무 줄기의 비례를 맞추어 시선이 자연스럽게 하늘로 이어지도록 조율했습니다.',
      },
    ],
  },
  {
    id: 'proj-05',
    slug: 'paju-cultural-atrium',
    title: '파주 문화공간 아트리움',
    titleEn: 'Paju Cultural Atrium Botanical Space',
    location: '경기도 파주시',
    year: '2025',
    category: 'Public & Exhibition',
    clientOrLead: 'UNFOLD GREEN 협업 파일럿 / 스튜디오 기획안',
    contribution: '실내 대형 식재 공간 설계 및 생화·보존식물 혼합 연출 총괄',
    plantMaterial: 'Artificial Plants',
    plantPalette: [
      'Olea europaea (Preserved / Sculptural)',
      'Ficus lyrata',
      'Asplenium nidus (Living under-planting)',
    ],
    coverImage: '/src/assets/images/paju_atrium_garden_1795169605042.jpg',
    coverAlt: '천창 아래 트래버틴 플랜터에 대형 수목이 식재된 파주 문화공간 아트리움',
    summary:
      '대형 복합문화공간의 공조와 유지관리 한계를 고려해 조형 식물과 생화 하부 식재를 조화롭게 설계한 실내 아트리움.',
    gallerySize: 'lg',
    aspectRatio: 'landscape',
    order: 5,
    featuredOnHome: false,
    overview: {
      background:
        '층고가 높은 대형 아트리움 로비에 방문객의 체류감을 높이는 안정적인 녹색 중심축을 형성하기 위해 진행한 프로젝트입니다.',
      siteCondition:
        '상부 천창을 통한 채광은 있으나 실내 공조 바람과 일교차, 대형 수목 반입 동선의 제약이 존재했습니다.',
      concept:
        '인위적인 느낌이 들지 않도록 천연 수피와 자연스러운 수형을 갖춘 보존·조형 교목(Artificial Plants)과 하부 생화·이끼 식재의 질감을 정교하게 결합했습니다.',
      plantingAndSpace:
        '트래버틴 원석 플랜터를 쉼터 벤치와 일체화해 사람들이 나무 그늘 아래에 앉아 머무를 수 있도록 계획했습니다.',
      processSummary:
        '주변 자연광의 색온도와 잎의 채도 차이를 반복 검증해 인공 소재 특유의 이질감을 없앴습니다.',
      maintenance:
        '분기별 먼지 케어 및 하부 생화 식재 상태 점검을 통해 4계절 균일한 공간 품격을 유지합니다.',
    },
    blocks: [
      {
        id: 'b5-sub1',
        type: 'subtitle',
        content: '공간의 조건에 맞춘 생화와 조형 식재의 유연한 선택',
      },
      {
        id: 'b5-txt1',
        type: 'text',
        content:
          'UNFOLD GREEN은 생화와 조화를 이분법으로 나누지 않습니다. 공간의 광량, 동선, 장기적인 유지관리 여건에 따라 가장 자연스럽고 설득력 있는 식물 소재를 선택하는 것이 중요합니다.',
      },
    ],
  },
  {
    id: 'proj-06',
    slug: 'garden-modoo-exhibition',
    title: "정원 '모두(MoDoo)'",
    titleEn: "Garden 'MoDoo' — Seoul Botanic Park",
    location: '서울 강서구 서울식물원',
    year: '2020',
    category: 'Public & Exhibition',
    clientOrLead: '제1회 서울식물원 식물정원 식재설계공모전 (동상 수상작)',
    contribution: '팀 대표 식재 설계, 식물 리스트 구성 및 현장 조성',
    plantMaterial: 'Living Plants',
    plantPalette: [
      'Ammi majus',
      'Salvia nemorosa',
      'Carex morrowii',
      'Veronicastrum sibiricum',
    ],
    coverImage: '/src/assets/images/modoo_meadow_garden_1795169605667.jpg',
    coverAlt: '야생초와 사초류가 흙길을 따라 자연스럽게 어우러진 공모전 정원 모두(MoDoo)',
    summary:
      '서로 다른 생육 특성과 개화 시기를 가진 식물들이 한 공간에서 공존하며 만드는 열린 초지형 전시 정원.',
    gallerySize: 'sm',
    aspectRatio: 'square',
    order: 6,
    featuredOnHome: false,
    overview: {
      background:
        '제1회 서울식물원 식물정원 식재설계공모전 출품 및 실물 조성으로 동상을 수상한 프로젝트입니다.',
      siteCondition:
        '전시 기간 동안 다양한 연령대의 시민들이 가까이에서 식물을 관찰하고 걸을 수 있는 평지형 전시 구획이었습니다.',
      concept:
        '각기 다른 높이와 잎의 질감, 개화 리듬을 지닌 다년생 초본들이 서로를 가리지 않고 공존하는 "모두(MoDoo)"의 군락을 제안했습니다.',
      plantingAndSpace:
        '투명한 흰색 산형화과 식물과 부드러운 사초류, 짙은 보랏빛 살비아를 자연스러운 산포 패턴으로 혼합 식재했습니다.',
      processSummary:
        '실제 개화 시기를 역산해 사전 육묘를 진행하고, 현장 식재 시 자연 군락과 같은 무작위 밀도감을 구현했습니다.',
      maintenance:
        '전시 기간 중 시든 꽃대 제거 및 보행로 주변 식물 전정으로 쾌적한 관람 동선을 유지했습니다.',
    },
    blocks: [
      {
        id: 'b6-sub1',
        type: 'subtitle',
        content: '혼합 식재가 만드는 자연스러운 군락의 리듬',
      },
      {
        id: 'b6-txt1',
        type: 'text',
        content:
          '동일한 종을 블록 단위로 나누어 심는 방식에서 벗어나, 자연 초지에서 서로 기대어 자라는 생태적 구조를 작은 정원 안에 구현하고자 했습니다.',
      },
    ],
  },
  {
    id: 'proj-07',
    slug: 'pyeongchang-terrace-garden',
    title: '평창동 테라스 정원',
    titleEn: 'Pyeongchang-dong Terrace Garden',
    location: '서울 종로구 평창동',
    year: '2024',
    category: 'Residential',
    clientOrLead: 'UNFOLD GREEN',
    contribution: '테라스 플랜터 설계, 관목·다년생 식재 구성 및 시공',
    plantMaterial: 'Living Plants',
    plantPalette: [
      'Olea europaea',
      'Stipa tenuissima',
      'Rosmarinus officinalis',
      'Polystichum',
    ],
    coverImage: '/src/assets/images/intro_terrace_garden_1795169605479.jpg',
    coverAlt: '목재 데크와 석회 플랜터가 조화를 이룬 평창동 주택 테라스 정원',
    summary:
      '거실과 바로 이어지는 2층 야외 테라스에 햇빛과 돌의 질감, 바람에 흔들리는 초본류를 채운 생활 정원.',
    gallerySize: 'md',
    aspectRatio: 'landscape',
    order: 7,
    featuredOnHome: false,
    overview: {
      background:
        '도심 산자락을 바라보는 주택 2층의 비어 있던 목재 데크 공간을 아침 차를 마시며 식물을 돌볼 수 있는 일상 정원으로 탈바꿈했습니다.',
      siteCondition:
        '바닥 방수층 보호를 위해 이동형·모듈형 석재 플랜터 구성이 필요했으며, 오후 시간대 일조량이 풍부했습니다.',
      concept:
        '따뜻한 목재 데크의 톤을 해치지 않는 담백한 석재 화기들을 높낮이를 달리해 배치하고, 잎의 질감이 서로 다른 지중해성 식물과 그라스를 매치했습니다.',
      plantingAndSpace:
        '창측에서 바라볼 때 가장 먼저 시선이 닿는 모서리에 중심 수목을 두고, 창틀 아래로 낮은 허브류를 연결했습니다.',
      processSummary:
        '맞춤 제작한 라임스톤 플랜터 내부에 단열재와 배수층을 이중으로 시공해 겨울철 동해 위험을 낮췄습니다.',
      maintenance:
        '자동 점적 관수 타이머 세팅과 더불어 계절별 전정 가이드를 건축주에게 함께 제공했습니다.',
    },
    blocks: [
      {
        id: 'b7-sub1',
        type: 'subtitle',
        content: '생활 동선의 연장이 되는 작은 테라스',
      },
      {
        id: 'b7-txt1',
        type: 'text',
        content:
          '넓지 않은 테라스라도 화기의 질감과 식재의 높낮이만 정교하게 다듬으면 실내 공간의 분위기가 완전히 달라집니다. 아침마다 물을 주며 계절의 변화를 가장 가까이에서 느끼는 공간으로 완성되었습니다.',
      },
    ],
  },
  {
    id: 'proj-08',
    slug: 'pangyo-house-garden',
    title: '판교 중정 주택정원',
    titleEn: 'Pangyo Courtyard House Garden',
    location: '경기 성남시 판교동',
    year: '2023',
    category: 'Residential',
    clientOrLead: '농업회사법인(주)정원사의오랑쥬리',
    contribution: '정원 설계 및 현장 식재 디렉팅',
    plantMaterial: 'Living Plants',
    plantPalette: [
      'Acer palmatum',
      'Miscanthus sinensis',
      'Carex',
      'Pachysandra terminalis',
    ],
    coverImage: '/src/assets/images/hero_garden_sanctuary_1795169605076.jpg',
    coverAlt: '현무암 디딤석과 단풍나무, 억새류가 어우러진 판교 주택정원',
    summary:
      '콘크리트 매스가 감싸는 현대 주택 마당에 사계절 잎의 색채와 디딤돌의 산책 동선을 심은 주거 정원.',
    gallerySize: 'lg',
    aspectRatio: 'landscape',
    order: 8,
    featuredOnHome: false,
    overview: {
      background:
        '노출 콘크리트와 목재가 조화를 이루는 신축 단독주택의 차분한 건축 어휘를 해치지 않으면서도 따뜻한 생명력을 더하고자 진행했습니다.',
      siteCondition:
        '건물에 의해 반그늘과 양지가 교차하는 미기후가 형성되어 구역별 식물 군집을 세심하게 나누어야 했습니다.',
      concept:
        '건축물 진입에서부터 안쪽 회랑까지 자연석 디딤돌을 따라 천천히 걸으며, 양측의 풍성한 그라스와 단풍나무의 수형을 입체적으로 감상하도록 계획했습니다.',
      plantingAndSpace:
        '바닥면에는 이끼와 지피 식물을 깔아 콘크리트의 차가움을 중화하고, 시선 높이에는 가볍게 흔들리는 억새와 단풍 가지를 배치했습니다.',
      processSummary:
        '건축 준공 일정에 맞춰 지반 정지 및 우수관 연결을 선행한 후, 주요 교목의 가지 방향을 현장 회전하며 최종 식재했습니다.',
      maintenance:
        '가을 단풍 낙엽 이후 겨울의 마른 그라스 줄기를 남겨 두어 겨울 정원 특유의 정취를 즐기도록 제안했습니다.',
    },
    blocks: [
      {
        id: 'b8-sub1',
        type: 'subtitle',
        content: '단단한 건축 물성 위에 얹힌 부드러운 식물의 층위',
      },
      {
        id: 'b8-txt1',
        type: 'text',
        content:
          '노출 콘크리트의 정제된 면은 식물의 잎맥과 그림자가 가장 아름답게 투영되는 바탕이 됩니다. 거친 현무암 디딤돌과 부드러운 그라스의 대비가 걸음마다 감각적인 리듬을 만들어냅니다.',
      },
    ],
  },
];
