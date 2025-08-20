import { useState } from 'react';

export function About() {
  return (
    <section id="about" className="py-12 md:py-24 bg-gradient-to-b from-neutral-900 to-neutral-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-1/4 w-48 h-48 md:w-96 md:h-96 bg-gradient-to-r from-neutral-400/8 to-neutral-500/8 rounded-full mix-blend-screen filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-1/4 w-48 h-48 md:w-96 md:h-96 bg-gradient-to-r from-neutral-500/6 to-neutral-400/6 rounded-full mix-blend-screen filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-300 mb-4 md:mb-6 px-4">
            Хотите узнать правду?
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main Content */}
          <div className="text-center mb-12">
            <p className="text-lg md:text-xl lg:text-2xl text-neutral-400 leading-relaxed mb-8 px-4">
              Мы аккуратно и незаметно фиксируем встречи, действия и контакты.
            </p>
            <p className="text-base md:text-lg text-neutral-400 leading-relaxed mb-8 px-4">
              Вы получаете подробные фото и видеоматериалы, чтобы опираться не на догадки, а на факты.
            </p>
          </div>

          {/* Trust Enhancement */}
          <div className="text-center">
            <div className="bg-neutral-400/5 backdrop-blur-xl border border-neutral-400/10 rounded-2xl md:rounded-3xl p-6 md:p-8 max-w-3xl mx-auto">
              <h3 className="text-xl md:text-2xl font-bold text-neutral-300 mb-4">
                Вся работа ведётся строго конфиденциально и законно
              </h3>
              <p className="text-neutral-400 text-base md:text-lg leading-relaxed">
                Никто, кроме вас, не узнает о расследовании.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}