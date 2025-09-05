import { useState } from 'react';

interface FormData {
  name: string;
  phone: string;
  message: string;
  consent: boolean;
}

export function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    message: '',
    consent: false
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submit clicked');
    
    // Simple validation
    if (!formData.name || !formData.phone || !formData.consent) {
      alert('Заполните все обязательные поля и дайте согласие на обработку данных');
      return;
    }
    
    // Create form data for Formspree
    const formDataToSend = new FormData();
    formDataToSend.append('name', formData.name);
    formDataToSend.append('phone', formData.phone);
    formDataToSend.append('message', formData.message || '');
    formDataToSend.append('_subject', `Новая заявка от ${formData.name}`);
    formDataToSend.append('_replyto', 'priorityagency@proton.me');
    
    try {
      console.log('Sending to Formspree...');
      const response = await fetch('https://formspree.io/f/xjkeplve', {
        method: 'POST',
        body: formDataToSend
      });
      
      console.log('Response status:', response.status);
      
      if (response.ok) {
        alert('Заявка отправлена! Мы свяжемся с вами в ближайшее время.');
        setFormData({ name: '', phone: '', message: '', consent: false });
      } else {
        alert('Ошибка отправки. Попробуйте позже или позвоните нам.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Ошибка отправки. Попробуйте позже или позвоните нам.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-12 md:py-24 bg-gradient-to-br from-neutral-900 to-neutral-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-1/3 w-40 h-40 md:w-80 md:h-80 bg-gradient-to-r from-neutral-400/8 to-neutral-500/8 rounded-full mix-blend-screen filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-1/3 w-40 h-40 md:w-80 md:h-80 bg-gradient-to-r from-neutral-500/6 to-neutral-400/6 rounded-full mix-blend-screen filter blur-xl animate-pulse delay-1000"></div>
      </div>

      {/* Subtle overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/90 to-neutral-950/90"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-300 mb-4 md:mb-6 px-4">
            Свяжитесь с нами
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 max-w-6xl mx-auto">
          
          {/* Call-to-action and Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-neutral-300 mb-6">
                Нужны факты?
              </h3>
              <p className="text-lg md:text-xl text-neutral-400 leading-relaxed mb-8">
                Нужна информация о близком человеке или партнёре по бизнесу? Мы соберём факты, а выводы останутся за вами.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4 md:space-y-6">
              <h4 className="text-xl md:text-2xl font-bold text-neutral-300 mb-6">
                Способы связи
              </h4>
              
              {[
                {
                  icon: "📞",
                  title: "Телефон",
                  value: "+7 (900) 138-57-80",
                  link: "tel:+79001385780",
                  description: "работаем 24/7"
                },
                {
                  icon: "✈️",
                  title: "Telegram",
                  value: "@dtctv",
                  link: "https://t.me/dtctv",
                  description: "быстрая связь"
                },
                {
                  icon: "📱",
                  title: "WhatsApp",
                  value: "+7 (900) 138-57-80",
                  link: "https://wa.me/79001385780",
                  description: "сообщения и звонки"
                }
              ].map((contact, index) => (
                <a
                  key={index}
                  href={contact.link}
                  className="group bg-neutral-400/5 backdrop-blur-xl border border-neutral-400/10 rounded-xl md:rounded-2xl p-4 md:p-6 flex items-center space-x-4 md:space-x-6 hover:bg-neutral-400/10 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-neutral-400/5 block"
                >
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-neutral-400/10 backdrop-blur-xl border border-neutral-400/20 rounded-lg md:rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    <span className="text-lg md:text-2xl">{contact.icon}</span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-bold text-neutral-300 mb-1 text-base md:text-lg">
                      {contact.title}
                    </h4>
                    <p className="text-neutral-400 font-medium mb-1 text-sm md:text-base">
                      {contact.value}
                    </p>
                    <p className="text-neutral-500 text-xs md:text-sm">
                      {contact.description}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="space-y-6">
            <h3 className="text-xl md:text-2xl font-bold text-neutral-300 mb-6 md:mb-8">
              Получить бесплатную консультацию
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div>
                <label className="block text-neutral-400 text-sm font-medium mb-2">
                  Ваше имя
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Введите ваше имя"
                  className="w-full bg-neutral-400/5 backdrop-blur-xl border border-neutral-400/10 rounded-xl md:rounded-2xl px-4 md:px-6 py-3 md:py-4 text-neutral-300 placeholder-neutral-500 focus:outline-none focus:border-neutral-400/30 transition-all duration-300"
                  required
                />
              </div>
              
              <div>
                <label className="block text-neutral-400 text-sm font-medium mb-2">
                  Телефон
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Введите ваш телефон"
                  className="w-full bg-neutral-400/5 backdrop-blur-xl border border-neutral-400/10 rounded-xl md:rounded-2xl px-4 md:px-6 py-3 md:py-4 text-neutral-300 placeholder-neutral-500 focus:outline-none focus:border-neutral-400/30 transition-all duration-300"
                  required
                />
              </div>
              
              <div>
                <label className="block text-neutral-400 text-sm font-medium mb-2">
                  Сообщение
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Опишите вашу ситуацию"
                  rows={4}
                  className="w-full bg-neutral-400/5 backdrop-blur-xl border border-neutral-400/10 rounded-xl md:rounded-2xl px-4 md:px-6 py-3 md:py-4 text-neutral-300 placeholder-neutral-500 focus:outline-none focus:border-neutral-400/30 transition-all duration-300 resize-none"
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
                  className="mt-1 w-4 h-4 bg-neutral-400/5 backdrop-blur-xl border border-neutral-400/20 rounded focus:ring-2 focus:ring-neutral-400/30 focus:ring-offset-2 focus:ring-offset-neutral-950"
                  required
                />
                <label className="text-sm text-neutral-400 leading-relaxed">
                  Я даю согласие на обработку моих персональных данных в соответствии с{' '}
                  <a href="#" className="text-neutral-300 hover:text-neutral-400 underline transition-colors duration-300">
                    Политикой конфиденциальности
                  </a>
                </label>
              </div>

              
              <button
                type="submit"
                disabled={!formData.consent}
                className={`w-full backdrop-blur-xl border border-neutral-400/30 text-neutral-300 px-6 py-3 rounded-xl transition-all duration-300 font-medium ${
                  formData.consent
                    ? 'bg-gradient-to-r from-neutral-400/20 to-neutral-400/10 hover:from-neutral-400/30 hover:to-neutral-400/20 hover:scale-105' 
                    : 'bg-neutral-600/50 cursor-not-allowed opacity-50'
                }`}
              >
                Получить бесплатную консультацию
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}