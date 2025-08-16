interface MobileCompactServicesProps {
  setCurrentPage: (page: string) => void;
}

export function MobileCompactServices({ setCurrentPage }: MobileCompactServicesProps) {
  const services = [
    {
      title: "Частные расследования",
      description: "Профессиональный сбор доказательств и установление фактов"
    },
    {
      title: "Наблюдение и слежка",
      description: "Круглосуточное наблюдение с полной конфиденциальностью"
    },
    {
      title: "Поиск людей",
      description: "Быстрый поиск пропавших людей по всей России"
    },
    {
      title: "Проверка информации",
      description: "Проверка биографий, документов и данных"
    },
    {
      title: "Корпоративные расследования",
      description: "Защита бизнеса, проверка сотрудников и партнеров"
    },
    {
      title: "Личная безопасность",
      description: "Оценка угроз и разработка мер защиты"
    }
  ];

  return (
    <section className="py-12 bg-gradient-to-b from-gray-900 to-gray-800 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-8">
          <span className="inline-block bg-gray-700/40 backdrop-blur-xl border border-gray-500/50 text-gray-200 px-4 py-2 rounded-full text-sm font-medium mb-4">
            Наши услуги
          </span>
          <h2 className="text-2xl font-bold text-white mb-4 px-4">
            Детективные услуги
          </h2>
          <p className="text-sm text-gray-300 max-w-md mx-auto px-4">
            Решаем сложные задачи с гарантированным результатом
          </p>
        </div>

        <div className="grid grid-cols-1 gap-3 mb-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-gray-700/30 backdrop-blur-xl border border-gray-600/30 rounded-xl p-4 hover:bg-gray-600/40 transition-all duration-300"
            >
              <h3 className="text-base font-bold text-white mb-2">
                {service.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a 
            href="tel:+79999999999"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-gray-700/40 to-gray-600/40 text-white rounded-xl transition-all duration-300 font-medium"
          >
            <span className="text-lg mr-2">📞</span>
            Получить консультацию
          </a>
        </div>
      </div>
    </section>
  );
} 