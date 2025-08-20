import { useState } from 'react';

export function MobileContact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Заявка отправлена! Мы свяжемся с вами в ближайшее время.');
    setFormData({ name: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
        <div className="grid grid-cols-2 gap-4 mb-8">
          <a 
            href="tel:+79999999999"
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-4 text-center hover:bg-white/10 transition-all duration-300"
          >
            <div className="text-2xl mb-2">📞</div>
            <div className="text-white font-medium text-sm">Позвонить</div>
            <div className="text-gray-400 text-xs">+7 (999) 999-99-99</div>
          </a>
          
          <a 
            href="https://wa.me/79999999999"
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-4 text-center hover:bg-white/10 transition-all duration-300"
          >
            <div className="text-2xl mb-2">💬</div>
            <div className="text-white font-medium text-sm">WhatsApp</div>
            <div className="text-gray-400 text-xs">Написать</div>
          </a>
        </div>

        {/* Simple Form */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
          <h3 className="text-xl font-bold text-white mb-4 text-center">
            Получить бесплатную консультацию
          </h3>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Ваше имя"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-white/30"
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
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-white/30"
                required
              />
            </div>
            
            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Опишите вашу ситуацию"
                rows={3}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-white/30 resize-none"
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600/80 to-cyan-600/80 hover:from-blue-500 hover:to-cyan-500 text-white px-6 py-3 rounded-xl transition-all duration-300 font-medium"
            >
              Получить бесплатную консультацию
            </button>
          </form>
        </div>
      </div>
    </section>
  );
} 