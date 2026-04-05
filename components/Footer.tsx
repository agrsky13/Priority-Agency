export function Footer() {
  return (
    <footer className="bg-neutral-950 text-neutral-300 py-12 sm:py-16 md:py-20 relative overflow-hidden pb-[max(3rem,env(safe-area-inset-bottom))]">
      <div className="absolute inset-0 grid-pattern opacity-10" aria-hidden />
      <div className="absolute inset-0" aria-hidden>
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-gradient-to-r from-amber-900/5 to-transparent rounded-full filter blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-gradient-to-r from-neutral-800/8 to-transparent rounded-full filter blur-[100px]" />
      </div>

      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neutral-800/80 to-transparent" aria-hidden />

      <div className="container px-3 sm:px-6 relative z-10 max-w-7xl mx-auto min-w-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-8 lg:gap-12 mb-12 md:mb-16">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 bg-gradient-to-br from-amber-600/20 to-amber-700/10 border border-amber-500/30 rounded-lg flex items-center justify-center">
                <span className="text-lg leading-none" aria-hidden>
                  🕵️
                </span>
              </div>
              <div>
                <h3 className="text-xl font-bold">
                  <span className="text-gold-shimmer">PRIORITY</span>
                </h3>
                <p className="text-neutral-500 text-xs tracking-[0.15em] uppercase">Agency</p>
              </div>
            </div>

            <p className="text-neutral-500 mb-6 leading-relaxed text-sm max-w-sm">
              Профессиональное детективное агентство: дискретное наблюдение, сбор информации и сопровождение сложных
              запросов.
            </p>

            <div className="flex gap-3">
              <a
                href="tel:+79998981439"
                className="w-10 h-10 bg-neutral-900/60 border border-neutral-800/50 rounded-lg flex items-center justify-center text-neutral-500 hover:text-amber-500 hover:border-amber-500/30 transition-all duration-300"
                aria-label="Позвонить"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </a>
              <a
                href="https://t.me/priorityagencyru"
                className="w-10 h-10 bg-neutral-900/60 border border-neutral-800/50 rounded-lg flex items-center justify-center text-neutral-500 hover:text-amber-500 hover:border-amber-500/30 transition-all duration-300"
                aria-label="Telegram"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </a>
              <a
                href="https://wa.me/79998981439"
                className="w-10 h-10 bg-neutral-900/60 border border-neutral-800/50 rounded-lg flex items-center justify-center text-neutral-500 hover:text-amber-500 hover:border-amber-500/30 transition-all duration-300"
                aria-label="WhatsApp"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-base font-semibold mb-5 text-neutral-200">Услуги</h4>
            <ul className="space-y-3">
              {[
                'Частные расследования',
                'Поиск людей',
                'Корпоративные расследования',
                'Проверка информации',
                'Наблюдение',
              ].map((service, index) => (
                <li key={index}>
                  <a
                    href="#services"
                    className="text-neutral-500 hover:text-amber-500 transition-colors duration-200 text-sm flex items-center gap-2 group"
                  >
                    <svg className="w-3 h-3 text-neutral-700 group-hover:text-amber-500/60 transition-colors" fill="currentColor" viewBox="0 0 8 8" aria-hidden>
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-base font-semibold mb-5 text-neutral-200">Компания</h4>
            <ul className="space-y-3">
              {[
                { label: 'О нас', href: '#about' },
                { label: 'Кейсы', href: '#success' },
                { label: 'Как работаем', href: '#about' },
              ].map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="text-neutral-500 hover:text-amber-500 transition-colors duration-200 text-sm flex items-center gap-2 group"
                  >
                    <svg className="w-3 h-3 text-neutral-700 group-hover:text-amber-500/60 transition-colors" fill="currentColor" viewBox="0 0 8 8" aria-hidden>
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-base font-semibold mb-5 text-neutral-200">Контакты</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-neutral-600 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <div>
                  <a href="tel:+79998981439" className="text-neutral-400 hover:text-amber-500 transition-colors text-sm">
                    +7 999 898 14 39
                  </a>
                  <p className="text-neutral-600 text-xs mt-0.5">Круглосуточно</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-neutral-600 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <div>
                  <a
                    href="mailto:priorityagency@yandex.ru"
                    className="text-neutral-400 hover:text-amber-500 transition-colors text-sm break-all"
                  >
                    priorityagency@yandex.ru
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-neutral-600 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
                <div>
                  <a href="https://t.me/priorityagencyru" className="text-neutral-400 hover:text-amber-500 transition-colors text-sm">
                    @priorityagencyru
                  </a>
                  <p className="text-neutral-600 text-xs mt-0.5">Telegram</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-b border-neutral-800/50 py-8 mb-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { number: '1000+', label: 'Часов наблюдения' },
              { number: '100%', label: 'Ответственный подход' },
              { number: '24/7', label: 'На связи' },
              { number: '100+', label: 'Завершённых дел' },
            ].map((stat, index) => (
              <div key={index} className="text-center min-w-0 px-1">
                <div className="text-lg sm:text-xl md:text-2xl font-bold text-amber-500/90 mb-1 tabular-nums">{stat.number}</div>
                <div className="text-neutral-500 text-[11px] leading-tight sm:text-sm text-balance">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <p className="text-neutral-500 mb-2 text-sm">© 2026 PRIORITY AGENCY. Все права защищены.</p>
          <p className="text-neutral-600 text-xs mb-6">Профессиональные детективные услуги с полной дискретностью</p>
          <p className="text-neutral-500 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed mb-6 px-1">
            С телефона откройте ту же ссылку, что и на компьютере — вёрстка подстроится под экран.
          </p>

          <div className="max-w-2xl mx-auto pt-6 border-t border-neutral-800/50">
            <div className="text-neutral-600 text-[11px] sm:text-xs leading-relaxed space-y-1 text-left sm:text-center">
              <p>ИП Лукьяненко-Видаль Никита Фостенович</p>
              <p>ИНН: 230603918797 | ОГРНИП: 325237500369362</p>
              <p>
                Юридический адрес: 353600, Краснодарский край, Староминский р-н, ст-ца Староминская, ул. Мира, д. 6
              </p>
              <p>Email: priorityagency@yandex.ru</p>
              <p>Телефон: +7 999 898 14 39</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
