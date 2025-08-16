import { useState } from 'react';

export function About() {
  const [activeAdvantage, setActiveAdvantage] = useState(0);

  const advantages = [
    {
      title: "Частные расследования",
      description: "Профессиональный поиск информации и сбор доказательств",
      color: "from-gray-400/20 to-gray-600/20"
    },
    {
      title: "Наблюдение и слежка",
      description: "Круглосуточное наблюдение с использованием современных технологий",
      color: "from-gray-400/20 to-gray-600/20"
    },
    {
      title: "Поиск людей",
      description: "Быстрое и эффективное обнаружение пропавших лиц",
      color: "from-gray-400/20 to-gray-600/20"
    }
  ];

  return (
    <section id="about" className="py-12 md:py-24 bg-gradient-to-b from-gray-900 to-gray-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-1/4 w-48 h-48 md:w-96 md:h-96 bg-gradient-to-r from-white/8 to-gray-200/8 rounded-full mix-blend-screen filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-1/4 w-48 h-48 md:w-96 md:h-96 bg-gradient-to-r from-gray-100/6 to-white/6 rounded-full mix-blend-screen filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 md:mb-20">
          <div className="inline-block bg-white/10 backdrop-blur-xl border border-white/20 text-white px-4 md:px-6 py-2 md:py-3 rounded-full text-xs md:text-sm font-medium mb-4 md:mb-6">
            О детективном агентстве
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6 px-4">
            Детективное агентство
            <span className="bg-gradient-to-r from-gray-200 to-white bg-clip-text text-transparent block">
              "PRIORITY"
            </span>
          </h2>
          <p className="text-base md:text-xl text-gray-300 max-w-2xl mx-auto px-4 leading-relaxed">
            Специализируемся на выявлении супружеских измен, фото-видео фиксации и сборе доказательств
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Interactive Advantages */}
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">Основные направления работы</h3>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-12">
            {advantages.map((advantage, index) => (
              <div 
                key={index}
                className={`group cursor-pointer transition-all duration-500 hover:scale-105 ${
                  activeAdvantage === index ? 'scale-105' : ''
                }`}
                onClick={() => setActiveAdvantage(index)}
              >
                <div className={`bg-gradient-to-br ${advantage.color} backdrop-blur-xl border border-white/10 rounded-xl md:rounded-2xl p-4 md:p-6 hover:bg-white/10 transition-all duration-500 hover:shadow-xl hover:shadow-white/5 h-48 flex flex-col justify-center`}>
                  <div className="text-center">
                    <h4 className="text-base md:text-lg font-bold text-white mb-2">
                      {advantage.title}
                    </h4>
                    <p className="text-gray-300 text-xs md:text-sm">
                      {advantage.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Active Advantage Details */}
          <div className="text-center">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl md:rounded-3xl p-6 md:p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                {advantages[activeAdvantage].title}
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                {advantages[activeAdvantage].description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}