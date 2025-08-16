import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
    consent: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.consent) {
      alert('Необходимо дать согласие на обработку персональных данных');
      return;
    }
    
    console.log('Form submitted:', formData);
    alert('Заявка отправлена! Мы свяжемся с вами в ближайшее время.');
    setFormData({ name: '', phone: '', message: '', consent: false });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-12 md:py-24 bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-1/3 w-40 h-40 md:w-80 md:h-80 bg-gradient-to-r from-white/8 to-gray-200/8 rounded-full mix-blend-screen filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-1/3 w-40 h-40 md:w-80 md:h-80 bg-gradient-to-r from-gray-100/6 to-white/6 rounded-full mix-blend-screen filter blur-xl animate-pulse delay-1000"></div>
      </div>

      {/* Subtle overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/90 to-gray-800/90"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-8 md:mb-16">
          <div className="inline-block bg-white/10 backdrop-blur-xl border border-white/20 text-white px-4 md:px-6 py-2 md:py-3 rounded-full text-xs md:text-sm font-medium mb-4 md:mb-6">
            Контакты
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6 px-4">
            Свяжитесь с нами
          </h2>
          <p className="text-base md:text-xl text-gray-300 max-w-2xl mx-auto px-4">
            Консультация бесплатна. Конфиденциальность гарантирована.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16">
          
          {/* Contact Methods */}
          <div className="space-y-4 md:space-y-6">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-6 md:mb-8">
              Способы связи
            </h3>
            
            {[
              {
                icon: "📞",
                title: "Телефон",
                value: "+7 (999) 999-99-99",
                link: "tel:+79999999999",
                description: "Звоните круглосуточно"
              },
              {
                icon: "✈️",
                title: "Telegram",
                value: "@detective_agency",
                link: "https://t.me/detective_agency",
                description: "Быстрая связь в мессенджере"
              },
              {
                icon: "📱",
                title: "WhatsApp",
                value: "+7 (999) 999-99-99",
                link: "https://wa.me/79999999999",
                description: "Сообщения и звонки"
              },
              {
                icon: "✉️",
                title: "Email",
                value: "info@detective-agency.ru",
                link: "mailto:info@detective-agency.ru",
                description: "Письменные обращения"
              }
            ].map((contact, index) => (
              <a
                key={index}
                href={contact.link}
                className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl md:rounded-2xl p-4 md:p-6 flex items-center space-x-4 md:space-x-6 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-white/5 block"
              >
                <div className="w-12 h-12 md:w-16 md:h-16 bg-white/10 backdrop-blur-xl border border-white/20 rounded-lg md:rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                  <span className="text-lg md:text-2xl">{contact.icon}</span>
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="font-bold text-white mb-1 text-base md:text-lg">
                    {contact.title}
                  </h4>
                  <p className="text-gray-300 font-medium mb-1 text-sm md:text-base">
                    {contact.value}
                  </p>
                  <p className="text-gray-400 text-xs md:text-sm">
                    {contact.description}
                  </p>
                </div>
              </a>
            ))}
          </div>

          {/* Contact Form */}
          <div className="space-y-6">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-6 md:mb-8">
              Отправить заявку
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Ваше имя"
                  className="w-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl md:rounded-2xl px-4 md:px-6 py-3 md:py-4 text-white placeholder-gray-400 focus:outline-none focus:border-white/30 transition-all duration-300"
                  required
                />
              </div>
              
              <div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Ваш телефон"
                  className="w-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl md:rounded-2xl px-4 md:px-6 py-3 md:py-4 text-white placeholder-gray-400 focus:outline-none focus:border-white/30 transition-all duration-300"
                  required
                />
              </div>
              
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Ваше сообщение"
                  rows={4}
                  className="w-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl md:rounded-2xl px-4 md:px-6 py-3 md:py-4 text-white placeholder-gray-400 focus:outline-none focus:border-white/30 transition-all duration-300 resize-none"
                />
              </div>
              
              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  name="consent"
                  checked={formData.consent}
                  onChange={(e) => setFormData({
                    ...formData,
                    consent: e.target.checked
                  })}
                  className="mt-1 w-4 h-4 bg-white/5 backdrop-blur-xl border border-white/20 rounded focus:ring-2 focus:ring-white/30 focus:ring-offset-2 focus:ring-offset-gray-900"
                  required
                />
                <label className="text-sm text-gray-300 leading-relaxed">
                  Я даю согласие на обработку моих персональных данных в соответствии с{' '}
                  <a href="#" className="text-white hover:text-gray-200 underline transition-colors duration-300">
                    Политикой конфиденциальности
                  </a>
                </label>
              </div>
              
              <button
                type="submit"
                disabled={!formData.consent}
                className={`w-full backdrop-blur-xl border border-white/30 text-white px-6 py-3 rounded-xl transition-all duration-300 font-medium ${
                  formData.consent 
                    ? 'bg-gradient-to-r from-white/20 to-white/10 hover:from-white/30 hover:to-white/20 hover:scale-105' 
                    : 'bg-gray-600/50 cursor-not-allowed opacity-50'
                }`}
              >
                Отправить заявку
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}