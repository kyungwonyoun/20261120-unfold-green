import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Wordmark } from './Wordmark';

const NAV_ITEMS = [
  { to: '/', label: 'HOME', end: true },
  { to: '/about', label: 'ABOUT', end: false },
  { to: '/projects', label: 'PROJECTS', end: false },
  { to: '/journal', label: 'JOURNAL', end: false },
  { to: '/contact', label: 'CONTACT', end: false },
];

export function Header() {
  const { pathname } = useLocation();
  const isHome = pathname === '/';
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const isOverlay = isHome && !scrolled && !mobileMenuOpen;

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-40 transition-colors duration-300 ${
          isOverlay
            ? 'bg-gradient-to-b from-[#383515]/50 via-[#383515]/20 to-transparent text-[#F7F8F6]'
            : 'bg-[#F7F8F6]/95 backdrop-blur-md text-[#383515] border-b border-[#383515]/10'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 h-16 md:h-[72px] flex items-center justify-between gap-8">
          {/* Zone 1: Brand wordmark */}
          <Link
            to="/"
            aria-label="UNFOLD GREEN 홈으로 이동"
            className="whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#778732]"
          >
            <Wordmark tone={isOverlay ? 'light' : 'dark'} size="md" />
          </Link>

          {/* Zone 2: Clean single-line navigation links */}
          <nav
            aria-label="주요 메뉴"
            className="hidden md:flex items-center gap-7 lg:gap-9 text-[13px] font-medium tracking-[0.06em]"
          >
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={({ isActive }) =>
                  `relative py-1 whitespace-nowrap shrink-0 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#778732] ${
                    isOverlay
                      ? isActive
                        ? 'text-[#F7F8F6] after:absolute after:left-0 after:right-0 after:bottom-0 after:h-[1.5px] after:bg-[#F7F8F6]'
                        : 'text-[#F7F8F6]/80 hover:text-[#F7F8F6]'
                      : isActive
                        ? 'text-[#383515] after:absolute after:left-0 after:right-0 after:bottom-0 after:h-[1.5px] after:bg-[#778732]'
                        : 'text-[#6B6665] hover:text-[#383515]'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Zone 3: 1 primary action + mobile drawer trigger */}
          <div className="flex items-center gap-3 shrink-0">
            <Link
              to="/contact/inquiry"
              className={`hidden md:inline-flex items-center justify-center px-4 py-2 text-xs font-medium tracking-[0.04em] rounded-sm whitespace-nowrap shrink-0 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#778732] ${
                isOverlay
                  ? 'border border-[#F7F8F6]/65 text-[#F7F8F6] hover:bg-[#F7F8F6] hover:text-[#383515]'
                  : 'bg-[#383515] text-[#F7F8F6] hover:bg-[#778732]'
              }`}
            >
              Project Inquiry
            </Link>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? '메뉴 닫기' : '메뉴 열기'}
              className={`md:hidden w-11 h-11 flex items-center justify-center rounded-sm transition-colors ${
                isOverlay
                  ? 'text-[#F7F8F6] hover:bg-[#F7F8F6]/15'
                  : 'text-[#383515] hover:bg-[#383515]/5'
              }`}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-[#F7F8F6] pt-24 px-6 pb-10 flex flex-col justify-between md:hidden">
          <nav aria-label="모바일 메뉴" className="flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={({ isActive }) =>
                  `min-h-[48px] flex items-center text-xl font-medium tracking-[0.04em] border-b border-[#383515]/10 transition-colors ${
                    isActive ? 'text-[#778732]' : 'text-[#383515]'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="pt-6 border-t border-[#383515]/10 flex flex-col gap-4">
            <Link
              to="/contact/inquiry"
              className="min-h-[48px] inline-flex items-center justify-center px-5 py-3 text-sm font-medium bg-[#383515] text-[#F7F8F6] rounded-sm hover:bg-[#778732] transition-colors"
            >
              Project Inquiry
            </Link>
            <p className="text-xs text-[#6B6665]">
              Designing spaces through plants and nature.
            </p>
          </div>
        </div>
      )}
    </>
  );
}
