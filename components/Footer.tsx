export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 md:py-16 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-32 h-32 md:w-64 md:h-64 bg-gradient-to-r from-white/6 to-gray-200/6 rounded-full mix-blend-screen filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-32 h-32 md:w-64 md:h-64 bg-gradient-to-r from-gray-100/4 to-white/4 rounded-full mix-blend-screen filter blur-xl animate-pulse delay-1000"></div>
      </div>

      {/* Subtle texture */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-gray-800"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-8 md:mb-12">
          {/* Brand */}
          <div className="sm:col-span-2">
            <div className="flex items-center space-x-2 md:space-x-3 mb-4 md:mb-6">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-white/10 backdrop-blur-xl border border-white/20 rounded-lg md:rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg md:text-xl">
                  P
                </span>
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold">
                  PRIORITY AGENCY
                </h3>
                <p className="text-gray-400 text-xs md:text-sm">
                  Detective Services
                </p>
              </div>
            </div>

            <p className="text-gray-400 mb-4 md:mb-6 leading-relaxed max-w-md text-sm md:text-base">
              Профессиональное агентство по слежке и сбору
              информации. Специализируемся на скрытом наблюдении
              и сборе компрометирующих материалов.
            </p>

            <div className="flex space-x-3 md:space-x-4">
              <a
                href="tel:+79999999999"
                className="w-8 h-8 md:w-10 md:h-10 bg-white/10 backdrop-blur-xl border border-white/20 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors duration-200"
              >
                <span className="text-sm md:text-lg">📞</span>
              </a>
              <a
                href="https://t.me/detective_agency"
                className="w-8 h-8 md:w-10 md:h-10 bg-white/10 backdrop-blur-xl border border-white/20 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors duration-200"
              >
                <span className="text-sm md:text-lg">✈️</span>
              </a>
              <a
                href="https://wa.me/79999999999"
                className="w-8 h-8 md:w-10 md:h-10 bg-white/10 backdrop-blur-xl border border-white/20 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors duration-200"
              >
                <span className="text-sm md:text-lg">📱</span>
              </a>
              <a
                href="mailto:info@detective-agency.ru"
                className="w-8 h-8 md:w-10 md:h-10 bg-white/10 backdrop-blur-xl border border-white/20 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors duration-200"
              >
                <span className="text-sm md:text-lg">✉️</span>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-base md:text-lg font-semibold mb-4 md:mb-6 text-white">
              Услуги
            </h4>
            <div className="space-y-4 md:space-y-6">
              <div>
                <h5 className="text-gray-300 font-medium mb-2 md:mb-3 text-sm md:text-base">
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
                        className="text-gray-400 hover:text-white transition-colors duration-200 text-xs md:text-sm"
                      >
                        {service}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h5 className="text-gray-300 font-medium mb-2 md:mb-3 text-sm md:text-base">
                  Информация
                </h5>
                <ul className="space-y-1 md:space-y-2">
                  <li>
                    <a
                      href="#about"
                      className="text-gray-400 hover:text-white transition-colors duration-200 text-xs md:text-sm"
                    >
                      О нас
                    </a>
                  </li>
                  <li>
                    <span className="text-gray-400 text-xs md:text-sm">
                      Блог доступен в меню
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-base md:text-lg font-semibold mb-4 md:mb-6 text-white">
              Контакты
            </h4>
            <div className="space-y-2 md:space-y-3">
              <div className="flex items-center space-x-2 md:space-x-3">
                <span className="text-gray-400 text-sm md:text-base">📞</span>
                <a
                  href="tel:+79001385780"
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-xs md:text-sm"
                >
                  +7 (900) 138-57-80
                </a>
              </div>
              <div className="flex items-center space-x-2 md:space-x-3">
                <span className="text-gray-400 text-sm md:text-base">✈️</span>
                <a
                  href="https://t.me/dtctv"
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-xs md:text-sm"
                >
                  @dtctv
                </a>
              </div>
              <div className="flex items-center space-x-2 md:space-x-3">
                <span className="text-gray-400 text-sm md:text-base">🕐</span>
                <span className="text-gray-400 text-xs md:text-sm">
                  Работаем 24/7
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="border-t border-white/10 pt-6 md:pt-8 mb-6 md:mb-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 text-center">
            {[
              { number: "1000+", label: "Часов слежки" },
              {
                number: "95%",
                label: "Успешных операций",
              },
              {
                number: "24/7",
                label: "Круглосуточная работа",
              },
              { number: "500+", label: "Собранных досье" },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-lg md:rounded-xl p-3 md:p-4"
              >
                <div className="text-lg md:text-2xl font-bold text-white mb-1 bg-gradient-to-r from-gray-200 to-white bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-xs md:text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-6 md:pt-8 text-center">
          <p className="text-gray-400 mb-2 text-sm md:text-base">
            © 2024 PRIORITY AGENCY. Все права защищены.
          </p>
          <p className="text-gray-500 text-xs md:text-sm">
            Профессиональные услуги по слежке и сбору информации
          </p>
        </div>
      </div>
    </footer>
  );
}