export function Services() {
  const services = [
    {
      title: 'Частные расследования',
      description:
        'Сбор доказательств, проверка информации и сопровождение в судебных делах с оформлением материалов.',
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
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
      title: 'Выявление измены',
      description:
        'Дискретное наблюдение и сбор фактов. Если есть сомнения в верности — помогаем опереться на доказательства, а не на догадки.',
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      ),
    },
    {
      title: 'Поиск людей',
      description:
        'Родственники, свидетели, должники — используем проверенные методы и сеть источников для быстрого результата.',
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
    },
    {
      title: 'Корпоративные расследования',
      description:
        'Утечки информации, проверка сотрудников и контрагентов, защита интересов компании и репутации.',
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          />
        </svg>
      ),
    },
    {
      title: 'Проверка информации',
      description:
        'Документы, биографии, заявления — проверяем всё, что вызывает вопросы, и фиксируем выводы.',
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
    },
    {
      title: 'Раскрытие двойной жизни',
      description:
        'Аккуратный сбор фактов при подозрении на скрытые отношения или параллельную линию поведения.',
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section id="services" className="py-16 sm:py-20 md:py-28 bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20" aria-hidden />
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute top-20 left-1/4 w-64 h-64 bg-gradient-to-r from-amber-900/8 to-transparent rounded-full filter blur-[80px] opacity-60" />
        <div className="absolute bottom-20 right-1/4 w-64 h-64 bg-gradient-to-r from-neutral-700/10 to-transparent rounded-full filter blur-[80px] opacity-50" />
      </div>

      <div className="container mx-auto px-3 sm:px-6 relative z-10 min-w-0">
        <div className="text-center mb-12 sm:mb-16 md:mb-20 px-1">
          <span className="inline-block text-amber-500/80 text-[11px] sm:text-sm font-medium tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-4">
            Чем помогаем
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-100 mb-4 md:mb-6 tracking-tight text-balance">
            Наши услуги
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed text-pretty">
            Профессиональные решения под ваш запрос: дискретность, законность и внимание к деталям.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative isolate bg-neutral-900/70 border border-neutral-800/60 rounded-xl p-6 sm:p-7 md:p-8 overflow-hidden transition-[background-color,border-color] duration-300 hover:bg-neutral-900 hover:border-amber-600/40"
            >
              <div
                className="absolute top-4 right-3 sm:top-6 sm:right-6 text-neutral-800 text-4xl sm:text-6xl font-bold opacity-40 sm:opacity-50 group-hover:opacity-55 sm:group-hover:opacity-65 transition-opacity duration-300 pointer-events-none select-none leading-none"
                aria-hidden
              >
                {String(index + 1).padStart(2, '0')}
              </div>

              <div className="relative z-10 min-w-0 pr-10 sm:pr-14">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-neutral-800/60 border border-neutral-700/40 rounded-xl flex items-center justify-center mb-5 sm:mb-6 text-amber-500/80 group-hover:text-amber-400 group-hover:border-amber-600/40 transition-[color,border-color] duration-300">
                  {service.icon}
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-neutral-100 mb-3 sm:mb-4 group-hover:text-amber-500/90 transition-colors duration-300 text-pretty">
                  {service.title}
                </h3>
                <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">{service.description}</p>
              </div>

              <div
                className="absolute bottom-0 left-0 right-0 h-px bg-amber-500/0 group-hover:bg-amber-500/45 transition-colors duration-300"
                aria-hidden
              />
            </div>
          ))}
        </div>

        <div className="mt-14 sm:mt-16 md:mt-20 text-center">
          <p className="text-neutral-400 mb-6 text-base sm:text-lg">Нужен нестандартный формат работы?</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-transparent border border-neutral-700/50 hover:border-amber-600/50 text-neutral-300 hover:text-amber-500 px-8 py-4 rounded-lg transition-all duration-300 text-base font-medium"
          >
            <span>Обсудить задачу</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
