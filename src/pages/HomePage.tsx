import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowDown, ArrowRight, ArrowUpRight, BookOpen, Instagram, Mail, MessageSquare } from 'lucide-react';
import { homeContent, siteSettings } from '../data/site';
import { projects } from '../data/projects';
import { FadeIn, ImageReveal } from '../components/MotionPrimitives';
import { PageMeta } from '../components/PageMeta';
import { ProtectedImage } from '../components/ProtectedImage';

export function HomePage() {
  const selectedProjects = projects
    .filter((p) => p.featuredOnHome)
    .sort((a, b) => (a.featuredOrder ?? a.order) - (b.featuredOrder ?? b.order))
    .slice(0, 3);

  const { contact } = siteSettings;

  const contactActions = [
    {
      key: 'inquiry',
      label: 'Project Inquiry',
      tooltip: '정원 설계 · 시공 문의하기',
      to: '/contact/inquiry',
      external: false,
      icon: MessageSquare,
      visible: true,
    },
    {
      key: 'email',
      label: 'Email',
      tooltip: contact.email,
      href: `mailto:${contact.email}`,
      external: true,
      icon: Mail,
      visible: contact.showEmail && Boolean(contact.email),
    },
    {
      key: 'instagram',
      label: 'Instagram',
      tooltip: 'Instagram @gyeongone_garden',
      href: contact.instagramUrl,
      external: true,
      icon: Instagram,
      visible: contact.showInstagram && Boolean(contact.instagramUrl),
    },
    {
      key: 'blog',
      label: 'Naver Blog',
      tooltip: 'Naver Blog 기록 보기',
      href: contact.naverBlogUrl,
      external: true,
      icon: BookOpen,
      visible: contact.showNaverBlog && Boolean(contact.naverBlogUrl),
    },
  ].filter((item) => item.visible);

  return (
    <div className="bg-[#F7F8F6] text-[#383515]">
      <PageMeta
        title="UNFOLD GREEN | Garden Design Studio"
        description="Designing spaces through plants and nature. 공간의 가능성을 발견하고, 자연을 통해 새로운 풍경을 펼치는 가든 디자인 스튜디오."
      />

      {/* 1. HERO — Fullscreen Garden Photography with Centered White Typography */}
      <section className="relative w-full h-[100svh] min-h-[580px] max-h-[1040px] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ProtectedImage
            src={homeContent.hero.image}
            alt={homeContent.hero.imageAlt}
            loading="eager"
            containerClassName="w-full h-full"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Measured scrim for crisp white text contrast across foliage & concrete */}
        <div
          aria-hidden="true"
          className="absolute inset-0 z-0 bg-[#383515]/30 bg-gradient-to-b from-[#383515]/45 via-[#383515]/35 to-[#383515]/65 pointer-events-none"
        />

        <div className="relative z-10 h-full max-w-[1440px] mx-auto px-6 md:px-12 flex flex-col justify-center items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl flex flex-col items-center"
          >
            <div className="space-y-2.5">
              <p className="text-4xl sm:text-5xl md:text-[56px] font-bold tracking-[-0.02em] leading-none text-white drop-shadow-sm">
                unfold green
              </p>
              <p className="text-base sm:text-lg md:text-xl font-normal tracking-[0.14em] text-white/95 drop-shadow-sm">
                {homeContent.hero.studioLabel}
              </p>
            </div>

            <div className="mt-10 md:mt-14 space-y-2.5">
              <h1 className="text-lg sm:text-xl md:text-2xl font-medium tracking-[-0.01em] text-white leading-[1.55] break-keep drop-shadow-sm">
                {homeContent.hero.headlineKo}
              </h1>
              <p className="text-sm sm:text-base md:text-lg font-normal tracking-[0.01em] text-white/90 leading-relaxed drop-shadow-sm">
                {homeContent.hero.headlineEn}
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom bar anchored inside Hero */}
        <div className="absolute bottom-0 inset-x-0 z-10">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12 pb-7 md:pb-9">
            <div className="flex items-center justify-between border-t border-white/30 pt-4">
              <span className="text-xs tracking-[0.08em] text-white/85">
                Garden Design · Garden Construction · Garden Care
              </span>
              <a
                href="#introduction"
                aria-label="소개 섹션으로 스크롤"
                className="inline-flex items-center gap-2 text-xs tracking-[0.06em] text-white/90 hover:text-white transition-colors whitespace-nowrap shrink-0"
              >
                <span>SCROLL</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. INTRODUCTION */}
      <section
        id="introduction"
        className="max-w-[1440px] mx-auto px-6 md:px-12 py-24 md:py-36"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          <div className="lg:col-span-6 flex flex-col justify-between gap-10">
            <FadeIn>
              <div className="space-y-6">
                <p className="text-xs font-medium tracking-[0.12em] text-[#778732]">
                  INTRODUCTION
                </p>
                <h2 className="text-[26px] sm:text-3xl md:text-[38px] font-medium leading-[1.35] tracking-[-0.02em] text-[#383515] whitespace-pre-line break-keep">
                  {homeContent.introduction.headline}
                </h2>
                <p className="text-[15px] md:text-base leading-[1.85] text-[#6B6665] whitespace-pre-line break-keep">
                  {homeContent.introduction.description}
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="pt-6 border-t border-[#383515]/12 flex items-center justify-between">
                <span className="text-xs text-[#6B6665]">
                  머무름 · 정제된 자연스러움 · 시간의 흐름
                </span>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-sm font-medium text-[#383515] hover:text-[#778732] transition-colors whitespace-nowrap shrink-0"
                >
                  <span>스튜디오 철학 보기</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </FadeIn>
          </div>

          <div className="lg:col-span-6">
            <ImageReveal className="h-full">
              <ProtectedImage
                src={homeContent.introduction.image}
                alt={homeContent.introduction.imageAlt}
                containerClassName="w-full aspect-[4/3] lg:h-full rounded-sm"
                className="w-full h-full object-cover"
              />
            </ImageReveal>
          </div>
        </div>
      </section>

      {/* 3. SELECTED PROJECTS — 3 Curated Projects in Asymmetric Gallery */}
      <section className="border-t border-[#383515]/10 bg-[#F7F8F6]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-24 md:py-32">
          <FadeIn>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14 md:mb-16">
              <div className="space-y-2">
                <p className="text-xs font-medium tracking-[0.12em] text-[#778732]">
                  SELECTED PROJECTS
                </p>
                <h2 className="text-2xl md:text-3xl font-medium tracking-[-0.015em] text-[#383515]">
                  공간의 결을 따라 빚어낸 정원들
                </h2>
              </div>
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 text-sm font-medium text-[#383515] hover:text-[#778732] transition-colors whitespace-nowrap shrink-0"
              >
                <span>전체 프로젝트 보기</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </FadeIn>

          {/* Asymmetric Gallery Grid for 3 Selected Projects */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 items-start">
            {selectedProjects[0] && (
              <FadeIn className="md:col-span-7">
                <Link
                  to={`/projects/${selectedProjects[0].slug}`}
                  className="group block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#778732]"
                >
                  <div className="relative overflow-hidden rounded-sm">
                    <ProtectedImage
                      src={selectedProjects[0].coverImage}
                      alt={selectedProjects[0].coverAlt}
                      containerClassName="aspect-[16/10]"
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                    />
                    {/* Hover title overlay on desktop */}
                    <div className="hidden md:flex absolute inset-0 bg-[#383515]/45 opacity-0 group-hover:opacity-100 transition-opacity duration-300 items-end p-8">
                      <div className="text-[#F7F8F6] space-y-1">
                        <p className="text-xs tracking-[0.06em] text-[#F7F8F6]/80">
                          {selectedProjects[0].location} · {selectedProjects[0].year}
                        </p>
                        <h3 className="text-xl font-medium">
                          {selectedProjects[0].title}
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 flex items-baseline justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-medium text-[#383515] group-hover:text-[#778732] transition-colors">
                        {selectedProjects[0].title}
                      </h3>
                      <p className="text-xs text-[#6B6665] mt-1">
                        {selectedProjects[0].location} · {selectedProjects[0].year}
                      </p>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-[#6B6665] group-hover:text-[#778732] shrink-0 transition-colors" />
                  </div>
                </Link>
              </FadeIn>
            )}

            {selectedProjects[1] && (
              <FadeIn delay={0.08} className="md:col-span-5 md:mt-14">
                <Link
                  to={`/projects/${selectedProjects[1].slug}`}
                  className="group block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#778732]"
                >
                  <div className="relative overflow-hidden rounded-sm">
                    <ProtectedImage
                      src={selectedProjects[1].coverImage}
                      alt={selectedProjects[1].coverAlt}
                      containerClassName="aspect-[3/4]"
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                    />
                    <div className="hidden md:flex absolute inset-0 bg-[#383515]/45 opacity-0 group-hover:opacity-100 transition-opacity duration-300 items-end p-8">
                      <div className="text-[#F7F8F6] space-y-1">
                        <p className="text-xs tracking-[0.06em] text-[#F7F8F6]/80">
                          {selectedProjects[1].location} · {selectedProjects[1].year}
                        </p>
                        <h3 className="text-xl font-medium">
                          {selectedProjects[1].title}
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 flex items-baseline justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-medium text-[#383515] group-hover:text-[#778732] transition-colors">
                        {selectedProjects[1].title}
                      </h3>
                      <p className="text-xs text-[#6B6665] mt-1">
                        {selectedProjects[1].location} · {selectedProjects[1].year}
                      </p>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-[#6B6665] group-hover:text-[#778732] shrink-0 transition-colors" />
                  </div>
                </Link>
              </FadeIn>
            )}

            {selectedProjects[2] && (
              <FadeIn delay={0.14} className="md:col-span-6 md:col-start-4 mt-4 md:mt-8">
                <Link
                  to={`/projects/${selectedProjects[2].slug}`}
                  className="group block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#778732]"
                >
                  <div className="relative overflow-hidden rounded-sm">
                    <ProtectedImage
                      src={selectedProjects[2].coverImage}
                      alt={selectedProjects[2].coverAlt}
                      containerClassName="aspect-[4/3]"
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                    />
                    <div className="hidden md:flex absolute inset-0 bg-[#383515]/45 opacity-0 group-hover:opacity-100 transition-opacity duration-300 items-end p-8">
                      <div className="text-[#F7F8F6] space-y-1">
                        <p className="text-xs tracking-[0.06em] text-[#F7F8F6]/80">
                          {selectedProjects[2].location} · {selectedProjects[2].year}
                        </p>
                        <h3 className="text-xl font-medium">
                          {selectedProjects[2].title}
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 flex items-baseline justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-medium text-[#383515] group-hover:text-[#778732] transition-colors">
                        {selectedProjects[2].title}
                      </h3>
                      <p className="text-xs text-[#6B6665] mt-1">
                        {selectedProjects[2].location} · {selectedProjects[2].year}
                      </p>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-[#6B6665] group-hover:text-[#778732] shrink-0 transition-colors" />
                  </div>
                </Link>
              </FadeIn>
            )}
          </div>
        </div>
      </section>

      {/* 4. CONTACT — Closing Inquiry & Channel Links (No JOURNAL on HOME) */}
      <section className="border-t border-[#383515]/10 bg-[#86A2B1]/12">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-24 md:py-32">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <p className="text-xs font-medium tracking-[0.12em] text-[#778732]">
                CONTACT
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-[42px] font-medium tracking-[-0.02em] text-[#383515] text-balance">
                {homeContent.contactBanner.headline}
              </h2>
              <p className="text-base text-[#6B6665] leading-relaxed">
                {homeContent.contactBanner.subcopy}
              </p>

              <div className="pt-8 flex flex-wrap items-center justify-center gap-4 md:gap-5">
                {contactActions.map((action) => {
                  const Icon = action.icon;
                  const cardClasses =
                    'group relative inline-flex items-center gap-2.5 px-5 py-3 min-h-[44px] border border-[#383515]/20 bg-[#F7F8F6] text-sm font-medium text-[#383515] rounded-sm hover:border-[#778732] hover:text-[#778732] transition-colors whitespace-nowrap shrink-0';

                  const tooltipEl = (
                    <span
                      role="tooltip"
                      className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-sm bg-[#383515] text-[#F7F8F6] text-[11px] whitespace-nowrap opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-150"
                    >
                      {action.tooltip}
                    </span>
                  );

                  if (action.external && action.href) {
                    return (
                      <a
                        key={action.key}
                        href={action.href}
                        target={action.key === 'email' ? undefined : '_blank'}
                        rel={action.key === 'email' ? undefined : 'noreferrer'}
                        className={cardClasses}
                      >
                        <Icon className="w-4 h-4" strokeWidth={1.6} />
                        <span>{action.label}</span>
                        {tooltipEl}
                      </a>
                    );
                  }

                  return (
                    <Link key={action.key} to={action.to ?? '/contact/inquiry'} className={cardClasses}>
                      <Icon className="w-4 h-4" strokeWidth={1.6} />
                      <span>{action.label}</span>
                      {tooltipEl}
                    </Link>
                  );
                })}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
