export function Hero() {

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-48 h-48 md:w-96 md:h-96 bg-gradient-to-r from-white/3 to-gray-300/3 rounded-full mix-blend-screen filter blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-40 h-40 md:w-80 md:h-80 bg-gradient-to-l from-gray-200/4 to-white/4 rounded-full mix-blend-screen filter blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/2 w-36 h-36 md:w-72 md:h-72 bg-gradient-to-t from-gray-100/3 to-white/3 rounded-full mix-blend-screen filter blur-3xl"></div>
      </div>

      {/* Subtle overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>

      <div className="container mx-auto px-4 pt-16 md:pt-20 relative z-10">
        <div className="flex flex-col items-center justify-center min-h-screen text-center">
          
          {/* Main Content */}
          <div className="max-w-4xl mb-8 md:mb-16 px-4">
            <div className="mb-6 md:mb-8">
              <span className="inline-block bg-white/10 backdrop-blur-xl border border-white/20 text-white px-4 md:px-6 py-2 md:py-3 rounded-full text-xs md:text-sm font-medium mb-4 md:mb-6">
                Профессиональные расследования
              </span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight mb-6 md:mb-8 px-2">
              Частные расследования<br />
              <span className="bg-gradient-to-r from-gray-200 to-white bg-clip-text text-transparent">
                и сбор информации
              </span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed px-4">
              Лицензированное детективное агентство Priority с многолетним опытом
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4">
              <a 
                href="tel:+79999999999" 
                className="group bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-xl border border-white/30 text-white px-4 md:px-6 py-3 rounded-xl hover:from-white/30 hover:to-white/20 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl hover:scale-105 text-sm md:text-base"
              >
                <div className="w-5 h-5 md:w-6 md:h-6 bg-white/30 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-xs md:text-sm">📞</span>
                </div>
                <span className="font-medium text-xs md:text-sm">Получить консультацию</span>
              </a>
              <a 
                href="#contact" 
                className="bg-white/5 backdrop-blur-xl border border-white/20 text-white px-4 md:px-6 py-3 rounded-xl hover:bg-white/10 hover:border-white/30 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 text-sm md:text-base"
              >
                Узнать больше
              </a>
            </div>
          </div>

          {/* Interactive Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 w-full max-w-5xl px-4">
            {[
              { number: "15+", label: "Лет опыта", color: "from-gray-400/20 to-gray-600/20" },
              { number: "1000+", label: "Завершенных дел", color: "from-gray-400/20 to-gray-600/20" },
              { number: "24/7", label: "Доступность", color: "from-gray-400/20 to-gray-600/20" },
              { number: "100%", label: "Конфиденциальность", color: "from-gray-400/20 to-gray-600/20" }
            ].map((stat, index) => (
              <div 
                key={index}
                className={`bg-gradient-to-br ${stat.color} backdrop-blur-xl border border-white/10 rounded-2xl md:rounded-3xl p-4 md:p-8 text-center hover:bg-white/10 transition-all duration-500 hover:scale-105 group shadow-2xl hover:rotate-1 h-full flex flex-col justify-center`}
              >
                <h3 className="text-2xl md:text-4xl font-bold text-white mb-1 md:mb-2 bg-gradient-to-r from-gray-100 to-white bg-clip-text text-transparent">
                  {stat.number}
                </h3>
                <p className="text-gray-300 font-medium text-xs md:text-sm">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Privacy Notice */}
          <div className="mt-8 md:mt-12 max-w-4xl">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl md:rounded-3xl p-4 md:p-6 text-center">
              <div className="flex items-center justify-center mb-3">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full flex items-center justify-center mr-3">
                  <span className="text-lg md:text-xl">🔒</span>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-white">Полная конфиденциальность</h3>
              </div>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
                Мы гарантируем абсолютную анонимность и конфиденциальность всех наших клиентов. 
                Ваши данные надёжно защищены и никогда не передаются третьим лицам.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button 
          className="w-12 h-12 bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-xl border border-white/30 rounded-full flex items-center justify-center text-white hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          ↑
        </button>
      </div>
    </section>
  );
}