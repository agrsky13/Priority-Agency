import { useState, useEffect } from 'react';

interface HeaderProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

export function Header({ currentPage, setCurrentPage }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (page: string, sectionId?: string) => {
    setCurrentPage(page);
    setIsOpen(false);
    
    // Scroll to section if on home page
    if (page === 'home' && sectionId) {
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else if (page === 'home') {
      // Прокручиваем в начало при переходе на главную
      window.scrollTo(0, 0);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 w-full z-50 pt-[env(safe-area-inset-top)] transition-all duration-300 ${
      scrolled 
        ? 'backdrop-blur-xl bg-neutral-950/85 border-b border-neutral-400/20 shadow-2xl' 
        : 'backdrop-blur-xl bg-neutral-950/70 border-b border-neutral-400/10'
    }`}>
      <nav className="container pl-4 pr-3 sm:px-4 md:pl-0 lg:pr-8 max-w-7xl">
        <div className="flex items-center justify-between min-h-[3.5rem] md:h-20 py-1 md:py-0">
          <div className="flex items-center ml-0">
            <button 
              onClick={() => handleNavigation('home')}
              className="flex items-center space-x-2 md:space-x-3 hover:opacity-80 transition-opacity duration-300 group"
            >
              <div className={`w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-neutral-500/30 to-neutral-600/30 backdrop-blur-xl border border-neutral-400/30 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg overflow-hidden ${
                scrolled ? 'shadow-neutral-500/20' : ''
              }`}>
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-base md:text-lg leading-none" aria-hidden="true">🕵️</span>
                </div>
              </div>
              <div className="min-w-0">
                <h1 className="text-sm leading-tight sm:text-lg md:text-xl font-bold tracking-wide text-left truncate max-w-[13rem] sm:max-w-none">
                  <span className="text-gold-shimmer">PRIORITY AGENCY</span>
                </h1>
                <p className="text-neutral-500 text-[10px] sm:text-xs mt-0.5 text-left hidden sm:block">Детективные услуги</p>
              </div>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => handleNavigation('home', 'services')}
              className="text-neutral-500 hover:text-neutral-300 hover:bg-neutral-400/10 transition-all duration-300 relative group px-3 py-2 rounded-lg"
            >
              Услуги
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-neutral-400 to-neutral-500 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button 
              onClick={() => handleNavigation('home', 'about')}
              className="text-neutral-500 hover:text-neutral-300 hover:bg-neutral-400/10 transition-all duration-300 relative group px-3 py-2 rounded-lg"
            >
              О нас
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-neutral-400 to-neutral-500 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button 
              onClick={() => handleNavigation('blog')}
              className={`transition-all duration-300 relative group px-3 py-2 rounded-lg ${
                currentPage === 'blog' ? 'text-neutral-300 bg-neutral-400/10' : 'text-neutral-500 hover:text-neutral-300 hover:bg-neutral-400/10'
              }`}
            >
              Блог
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-neutral-400 to-neutral-500 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button 
              onClick={() => handleNavigation('home', 'contact')}
              className="bg-gradient-to-r from-neutral-600/80 to-neutral-700/80 hover:from-neutral-500 hover:to-neutral-600 backdrop-blur-xl border border-neutral-500/30 px-6 py-3 rounded-xl text-neutral-300 transition-all duration-300 shadow-lg hover:shadow-neutral-500/25 hover:scale-105"
            >
              Связаться
            </button>
          </div>

          {/* Enhanced Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-neutral-500 hover:text-neutral-300 p-3 transition-colors duration-200 relative z-50 rounded-xl hover:bg-neutral-400/10 active:scale-95"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-1.5' : '-translate-y-1.5'}`}></span>
                <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-1.5' : 'translate-y-1.5'}`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Enhanced Mobile Navigation */}
        <div className={`md:hidden relative z-50 transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[min(78vh,calc(100dvh-5rem))] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          <div className="px-4 pt-3 pb-5 space-y-2 overflow-y-auto overscroll-contain max-h-[min(78vh,calc(100dvh-5rem))] bg-gradient-to-br from-neutral-900/98 to-neutral-800/95 backdrop-blur-xl border border-neutral-400/20 rounded-2xl mt-2 shadow-2xl mx-2 sm:mx-4 mb-3 touch-manipulation">
            
            <div className="text-center py-1.5 mb-2 border-b border-neutral-400/10">
              <h3 className="text-neutral-400 text-xs font-medium uppercase tracking-wider">Меню</h3>
            </div>
            
            <button 
              onClick={() => handleNavigation('home', 'services')}
              className="flex items-center w-full text-left px-3 py-3.5 min-h-[48px] text-neutral-300 hover:bg-white/5 rounded-xl transition-all duration-300 text-[15px] font-medium border border-transparent active:bg-white/10"
            >
              <div className="w-10 h-10 bg-gradient-to-r from-neutral-500/30 to-neutral-600/30 rounded-xl flex items-center justify-center mr-3 shrink-0">
                <span className="text-lg font-bold text-center">P</span>
              </div>
              <div className="min-w-0">
                <div className="font-semibold">Услуги</div>
                <div className="text-xs text-neutral-500">Детективные расследования</div>
              </div>
            </button>
            
            <button 
              onClick={() => handleNavigation('home', 'about')}
              className="flex items-center w-full text-left px-3 py-3.5 min-h-[48px] text-neutral-300 hover:bg-white/5 rounded-xl transition-all duration-300 text-[15px] font-medium border border-transparent active:bg-white/10"
            >
              <div className="w-10 h-10 bg-gradient-to-r from-neutral-500/30 to-neutral-600/30 rounded-xl flex items-center justify-center mr-3 shrink-0">
                <span className="text-lg">ℹ️</span>
              </div>
              <div className="min-w-0">
                <div className="font-semibold">О нас</div>
                <div className="text-xs text-neutral-500">О детективном агентстве</div>
              </div>
            </button>
            
            <button 
              onClick={() => handleNavigation('blog')}
              className="flex items-center w-full text-left px-3 py-3.5 min-h-[48px] text-neutral-300 hover:bg-white/5 rounded-xl transition-all duration-300 text-[15px] font-medium border border-transparent active:bg-white/10"
            >
              <div className="w-10 h-10 bg-gradient-to-r from-neutral-500/30 to-neutral-600/30 rounded-xl flex items-center justify-center mr-3 shrink-0">
                <span className="text-lg">📝</span>
              </div>
              <div className="min-w-0">
                <div className="font-semibold">Блог</div>
                <div className="text-xs text-neutral-500">Полезные статьи</div>
              </div>
            </button>
            
            <button 
              onClick={() => handleNavigation('home', 'contact')}
              className="flex items-center w-full text-left px-3 py-3.5 min-h-[48px] bg-amber-500/15 text-amber-100 hover:bg-amber-500/25 rounded-xl transition-all duration-300 text-[15px] font-medium border border-amber-500/25 active:bg-amber-500/20"
            >
              <div className="w-10 h-10 bg-amber-500/20 rounded-xl flex items-center justify-center mr-3 shrink-0">
                <span className="text-lg">📞</span>
              </div>
              <div className="min-w-0">
                <div className="font-semibold">Связаться</div>
                <div className="text-xs text-amber-200/80">Срочная консультация</div>
              </div>
            </button>

            {/* Quick actions */}
            <div className="pt-4 mt-4 border-t border-neutral-400/10">
              <div className="grid grid-cols-2 gap-3">
                <a 
                  href="tel:+79998981439"
                  className="touch-manipulation flex items-center justify-center gap-2 min-h-[48px] px-3 py-3 bg-neutral-700/90 text-neutral-100 rounded-xl active:scale-[0.98] transition-transform border border-neutral-500/30"
                >
                  <span className="text-lg" aria-hidden>📞</span>
                  <span className="font-medium text-sm">Звонок</span>
                </a>
                <a 
                  href="https://wa.me/79998981439"
                  className="touch-manipulation flex items-center justify-center gap-2 min-h-[48px] px-3 py-3 bg-emerald-800/50 text-emerald-50 rounded-xl active:scale-[0.98] transition-transform border border-emerald-500/30"
                >
                  <span className="text-lg" aria-hidden>💬</span>
                  <span className="font-medium text-sm">WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile overlay */}
        {isOpen && (
          <div 
            className="fixed inset-0 bg-neutral-950/60 backdrop-blur-sm z-30 md:hidden"
            onClick={() => setIsOpen(false)}
            aria-hidden
          />
        )}
      </nav>
    </header>
  );
}