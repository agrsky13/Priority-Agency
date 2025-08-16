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
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'backdrop-blur-xl bg-black/40 border-b border-white/20 shadow-2xl' 
        : 'backdrop-blur-xl bg-black/20 border-b border-white/10'
    }`}>
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center">
            <button 
              onClick={() => handleNavigation('home')}
              className="flex items-center space-x-2 md:space-x-3 hover:opacity-80 transition-opacity duration-300 group"
            >
              <div className={`w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-blue-500/30 to-cyan-500/30 backdrop-blur-xl border border-white/30 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg ${
                scrolled ? 'shadow-blue-500/20' : ''
              }`}>
                <span className="text-white font-bold text-sm md:text-lg">P</span>
              </div>
              <div>
                <h1 className="text-lg md:text-xl font-bold text-white tracking-wide">
                  PRIORITY AGENCY
                </h1>
                <p className="text-gray-400 text-xs hidden sm:block">Detective Services</p>
              </div>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => handleNavigation('home', 'services')}
              className="text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300 relative group px-3 py-2 rounded-lg"
            >
              Услуги
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button 
              onClick={() => handleNavigation('home', 'about')}
              className="text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300 relative group px-3 py-2 rounded-lg"
            >
              О нас
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button 
              onClick={() => handleNavigation('blog')}
              className={`transition-all duration-300 relative group px-3 py-2 rounded-lg ${
                currentPage === 'blog' ? 'text-white bg-white/10' : 'text-gray-300 hover:text-white hover:bg-white/10'
              }`}
            >
              Блог
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button 
              onClick={() => handleNavigation('home', 'contact')}
              className="bg-gradient-to-r from-blue-600/80 to-cyan-600/80 hover:from-blue-500 hover:to-cyan-500 backdrop-blur-xl border border-blue-500/30 px-6 py-3 rounded-xl text-white transition-all duration-300 shadow-lg hover:shadow-blue-500/25 hover:scale-105"
            >
              Связаться
            </button>
          </div>

          {/* Enhanced Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white p-3 transition-colors duration-200 relative z-50 rounded-xl hover:bg-white/10 active:scale-95"
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
        <div className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          <div className="px-4 pt-4 pb-6 space-y-3 bg-gradient-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-xl border border-white/20 rounded-2xl mt-2 shadow-2xl m-4">
            
            {/* Mobile menu header */}
            <div className="text-center py-2 mb-4 border-b border-white/10">
              <h3 className="text-white font-semibold">Навигация</h3>
            </div>
            
            <button 
              onClick={() => handleNavigation('home', 'services')}
              className="flex items-center w-full text-left px-4 py-4 text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-cyan-500/20 rounded-xl transition-all duration-300 text-base font-medium group border border-transparent hover:border-white/20"
            >
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-lg">🔍</span>
              </div>
              <div>
                <div className="font-semibold">Услуги</div>
                <div className="text-xs text-gray-400 group-hover:text-gray-300">Детективные расследования</div>
              </div>
            </button>
            
            <button 
              onClick={() => handleNavigation('home', 'about')}
              className="flex items-center w-full text-left px-4 py-4 text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-pink-500/20 rounded-xl transition-all duration-300 text-base font-medium group border border-transparent hover:border-white/20"
            >
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-lg">ℹ️</span>
              </div>
              <div>
                <div className="font-semibold">О нас</div>
                <div className="text-xs text-gray-400 group-hover:text-gray-300">О детективном агентстве</div>
              </div>
            </button>
            
            <button 
              onClick={() => handleNavigation('blog')}
              className="flex items-center w-full text-left px-4 py-4 text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-green-500/20 hover:to-emerald-500/20 rounded-xl transition-all duration-300 text-base font-medium group border border-transparent hover:border-white/20"
            >
              <div className="w-10 h-10 bg-gradient-to-r from-green-500/30 to-emerald-500/30 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-lg">📝</span>
              </div>
              <div>
                <div className="font-semibold">Блог</div>
                <div className="text-xs text-gray-400 group-hover:text-gray-300">Полезные статьи</div>
              </div>
            </button>
            
            <button 
              onClick={() => handleNavigation('home', 'contact')}
              className="flex items-center w-full text-left px-4 py-4 bg-gradient-to-r from-red-500/20 to-pink-500/20 text-white hover:from-red-500/30 hover:to-pink-500/30 rounded-xl transition-all duration-300 text-base font-medium group border border-red-500/30 hover:border-red-400/50"
            >
              <div className="w-10 h-10 bg-gradient-to-r from-red-500/50 to-pink-500/50 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-lg">📞</span>
              </div>
              <div>
                <div className="font-semibold">Связаться</div>
                <div className="text-xs text-red-200 group-hover:text-white">Срочная консультация</div>
              </div>
            </button>

            {/* Quick actions */}
            <div className="pt-4 mt-4 border-t border-white/10">
              <div className="grid grid-cols-2 gap-3">
                <a 
                  href="tel:+79999999999"
                  className="flex items-center justify-center px-3 py-3 bg-gradient-to-r from-blue-600/80 to-cyan-600/80 text-white rounded-xl hover:scale-105 transition-all duration-300 active:scale-95"
                >
                  <span className="text-lg mr-2">📞</span>
                  <span className="font-medium">Звонок</span>
                </a>
                <a 
                  href="https://wa.me/79999999999"
                  className="flex items-center justify-center px-3 py-3 bg-gradient-to-r from-green-600/80 to-emerald-600/80 text-white rounded-xl hover:scale-105 transition-all duration-300 active:scale-95"
                >
                  <span className="text-lg mr-2">💬</span>
                  <span className="font-medium">WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile overlay */}
        {isOpen && (
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
            onClick={() => setIsOpen(false)}
          />
        )}
      </nav>
    </header>
  );
}