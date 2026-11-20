import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { journalPosts } from '../data/journal';
import { FadeIn, ImageReveal } from '../components/MotionPrimitives';
import { LightboxModal } from '../components/LightboxModal';
import { PageMeta } from '../components/PageMeta';
import { ProtectedImage } from '../components/ProtectedImage';

export function JournalDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const [lightboxImage, setLightboxImage] = useState<{
    src: string;
    alt: string;
    caption?: string;
  } | null>(null);

  const post = journalPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-[70vh] bg-[#F7F8F6] text-[#383515] pt-36 px-6 text-center">
        <PageMeta
          title="게시물을 찾을 수 없습니다 | UNFOLD GREEN"
          description="요청하신 저널 게시물을 찾을 수 없습니다."
        />
        <h1 className="text-2xl font-medium">요청하신 저널 글을 찾을 수 없습니다.</h1>
        <Link
          to="/journal"
          className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[#778732] hover:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>저널 목록으로 돌아가기</span>
        </Link>
      </div>
    );
  }

  const relatedPosts = journalPosts.filter((p) => post.relatedSlugs.includes(p.slug));

  return (
    <article className="bg-[#F7F8F6] text-[#383515] pt-24 md:pt-32 pb-24 md:pb-32">
      <PageMeta title={`${post.title} | JOURNAL | UNFOLD GREEN`} description={post.lead} />

      <div className="max-w-[960px] mx-auto px-6 md:px-12">
        <FadeIn>
          <Link
            to="/journal"
            className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.06em] text-[#6B6665] hover:text-[#383515] transition-colors mb-8"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>BACK TO JOURNAL</span>
          </Link>

          <header className="space-y-4 mb-10">
            <div className="flex items-center gap-2 text-xs text-[#6B6665] tabular-nums">
              <span className="font-medium tracking-[0.08em] text-[#778732]">
                {post.category}
              </span>
              <span aria-hidden="true">·</span>
              <span>{post.date}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-[44px] font-medium tracking-[-0.02em] leading-[1.3] text-[#383515] text-balance">
              {post.title}
            </h1>

            <p className="text-base md:text-lg text-[#6B6665] leading-[1.75] pt-2">
              {post.lead}
            </p>
          </header>
        </FadeIn>

        <ImageReveal className="mb-14">
          <ProtectedImage
            src={post.coverImage}
            alt={post.coverAlt}
            loading="eager"
            containerClassName="aspect-[16/10] rounded-sm"
            className="w-full h-full object-cover"
            onClick={() =>
              setLightboxImage({
                src: post.coverImage,
                alt: post.coverAlt,
                caption: post.title,
              })
            }
          />
        </ImageReveal>

        {/* Body Content Blocks */}
        <div className="space-y-10 md:space-y-12 max-w-[68ch]">
          {post.blocks.map((block) => {
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
                    <p className="text-[15px] md:text-base leading-[1.9] text-[#6B6665]">
                      {block.content}
                    </p>
                  </FadeIn>
                );

              case 'quote':
                return (
                  <FadeIn key={block.id}>
                    <blockquote className="py-8 my-6 border-t border-b border-[#383515]/15 space-y-3">
                      <p className="text-lg md:text-xl font-medium leading-[1.6] text-[#383515]">
                        “{block.content}”
                      </p>
                      {block.attribution && (
                        <footer className="text-xs text-[#778732] tracking-[0.06em]">
                          {block.attribution}
                        </footer>
                      )}
                    </blockquote>
                  </FadeIn>
                );

              case 'image':
                return (
                  <FadeIn key={block.id}>
                    <figure className="space-y-3 my-4">
                      <ProtectedImage
                        src={block.src}
                        alt={block.alt}
                        containerClassName="aspect-[4/3] rounded-sm"
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

              case 'gallery':
                return (
                  <FadeIn key={block.id}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-4">
                      {block.images.map((img) => (
                        <figure key={img.src} className="space-y-2.5">
                          <ProtectedImage
                            src={img.src}
                            alt={img.alt}
                            containerClassName="aspect-[4/3] rounded-sm"
                            className="w-full h-full object-cover"
                            onClick={() =>
                              setLightboxImage({
                                src: img.src,
                                alt: img.alt,
                                caption: img.caption,
                              })
                            }
                          />
                          {img.caption && (
                            <figcaption className="text-xs text-[#6B6665]">
                              {img.caption}
                            </figcaption>
                          )}
                        </figure>
                      ))}
                    </div>
                  </FadeIn>
                );
            }
          })}
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="mt-24 pt-14 border-t border-[#383515]/15">
            <h2 className="text-xs font-medium tracking-[0.12em] text-[#778732] mb-8">
              RELATED JOURNAL
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {relatedPosts.map((rel) => (
                <Link
                  key={rel.id}
                  to={`/journal/${rel.slug}`}
                  className="group block space-y-3"
                >
                  <ProtectedImage
                    src={rel.coverImage}
                    alt={rel.coverAlt}
                    containerClassName="aspect-[16/10] rounded-sm"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                  />
                  <div className="flex items-center gap-2 text-xs text-[#6B6665] tabular-nums">
                    <span className="font-medium text-[#778732]">{rel.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{rel.date}</span>
                  </div>
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="text-base font-medium text-[#383515] group-hover:text-[#778732] transition-colors">
                      {rel.title}
                    </h3>
                    <ArrowUpRight className="w-4 h-4 text-[#6B6665] shrink-0" />
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
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
