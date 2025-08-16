export function MobileCompactHero() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 relative overflow-hidden pt-12">
      {/* Simple Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-gray-600/20 to-gray-500/20 rounded-full mix-blend-screen filter blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-28 h-28 bg-gradient-to-l from-gray-500/15 to-gray-400/15 rounded-full mix-blend-screen filter blur-3xl"></div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-gray-950/90 via-gray-900/50 to-transparent"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center justify-center min-h-screen text-center">
          
          <div className="max-w-sm mb-8 px-4">
            <div className="mb-6">
              <span className="inline-block bg-gray-700/40 backdrop-blur-xl border border-gray-500/50 text-gray-200 px-4 py-2 rounded-full text-sm font-medium mb-4">
                Детективное агентство
              </span>
            </div>
            
            <h1 className="text-3xl font-bold text-white leading-tight mb-6">
              Частные расследования<br />
              <span className="bg-gradient-to-r from-gray-300 via-white to-gray-300 bg-clip-text text-transparent">
                ВИДАЛЬ
              </span>
            </h1>
            
            <p className="text-base text-gray-300 mb-8 leading-relaxed">
              Профессиональные детективные услуги с многолетним опытом
            </p>
            
            <div className="flex flex-col gap-4">
              <a 
                href="tel:+79999999999" 
                className="bg-gradient-to-r from-gray-700/40 to-gray-600/40 backdrop-blur-xl border border-gray-500/50 text-white px-6 py-3 rounded-xl hover:from-gray-600/50 hover:to-gray-500/50 transition-all duration-300 flex items-center justify-center space-x-3 shadow-xl text-sm font-medium"
              >
                <span className="text-sm">📞</span>
                <span>Получить консультацию</span>
              </a>
              <a 
                href="#contact" 
                className="bg-gray-800/30 backdrop-blur-xl border border-gray-600/40 text-white px-6 py-3 rounded-xl hover:bg-gray-700/40 hover:border-gray-500/50 transition-all duration-300 shadow-xl text-sm font-medium"
              >
                Узнать больше
              </a>
            </div>
          </div>

          {/* Simple Stats */}
          <div className="grid grid-cols-3 gap-3 w-full max-w-sm px-4 mb-6">
            <div className="bg-gray-700/30 backdrop-blur-xl border border-gray-600/30 rounded-xl p-4 text-center">
              <h3 className="text-xl font-bold text-white mb-1">15+</h3>
              <p className="text-gray-300 font-medium text-xs">Лет опыта</p>
            </div>
            <div className="bg-gray-600/30 backdrop-blur-xl border border-gray-600/30 rounded-xl p-4 text-center">
              <h3 className="text-xl font-bold text-white mb-1">1000+</h3>
              <p className="text-gray-300 font-medium text-xs">Завершенных дел</p>
            </div>
            <div className="bg-gray-500/30 backdrop-blur-xl border border-gray-600/30 rounded-xl p-4 text-center">
              <h3 className="text-xl font-bold text-white mb-1">24/7</h3>
              <p className="text-gray-300 font-medium text-xs">Доступность</p>
            </div>
          </div>
          
          {/* Privacy Notice */}
          <div className="w-full max-w-sm px-4">
            <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-xl border border-green-500/30 rounded-xl p-4 text-center">
              <div className="flex items-center justify-center mb-2">
                <div className="w-5 h-5 bg-green-500/30 rounded-full flex items-center justify-center mr-2">
                  <span className="text-xs">🔒</span>
                </div>
                <h3 className="text-sm font-bold text-white">Полная конфиденциальность</h3>
              </div>
              <p className="text-xs text-gray-200 leading-relaxed">
                Абсолютная анонимность и защита данных
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 