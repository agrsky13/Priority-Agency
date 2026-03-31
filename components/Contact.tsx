export function Contact() {

  return (
    <section id="contact" className="py-10 sm:py-14 md:py-24 bg-gradient-to-br from-neutral-900 to-neutral-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-1/3 w-40 h-40 md:w-80 md:h-80 bg-gradient-to-r from-neutral-400/8 to-neutral-500/8 rounded-full mix-blend-screen filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-1/3 w-40 h-40 md:w-80 md:h-80 bg-gradient-to-r from-neutral-500/6 to-neutral-400/6 rounded-full mix-blend-screen filter blur-xl animate-pulse delay-1000"></div>
      </div>

      {/* Subtle overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/90 to-neutral-950/90"></div>

      <div className="container mx-auto px-4 sm:px-5 relative z-10">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-200 mb-3 md:mb-6 px-1">
            Свяжитесь с нами
          </h2>
        </div>

        <div className="max-w-4xl mx-auto text-center">
          
          {/* Call-to-action and Contact Info */}
          <div className="space-y-7 sm:space-y-8">
            <div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-neutral-200 mb-4">
                Нужны факты?
              </h3>
              <p className="text-[15px] sm:text-lg md:text-xl text-neutral-400 leading-relaxed mb-6 sm:mb-8 px-1">
                Нужна информация о близком человеке или партнёре по бизнесу? Мы соберём факты, а выводы останутся за вами.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6 max-w-md md:max-w-none mx-auto">
              {[
                {
                  icon: "📞",
                  title: "Телефон",
                  value: "+7 999 898 14 39",
                  link: "tel:+79998981439",
                  description: "работаем 24/7",
                  color: "from-blue-500/20 to-cyan-500/20"
                },
                {
                  icon: "✈️",
                  title: "Telegram",
                  value: "@priorityagencyru",
                  link: "https://t.me/priorityagencyru",
                  description: "быстрая связь",
                  color: "from-purple-500/20 to-pink-500/20"
                },
                {
                  icon: "📱",
                  title: "WhatsApp",
                  value: "+7 999 898 14 39",
                  link: "https://wa.me/79998981439",
                  description: "сообщения и звонки",
                  color: "from-green-500/20 to-emerald-500/20"
                }
              ].map((contact, index) => (
                <a
                  key={index}
                  href={contact.link}
                  className={`touch-manipulation group bg-gradient-to-br ${contact.color} backdrop-blur-xl border border-white/15 rounded-2xl p-5 sm:p-6 flex flex-col items-center text-center min-h-[52px] active:scale-[0.99] md:hover:scale-[1.02] shadow-lg shadow-black/20 md:hover:shadow-2xl transition-all duration-300 md:hover:border-white/25`}
                >
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl flex items-center justify-center md:group-hover:scale-110 transition-transform duration-300 mb-3 sm:mb-4">
                    <span className="text-2xl sm:text-3xl">{contact.icon}</span>
                  </div>
                  <h4 className="font-bold text-neutral-100 mb-1.5 text-base sm:text-lg">
                    {contact.title}
                  </h4>
                  <p className="text-neutral-200 font-medium mb-1.5 text-[15px] sm:text-base break-words max-w-full">
                    {contact.value}
                  </p>
                  <p className="text-neutral-400 text-xs sm:text-sm">
                    {contact.description}
                  </p>
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}