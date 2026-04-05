export function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-20 md:py-28 bg-gradient-to-b from-neutral-900 to-neutral-950 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20" aria-hidden />
      <div className="absolute inset-0" aria-hidden>
        <div className="absolute top-1/4 left-1/3 w-80 h-80 bg-gradient-to-r from-amber-900/8 to-neutral-800/5 rounded-full mix-blend-screen filter blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-gradient-to-r from-neutral-700/8 to-neutral-600/5 rounded-full mix-blend-screen filter blur-[100px]" />
      </div>

      <div className="container mx-auto px-3 sm:px-6 relative z-10 min-w-0">
        <div className="text-center mb-12 sm:mb-16 md:mb-20 px-1">
          <span className="inline-block text-amber-500/80 text-[11px] sm:text-sm font-medium tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-4">
            Связь
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-100 mb-4 md:mb-6 tracking-tight text-balance">
            Контакты
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed text-pretty">
            Нужны факты о человеке или ситуации? Соберём информацию дискретно. Первая консультация — бесплатно.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 md:gap-8 mb-12 sm:mb-16">
            {[
              {
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                ),
                title: 'Телефон',
                value: '+7 999 898 14 39',
                link: 'tel:+79998981439',
                description: 'Круглосуточно',
                color: 'from-blue-600/20 to-cyan-600/10',
              },
              {
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                ),
                title: 'Telegram',
                value: '@priorityagencyru',
                link: 'https://t.me/priorityagencyru',
                description: 'Быстрый ответ',
                color: 'from-violet-600/20 to-purple-600/10',
              },
              {
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                ),
                title: 'WhatsApp',
                value: '+7 999 898 14 39',
                link: 'https://wa.me/79998981439',
                description: 'Сообщения и звонки',
                color: 'from-emerald-600/20 to-green-600/10',
              },
            ].map((contact, index) => (
              <a
                key={index}
                href={contact.link}
                className={`group relative bg-gradient-to-br ${contact.color} backdrop-blur-sm border border-neutral-800/50 rounded-xl p-5 sm:p-8 flex flex-col items-center text-center hover:border-neutral-700/50 transition-all duration-500 md:hover:scale-[1.02] overflow-hidden min-w-0`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/0 group-hover:from-white/5 group-hover:to-white/0 transition-all duration-500 rounded-xl" aria-hidden />
                <div className="relative w-16 h-16 bg-neutral-900/60 border border-neutral-800/50 rounded-xl flex items-center justify-center group-hover:border-neutral-700/60 transition-all duration-300 mb-5 text-neutral-400 group-hover:text-neutral-200">
                  {contact.icon}
                </div>
                <h4 className="relative font-bold text-neutral-100 mb-2 text-lg sm:text-xl">{contact.title}</h4>
                <p className="relative text-neutral-300 font-medium mb-2 text-base sm:text-lg break-words">{contact.value}</p>
                <p className="relative text-neutral-500 text-sm">{contact.description}</p>
                <div className="relative mt-4 text-neutral-600 group-hover:text-neutral-400 transition-colors">
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </a>
            ))}
          </div>

          <div className="bg-neutral-900/60 backdrop-blur-sm border border-neutral-800/50 rounded-2xl p-5 sm:p-8 md:p-12 text-center relative overflow-hidden min-w-0">
            <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" aria-hidden />

            <h3 className="text-xl sm:text-3xl md:text-4xl font-bold text-neutral-100 mb-4 text-balance px-1">
              Готовы к следующему шагу?
            </h3>
            <p className="text-neutral-400 text-sm sm:text-lg mb-6 sm:mb-8 max-w-xl mx-auto leading-relaxed text-pretty px-1">
              Расскажите ситуацию в общих чертах — подскажем формат работы и сроки без обязательств.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+79998981439"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-600/90 to-amber-700/80 hover:from-amber-500 hover:to-amber-600 text-neutral-950 px-8 py-4 rounded-lg transition-all duration-300 shadow-lg shadow-amber-900/30 hover:shadow-xl hover:shadow-amber-800/40 text-base font-semibold"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span>Позвонить</span>
              </a>
              <a
                href="https://wa.me/79998981439"
                className="inline-flex items-center justify-center gap-2 bg-emerald-800/50 hover:bg-emerald-700/60 text-emerald-50 px-8 py-4 rounded-lg transition-all duration-300 border border-emerald-600/30 text-base font-semibold"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
                <span>WhatsApp</span>
              </a>
            </div>

            <div className="mt-8 pt-8 border-t border-neutral-800/50">
              <div className="flex items-center justify-center gap-2 text-neutral-500 text-sm">
                <svg className="w-4 h-4 text-amber-500/70 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
                <span>Обращение конфиденциально и не передаётся третьим лицам</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
