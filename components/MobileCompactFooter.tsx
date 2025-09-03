export function MobileCompactFooter() {
  return (
    <footer className="bg-gradient-to-br from-black/40 to-gray-900/40 backdrop-blur-xl border-t border-white/20 py-8">
      <div className="container px-4">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-xl border border-blue-400/30 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">V</span>
            </div>
            <div>
              <h3 className="text-base font-bold text-white tracking-wide text-center">
                VIDAL AGENCY
              </h3>
              <p className="text-gray-400 text-sm text-center">Детективные услуги</p>
            </div>
          </div>
          
          <div className="flex justify-center space-x-6 mb-6">
            <a 
              href="tel:+79999999999"
              className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
            >
              📞 +7 (999) 999-99-99
            </a>
            <a 
              href="mailto:info@detective-agency.ru"
              className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
            >
              ✉️ info@detective-agency.ru
            </a>
          </div>
          
          <div className="flex justify-center space-x-4 mb-6">
            <a 
              href="https://t.me/detective_agency"
              className="w-10 h-10 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-xl border border-blue-400/30 rounded-xl flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg"
            >
              <span className="text-base">✈️</span>
            </a>
            <a 
              href="https://wa.me/79999999999"
              className="w-10 h-10 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-xl border border-blue-400/30 rounded-xl flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg"
            >
              <span className="text-base">📱</span>
            </a>
          </div>
          
          <div className="text-gray-400 text-sm space-y-1">
            <p>© 2024 VIDAL AGENCY. Все права защищены.</p>
            <p>Лицензированное детективное агентство</p>
            <p>Конфиденциальность гарантирована</p>
          </div>
        </div>
      </div>
    </footer>
  );
} 