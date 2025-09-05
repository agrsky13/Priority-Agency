export function MobileCompactContact() {
  return (
    <section className="py-12 bg-gradient-to-b from-gray-800 to-gray-950 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-8">
          <span className="inline-block bg-gray-700/40 backdrop-blur-xl border border-gray-500/50 text-gray-200 px-4 py-2 rounded-full text-sm font-medium mb-4">
            Связаться с нами
          </span>
          <h2 className="text-2xl font-bold text-white mb-4 px-4">
            Получите консультацию
          </h2>
          <p className="text-sm text-gray-300 max-w-md mx-auto px-4">
            Конфиденциальность гарантирована
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid grid-cols-2 gap-3 mb-8">
          <a 
            href="tel:+79001385780"
            className="bg-gray-700/30 backdrop-blur-xl border border-gray-600/30 rounded-lg p-3 text-center hover:bg-gray-600/40 transition-all duration-300"
          >
            <div className="text-xl mb-1">📞</div>
            <div className="text-white font-medium text-sm">Позвонить</div>
            <div className="text-gray-400 text-xs">+7 (900) 138-57-80</div>
          </a>
          
          <a 
            href="https://wa.me/79001385780"
            className="bg-gray-700/30 backdrop-blur-xl border border-gray-600/30 rounded-lg p-3 text-center hover:bg-gray-600/40 transition-all duration-300"
          >
            <div className="text-xl mb-1">💬</div>
            <div className="text-white font-medium text-sm">WhatsApp</div>
            <div className="text-gray-400 text-xs">Написать</div>
          </a>
        </div>

        <div className="text-center text-gray-400 text-sm">
          <p>✈️ <a href="https://t.me/dtctv" className="text-blue-400 hover:text-blue-300">@dtctv</a></p>
          <p>✉️ <a href="mailto:priorityagency@proton.me" className="text-blue-400 hover:text-blue-300">priorityagency@proton.me</a></p>
        </div>
      </div>
    </section>
  );
}