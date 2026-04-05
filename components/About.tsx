export function About() {
  const features = [
    {
      title: 'Полная конфиденциальность',
      description: 'Информация о деле не передаётся третьим лицам без вашего явного согласия.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
          />
        </svg>
      ),
    },
    {
      title: 'Соблюдение закона',
      description: 'Действуем в правовом поле, чтобы материалы можно было использовать осознанно и безопасно.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
          />
        </svg>
      ),
    },
    {
      title: 'Опытная команда',
      description: 'Специалисты с практикой в расследованиях, аналитике и сопровождении сложных ситуаций.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section id="about" className="py-16 sm:py-20 md:py-28 bg-neutral-950 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20" aria-hidden />
      <div className="absolute inset-0" aria-hidden>
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-gradient-to-r from-amber-900/5 to-transparent rounded-full filter blur-[100px]" />
        <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-gradient-to-l from-neutral-800/10 to-transparent rounded-full filter blur-[100px]" />
      </div>

      <div className="container mx-auto px-3 sm:px-6 relative z-10 min-w-0">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center max-w-7xl mx-auto">
          <div className="order-2 lg:order-1 min-w-0">
            <span className="inline-block text-amber-500/80 text-[11px] sm:text-sm font-medium tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-4">
              О нас
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-100 mb-6 tracking-tight leading-tight text-balance">
              Хотите знать правду?
              <span className="block text-neutral-400 text-2xl sm:text-3xl md:text-4xl font-light mt-2">
                Мы даём факты
              </span>
            </h2>

            <p className="text-neutral-300 text-base sm:text-lg leading-relaxed mb-6 text-pretty">
              Мы аккуратно и незаметно фиксируем встречи, действия и контакты. Вы получаете фото- и видеоматериалы, чтобы
              опираться не на догадки, а на реальность.
            </p>

            <p className="text-neutral-400 text-sm sm:text-base leading-relaxed mb-8">
              Сотни успешно закрытых запросов — от личных до корпоративных. К каждому обращению подходим системно и без
              лишнего шума.
            </p>

            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-neutral-900/80 border border-neutral-800/50 rounded-lg flex items-center justify-center text-amber-500/70">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-neutral-200 font-semibold mb-1">{feature.title}</h4>
                    <p className="text-neutral-500 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-amber-500/90 hover:text-amber-400 font-medium transition-colors duration-300 group"
            >
              <span>Начать с консультации</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          <div className="order-1 lg:order-2 min-w-0">
            <div className="relative flex flex-col sm:block">
              <div className="bg-neutral-900/60 backdrop-blur-sm border border-neutral-800/50 rounded-2xl p-6 sm:p-8 md:p-10 relative overflow-hidden min-w-0">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-600/80 via-amber-500/60 to-amber-600/80" aria-hidden />

                <div className="w-16 h-16 bg-neutral-800/60 border border-neutral-700/40 rounded-xl flex items-center justify-center mb-6 text-amber-500/80">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-neutral-100 mb-4">
                  Работаем конфиденциально и в рамках закона
                </h3>

                <p className="text-neutral-400 text-base leading-relaxed mb-6">
                  О расследовании знаете только вы. Приоритет — ваша безопасность и спокойствие.
                </p>

                <div className="grid grid-cols-2 gap-4 pt-6 border-t border-neutral-800/50">
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-amber-500/90 mb-1">100%</div>
                    <div className="text-neutral-500 text-xs sm:text-sm">Конфиденциально</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-amber-500/90 mb-1">24/7</div>
                    <div className="text-neutral-500 text-xs sm:text-sm">На связи</div>
                  </div>
                </div>
              </div>

              <div className="relative sm:absolute mt-4 sm:mt-0 left-auto right-0 sm:-bottom-6 sm:-right-6 inline-flex sm:block bg-amber-600/90 text-neutral-950 rounded-xl px-4 py-2 sm:px-6 sm:py-3 shadow-lg max-w-full">
                <span className="text-sm sm:text-base font-bold text-center sm:text-left w-full">Надёжный партнёр</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
