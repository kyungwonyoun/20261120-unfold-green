import type { JournalPost } from '../types/content';

export const journalPosts: JournalPost[] = [
  {
    id: 'j-01',
    slug: 'morning-light-through-ferns',
    title: '아침 빛이 머무는 양치식물과 그라스의 경계',
    date: '2026.10.18',
    category: 'PLANTS',
    writingMode: 'editorial',
    coverImage: '/src/assets/images/journal_morning_foliage_1795169605401.jpg',
    coverAlt: '돌담 앞 아침 빛을 받은 고사리와 그라스 이삭',
    lead: '빛이 완전히 들지 않는 반음지 공간에서도 식물은 가장 섬세한 표정을 보여줍니다. 잎의 두께와 투과성이 다른 두 식물이 만나는 지점을 기록했습니다.',
    aspectRatio: 'portrait',
    relatedSlugs: ['reading-shadows-before-planting', 'sketching-a-planting-palette'],
    blocks: [
      {
        id: 'jb1-1',
        type: 'text',
        content:
          '정원을 관찰하다 보면 가장 매력적인 순간은 햇빛이 정면으로 쏟아지는 한낮이 아니라, 비스듬한 아침 빛이 잎의 뒷면을 통과할 때 찾아옵니다. 특히 그라스의 섬세한 이삭과 반음지성 양치식물이 인접해 있을 때 빛의 대비가 극대화됩니다.',
      },
      {
        id: 'jb1-2',
        type: 'subtitle',
        content: '질감의 대비가 만드는 깊이감',
      },
      {
        id: 'jb1-3',
        type: 'text',
        content:
          '거친 돌담이라는 단단한 배경 앞에 부드럽고 가는 잎을 가진 식물을 배치하면, 시각적인 긴장이 풀리면서 공간에 깊이가 생깁니다. 색이 많은 꽃을 심지 않아도 초록의 톤과 명도 차이만으로 충분한 리듬을 만들 수 있습니다.',
      },
      {
        id: 'jb1-4',
        type: 'quote',
        content: '식물의 배치는 결국 빛과 그림자가 머물 자리를 설계하는 일에 가깝습니다.',
        attribution: 'UNFOLD GREEN Studio Note',
      },
      {
        id: 'jb1-5',
        type: 'gallery',
        images: [
          {
            src: '/src/assets/images/hannam_residence_garden_1795169605722.jpg',
            alt: '음지 식재가 어우러진 주택 정원',
            caption: '성목 아래 자리 잡은 양치식물 군락',
          },
          {
            src: '/src/assets/images/seongbuk_courtyard_garden_1795169605534.jpg',
            alt: '이끼와 대나무 중정',
            caption: '빛의 각도에 따라 달라지는 중정의 명암',
          },
        ],
      },
    ],
  },
  {
    id: 'j-02',
    slug: 'sketching-a-planting-palette',
    title: '도면 위의 식물들 — 식재 계획을 시작하는 책상',
    date: '2026.09.24',
    category: 'DESIGN',
    writingMode: 'editorial',
    coverImage: '/src/assets/images/studio_planting_desk_1795169605019.jpg',
    coverAlt: '식재 도면과 식물 표본, 돌 샘플이 놓인 디자인 작업대',
    lead: '현장에 식물을 심기 전, 작업실 책상 위에서는 도면의 선과 실제 돌의 질감, 압화 표본들이 먼저 대화를 나눕니다.',
    aspectRatio: 'landscape',
    relatedSlugs: ['morning-light-through-ferns', 'autumn-meadow-observations'],
    blocks: [
      {
        id: 'jb2-1',
        type: 'text',
        content:
          '좋은 정원 설계는 컴퓨터 모니터 안의 평면도에서만 완성되지 않습니다. 현장에서 채집한 토양과 돌 샘플을 도면 옆에 나란히 두고, 실제로 식물이 자라났을 때의 부피와 간격을 손으로 그려보며 감각을 조율합니다.',
      },
      {
        id: 'jb2-2',
        type: 'image',
        src: '/src/assets/images/intro_terrace_garden_1795169605479.jpg',
        alt: '도면에서 실제 공간으로 구현된 테라스 식재',
        caption: '소재 스터디를 거쳐 테라스 현장에 구현된 석재 플랜터와 초본 조합.',
      },
      {
        id: 'jb2-3',
        type: 'text',
        content:
          '초기 스케치 단계에서 가장 중요하게 보는 것은 "비워둘 공간"입니다. 처음부터 빈틈없이 채우기보다, 2~3년 뒤 식물이 자연스럽게 번져나갈 여백을 남겨두어야 정원이 숨을 쉴 수 있습니다.',
      },
    ],
  },
  {
    id: 'j-03',
    slug: 'reading-shadows-before-planting',
    title: '벽면과 여백 — 정원을 비워두는 용기',
    date: '2026.08.11',
    category: 'GARDEN',
    writingMode: 'quick',
    coverImage: '/src/assets/images/goseong_gallery_garden_1795169605438.jpg',
    coverAlt: '흰 벽면과 소나무 그림자가 어우러진 정원 풍경',
    lead: '식물로 모든 면을 덮기보다 거친 벽면과 자갈의 여백을 남겨둘 때, 비로소 바람의 움직임이 눈에 보이기 시작합니다.',
    aspectRatio: 'portrait',
    relatedSlugs: ['morning-light-through-ferns', 'notes-from-garden-whispers'],
    blocks: [
      {
        id: 'jb3-1',
        type: 'text',
        content:
          '정원 상담을 진행하다 보면 종종 빈 공간이 허전해 보일까 봐 촘촘히 채우고 싶어 하는 마음을 마주합니다. 하지만 좋은 정원에는 반드시 시선이 쉬어갈 수 있는 여백이 필요합니다. 자갈 바닥 위로 길게 드리워진 나뭇가지의 그림자 역시 정원을 구성하는 중요한 요소이기 때문입니다.',
      },
    ],
  },
  {
    id: 'j-04',
    slug: 'autumn-meadow-observations',
    title: '계절이 지나간 자리에 남는 마른 식물의 아름다움',
    date: '2026.07.02',
    category: 'PLANTS',
    writingMode: 'quick',
    coverImage: '/src/assets/images/modoo_meadow_garden_1795169605667.jpg',
    coverAlt: '자연스러운 군락을 이룬 초지형 정원 산책로',
    lead: '꽃이 지고 난 뒤 줄기가 마르고 씨앗이 맺히는 과정까지를 정원의 일부로 바라보는 시각에 대하여.',
    aspectRatio: 'square',
    relatedSlugs: ['sketching-a-planting-palette', 'notes-from-garden-whispers'],
    blocks: [
      {
        id: 'jb4-1',
        type: 'text',
        content:
          '많은 다년생 식물들은 꽃이 진 후에도 단단한 줄기와 씨앗 꼬투리의 구조감을 오래 유지합니다. 가을의 끝자락에서 색을 잃고 갈색과 올리브빛으로 변해가는 모습은, 봄의 생동감과는 또 다른 차분한 시간의 밀도를 보여줍니다.',
      },
    ],
  },
  {
    id: 'j-05',
    slug: 'notes-from-garden-whispers',
    title: '식재의 밀도와 리듬에 관한 짧은 메모',
    date: '2026.05.19',
    category: 'NOTES',
    writingMode: 'quick',
    coverImage: '/src/assets/images/hero_garden_sanctuary_1795169605076.jpg',
    coverAlt: '디딤석과 그라스가 조화를 이룬 중정 산책로',
    lead: '현장에서 흙을 만지고 식물의 간격을 조금씩 옮겨보며 기록한 다섯 번째 작업 노트.',
    aspectRatio: 'landscape',
    relatedSlugs: ['reading-shadows-before-planting', 'autumn-meadow-observations'],
    blocks: [
      {
        id: 'jb5-1',
        type: 'text',
        content:
          '도면상에서 완벽해 보였던 식재 간격도 막상 현장의 빛 아래서 보면 5cm, 10cm의 차이가 전혀 다른 인상을 줍니다. 발걸음이 닿는 디딤석 가장자리는 조금 더 부드럽게 넘실거리도록 낮추고, 시선이 머무는 코너에는 수직적인 실루엣을 세워 현장 감각을 최종 반영합니다.',
      },
    ],
  },
];
