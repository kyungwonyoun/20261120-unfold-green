import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { aboutContent } from '../data/site';
import { FadeIn, ImageReveal } from '../components/MotionPrimitives';
import { PageMeta } from '../components/PageMeta';
import { ProtectedImage } from '../components/ProtectedImage';

export function AboutPage() {
  const { philosophy, profile, career, studio } = aboutContent;

  return (
    <div className="bg-[#F7F8F6] text-[#383515] pt-24 md:pt-32">
      <PageMeta
        title="ABOUT | UNFOLD GREEN"
        description="UNFOLD GREEN의 디자인 철학, 가든 디자이너 경력, 그리고 정원의 계획부터 관리까지 이어지는 스튜디오 서비스를 소개합니다."
      />

      {/* Page Intro */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-12 pb-16 md:pb-24 border-b border-[#383515]/10">
        <FadeIn>
          <p className="text-xs font-medium tracking-[0.12em] text-[#778732] mb-4">
            ABOUT
          </p>
          <h1 className="text-[26px] sm:text-4xl md:text-5xl font-medium tracking-[-0.02em] leading-[1.35] text-[#383515] break-keep">
            식물과 공간의 관계를 읽고,
            <br />
            시간에 따라 깊어지는 정원을 만듭니다.
          </h1>
        </FadeIn>
      </section>

      {/* 1. Design Philosophy */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-12 py-20 md:py-28 border-b border-[#383515]/10">
        <FadeIn>
          <div className="mb-14 md:mb-20 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <p className="text-xs font-medium tracking-[0.12em] text-[#778732] mb-2">
                DESIGN PHILOSOPHY
              </p>
              <h2 className="text-2xl md:text-3xl font-medium tracking-[-0.015em]">
                정원을 바라보는 세 가지 시선
              </h2>
            </div>
            <p className="text-sm text-[#6B6665]">
              머무름 · 정제된 자연스러움 · 시간의 흐름
            </p>
          </div>
        </FadeIn>

        <div className="space-y-20 md:space-y-28">
          {philosophy.map((item, idx) => {
            const isReversed = idx % 2 === 1;
            return (
              <div
                key={item.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center"
              >
                <div
                  className={`lg:col-span-7 ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}
                >
                  <ImageReveal>
                    <ProtectedImage
                      src={item.image}
                      alt={item.imageAlt}
                      containerClassName="aspect-[16/10] rounded-sm"
                      className="w-full h-full object-cover"
                    />
                  </ImageReveal>
                </div>

                <div
                  className={`lg:col-span-5 ${isReversed ? 'lg:order-1' : 'lg:order-2'}`}
                >
                  <FadeIn delay={0.06}>
                    <div className="space-y-4 max-w-md">
                      <span className="text-xs font-medium tracking-[0.12em] text-[#86A2B1] tabular-nums">
                        {item.indexLabel}. {item.titleEn}
                      </span>
                      <h3 className="text-2xl md:text-3xl font-medium tracking-[-0.015em] text-[#383515]">
                        {item.titleKo}
                      </h3>
                      <p className="text-[15px] leading-[1.85] text-[#6B6665]">
                        {item.description}
                      </p>
                    </div>
                  </FadeIn>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 2. Profile & Career / Experience */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-12 py-20 md:py-28 border-b border-[#383515]/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Profile Summary */}
          <div className="lg:col-span-4 space-y-6">
            <FadeIn>
              <p className="text-xs font-medium tracking-[0.12em] text-[#778732]">
                PROFILE
              </p>
              <div className="mt-4 space-y-1.5">
                <h2 className="text-2xl md:text-3xl font-medium tracking-[-0.015em] text-[#383515]">
                  {profile.name}
                </h2>
                <p className="text-sm font-medium text-[#778732]">
                  {profile.title}
                </p>
              </div>
              <p className="mt-6 text-[15px] leading-[1.85] text-[#6B6665]">
                {profile.bio}
              </p>
            </FadeIn>
          </div>

          {/* Career, Education, Awards */}
          <div className="lg:col-span-8 space-y-14">
            {/* Professional Experience */}
            <FadeIn>
              <h3 className="text-xs font-medium tracking-[0.12em] text-[#383515] pb-3 border-b border-[#383515]/15">
                PROFESSIONAL EXPERIENCE
              </h3>
              <ul className="divide-y divide-[#383515]/10">
                {career.professional.map((entry) => (
                  <li
                    key={`${entry.period}-${entry.organization}`}
                    className="py-5 grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-6 items-baseline"
                  >
                    <span className="sm:col-span-4 text-xs text-[#6B6665] tabular-nums">
                      {entry.period}
                    </span>
                    <div className="sm:col-span-8 space-y-1">
                      <p className="text-[15px] font-medium text-[#383515]">
                        {entry.organization}
                        <span className="text-[#6B6665] font-normal"> · {entry.role}</span>
                      </p>
                      {entry.note && (
                        <p className="text-sm text-[#6B6665] leading-relaxed">
                          {entry.note}
                        </p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </FadeIn>

            {/* Previous Experience */}
            <FadeIn>
              <h3 className="text-xs font-medium tracking-[0.12em] text-[#383515] pb-3 border-b border-[#383515]/15">
                PREVIOUS EXPERIENCE — 공간디자인 배경
              </h3>
              <ul className="divide-y divide-[#383515]/10">
                {career.previous.map((entry) => (
                  <li
                    key={`${entry.period}-${entry.organization}`}
                    className="py-5 grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-6 items-baseline"
                  >
                    <span className="sm:col-span-4 text-xs text-[#6B6665] tabular-nums">
                      {entry.period}
                    </span>
                    <div className="sm:col-span-8 space-y-1">
                      <p className="text-[15px] font-medium text-[#383515]">
                        {entry.organization}
                        <span className="text-[#6B6665] font-normal"> · {entry.role}</span>
                      </p>
                      {entry.note && (
                        <p className="text-sm text-[#6B6665] leading-relaxed">
                          {entry.note}
                        </p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </FadeIn>

            {/* Education */}
            <FadeIn>
              <h3 className="text-xs font-medium tracking-[0.12em] text-[#383515] pb-3 border-b border-[#383515]/15">
                EDUCATION
              </h3>
              <ul className="divide-y divide-[#383515]/10">
                {career.education.map((edu) => (
                  <li
                    key={`${edu.period}-${edu.detail}`}
                    className="py-4 grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-6 items-baseline"
                  >
                    <span className="sm:col-span-4 text-xs text-[#6B6665] tabular-nums">
                      {edu.period}
                    </span>
                    <span className="sm:col-span-8 text-[15px] text-[#383515]">
                      {edu.detail}
                    </span>
                  </li>
                ))}
              </ul>
            </FadeIn>

            {/* Awards & Activities */}
            <FadeIn>
              <h3 className="text-xs font-medium tracking-[0.12em] text-[#383515] pb-3 border-b border-[#383515]/15">
                AWARDS &amp; ACTIVITIES
              </h3>
              <ul className="divide-y divide-[#383515]/10">
                {career.awards.map((award) => (
                  <li
                    key={`${award.date}-${award.detail}`}
                    className="py-4 grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-6 items-baseline"
                  >
                    <span className="sm:col-span-4 text-xs text-[#6B6665] tabular-nums">
                      {award.date}
                    </span>
                    <span className="sm:col-span-8 text-[15px] text-[#383515]">
                      {award.detail}
                    </span>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 3. UNFOLD GREEN — Studio & Services */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-12 py-20 md:py-28">
        <FadeIn>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-16">
            <div className="lg:col-span-5 space-y-3">
              <p className="text-xs font-medium tracking-[0.12em] text-[#778732]">
                STUDIO
              </p>
              <h2 className="text-2xl md:text-3xl font-medium tracking-[-0.015em] text-[#383515] text-balance">
                {studio.title}
              </h2>
            </div>
            <div className="lg:col-span-7">
              <p className="text-[15px] md:text-base leading-[1.85] text-[#6B6665]">
                {studio.description}
              </p>
            </div>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-[#383515]/12 pt-12">
          {studio.services.map((service, idx) => (
            <FadeIn key={service.number} delay={idx * 0.06}>
              <div className="space-y-4">
                <div className="flex items-baseline gap-3">
                  <span className="text-xs font-medium text-[#778732] tabular-nums">
                    {service.number}.
                  </span>
                  <h3 className="text-base font-semibold tracking-[0.04em] text-[#383515]">
                    {service.title}
                  </h3>
                </div>
                <p className="text-sm font-medium text-[#383515]/85">
                  {service.subtitle}
                </p>
                <p className="text-sm leading-[1.75] text-[#6B6665]">
                  {service.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.12}>
          <div className="mt-16 pt-10 border-t border-[#383515]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <p className="text-sm text-[#6B6665]">
              공간에 맞는 정원 설계와 시공, 지속 가능한 관리까지 함께 논의해 보세요.
            </p>
            <div className="flex items-center gap-4">
              <Link
                to="/projects"
                className="text-sm font-medium text-[#383515] hover:text-[#778732] transition-colors whitespace-nowrap"
              >
                프로젝트 보기
              </Link>
              <Link
                to="/contact/inquiry"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium bg-[#383515] text-[#F7F8F6] rounded-sm hover:bg-[#778732] transition-colors whitespace-nowrap"
              >
                <span>프로젝트 문의하기</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
