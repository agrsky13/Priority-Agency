export function Footer() {
  return (
    <footer className="bg-neutral-950 text-neutral-300 py-8 md:py-16 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-32 h-32 md:w-64 md:h-64 bg-gradient-to-r from-neutral-400/6 to-neutral-500/6 rounded-full mix-blend-screen filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-32 h-32 md:w-64 md:h-64 bg-gradient-to-r from-neutral-500/4 to-neutral-400/4 rounded-full mix-blend-screen filter blur-xl animate-pulse delay-1000"></div>
      </div>

      {/* Subtle texture */}
      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 to-neutral-900"></div>

      <div className="container pl-6 md:pl-0 pr-4 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-8 md:mb-12">
          {/* Brand */}
          <div className="sm:col-span-2">
            <div className="flex items-center space-x-2 md:space-x-3 mb-4 md:mb-6">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-neutral-400/10 backdrop-blur-xl border border-neutral-400/20 rounded-lg md:rounded-xl flex items-center justify-center">
                <span className="text-neutral-300 font-bold text-lg md:text-xl">
                  P
                </span>
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-left">
                  PRIORITY AGENCY
                </h3>
                <p className="text-neutral-500 text-xs md:text-sm text-left">
                  Детективные услуги
                </p>
              </div>
            </div>

            <p className="text-neutral-500 mb-4 md:mb-6 leading-relaxed max-w-md text-sm md:text-base">
              Профессиональное агентство по слежке и сбору
              информации. Специализируемся на скрытом наблюдении
              и сборе компрометирующих материалов.
            </p>

            <div className="flex space-x-3 md:space-x-4">
              <a
                href="tel:+79001385780"
                className="w-8 h-8 md:w-10 md:h-10 bg-neutral-400/10 backdrop-blur-xl border border-neutral-400/20 rounded-lg flex items-center justify-center hover:bg-neutral-400/20 transition-colors duration-200"
              >
                <span className="text-sm md:text-lg">📞</span>
              </a>
              <a
                href="https://t.me/dtctv"
                className="w-8 h-8 md:w-10 md:h-10 bg-neutral-400/10 backdrop-blur-xl border border-neutral-400/20 rounded-lg flex items-center justify-center hover:bg-neutral-400/20 transition-colors duration-200"
              >
                <span className="text-sm md:text-lg">✈️</span>
              </a>
              <a
                href="https://wa.me/79001385780"
                className="w-8 h-8 md:w-10 md:h-10 bg-neutral-400/10 backdrop-blur-xl border border-neutral-400/20 rounded-lg flex items-center justify-center hover:bg-neutral-400/20 transition-colors duration-200"
              >
                <span className="text-sm md:text-lg">📱</span>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-base md:text-lg font-semibold mb-4 md:mb-6 text-neutral-300">
              Услуги
            </h4>
            <div className="space-y-4 md:space-y-6">
              <div>
                <h5 className="text-neutral-400 font-medium mb-2 md:mb-3 text-sm md:text-base">
                  Услуги
                </h5>
                <ul className="space-y-1 md:space-y-2">
                  {[
                    "Поиск людей",
                    "Корпоративные расследования",
                    "Наблюдение",
                    "Проверка информации",
                  ].map((service, index) => (
                    <li key={index}>
                      <a
                        href="#services"
                        className="text-neutral-500 hover:text-neutral-400 transition-colors duration-200 text-xs md:text-sm"
                      >
                        {service}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h5 className="text-neutral-400 font-medium mb-2 md:mb-3 text-sm md:text-base">
                  Информация
                </h5>
                <ul className="space-y-1 md:space-y-2">
                  <li>
                    <a
                      href="#about"
                      className="text-neutral-500 hover:text-neutral-400 transition-colors duration-200 text-xs md:text-sm"
                    >
                      О нас
                    </a>
                  </li>

                </ul>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-base md:text-lg font-semibold mb-4 md:mb-6 text-neutral-300">
              Контакты
            </h4>
            <div className="space-y-2 md:space-y-3">
              <div className="flex items-center space-x-2 md:space-x-3">
                <span className="text-neutral-500 text-sm md:text-base">📞</span>
                <a
                  href="tel:+79001385780"
                  className="text-neutral-500 hover:text-neutral-400 transition-colors duration-200 text-xs md:text-sm"
                >
                  +7 (900) 138-57-80
                </a>
              </div>
              <div className="flex items-center space-x-2 md:space-x-3">
                <span className="text-neutral-500 text-sm md:text-base">✈️</span>
                <a
                  href="https://t.me/dtctv"
                  className="text-neutral-500 hover:text-neutral-400 transition-colors duration-200 text-xs md:text-sm"
                >
                  @dtctv
                </a>
              </div>
              <div className="flex items-center space-x-2 md:space-x-3">
                <span className="text-neutral-500 text-sm md:text-base">🕐</span>
                <span className="text-neutral-500 text-xs md:text-sm">
                  Работаем 24/7
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="border-t border-neutral-400/10 pt-6 md:pt-8 mb-6 md:mb-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 text-center">
            {[
              { number: "1000+", label: "Часов наружного наблюдения" },
              {
                number: "100%",
                label: "результат",
              },
              {
                number: "24/7",
                label: "Круглосуточная работа",
              },
              { number: "500+", label: "Собранных досье" },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-neutral-400/5 backdrop-blur-xl border border-neutral-400/10 rounded-lg md:rounded-xl p-3 md:p-4"
              >
                <div className="text-lg md:text-2xl font-bold text-neutral-300 mb-1 bg-gradient-to-r from-neutral-400 to-neutral-200 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-neutral-500 text-xs md:text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-neutral-400/10 pt-6 md:pt-8 text-center px-6 md:px-0">
          <p className="text-neutral-500 mb-2 text-sm md:text-base">
            © 2024 PRIORITY AGENCY. Все права защищены.
          </p>
          <p className="text-neutral-600 text-xs md:text-sm">
            Профессиональные услуги по слежке и сбору информации
          </p>
        </div>
      </div>
    </footer>
  );
}