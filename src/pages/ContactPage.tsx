import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, BookOpen, Instagram, Mail } from 'lucide-react';
import { siteSettings } from '../data/site';
import { FadeIn, ImageReveal } from '../components/MotionPrimitives';
import { PageMeta } from '../components/PageMeta';
import { ProtectedImage } from '../components/ProtectedImage';

export function ContactPage() {
  const { contact } = siteSettings;

  return (
    <div className="bg-[#F7F8F6] text-[#383515] pt-24 md:pt-32 pb-24 md:pb-32">
      <PageMeta
        title="CONTACT | UNFOLD GREEN"
        description="UNFOLD GREEN 스튜디오 연락처 및 정원 설계·시공·유지관리 프로젝트 문의 안내입니다."
      />

      <section className="max-w-[1440px] mx-auto px-6 md:px-12 pb-16 border-b border-[#383515]/10">
        <FadeIn>
          <p className="text-xs font-medium tracking-[0.12em] text-[#778732] mb-4">
            CONTACT
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-[-0.02em] leading-[1.25] text-[#383515] max-w-2xl text-balance">
            Let&apos;s create a garden to stay.
          </h1>
          <p className="mt-4 text-base text-[#6B6665] max-w-xl leading-relaxed">
            공간에 어울리는 정원에 대해 이야기 나누고 싶습니다. 주택 정원, 상업 공간, 테라스·옥상 정원 및 계절별 유지관리에 관해 편하게 문의해 주세요.
          </p>
        </FadeIn>
      </section>

      <section className="max-w-[1440px] mx-auto px-6 md:px-12 pt-16 md:pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          {/* Contact Channels + Inquiry CTA */}
          <div className="lg:col-span-6 flex flex-col justify-between gap-12">
            <FadeIn>
              <div className="space-y-8">
                <div className="space-y-2">
                  <h2 className="text-xs font-medium tracking-[0.12em] text-[#778732]">
                    CONTACT INFORMATION
                  </h2>
                  <p className="text-sm text-[#6B6665]">
                    프로젝트 규모와 일정에 따라 설계·시공·관리 상담을 진행합니다.
                  </p>
                </div>

                <dl className="divide-y divide-[#383515]/12 border-t border-b border-[#383515]/12">
                  {contact.showEmail && contact.email && (
                    <div className="py-5 flex items-center justify-between gap-4">
                      <dt className="inline-flex items-center gap-2.5 text-sm text-[#6B6665]">
                        <Mail className="w-4 h-4 text-[#778732]" strokeWidth={1.6} />
                        <span>Email</span>
                      </dt>
                      <dd>
                        <a
                          href={`mailto:${contact.email}`}
                          className="text-sm md:text-[15px] font-medium text-[#383515] hover:text-[#778732] transition-colors"
                        >
                          {contact.email}
                        </a>
                      </dd>
                    </div>
                  )}

                  {contact.showInstagram && contact.instagramUrl && (
                    <div className="py-5 flex items-center justify-between gap-4">
                      <dt className="inline-flex items-center gap-2.5 text-sm text-[#6B6665]">
                        <Instagram className="w-4 h-4 text-[#778732]" strokeWidth={1.6} />
                        <span>Instagram</span>
                      </dt>
                      <dd>
                        <a
                          href={contact.instagramUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm md:text-[15px] font-medium text-[#383515] hover:text-[#778732] transition-colors"
                        >
                          <span>@gyeongone_garden</span>
                          <ArrowUpRight className="w-4 h-4" />
                        </a>
                      </dd>
                    </div>
                  )}

                  {contact.showNaverBlog && contact.naverBlogUrl && (
                    <div className="py-5 flex items-center justify-between gap-4">
                      <dt className="inline-flex items-center gap-2.5 text-sm text-[#6B6665]">
                        <BookOpen className="w-4 h-4 text-[#778732]" strokeWidth={1.6} />
                        <span>Naver Blog</span>
                      </dt>
                      <dd>
                        <a
                          href={contact.naverBlogUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm md:text-[15px] font-medium text-[#383515] hover:text-[#778732] transition-colors"
                        >
                          <span>blog.naver.com/gyeongone_garden</span>
                          <ArrowUpRight className="w-4 h-4" />
                        </a>
                      </dd>
                    </div>
                  )}
                </dl>
              </div>
            </FadeIn>

            <FadeIn delay={0.08}>
              <div className="p-8 border border-[#383515]/15 bg-[#EAECE6]/45 rounded-sm space-y-4">
                <p className="text-xs font-medium tracking-[0.1em] text-[#778732]">
                  PROJECT INQUIRY
                </p>
                <h2 className="text-xl md:text-2xl font-medium text-[#383515]">
                  새로운 정원 프로젝트를 구상 중이신가요?
                </h2>
                <p className="text-sm text-[#6B6665] leading-relaxed">
                  정확한 주소나 도면이 아직 준비되지 않았더라도 괜찮습니다. 생각하시는 공간의 분위기와 규모를 간단히 남겨주시면 검토 후 안내해 드립니다.
                </p>
                <div className="pt-2">
                  <Link
                    to="/contact/inquiry"
                    className="inline-flex items-center gap-2 px-6 py-3 min-h-[44px] text-sm font-medium bg-[#383515] text-[#F7F8F6] rounded-sm hover:bg-[#778732] transition-colors"
                  >
                    <span>문의 양식 작성하기</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Studio Atmosphere Visual */}
          <div className="lg:col-span-6">
            <ImageReveal className="h-full">
              <ProtectedImage
                src="/src/assets/images/studio_planting_desk_1795169605019.jpg"
                alt="정원 식재 도면과 자연 소재가 놓인 UNFOLD GREEN 작업 공간"
                containerClassName="aspect-[4/3] lg:h-full rounded-sm"
                className="w-full h-full object-cover"
              />
            </ImageReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
