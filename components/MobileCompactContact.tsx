import { useState } from 'react';

interface MobileCompactContactProps {
  setCurrentPage: (page: string) => void;
}

export function MobileCompactContact({ setCurrentPage }: MobileCompactContactProps) {
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
            href="tel:+79999999999"
            className="bg-gray-700/30 backdrop-blur-xl border border-gray-600/30 rounded-lg p-3 text-center hover:bg-gray-600/40 transition-all duration-300"
          >
            <div className="text-xl mb-1">📞</div>
            <div className="text-white font-medium text-sm">Позвонить</div>
            <div className="text-gray-400 text-xs">+7 (999) 999-99-99</div>
          </a>
          
          <a 
            href="https://wa.me/79999999999"
            className="bg-gray-700/30 backdrop-blur-xl border border-gray-600/30 rounded-lg p-3 text-center hover:bg-gray-600/40 transition-all duration-300"
          >
            <div className="text-xl mb-1">💬</div>
            <div className="text-white font-medium text-sm">WhatsApp</div>
            <div className="text-gray-400 text-xs">Написать</div>
          </a>
        </div>

        {/* Simple Form */}
        <div className="bg-gray-700/30 backdrop-blur-xl border border-gray-600/30 rounded-lg p-5">
          <h3 className="text-lg font-bold text-white mb-4 text-center">
            Оставьте заявку
          </h3>
          
          <form onSubmit={handleSubmit} className="space-y-3">
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Ваше имя"
                className="w-full bg-gray-800/30 border border-gray-600/30 rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-gray-500/50 text-sm"
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
                className="w-full bg-gray-800/30 border border-gray-600/30 rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-gray-500/50 text-sm"
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
                className="w-full bg-gray-800/30 border border-gray-600/30 rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-gray-500/50 resize-none text-sm"
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-gray-700/40 to-gray-600/40 text-white px-5 py-3 rounded-lg transition-all duration-300 font-medium text-sm"
            >
              Отправить заявку
            </button>
          </form>
        </div>
      </div>
    </section>
  );
} 