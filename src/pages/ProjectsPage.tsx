import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '../data/projects';
import type { GalleryAspectRatio, GallerySize } from '../types/content';
import { FadeIn } from '../components/MotionPrimitives';
import { PageMeta } from '../components/PageMeta';
import { ProtectedImage } from '../components/ProtectedImage';

function getGridPlacementClass(size: GallerySize, index: number): string {
  // Asymmetric rhythm on desktop while collapsing cleanly on mobile
  const patternIndex = index % 6;
  if (size === 'lg') {
    return patternIndex === 0 ? 'md:col-span-7' : 'md:col-span-8 md:col-start-3';
  }
  if (size === 'md') {
    if (patternIndex === 1) return 'md:col-span-5 md:mt-16';
    if (patternIndex === 2) return 'md:col-span-6';
    return 'md:col-span-6 md:mt-12';
  }
  // size === 'sm'
  if (patternIndex === 3) return 'md:col-span-5 md:col-start-7 md:-mt-6';
  return 'md:col-span-4 md:mt-10';
}

function getAspectClass(ratio: GalleryAspectRatio): string {
  switch (ratio) {
    case 'landscape':
      return 'aspect-[16/10]';
    case 'portrait':
      return 'aspect-[3/4]';
    case 'square':
      return 'aspect-square';
  }
}

export function ProjectsPage() {
  const orderedProjects = [...projects].sort((a, b) => a.order - b.order);

  return (
    <div className="bg-[#F7F8F6] text-[#383515] pt-24 md:pt-32 pb-24 md:pb-32">
      <PageMeta
        title="PROJECTS | UNFOLD GREEN"
        description="주택 정원, 상업 공간, 전시 및 아트리움까지 UNFOLD GREEN의 정원 디자인 아카이브입니다."
      />

      <section className="max-w-[1440px] mx-auto px-6 md:px-12 pb-14 md:pb-20 border-b border-[#383515]/10">
        <FadeIn>
          <p className="text-xs font-medium tracking-[0.12em] text-[#778732] mb-4">
            PROJECTS
          </p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-[-0.02em] leading-[1.25] text-[#383515] text-balance">
              장소의 고유한 맥락에서 피어난 정원 아카이브
            </h1>
            <p className="text-sm text-[#6B6665] max-w-md leading-relaxed">
              개인의 주거 정원부터 상업·문화 공간, 식재 공모전까지 다양한 규모와 환경의 작업을 기록합니다.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* Asymmetric Module Gallery (no category filter UI in initial release) */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-12 pt-14 md:pt-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-x-10 gap-y-14 md:gap-y-20 items-start">
          {orderedProjects.map((project, index) => (
            <FadeIn
              key={project.id}
              delay={Math.min(index * 0.04, 0.2)}
              className={getGridPlacementClass(project.gallerySize, index)}
            >
              <Link
                to={`/projects/${project.slug}`}
                className="group block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#778732]"
              >
                <div className="relative overflow-hidden rounded-sm">
                  <ProtectedImage
                    src={project.coverImage}
                    alt={project.coverAlt}
                    containerClassName={getAspectClass(project.aspectRatio)}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                  />

                  {/* Desktop Hover Title Overlay */}
                  <div className="hidden md:flex absolute inset-0 bg-[#383515]/45 opacity-0 group-hover:opacity-100 transition-opacity duration-300 items-end p-7">
                    <div className="text-[#F7F8F6] space-y-1">
                      <p className="text-xs tracking-[0.06em] text-[#F7F8F6]/80">
                        {project.location} · {project.year}
                      </p>
                      <h2 className="text-xl font-medium">{project.title}</h2>
                    </div>
                  </div>
                </div>

                {/* Unboxed clean typographic metadata */}
                <div className="mt-4 flex items-baseline justify-between gap-4">
                  <div className="space-y-1">
                    <h2 className="text-lg font-medium text-[#383515] group-hover:text-[#778732] transition-colors">
                      {project.title}
                    </h2>
                    <p className="text-xs text-[#6B6665]">
                      {project.location} · {project.year} · {project.plantMaterial}
                    </p>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#6B6665] group-hover:text-[#778732] shrink-0 transition-colors" />
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </section>
    </div>
  );
}
