import { useState } from 'react';

interface MobileCompactHeaderProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

export function MobileCompactHeader({ currentPage, setCurrentPage }: MobileCompactHeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigation = (page: string) => {
    setCurrentPage(page);
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-xl bg-gray-950/50 border-b border-gray-700/50">
      <nav className="container px-4">
        <div className="flex items-center justify-between h-14">
          {/* Beautiful Logo */}
          <div className="flex items-center">
            <button 
              onClick={() => handleNavigation('home')}
              className="flex items-center space-x-3 hover:opacity-80 transition-opacity duration-300"
            >
              <div className="w-8 h-8 bg-gradient-to-br from-gray-700/40 to-gray-600/40 backdrop-blur-xl border border-gray-500/50 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">V</span>
              </div>
              <div>
                <h1 className="text-sm font-bold text-white tracking-wide text-left">
                  VIDAL AGENCY
                </h1>
                <p className="text-gray-400 text-xs text-left">Детективные услуги</p>
              </div>
            </button>
          </div>

          {/* Beautiful Navigation Buttons */}
          <div className="flex items-center space-x-2">
            <button 
              onClick={() => handleNavigation('services')}
              className={`px-3 py-1.5 text-xs rounded-lg transition-all duration-300 ${
                currentPage === 'services' 
                  ? 'bg-gradient-to-r from-gray-700/40 to-gray-600/40 text-white border border-gray-500/50' 
                  : 'text-gray-300 hover:text-white hover:bg-gray-800/30'
              }`}
            >
              Услуги
            </button>
            <button 
              onClick={() => handleNavigation('about')}
              className={`px-3 py-1.5 text-xs rounded-lg transition-all duration-300 ${
                currentPage === 'about' 
                  ? 'bg-gradient-to-r from-gray-700/40 to-gray-600/40 text-white border border-gray-500/50' 
                  : 'text-gray-300 hover:text-white hover:bg-gray-800/30'
              }`}
            >
              О нас
            </button>
            <button 
              onClick={() => handleNavigation('contact')}
              className="px-3 py-1.5 text-xs bg-gradient-to-r from-gray-700/40 to-gray-600/40 backdrop-blur-xl border border-gray-500/50 text-white rounded-lg hover:from-gray-600/50 hover:to-gray-500/50 transition-all duration-300"
            >
              Контакты
            </button>
          </div>

          {/* Beautiful Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white p-1 transition-colors duration-200 relative z-50"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'}`}></span>
                <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'}`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Beautiful Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          <div className="px-3 pt-3 pb-4 space-y-2 bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-xl mt-2 shadow-2xl">
            <button 
              onClick={() => handleNavigation('services')}
              className="block w-full text-left px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800/30 rounded-lg transition-all duration-200 text-sm font-medium"
            >
              🔍 Услуги
            </button>
            <button 
              onClick={() => handleNavigation('about')}
              className="block w-full text-left px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800/30 rounded-lg transition-all duration-200 text-sm font-medium"
            >
              ℹ️ О нас
            </button>
            <button 
              onClick={() => handleNavigation('contact')}
              className="block w-full text-left px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800/30 rounded-lg transition-all duration-200 text-sm font-medium"
            >
              📞 Контакты
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
} 