export function MobileCompactAbout() {
  return (
    <section className="py-12 bg-gradient-to-br from-gray-950 to-gray-900 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block bg-gradient-to-r from-gray-700/40 to-gray-600/40 backdrop-blur-xl border border-gray-500/50 text-gray-200 px-4 py-2 rounded-full text-sm font-medium mb-4 shadow-lg">
            О детективном агентстве
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">
            Детективное агентство "ВИДАЛЬ"
          </h2>
          <p className="text-base text-gray-300 max-w-md mx-auto px-4">
            Лицензированное агентство с 15-летним опытом работы
          </p>
        </div>

        <div className="space-y-6">
          <div className="bg-gradient-to-br from-gray-800/40 to-gray-700/40 backdrop-blur-xl border border-gray-600/50 rounded-xl p-6 shadow-xl">
            <h3 className="text-xl font-bold text-white mb-4">Основные услуги</h3>
            <div className="grid grid-cols-2 gap-3">
              <div className="text-center p-3 bg-gray-700/30 rounded-lg">
                <div className="text-white font-semibold text-xs">Частные расследования</div>
              </div>
              <div className="text-center p-3 bg-gray-700/30 rounded-lg">
                <div className="text-white font-semibold text-xs">Наблюдение 24/7</div>
              </div>
              <div className="text-center p-3 bg-gray-700/30 rounded-lg">
                <div className="text-white font-semibold text-xs">Поиск людей</div>
              </div>
              <div className="text-center p-3 bg-gray-700/30 rounded-lg">
                <div className="text-white font-semibold text-xs">Проверка данных</div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-800/40 to-gray-700/40 backdrop-blur-xl border border-gray-600/50 rounded-xl p-6 shadow-xl">
            <h3 className="text-xl font-bold text-white mb-4">Наши принципы</h3>
            <ul className="space-y-3 text-base text-gray-300">
              <li className="flex items-center">
                <div className="w-6 h-6 bg-gradient-to-br from-gray-600/40 to-gray-500/40 backdrop-blur-xl border border-gray-500/50 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                  <span className="text-white text-sm">✓</span>
                </div>
                <span>Строгое соблюдение закона</span>
              </li>
              <li className="flex items-center">
                <div className="w-6 h-6 bg-gradient-to-br from-gray-600/40 to-gray-500/40 backdrop-blur-xl border border-gray-500/50 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                  <span className="text-white text-sm">✓</span>
                </div>
                <span>100% результат по каждому делу</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
} 