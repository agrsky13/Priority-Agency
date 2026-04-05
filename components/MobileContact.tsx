export function MobileContact() {
  return (
    <section id="contact" className="py-14 bg-gradient-to-b from-neutral-900 to-neutral-950 relative overflow-hidden">
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-15"></div>
      
      <div className="container mx-auto px-5 relative z-10">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="inline-block text-amber-500/80 text-xs font-medium tracking-[0.3em] uppercase mb-3">
            Get In Touch
          </span>
          <h2 className="text-2xl font-bold text-neutral-100 mb-3">
            Contact Us
          </h2>
          <p className="text-sm text-neutral-400 max-w-xs mx-auto">
            First consultation is free. 100% confidential.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="space-y-3 mb-8">
          <a 
            href="tel:+79998981439"
            className="flex items-center gap-4 bg-gradient-to-br from-blue-600/15 to-cyan-600/10 backdrop-blur-sm border border-neutral-800/50 rounded-xl p-4 active:scale-[0.99] transition-all duration-300"
          >
            <div className="w-12 h-12 bg-neutral-900/60 border border-neutral-800/50 rounded-lg flex items-center justify-center text-neutral-400">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div className="flex-1">
              <div className="text-neutral-100 font-semibold mb-0.5">Phone</div>
              <div className="text-neutral-400 text-sm">+7 999 898 14 39</div>
            </div>
            <div className="text-neutral-600 text-xs">24/7</div>
          </a>
          
          <a 
            href="https://wa.me/79998981439"
            className="flex items-center gap-4 bg-gradient-to-br from-emerald-600/15 to-green-600/10 backdrop-blur-sm border border-neutral-800/50 rounded-xl p-4 active:scale-[0.99] transition-all duration-300"
          >
            <div className="w-12 h-12 bg-neutral-900/60 border border-neutral-800/50 rounded-lg flex items-center justify-center text-neutral-400">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <div className="flex-1">
              <div className="text-neutral-100 font-semibold mb-0.5">WhatsApp</div>
              <div className="text-neutral-400 text-sm">+7 999 898 14 39</div>
            </div>
            <svg className="w-5 h-5 text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>

          <a 
            href="https://t.me/priorityagencyru"
            className="flex items-center gap-4 bg-gradient-to-br from-violet-600/15 to-purple-600/10 backdrop-blur-sm border border-neutral-800/50 rounded-xl p-4 active:scale-[0.99] transition-all duration-300"
          >
            <div className="w-12 h-12 bg-neutral-900/60 border border-neutral-800/50 rounded-lg flex items-center justify-center text-neutral-400">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </div>
            <div className="flex-1">
              <div className="text-neutral-100 font-semibold mb-0.5">Telegram</div>
              <div className="text-neutral-400 text-sm">@priorityagencyru</div>
            </div>
            <svg className="w-5 h-5 text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>

        {/* Main CTA */}
        <div className="bg-neutral-900/60 backdrop-blur-sm border border-neutral-800/50 rounded-xl p-6 text-center">
          <h3 className="text-lg font-bold text-neutral-100 mb-2">
            Ready to Uncover the Truth?
          </h3>
          <p className="text-sm text-neutral-500 mb-5 leading-relaxed">
            Contact us for a confidential, no-obligation consultation.
          </p>

          <div className="grid grid-cols-2 gap-3">
            <a 
              href="tel:+79998981439"
              className="touch-manipulation flex items-center justify-center gap-2 bg-gradient-to-r from-amber-600/90 to-amber-700/80 text-neutral-950 py-3 rounded-lg font-semibold text-sm"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call
            </a>
            <a 
              href="https://wa.me/79998981439"
              className="touch-manipulation flex items-center justify-center gap-2 bg-emerald-800/50 text-emerald-50 py-3 rounded-lg font-medium text-sm border border-emerald-600/30"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              WhatsApp
            </a>
          </div>

          {/* Trust Indicator */}
          <div className="flex items-center justify-center gap-2 mt-5 pt-5 border-t border-neutral-800/50">
            <svg className="w-4 h-4 text-amber-500/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            <span className="text-xs text-neutral-500">Your inquiry is 100% confidential</span>
          </div>
        </div>
      </div>
    </section>
  );
}
