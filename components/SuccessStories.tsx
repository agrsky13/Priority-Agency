export function SuccessStories() {
  const stories = [
    {
      id: 1,
      title: "Corporate Fraud Investigation",
      category: "Corporate",
      duration: "3 weeks",
      outcome: "Recovered $2.4M in embezzled funds",
      description: "Uncovered systematic financial misconduct through meticulous document analysis and surveillance, leading to successful prosecution.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      id: 2,
      title: "Missing Person Located",
      category: "Personal",
      duration: "10 days",
      outcome: "Family reunited after 7 years",
      description: "Successfully traced and located a missing family member through advanced database searches and field investigation.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      id: 3,
      title: "Due Diligence Investigation",
      category: "Business",
      duration: "2 weeks",
      outcome: "Prevented $5M fraudulent investment",
      description: "Comprehensive background verification revealed undisclosed litigation history and false credentials, saving client from major loss.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      id: 4,
      title: "Asset Recovery",
      category: "Legal",
      duration: "6 weeks",
      outcome: "Located hidden assets worth $1.8M",
      description: "Traced concealed assets across multiple jurisdictions for divorce proceedings, ensuring fair settlement for our client.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      )
    }
  ];

  return (
    <section id="success" className="py-16 sm:py-20 md:py-28 bg-neutral-950 relative overflow-hidden">
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-30"></div>
      
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-l from-amber-900/5 to-transparent rounded-full filter blur-[100px]"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-gradient-to-r from-neutral-800/10 to-transparent rounded-full filter blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <span className="inline-block text-amber-500/80 text-xs sm:text-sm font-medium tracking-[0.3em] uppercase mb-4">
            Proven Track Record
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-100 mb-4 md:mb-6 tracking-tight">
            Success Stories
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Every case is handled with the utmost discretion and professionalism. 
            Here are some of our notable achievements.
          </p>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
          {stories.map((story, index) => (
            <div 
              key={story.id}
              className="group relative bg-neutral-900/50 backdrop-blur-sm border border-neutral-800/50 rounded-xl p-6 sm:p-8 hover:border-neutral-700/50 transition-all duration-500 hover:bg-neutral-900/80"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Accent Line */}
              <div className="absolute left-0 top-6 bottom-6 w-0.5 bg-gradient-to-b from-amber-500/80 via-amber-600/40 to-transparent"></div>
              
              {/* Category Badge */}
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center gap-2 text-amber-500/70 text-xs font-medium tracking-wider uppercase">
                  <span className="text-neutral-500">{story.icon}</span>
                  {story.category}
                </span>
                <span className="text-neutral-600 text-xs">{story.duration}</span>
              </div>

              {/* Title */}
              <h3 className="text-xl sm:text-2xl font-semibold text-neutral-100 mb-3 group-hover:text-amber-500/90 transition-colors duration-300">
                {story.title}
              </h3>

              {/* Description */}
              <p className="text-neutral-400 text-sm sm:text-base leading-relaxed mb-5">
                {story.description}
              </p>

              {/* Outcome */}
              <div className="flex items-center gap-2 pt-4 border-t border-neutral-800/50">
                <svg className="w-5 h-5 text-green-500/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-neutral-200 font-medium text-sm sm:text-base">{story.outcome}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Statement */}
        <div className="mt-16 sm:mt-20 text-center">
          <div className="inline-flex items-center gap-3 bg-neutral-900/60 backdrop-blur-sm border border-neutral-800/50 rounded-full px-6 py-3">
            <svg className="w-5 h-5 text-amber-500/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            <span className="text-neutral-300 text-sm sm:text-base">All case details shared with client consent. Names and specifics modified for confidentiality.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
