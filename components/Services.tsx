
export function Services() {
  const advantages = [
    {
      title: "Профессиональные расследования",
      description: "Опытные детективы с многолетним стажем"
    },
    {
      title: "Полная конфиденциальность",
      description: "Гарантия неразглашения информации"
    },
    {
      title: "Быстрое реагирование",
      description: "Начинаем работу через 2 часа"
    },
    {
      title: "Высокая результативность",
      description: "Успешно завершаем 95% дел"
    }
  ];

  return (
    <section id="services" className="py-16 bg-gradient-to-b from-gray-800 to-gray-900 relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-1/4 w-32 h-32 bg-gradient-to-r from-white/5 to-gray-200/5 rounded-full mix-blend-screen filter blur-3xl"></div>
        <div className="absolute bottom-20 right-1/4 w-32 h-32 bg-gradient-to-r from-gray-100/3 to-white/3 rounded-full mix-blend-screen filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block bg-white/10 backdrop-blur-xl border border-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
            Наши услуги
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Профессиональные<br />
            <span className="bg-gradient-to-r from-gray-200 to-white bg-clip-text text-transparent">
              детективные услуги
            </span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Решаем сложные задачи с гарантированным результатом
          </p>
        </div>

        {/* Advantages Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {advantages.map((advantage, index) => (
            <div 
              key={index}
              className="group bg-gradient-to-br from-gray-700/30 to-gray-600/30 backdrop-blur-xl border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 hover:shadow-xl hover:shadow-white/5 relative overflow-hidden h-48 flex flex-col justify-center"
            >
              <div className="text-center flex flex-col justify-center h-full">
                <h4 className="text-base font-bold text-white mb-2">
                  {advantage.title}
                </h4>
                
                <p className="text-gray-300 text-sm leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}