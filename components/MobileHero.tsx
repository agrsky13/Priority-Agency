export function MobileHero() {
  return (
    <section className="min-h-[100dvh] bg-neutral-950 relative overflow-hidden">
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-30"></div>
      
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-amber-900/10 to-amber-800/5 rounded-full mix-blend-screen filter blur-[80px]"></div>
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-gradient-to-l from-neutral-700/8 to-neutral-600/4 rounded-full mix-blend-screen filter blur-[60px]"></div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/50 to-transparent"></div>

      <div className="container mx-auto px-5 pt-24 pb-8 relative z-10 flex flex-col min-h-[100dvh]">
        <div className="flex-1 flex flex-col items-center justify-center text-center">
          
          {/* Badge */}
          <div className="mb-6">
            <span className="inline-flex items-center gap-2 bg-neutral-900/80 backdrop-blur-xl border border-neutral-700/50 text-neutral-400 px-4 py-2 rounded-full text-xs font-medium tracking-wider uppercase">
              <span className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-pulse"></span>
              Detective Agency
            </span>
          </div>
          
          {/* Title */}
          <h1 className="mb-4">
            <span className="block text-4xl font-bold tracking-tight text-gold-shimmer leading-none">
              PRIORITY
            </span>
            <span className="block text-4xl font-light tracking-[0.15em] text-neutral-100 mt-1 heading-serif">
              AGENCY
            </span>
          </h1>
          
          {/* Tagline */}
          <p className="text-lg text-neutral-300 mb-3 font-light tracking-wide">
            We Find What Others Miss
          </p>

          {/* Subtitle */}
          <p className="text-sm text-neutral-500 mb-8 max-w-xs leading-relaxed">
            Professional investigative services. Available 24/7.
          </p>
          
          {/* CTA Buttons */}
          <div className="w-full max-w-xs space-y-3 mb-10">
            <a 
              href="tel:+79998981439" 
              className="touch-manipulation w-full min-h-[52px] bg-gradient-to-r from-amber-600/90 to-amber-700/80 text-neutral-950 px-6 py-3.5 rounded-lg transition-all duration-300 flex items-center justify-center shadow-lg shadow-amber-900/30 text-base font-semibold tracking-wide active:scale-[0.98]"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>Call Now</span>
            </a>
            
            <button 
              onClick={() => {
                const contactSection = document.getElementById('services');
                contactSection?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="touch-manipulation w-full min-h-[52px] bg-transparent border border-neutral-700/50 text-neutral-300 px-6 py-3.5 rounded-lg transition-all duration-300 text-base font-medium tracking-wide active:bg-neutral-800/50"
            >
              View Services
            </button>
          </div>

          {/* Stats Card */}
          <div className="w-full max-w-xs">
            <div className="bg-neutral-900/60 backdrop-blur-sm border border-neutral-800/50 rounded-xl p-5">
              <div className="grid grid-cols-3 gap-4 text-center mb-4">
                <div>
                  <div className="text-xl font-bold text-amber-500/90 tabular-nums">100+</div>
                  <div className="text-[10px] text-neutral-500 uppercase tracking-wider">Cases</div>
                </div>
                <div>
                  <div className="text-xl font-bold text-amber-500/90">24/7</div>
                  <div className="text-[10px] text-neutral-500 uppercase tracking-wider">Available</div>
                </div>
                <div>
                  <div className="text-xl font-bold text-amber-500/90">100%</div>
                  <div className="text-[10px] text-neutral-500 uppercase tracking-wider">Success</div>
                </div>
              </div>
              
              {/* Privacy Notice */}
              <div className="border-t border-neutral-800/50 pt-4">
                <div className="flex items-center justify-center gap-2">
                  <svg className="w-4 h-4 text-amber-500/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  <span className="text-xs text-neutral-400">100% Confidential</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="text-center py-6 animate-bounce">
          <svg className="w-5 h-5 mx-auto text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>

      {/* Floating Call Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <a 
          href="tel:+79998981439"
          className="touch-manipulation w-14 h-14 bg-gradient-to-r from-amber-600/90 to-amber-700/80 rounded-full flex items-center justify-center text-neutral-950 shadow-xl shadow-amber-900/30 active:scale-95 transition-transform"
          aria-label="Call now"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        </a>
      </div>
    </section>
  );
}
