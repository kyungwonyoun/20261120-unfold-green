import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { projects } from '../data/projects';
import { FadeIn, ImageReveal } from '../components/MotionPrimitives';
import { LightboxModal } from '../components/LightboxModal';
import { PageMeta } from '../components/PageMeta';
import { ProtectedImage } from '../components/ProtectedImage';

export function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const [lightboxImage, setLightboxImage] = useState<{
    src: string;
    alt: string;
    caption?: string;
  } | null>(null);

  const ordered = [...projects].sort((a, b) => a.order - b.order);
  const currentIndex = ordered.findIndex((p) => p.slug === slug);
  const project = currentIndex >= 0 ? ordered[currentIndex] : undefined;

  if (!project) {
    return (
      <div className="min-h-[70vh] bg-[#F7F8F6] text-[#383515] pt-36 px-6 text-center">
        <PageMeta
          title="프로젝트를 찾을 수 없습니다 | UNFOLD GREEN"
          description="요청하신 정원 프로젝트를 찾을 수 없습니다."
        />
        <h1 className="text-2xl font-medium">요청하신 프로젝트를 찾을 수 없습니다.</h1>
        <Link
          to="/projects"
          className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[#778732] hover:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>프로젝트 목록으로 돌아가기</span>
        </Link>
      </div>
    );
  }

  const prevProject = currentIndex > 0 ? ordered[currentIndex - 1] : null;
  const nextProject = currentIndex < ordered.length - 1 ? ordered[currentIndex + 1] : null;

  const infoRows = [
    { label: '프로젝트명', value: project.title },
    { label: '위치', value: project.location },
    { label: '연도', value: project.year },
    { label: '유형', value: project.category },
    { label: '수행 주체', value: project.clientOrLead },
    { label: '담당 및 기여 범위', value: project.contribution },
    { label: '식재 소재', value: project.plantMaterial },
    { label: '주요 수종 및 초화', value: project.plantPalette.join(', ') },
  ];

  const overviewItems = [
    { label: '프로젝트 배경', body: project.overview.background },
    { label: '공간 특성', body: project.overview.siteCondition },
    { label: '디자인 콘셉트', body: project.overview.concept },
    { label: '식재 및 공간 구성', body: project.overview.plantingAndSpace },
    { label: '설계·시공 과정', body: project.overview.processSummary },
    { label: '유지관리 내용', body: project.overview.maintenance },
  ];

  return (
    <article className="bg-[#F7F8F6] text-[#383515] pt-24 md:pt-32 pb-24 md:pb-32">
      <PageMeta
        title={`${project.title} | UNFOLD GREEN`}
        description={project.summary}
      />

      {/* Breadcrumb & Header */}
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <FadeIn>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.06em] text-[#6B6665] hover:text-[#383515] transition-colors mb-8"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>BACK TO PROJECTS</span>
          </Link>

          <div className="space-y-4 mb-10">
            <p className="text-xs text-[#778732] font-medium tracking-[0.08em]">
              {project.location} · {project.year} · {project.plantMaterial}
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-[-0.02em] text-[#383515] text-balance">
              {project.title}
            </h1>
            <p className="text-base md:text-lg text-[#6B6665] max-w-2xl leading-relaxed">
              {project.summary}
            </p>
          </div>
        </FadeIn>

        {/* Main Cover Image */}
        <ImageReveal className="mb-14 md:mb-20">
          <ProtectedImage
            src={project.coverImage}
            alt={project.coverAlt}
            loading="eager"
            containerClassName="aspect-[16/10] rounded-sm"
            className="w-full h-full object-cover"
            onClick={() =>
              setLightboxImage({
                src: project.coverImage,
                alt: project.coverAlt,
                caption: project.title,
              })
            }
          />
        </ImageReveal>

        {/* Project Information Grid */}
        <FadeIn>
          <section className="mb-16 md:mb-24 border-t border-b border-[#383515]/15 py-8">
            <h2 className="text-xs font-medium tracking-[0.12em] text-[#778732] mb-6">
              PROJECT INFORMATION
            </h2>
            <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-6">
              {infoRows.map((row) => (
                <div key={row.label} className="space-y-1.5">
                  <dt className="text-xs text-[#6B6665]">{row.label}</dt>
                  <dd className="text-sm font-medium text-[#383515] leading-relaxed">
                    {row.value}
                  </dd>
                </div>
              ))}
            </dl>
          </section>
        </FadeIn>

        {/* Structured Project Description */}
        <FadeIn>
          <section className="mb-16 md:mb-24">
            <h2 className="text-xs font-medium tracking-[0.12em] text-[#778732] mb-8">
              PROJECT DESCRIPTION
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-14 gap-y-10">
              {overviewItems.map((item) => (
                <div key={item.label} className="space-y-2 border-t border-[#383515]/10 pt-4">
                  <h3 className="text-sm font-semibold text-[#383515]">{item.label}</h3>
                  <p className="text-[15px] leading-[1.8] text-[#6B6665]">{item.body}</p>
                </div>
              ))}
            </div>
          </section>
        </FadeIn>

        {/* Flexible Content Blocks */}
        <section className="space-y-14 md:space-y-20 max-w-4xl">
          {project.blocks.map((block) => {
            switch (block.type) {
              case 'subtitle':
                return (
                  <FadeIn key={block.id}>
                    <h2 className="text-xl md:text-2xl font-medium tracking-[-0.01em] text-[#383515] pt-4">
                      {block.content}
                    </h2>
                  </FadeIn>
                );

              case 'text':
                return (
                  <FadeIn key={block.id}>
                    <p className="text-[15px] md:text-base leading-[1.85] text-[#6B6665]">
                      {block.content}
                    </p>
                  </FadeIn>
                );

              case 'image':
                return (
                  <FadeIn key={block.id}>
                    <figure className="space-y-3">
                      <ProtectedImage
                        src={block.src}
                        alt={block.alt}
                        containerClassName="aspect-[16/10] rounded-sm"
                        className="w-full h-full object-cover"
                        onClick={() =>
                          setLightboxImage({
                            src: block.src,
                            alt: block.alt,
                            caption: block.caption,
                          })
                        }
                      />
                      {block.caption && (
                        <figcaption className="text-xs text-[#6B6665]">
                          {block.caption}
                        </figcaption>
                      )}
                    </figure>
                  </FadeIn>
                );

              case 'drawing':
                return (
                  <FadeIn key={block.id}>
                    <div className="p-6 md:p-8 border border-[#383515]/12 bg-[#EAECE6]/45 rounded-sm space-y-4">
                      <div className="flex items-center justify-between gap-4">
                        <span className="text-xs font-medium tracking-[0.08em] text-[#778732]">
                          DRAWING &amp; STUDY
                        </span>
                        <span className="text-xs text-[#6B6665]">{block.title}</span>
                      </div>
                      <ProtectedImage
                        src={block.src}
                        alt={block.alt}
                        containerClassName="aspect-[4/3] rounded-sm"
                        className="w-full h-full object-cover"
                        onClick={() =>
                          setLightboxImage({
                            src: block.src,
                            alt: block.alt,
                            caption: block.caption || block.title,
                          })
                        }
                      />
                      {block.caption && (
                        <p className="text-xs text-[#6B6665] leading-relaxed">
                          {block.caption}
                        </p>
                      )}
                    </div>
                  </FadeIn>
                );

              case 'designProcess':
                return (
                  <FadeIn key={block.id}>
                    <div className="border-t border-[#383515]/12 pt-6 space-y-4">
                      <h3 className="text-sm font-semibold text-[#383515]">
                        {block.title}
                      </h3>
                      <ol className="space-y-3">
                        {block.steps.map((step, i) => (
                          <li key={step} className="flex items-baseline gap-4 text-sm text-[#6B6665]">
                            <span className="text-xs font-medium text-[#778732] tabular-nums shrink-0">
                              0{i + 1}
                            </span>
                            <span className="leading-relaxed">{step}</span>
                          </li>
                        ))}
                      </ol>
                    </div>
                  </FadeIn>
                );

              case 'constructionProcess':
                return (
                  <FadeIn key={block.id}>
                    <div className="border-t border-[#383515]/12 pt-6 space-y-4">
                      <h3 className="text-sm font-semibold text-[#383515]">
                        {block.title}
                      </h3>
                      <p className="text-[15px] text-[#6B6665] leading-relaxed">
                        {block.summary}
                      </p>
                      <ul className="space-y-2 text-sm text-[#6B6665]">
                        {block.details.map((detail) => (
                          <li key={detail} className="flex items-baseline gap-3">
                            <span aria-hidden="true" className="text-[#778732]">
                              ·
                            </span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </FadeIn>
                );
            }
          })}
        </section>

        {/* Next / Previous Project Navigation */}
        <nav
          aria-label="이전/다음 프로젝트"
          className="mt-20 pt-10 border-t border-[#383515]/15 grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          <div>
            {prevProject && (
              <Link
                to={`/projects/${prevProject.slug}`}
                className="group inline-flex flex-col gap-1 text-left"
              >
                <span className="inline-flex items-center gap-1.5 text-xs text-[#6B6665]">
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>PREVIOUS PROJECT</span>
                </span>
                <span className="text-base font-medium text-[#383515] group-hover:text-[#778732] transition-colors">
                  {prevProject.title}
                </span>
              </Link>
            )}
          </div>
          <div className="sm:text-right">
            {nextProject && (
              <Link
                to={`/projects/${nextProject.slug}`}
                className="group inline-flex flex-col sm:items-end gap-1"
              >
                <span className="inline-flex items-center gap-1.5 text-xs text-[#6B6665]">
                  <span>NEXT PROJECT</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
                <span className="text-base font-medium text-[#383515] group-hover:text-[#778732] transition-colors">
                  {nextProject.title}
                </span>
              </Link>
            )}
          </div>
        </nav>
      </div>

      <LightboxModal
        src={lightboxImage?.src ?? null}
        alt={lightboxImage?.alt ?? ''}
        caption={lightboxImage?.caption}
        onClose={() => setLightboxImage(null)}
      />
    </article>
  );
}
