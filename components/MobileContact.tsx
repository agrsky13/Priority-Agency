export function MobileContact() {

  return (
    <section id="contact" className="py-16 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block bg-white/10 backdrop-blur-xl border border-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            Связаться с нами
          </span>
          <h2 className="text-3xl font-bold text-white mb-4 px-4">
            Получите консультацию
          </h2>
          <p className="text-base text-gray-300 max-w-md mx-auto px-4">
            Конфиденциальность гарантирована
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 gap-4 mb-8">
          <a 
            href="tel:+79998981439"
            className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-xl border border-white/20 rounded-2xl p-4 text-center hover:scale-105 hover:shadow-xl transition-all duration-300"
          >
            <div className="text-3xl mb-2">📞</div>
            <div className="text-white font-bold text-lg mb-1">Телефон</div>
            <div className="text-gray-300 font-medium mb-1">+7 999 898 14 39</div>
            <div className="text-gray-400 text-sm">работаем 24/7</div>
          </a>
          
          <a 
            href="https://wa.me/79998981439"
            className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-xl border border-white/20 rounded-2xl p-4 text-center hover:scale-105 hover:shadow-xl transition-all duration-300"
          >
            <div className="text-3xl mb-2">📱</div>
            <div className="text-white font-bold text-lg mb-1">WhatsApp</div>
            <div className="text-gray-300 font-medium mb-1">+7 999 898 14 39</div>
            <div className="text-gray-400 text-sm">сообщения и звонки</div>
          </a>

          <a 
            href="https://t.me/priorityagencyru"
            className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-xl border border-white/20 rounded-2xl p-4 text-center hover:scale-105 hover:shadow-xl transition-all duration-300"
          >
            <div className="text-3xl mb-2">✈️</div>
            <div className="text-white font-bold text-lg mb-1">Telegram</div>
            <div className="text-gray-300 font-medium mb-1">@priorityagencyru</div>
            <div className="text-gray-400 text-sm">быстрая связь</div>
          </a>
        </div>

      </div>
    </section>
  );
} 