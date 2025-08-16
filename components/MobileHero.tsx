export function MobileHero() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 relative overflow-hidden">
      {/* Simple Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-gradient-to-r from-white/5 to-gray-300/5 rounded-full mix-blend-screen filter blur-3xl"></div>
        <div className="absolute top-1/2 right-1/4 w-40 h-40 bg-gradient-to-l from-gray-200/4 to-white/4 rounded-full mix-blend-screen filter blur-3xl"></div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-gray-950/95 via-gray-900/60 to-transparent"></div>

      <div className="container mx-auto px-6 pt-24 relative z-10">
        <div className="flex flex-col items-center justify-center min-h-screen text-center">
          
          <div className="max-w-sm mb-16 px-4">
            <div className="mb-8">
              <span className="inline-block bg-white/10 backdrop-blur-xl border border-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-8">
                Детективное агентство
              </span>
            </div>
            
            <h1 className="text-4xl font-bold text-white leading-tight mb-6">
              Частные расследования
              <br />
              <span className="bg-gradient-to-r from-gray-200 via-white to-gray-300 bg-clip-text text-transparent">
                PRIORITY
              </span>
            </h1>
            
            <p className="text-lg text-gray-300 mb-10 leading-relaxed">
              Профессиональные детективные услуги
            </p>
            
            <div className="space-y-4">
              <a 
                href="tel:+79999999999" 
                className="w-full bg-gradient-to-r from-blue-600/80 to-cyan-600/80 hover:from-blue-500 hover:to-cyan-500 text-white px-8 py-4 rounded-2xl transition-all duration-300 flex items-center justify-center space-x-3 shadow-xl hover:scale-105 text-lg font-semibold active:scale-95"
              >
                <span className="text-xl">📞</span>
                <span>Позвонить сейчас</span>
              </a>
              
              <button 
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  contactSection?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full bg-white/10 text-white px-8 py-4 rounded-2xl hover:bg-white/15 transition-all duration-300 shadow-xl hover:scale-105 text-lg font-medium active:scale-95"
              >
                Подробнее
              </button>
            </div>
          </div>

          {/* Simple Stats */}
          <div className="w-full max-w-sm px-4">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
              <div className="grid grid-cols-3 gap-4 text-center mb-6">
                <div>
                  <div className="text-2xl font-bold text-white">15+</div>
                  <div className="text-xs text-gray-300">лет опыта</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">1000+</div>
                  <div className="text-xs text-gray-300">дел закрыто</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">24/7</div>
                  <div className="text-xs text-gray-300">работаем</div>
                </div>
              </div>
              
              {/* Privacy Notice */}
              <div className="border-t border-white/10 pt-4">
                <div className="flex items-center justify-center mb-2">
                  <div className="w-6 h-6 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full flex items-center justify-center mr-2">
                    <span className="text-sm">🔒</span>
                  </div>
                  <div className="text-sm font-bold text-white">100% конфиденциально</div>
                </div>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Полная анонимность и защита ваших данных
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Call Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <a 
          href="tel:+79999999999"
          className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center text-white shadow-2xl hover:scale-110 transition-all duration-300"
        >
          <span className="text-2xl">📞</span>
        </a>
      </div>
    </section>
  );
} 