export function Hero() {

  return (
    <section className="min-h-screen bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-48 h-48 md:w-96 md:h-96 bg-gradient-to-r from-neutral-400/3 to-neutral-500/3 rounded-full mix-blend-screen filter blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-40 h-40 md:w-80 md:h-80 bg-gradient-to-l from-neutral-500/4 to-neutral-400/4 rounded-full mix-blend-screen filter blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/2 w-36 h-36 md:w-72 md:h-72 bg-gradient-to-t from-neutral-400/3 to-neutral-500/3 rounded-full mix-blend-screen filter blur-3xl"></div>
      </div>

      {/* Subtle overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 to-transparent"></div>

      <div className="container mx-auto px-4 pt-16 md:pt-20 relative z-10">
        <div className="flex flex-col items-center justify-center min-h-screen text-center">
          
          {/* Main Content */}
          <div className="max-w-5xl mb-8 md:mb-16 px-4">
            <div className="mb-6 md:mb-8">
              <span className="inline-block bg-neutral-400/10 backdrop-blur-xl border border-neutral-400/20 text-neutral-300 px-4 md:px-6 py-2 md:py-3 rounded-full text-xs md:text-sm font-medium mb-4 md:mb-6">
                Детективное агентство №1 для сложных случаев
              </span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-neutral-300 leading-tight mb-6 md:mb-8 px-2">
              PRIORITY AGENCY
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-neutral-400 mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed px-4">
              Более 1000 успешно закрытых дел. Работаем круглосуточно.
            </p>

            <div className="mb-8 md:mb-12">
              <blockquote className="text-lg md:text-2xl lg:text-3xl text-neutral-300 italic font-medium">
                "Мы находим то, что другие упускают."
              </blockquote>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4">
              <a 
                href="#contact" 
                className="group bg-gradient-to-r from-neutral-400/20 to-neutral-400/10 backdrop-blur-xl border border-neutral-400/30 text-neutral-300 px-6 md:px-8 py-4 md:py-5 rounded-xl hover:from-neutral-400/30 hover:to-neutral-400/20 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl hover:scale-105 text-base md:text-lg font-medium"
              >
                <span>Получить консультацию</span>
              </a>
            </div>
          </div>

          {/* Advantages Block */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 w-full max-w-6xl px-4">
            {[
              { 
                number: "1000+", 
                label: "завершённых дел", 
                description: "от поиска людей до корпоративных расследований",
                color: "from-neutral-500/20 to-neutral-600/20" 
              },
              { 
                number: "24/7", 
                label: "на связи", 
                description: "реагируем сразу, без очередей и ожидания",
                color: "from-neutral-500/20 to-neutral-600/20" 
              },
              { 
                number: "100%", 
                label: "результат", 
                description: "каждое дело доводим до конца",
                color: "from-neutral-500/20 to-neutral-600/20" 
              },
              { 
                number: "🔒", 
                label: "Конфиденциально и законно", 
                description: "ваши данные под защитой",
                color: "from-neutral-500/20 to-neutral-600/20" 
              }
            ].map((advantage, index) => (
              <div 
                key={index}
                className={`bg-gradient-to-br ${advantage.color} backdrop-blur-xl border border-neutral-400/10 rounded-2xl md:rounded-3xl p-4 md:p-6 text-center hover:bg-neutral-400/10 transition-all duration-500 hover:scale-105 group shadow-2xl hover:rotate-1 h-full flex flex-col justify-center`}
              >
                <h3 className="text-2xl md:text-4xl font-bold text-neutral-300 mb-2 md:mb-3 bg-gradient-to-r from-neutral-400 to-neutral-200 bg-clip-text text-transparent">
                  {advantage.number}
                </h3>
                <p className="text-neutral-400 font-medium text-xs md:text-sm mb-2">{advantage.label}</p>
                <p className="text-neutral-500 text-xs leading-relaxed">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button 
          className="w-12 h-12 bg-gradient-to-r from-neutral-400/20 to-neutral-400/10 backdrop-blur-xl border border-neutral-400/30 rounded-full flex items-center justify-center text-neutral-300 hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          ↑
        </button>
      </div>
    </section>
  );
}