
export function Services() {
  const services = [
    {
      title: "Частные расследования",
      description: "Сбор доказательств, проверка информации, помощь в судебных делах.",
      icon: "🔍"
    },
    {
      title: "Выявление измены",
      description: "Наблюдение, сбор доказательств и проверка фактов. Если есть сомнения в верности — мы поможем узнать правду.",
      icon: "💔"
    },
    {
      title: "Поиск людей",
      description: "Пропавшие родственники, свидетели, должники — находим быстро и эффективно.",
      icon: "👥"
    },
    {
      title: "Корпоративные расследования",
      description: "Выявление утечек, проверка сотрудников и партнёров, защита бизнеса.",
      icon: "🏢"
    },
    {
      title: "Проверка информации",
      description: "Документы, факты, личности — мы проверим всё, что вызывает сомнение.",
      icon: "📋"
    },
    {
      title: "Раскрытие двойной жизни",
      description: "Сбор фактов, если у близкого человека могут быть тайные отношения или скрытые связи.",
      icon: "🎭"
    }
  ];

  return (
    <section id="services" className="py-16 bg-gradient-to-b from-neutral-900 to-neutral-950 relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-1/4 w-32 h-32 bg-gradient-to-r from-neutral-400/5 to-neutral-500/5 rounded-full mix-blend-screen filter blur-3xl"></div>
        <div className="absolute bottom-20 right-1/4 w-32 h-32 bg-gradient-to-r from-neutral-500/3 to-neutral-400/3 rounded-full mix-blend-screen filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block bg-neutral-400/10 backdrop-blur-xl border border-neutral-400/20 text-neutral-300 px-4 py-2 rounded-full text-sm font-medium mb-4">
            Услуги
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-300 mb-4">
            Наши услуги
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-gradient-to-br from-neutral-700/30 to-neutral-600/30 backdrop-blur-xl border border-neutral-400/10 rounded-2xl p-6 md:p-8 hover:bg-neutral-400/10 transition-all duration-300 hover:shadow-xl hover:shadow-neutral-400/5 relative overflow-hidden h-full flex flex-col"
            >
              <div className="text-center mb-4">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-neutral-400/10 backdrop-blur-xl border border-neutral-400/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl md:text-3xl">{service.icon}</span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-neutral-300 mb-3">
                  {service.title}
                </h3>
              </div>
              
              <p className="text-neutral-400 text-sm md:text-base leading-relaxed text-center flex-grow">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}