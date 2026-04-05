export function MobileServices() {
  const services = [
    {
      title: "Private Investigations",
      description: "Professional evidence gathering and fact verification",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      )
    },
    {
      title: "Surveillance Operations",
      description: "Discreet 24/7 monitoring with complete confidentiality",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      )
    },
    {
      title: "Missing Persons",
      description: "Fast and effective search across all regions",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      title: "Background Verification",
      description: "Comprehensive checks on documents and identities",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "Corporate Investigations",
      description: "Protect your business, vet employees and partners",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      title: "Infidelity Cases",
      description: "Discreet surveillance and evidence collection",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    }
  ];

  return (
    <section id="services" className="py-14 bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950 relative overflow-hidden">
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-15"></div>
      
      <div className="container mx-auto px-5 relative z-10">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="inline-block text-amber-500/80 text-xs font-medium tracking-[0.3em] uppercase mb-3">
            What We Do
          </span>
          <h2 className="text-2xl font-bold text-neutral-100 mb-3">
            Our Services
          </h2>
          <p className="text-sm text-neutral-400 max-w-xs mx-auto">
            Professional solutions with guaranteed results
          </p>
        </div>

        {/* Services List */}
        <div className="space-y-3">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-800/50 rounded-xl p-4 flex items-start gap-4"
            >
              <div className="w-10 h-10 bg-neutral-800/60 border border-neutral-700/30 rounded-lg flex items-center justify-center text-amber-500/70 flex-shrink-0">
                {service.icon}
              </div>
              <div>
                <h3 className="text-base font-semibold text-neutral-100 mb-1">
                  {service.title}
                </h3>
                <p className="text-neutral-500 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <a 
            href="#contact"
            className="inline-flex items-center gap-2 bg-transparent border border-neutral-700/50 hover:border-amber-600/50 text-neutral-300 px-6 py-3 rounded-lg transition-all duration-300 text-sm font-medium"
          >
            <span>Discuss Your Case</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
