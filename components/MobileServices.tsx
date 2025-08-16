import { useState } from 'react';

export function MobileServices() {
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
      description: "Быстрый и эффективный поиск пропавших людей по всей России"
    },
    {
      title: "Проверка информации",
      description: "Проверка биографий, документов и верификация данных"
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
    <section id="services" className="py-16 bg-gradient-to-b from-gray-900 to-gray-800 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block bg-white/10 backdrop-blur-xl border border-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            Наши услуги
          </span>
          <h2 className="text-3xl font-bold text-white mb-4 px-4">
            Детективные услуги
          </h2>
          <p className="text-base text-gray-300 max-w-md mx-auto px-4">
            Решаем сложные задачи с гарантированным результатом
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all duration-300"
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

        <div className="text-center mt-8">
          <a 
            href="tel:+79999999999"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600/80 to-cyan-600/80 hover:from-blue-500 hover:to-cyan-500 text-white rounded-xl transition-all duration-300 hover:scale-105 font-medium"
          >
            <span className="text-lg mr-2">📞</span>
            Получить консультацию
          </a>
        </div>
      </div>
    </section>
  );
} 