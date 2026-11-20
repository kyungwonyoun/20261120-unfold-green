import { Link } from 'react-router-dom';
import { BookOpen, Instagram, Mail } from 'lucide-react';
import { siteSettings } from '../data/site';
import { Wordmark } from './Wordmark';

export function Footer() {
  const { contact } = siteSettings;

  return (
    <footer className="border-t border-[#383515]/12 bg-[#F7F8F6] text-[#383515]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-14 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 items-start">
          {/* Brand summary */}
          <div className="md:col-span-5 space-y-3">
            <Link to="/" className="inline-block">
              <Wordmark tone="dark" size="md" />
            </Link>
            <p className="text-sm text-[#6B6665] max-w-sm leading-relaxed">
              {siteSettings.tagline}
            </p>
            <p className="text-xs text-[#6B6665]/80">
              Garden Design · Garden Construction · Garden Care
            </p>
          </div>

          {/* Sitemap navigation */}
          <div className="md:col-span-4 space-y-3">
            <p className="text-xs font-medium tracking-[0.08em] text-[#6B6665]">
              NAVIGATION
            </p>
            <ul className="grid grid-cols-2 gap-y-2 gap-x-6 text-sm text-[#383515]">
              <li>
                <Link to="/" className="hover:text-[#778732] transition-colors">
                  HOME
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#778732] transition-colors">
                  ABOUT
                </Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-[#778732] transition-colors">
                  PROJECTS
                </Link>
              </li>
              <li>
                <Link to="/journal" className="hover:text-[#778732] transition-colors">
                  JOURNAL
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#778732] transition-colors">
                  CONTACT
                </Link>
              </li>
              <li>
                <Link to="/contact/inquiry" className="hover:text-[#778732] transition-colors">
                  Project Inquiry
                </Link>
              </li>
            </ul>
          </div>

          {/* Dynamic Contact channels */}
          <div className="md:col-span-3 space-y-3">
            <p className="text-xs font-medium tracking-[0.08em] text-[#6B6665]">
              CONNECT
            </p>
            <div className="flex flex-col gap-2.5 text-sm text-[#6B6665]">
              {contact.showEmail && contact.email && (
                <a
                  href={`mailto:${contact.email}`}
                  className="inline-flex items-center gap-2.5 hover:text-[#383515] transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#778732]" strokeWidth={1.6} />
                  <span>{contact.email}</span>
                </a>
              )}
              {contact.showInstagram && contact.instagramUrl && (
                <a
                  href={contact.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2.5 hover:text-[#383515] transition-colors"
                >
                  <Instagram className="w-4 h-4 text-[#778732]" strokeWidth={1.6} />
                  <span>Instagram</span>
                </a>
              )}
              {contact.showNaverBlog && contact.naverBlogUrl && (
                <a
                  href={contact.naverBlogUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2.5 hover:text-[#383515] transition-colors"
                >
                  <BookOpen className="w-4 h-4 text-[#778732]" strokeWidth={1.6} />
                  <span>Naver Blog</span>
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-[#383515]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-[#6B6665]">
          <p>© 2026 UNFOLD GREEN. Garden Design Studio.</p>
          <p>Phase 1 Design &amp; Experience Prototype</p>
        </div>
      </div>
    </footer>
  );
}
