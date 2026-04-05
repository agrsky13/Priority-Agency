import { useState, useEffect } from 'react';

interface HeaderProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

export function Header({ currentPage, setCurrentPage }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (page: string, sectionId?: string) => {
    setCurrentPage(page);
    setIsOpen(false);

    if (page === 'home' && sectionId) {
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else if (page === 'home') {
      window.scrollTo(0, 0);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full z-50 pt-[env(safe-area-inset-top)] transition-all duration-500 ${
        scrolled
          ? 'backdrop-blur-xl bg-neutral-950/90 border-b border-neutral-800/50 shadow-2xl shadow-black/20'
          : 'backdrop-blur-sm bg-transparent'
      }`}
    >
      {isOpen && (
        <div
          className="fixed inset-0 top-0 bg-neutral-950/60 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsOpen(false)}
          aria-hidden
        />
      )}
      <nav className="container px-4 sm:px-6 max-w-7xl mx-auto relative z-50">
        <div className="flex items-center justify-between h-16 md:h-20">
          <button
            type="button"
            onClick={() => handleNavigation('home')}
            className="flex items-center gap-3 hover:opacity-90 transition-opacity duration-300 group"
          >
            <div
              className={`w-10 h-10 bg-gradient-to-br from-amber-600/20 to-amber-700/10 backdrop-blur-xl border border-amber-500/30 rounded-lg flex items-center justify-center transition-all duration-300 overflow-hidden ${
                scrolled ? 'shadow-lg shadow-amber-900/10' : ''
              }`}
            >
              <span className="text-lg leading-none" aria-hidden>
                🕵️
              </span>
            </div>
            <div className="hidden sm:block text-left">
              <h1 className="text-lg md:text-xl font-bold tracking-wider">
                <span className="text-gold-shimmer">PRIORITY</span>
              </h1>
              <p className="text-neutral-500 text-[10px] tracking-[0.2em] uppercase -mt-0.5">Agency</p>
            </div>
          </button>

          <div className="hidden md:flex items-center gap-1">
            {[
              { label: 'Услуги', section: 'services' },
              { label: 'О нас', section: 'about' },
              { label: 'Кейсы', section: 'success' },
              { label: 'Блог', page: 'blog' as const },
            ].map((item) => (
              <button
                key={item.label}
                type="button"
                onClick={() =>
                  'page' in item && item.page
                    ? handleNavigation(item.page)
                    : handleNavigation('home', 'section' in item ? item.section : undefined)
                }
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg ${
                  'page' in item && item.page && currentPage === item.page
                    ? 'text-amber-500 bg-amber-500/10'
                    : 'text-neutral-400 hover:text-neutral-200 hover:bg-neutral-800/50'
                }`}
              >
                {item.label}
              </button>
            ))}

            <button
              type="button"
              onClick={() => handleNavigation('home', 'contact')}
              className="ml-3 bg-gradient-to-r from-amber-600/90 to-amber-700/80 hover:from-amber-500 hover:to-amber-600 text-neutral-950 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 shadow-lg shadow-amber-900/20 hover:shadow-amber-800/30"
            >
              Связаться
            </button>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-neutral-400 hover:text-neutral-200 p-2 rounded-lg hover:bg-neutral-800/50 transition-all duration-200"
            aria-label="Меню"
            aria-expanded={isOpen}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center gap-1.5">
              <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>

        <div
          className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isOpen ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-4 space-y-1 border-t border-neutral-800/50">
            {[
              {
                label: 'Услуги',
                section: 'services',
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                ),
              },
              {
                label: 'О нас',
                section: 'about',
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                ),
              },
              {
                label: 'Кейсы',
                section: 'success',
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    />
                  </svg>
                ),
              },
              {
                label: 'Блог',
                page: 'blog' as const,
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2.5 2.5 0 00-2.5-2.5H15"
                    />
                  </svg>
                ),
              },
            ].map((item) => (
              <button
                key={item.label}
                type="button"
                onClick={() =>
                  'page' in item && item.page
                    ? handleNavigation(item.page)
                    : handleNavigation('home', 'section' in item ? item.section : undefined)
                }
                className="flex items-center gap-3 w-full px-4 py-3 text-neutral-300 hover:text-neutral-100 hover:bg-neutral-800/50 rounded-lg transition-all duration-200"
              >
                <span className="text-neutral-500">{item.icon}</span>
                <span className="font-medium">{item.label}</span>
              </button>
            ))}

            <div className="pt-4 mt-4 border-t border-neutral-800/50 space-y-3 px-4">
              <a
                href="tel:+79998981439"
                className="flex items-center justify-center gap-2 w-full py-3 bg-gradient-to-r from-amber-600/90 to-amber-700/80 text-neutral-950 rounded-lg font-semibold"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span>Позвонить</span>
              </a>
              <a
                href="https://wa.me/79998981439"
                className="flex items-center justify-center gap-2 w-full py-3 bg-emerald-800/50 text-emerald-50 rounded-lg font-medium border border-emerald-600/30"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
