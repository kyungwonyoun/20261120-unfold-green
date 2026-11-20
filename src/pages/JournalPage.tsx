import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Search } from 'lucide-react';
import { journalPosts } from '../data/journal';
import type { GalleryAspectRatio, JournalCategory } from '../types/content';
import { FadeIn } from '../components/MotionPrimitives';
import { PageMeta } from '../components/PageMeta';
import { ProtectedImage } from '../components/ProtectedImage';

const CATEGORIES: ('ALL' | JournalCategory)[] = [
  'ALL',
  'GARDEN',
  'PLANTS',
  'DESIGN',
  'NOTES',
];

function getJournalAspectClass(ratio: GalleryAspectRatio): string {
  switch (ratio) {
    case 'landscape':
      return 'aspect-[16/10]';
    case 'portrait':
      return 'aspect-[3/4]';
    case 'square':
      return 'aspect-square';
  }
}

export function JournalPage() {
  const [activeCategory, setActiveCategory] = useState<'ALL' | JournalCategory>('ALL');
  const [query, setQuery] = useState('');

  const filteredPosts = useMemo(() => {
    const q = query.trim().toLowerCase();
    return journalPosts.filter((post) => {
      const matchesCat = activeCategory === 'ALL' || post.category === activeCategory;
      const matchesQuery =
        !q ||
        post.title.toLowerCase().includes(q) ||
        post.lead.toLowerCase().includes(q) ||
        post.category.toLowerCase().includes(q);
      return matchesCat && matchesQuery;
    });
  }, [activeCategory, query]);

  return (
    <div className="bg-[#F7F8F6] text-[#383515] pt-24 md:pt-32 pb-24 md:pb-32">
      <PageMeta
        title="JOURNAL | UNFOLD GREEN"
        description="정원, 식물, 공간 디자인에 대한 관찰과 사유를 담은 UNFOLD GREEN의 비주얼 아카이브 매거진입니다."
      />

      <section className="max-w-[1440px] mx-auto px-6 md:px-12 pb-12 md:pb-16 border-b border-[#383515]/10">
        <FadeIn>
          <p className="text-xs font-medium tracking-[0.12em] text-[#778732] mb-4">
            JOURNAL
          </p>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-[-0.02em] leading-[1.25] text-[#383515]">
                식물과 공간에 관한 관찰의 기록
              </h1>
              <p className="text-sm md:text-[15px] text-[#6B6665] leading-relaxed">
                정원 현장의 짧은 메모부터 식물의 생육 특성, 공간과 빛에 대한 에디토리얼 노트를 비정기적으로 아카이빙합니다.
              </p>
            </div>

            {/* Search input */}
            <div className="relative w-full lg:w-72 shrink-0">
              <Search
                className="w-4 h-4 text-[#6B6665] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
                strokeWidth={1.6}
              />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="키워드 검색"
                aria-label="저널 게시물 검색"
                className="w-full min-h-[42px] pl-10 pr-4 py-2 text-sm bg-transparent border border-[#383515]/20 rounded-sm text-[#383515] placeholder:text-[#6B6665]/70 focus:outline-none focus:border-[#778732]"
              />
            </div>
          </div>

          {/* Interactive category filter tabs */}
          <div
            role="tablist"
            aria-label="저널 카테고리 필터"
            className="mt-8 flex flex-wrap items-center gap-2"
          >
            {CATEGORIES.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveCategory(category)}
                  className={`px-3.5 py-2 min-h-[38px] text-xs font-medium tracking-[0.08em] rounded-sm transition-colors whitespace-nowrap shrink-0 ${
                    isActive
                      ? 'bg-[#383515] text-[#F7F8F6]'
                      : 'text-[#6B6665] hover:text-[#383515] hover:bg-[#383515]/5'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </FadeIn>
      </section>

      {/* Photo & Text Mixed Asymmetric Gallery */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-12 pt-14 md:pt-20">
        {filteredPosts.length === 0 ? (
          <div className="py-20 text-center space-y-3">
            <p className="text-base text-[#6B6665]">
              선택한 조건에 해당하는 기록이 없습니다.
            </p>
            <button
              type="button"
              onClick={() => {
                setActiveCategory('ALL');
                setQuery('');
              }}
              className="text-sm font-medium text-[#778732] hover:underline"
            >
              전체 글 보기
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-12 gap-x-10 gap-y-16 md:gap-y-24 items-start">
            {filteredPosts.map((post, idx) => {
              const isWide = idx % 3 === 0;
              const colClass = isWide
                ? 'md:col-span-7'
                : idx % 3 === 1
                  ? 'md:col-span-5 md:mt-12'
                  : 'md:col-span-6 md:col-start-4';

              return (
                <FadeIn key={post.id} delay={Math.min(idx * 0.05, 0.2)} className={colClass}>
                  <Link
                    to={`/journal/${post.slug}`}
                    className="group block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#778732]"
                  >
                    <ProtectedImage
                      src={post.coverImage}
                      alt={post.coverAlt}
                      containerClassName={`${getJournalAspectClass(post.aspectRatio)} rounded-sm`}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                    />

                    <div className="mt-5 space-y-2.5">
                      {/* Clean unboxed metadata */}
                      <div className="flex items-center gap-2 text-xs text-[#6B6665] tabular-nums">
                        <span className="font-medium tracking-[0.08em] text-[#778732]">
                          {post.category}
                        </span>
                        <span aria-hidden="true">·</span>
                        <span>{post.date}</span>
                        <span aria-hidden="true">·</span>
                        <span>
                          {post.writingMode === 'editorial' ? 'Editorial' : 'Quick Note'}
                        </span>
                      </div>

                      <div className="flex items-start justify-between gap-4">
                        <h2 className="text-xl md:text-2xl font-medium tracking-[-0.015em] text-[#383515] group-hover:text-[#778732] transition-colors leading-[1.35]">
                          {post.title}
                        </h2>
                        <ArrowUpRight className="w-4 h-4 mt-1.5 text-[#6B6665] group-hover:text-[#778732] shrink-0 transition-colors" />
                      </div>

                      <p className="text-sm md:text-[15px] text-[#6B6665] leading-[1.75] line-clamp-3">
                        {post.lead}
                      </p>
                    </div>
                  </Link>
                </FadeIn>
              );
            })}
          </div>
        )}
      </section>
    </div>
  );
}
