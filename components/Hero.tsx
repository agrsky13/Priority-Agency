export function Hero() {
  return (
    <section className="min-h-[100dvh] min-h-[100svh] bg-neutral-950 relative overflow-hidden flex flex-col">
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-40"></div>
      
      {/* Elegant Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-neutral-900/50 via-neutral-950 to-neutral-900/30"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 md:w-[500px] md:h-[500px] bg-gradient-to-r from-amber-900/10 to-amber-800/5 rounded-full mix-blend-screen filter blur-[100px]"></div>
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 md:w-[400px] md:h-[400px] bg-gradient-to-l from-neutral-700/8 to-neutral-600/4 rounded-full mix-blend-screen filter blur-[80px]"></div>
      </div>

      {/* Vertical Lines Decoration */}
      <div className="absolute inset-0 flex justify-between px-8 md:px-16 lg:px-24 pointer-events-none">
        <div className="w-px h-full bg-gradient-to-b from-transparent via-neutral-700/20 to-transparent"></div>
        <div className="w-px h-full bg-gradient-to-b from-transparent via-neutral-700/10 to-transparent hidden md:block"></div>
        <div className="w-px h-full bg-gradient-to-b from-transparent via-neutral-700/10 to-transparent hidden lg:block"></div>
        <div className="w-px h-full bg-gradient-to-b from-transparent via-neutral-700/20 to-transparent"></div>
      </div>

      {/* Bottom Gradient Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-neutral-950 to-transparent"></div>

      <div className="container mx-auto px-4 sm:px-6 pt-28 md:pt-36 pb-16 md:pb-24 relative z-10 flex flex-col flex-1 justify-center">
        <div className="flex flex-col items-center text-center w-full max-w-5xl mx-auto">
          
          {/* Pre-title Badge */}
          <div className="mb-8 md:mb-10">
            <span className="inline-flex items-center gap-2 bg-neutral-900/80 backdrop-blur-xl border border-neutral-700/50 text-neutral-400 px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium tracking-wider uppercase">
              <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></span>
              Detective Agency for Complex Cases
            </span>
          </div>
          
          {/* Main Title */}
          <h1 className="mb-6 md:mb-8">
            <span className="block text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-gold-shimmer leading-none">
              PRIORITY
            </span>
            <span className="block text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-light tracking-[0.2em] text-neutral-100 mt-2 heading-serif">
              AGENCY
            </span>
          </h1>
          
          {/* Tagline */}
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-neutral-300 mb-4 md:mb-6 max-w-3xl mx-auto leading-relaxed font-light tracking-wide">
            We Find What Others Miss
          </p>

          {/* Subtitle */}
          <p className="text-sm sm:text-base md:text-lg text-neutral-500 mb-10 md:mb-14 max-w-2xl mx-auto leading-relaxed">
            Professional investigative services with discretion and precision. 
            Hundreds of cases solved. Available 24/7.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center w-full max-w-md sm:max-w-none mx-auto">
            <a 
              href="#contact" 
              className="group touch-manipulation min-h-[56px] bg-gradient-to-r from-amber-600/90 to-amber-700/80 hover:from-amber-500 hover:to-amber-600 text-neutral-950 px-8 md:px-10 py-4 md:py-5 rounded-lg transition-all duration-300 flex items-center justify-center shadow-lg shadow-amber-900/30 hover:shadow-xl hover:shadow-amber-800/40 text-base md:text-lg font-semibold tracking-wide"
            >
              <span>Get Free Consultation</span>
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a 
              href="#services" 
              className="touch-manipulation min-h-[56px] bg-transparent border border-neutral-600/50 hover:border-neutral-500 text-neutral-300 hover:text-neutral-100 px-8 md:px-10 py-4 md:py-5 rounded-lg transition-all duration-300 flex items-center justify-center text-base md:text-lg font-medium tracking-wide hover:bg-neutral-800/30"
            >
              <span>View Our Services</span>
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="mt-16 md:mt-24 animate-bounce">
            <span className="text-neutral-600 text-xs tracking-[0.3em] uppercase mb-3 block">Scroll to Reveal</span>
            <svg className="w-6 h-6 mx-auto text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>

      {/* Stats Bar at Bottom */}
      <div className="relative z-10 border-t border-neutral-800/50 bg-neutral-950/80 backdrop-blur-xl">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-neutral-800/50">
            {[
              { number: "100+", label: "Cases Solved", sublabel: "Private & Corporate" },
              { number: "24/7", label: "Always Available", sublabel: "Immediate Response" },
              { number: "100%", label: "Success Rate", sublabel: "Every Case Completed" },
              { number: "15+", label: "Years Experience", sublabel: "Professional Team" }
            ].map((stat, index) => (
              <div 
                key={index}
                className="py-6 md:py-8 px-4 md:px-8 text-center group hover:bg-neutral-900/50 transition-colors duration-300"
              >
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-amber-500/90 mb-1 tabular-nums">
                  {stat.number}
                </h3>
                <p className="text-neutral-300 font-medium text-xs sm:text-sm md:text-base mb-0.5">{stat.label}</p>
                <p className="text-neutral-600 text-[10px] sm:text-xs hidden sm:block">{stat.sublabel}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Action Button */}
      <div className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-4 sm:right-6 z-50">
        <button 
          type="button"
          className="touch-manipulation w-12 h-12 bg-neutral-900/95 backdrop-blur-xl border border-neutral-700/50 rounded-full flex items-center justify-center text-neutral-400 hover:text-neutral-200 active:scale-95 hover:scale-110 transition-all duration-300 shadow-lg"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Back to top"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      </div>
    </section>
  );
}
