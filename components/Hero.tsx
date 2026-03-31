export function Hero() {

  return (
    <section className="min-h-[100dvh] min-h-[100svh] bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 relative overflow-hidden flex flex-col">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-48 h-48 md:w-96 md:h-96 bg-gradient-to-r from-neutral-400/3 to-neutral-500/3 rounded-full mix-blend-screen filter blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-40 h-40 md:w-80 md:h-80 bg-gradient-to-l from-neutral-500/4 to-neutral-400/4 rounded-full mix-blend-screen filter blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/2 w-36 h-36 md:w-72 md:h-72 bg-gradient-to-t from-neutral-400/3 to-neutral-500/3 rounded-full mix-blend-screen filter blur-3xl"></div>
      </div>

      {/* Subtle overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 to-transparent"></div>

      <div className="container mx-auto px-4 sm:px-5 pt-20 md:pt-24 pb-10 md:pb-16 relative z-10 flex flex-col flex-1 justify-center">
        <div className="flex flex-col items-center text-center w-full max-w-5xl mx-auto">
          
          {/* Main Content */}
          <div className="w-full mb-8 md:mb-12">
            <div className="mb-5 md:mb-8">
              <span className="inline-block max-w-[min(100%,22rem)] sm:max-w-none bg-neutral-400/10 backdrop-blur-xl border border-neutral-400/20 text-neutral-200 px-4 py-2.5 rounded-2xl text-[13px] sm:text-sm font-medium leading-snug">
                Детективное агентство №1 для сложных случаев
              </span>
            </div>
            
            <h1 className="text-[1.65rem] sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.15] tracking-tight sm:tracking-wide mb-5 md:mb-8 px-1">
              <span className="text-gold-shimmer">PRIORITY AGENCY</span>
            </h1>
            
            <p className="text-[15px] sm:text-lg md:text-xl lg:text-2xl text-neutral-400 mb-6 md:mb-10 max-w-3xl mx-auto leading-relaxed px-1">
              Сотни успешно закрытых дел. Работаем 24/7
            </p>

            <div className="mb-7 md:mb-10">
              <p className="text-base sm:text-xl md:text-2xl lg:text-3xl text-neutral-200 font-medium leading-snug px-1">
                Мы находим то, что другие упускают
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-1 max-w-md sm:max-w-none mx-auto">
              <a 
                href="#contact" 
                className="touch-manipulation min-h-[48px] bg-gradient-to-r from-amber-500/25 to-amber-600/15 backdrop-blur-xl border border-amber-400/30 text-neutral-100 px-6 md:px-8 py-3.5 md:py-5 rounded-2xl active:scale-[0.98] md:hover:from-amber-500/35 md:hover:to-amber-600/25 transition-all duration-300 flex items-center justify-center shadow-lg shadow-black/20 md:hover:shadow-xl md:hover:scale-[1.02] text-base md:text-lg font-semibold"
              >
                <span>Получить консультацию</span>
              </a>
            </div>
          </div>

          {/* Advantages Block — на телефоне сетка 2×2, компактнее */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 md:gap-6 w-full max-w-6xl">
            {[
              { 
                number: "100+", 
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
                className={`bg-gradient-to-br ${advantage.color} backdrop-blur-xl border border-neutral-400/15 rounded-xl sm:rounded-2xl md:rounded-3xl p-3 sm:p-4 md:p-6 text-center md:hover:bg-neutral-400/10 transition-all duration-300 md:hover:scale-[1.02] shadow-lg shadow-black/20 md:shadow-2xl h-full flex flex-col justify-center min-h-[7.5rem] sm:min-h-0`}
              >
                <h3 className="text-lg sm:text-2xl md:text-4xl font-bold text-neutral-200 mb-1.5 sm:mb-2 md:mb-3 bg-gradient-to-r from-neutral-300 to-neutral-100 bg-clip-text text-transparent tabular-nums">
                  {advantage.number}
                </h3>
                <p className="text-neutral-300 font-medium text-[11px] sm:text-xs md:text-sm mb-1 sm:mb-2 leading-tight">{advantage.label}</p>
                <p className="text-neutral-500 text-[10px] sm:text-xs leading-snug">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Action Button */}
      <div className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-4 sm:right-6 z-50">
        <button 
          type="button"
          className="touch-manipulation w-12 h-12 bg-neutral-800/90 backdrop-blur-xl border border-neutral-500/30 rounded-full flex items-center justify-center text-neutral-200 active:scale-95 md:hover:scale-110 transition-all duration-300 shadow-lg"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          ↑
        </button>
      </div>
    </section>
  );
}