export function About() {
  const features = [
    {
      title: "Complete Discretion",
      description: "Your case remains confidential. No information is ever shared without your explicit consent.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      )
    },
    {
      title: "Legal Compliance",
      description: "All investigations are conducted within legal boundaries, ensuring evidence is court-admissible.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
        </svg>
      )
    },
    {
      title: "Expert Team",
      description: "Experienced professionals with backgrounds in law enforcement, intelligence, and legal fields.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      )
    }
  ];

  return (
    <section id="about" className="py-16 sm:py-20 md:py-28 bg-neutral-950 relative overflow-hidden">
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-20"></div>
      
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-gradient-to-r from-amber-900/5 to-transparent rounded-full filter blur-[100px]"></div>
        <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-gradient-to-l from-neutral-800/10 to-transparent rounded-full filter blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
          
          {/* Left Column - Content */}
          <div className="order-2 lg:order-1">
            <span className="inline-block text-amber-500/80 text-xs sm:text-sm font-medium tracking-[0.3em] uppercase mb-4">
              About Us
            </span>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-100 mb-6 tracking-tight leading-tight">
              Seeking the Truth?
              <span className="block text-neutral-400 text-2xl sm:text-3xl md:text-4xl font-light mt-2">
                We Deliver Facts.
              </span>
            </h2>

            <p className="text-neutral-300 text-base sm:text-lg leading-relaxed mb-6">
              We carefully and discreetly document meetings, actions, and contacts. 
              You receive detailed photographic and video evidence to base decisions on facts, not suspicions.
            </p>

            <p className="text-neutral-400 text-sm sm:text-base leading-relaxed mb-8">
              With over 15 years of combined experience and hundreds of successfully resolved cases, 
              our team brings unmatched expertise to every investigation. Whether personal or corporate, 
              we approach each case with the same level of dedication and professionalism.
            </p>

            {/* Key Features */}
            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-neutral-900/80 border border-neutral-800/50 rounded-lg flex items-center justify-center text-amber-500/70">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-neutral-200 font-semibold mb-1">{feature.title}</h4>
                    <p className="text-neutral-500 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <a 
              href="#contact"
              className="inline-flex items-center gap-2 text-amber-500/90 hover:text-amber-400 font-medium transition-colors duration-300 group"
            >
              <span>Start Your Investigation</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* Right Column - Visual Element */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              {/* Main Card */}
              <div className="bg-neutral-900/60 backdrop-blur-sm border border-neutral-800/50 rounded-2xl p-8 sm:p-10 relative overflow-hidden">
                {/* Accent Gradient */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-600/80 via-amber-500/60 to-amber-600/80"></div>
                
                {/* Icon */}
                <div className="w-16 h-16 bg-neutral-800/60 border border-neutral-700/40 rounded-xl flex items-center justify-center mb-6 text-amber-500/80">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-neutral-100 mb-4">
                  All Work is Conducted Confidentially and Legally
                </h3>
                
                <p className="text-neutral-400 text-base leading-relaxed mb-6">
                  No one besides you will know about the investigation. 
                  Your privacy is our absolute priority.
                </p>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 pt-6 border-t border-neutral-800/50">
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-amber-500/90 mb-1">100%</div>
                    <div className="text-neutral-500 text-xs sm:text-sm">Confidential</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-amber-500/90 mb-1">24/7</div>
                    <div className="text-neutral-500 text-xs sm:text-sm">Available</div>
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-amber-600/90 text-neutral-950 rounded-xl px-4 py-2 sm:px-6 sm:py-3 shadow-lg">
                <span className="text-sm sm:text-base font-bold">Trusted Since 2010</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
