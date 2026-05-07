import React, { useEffect, useRef, useState } from 'react';
import { Target, ShieldCheck, Maximize, Settings2, ArrowRight } from 'lucide-react';

// You can rename this to 'OurGoalSection' when importing it into your main project.
export default function OurGoal() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (sectionRef.current) observer.unobserve(sectionRef.current);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const features = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-white" />,
      title: "Reliable",
      description: "Built for maximum uptime and stability.",
      delay: "delay-[300ms]"
    },
    {
      icon: <Maximize className="w-6 h-6 text-white" />,
      title: "Scalable",
      description: "Systems that grow seamlessly with your business.",
      delay: "delay-[500ms]"
    },
    {
      icon: <Settings2 className="w-6 h-6 text-white" />,
      title: "Easy to Maintain",
      description: "Clean architecture for simplified future operations.",
      delay: "delay-[700ms]"
    }
  ];

  return (
    <section ref={sectionRef} className="relative py-20 lg:py-32 bg-gradient-to-br from-[#4250E7] to-[#807DFE] overflow-hidden font-sans">
      
      {/* Professional Tech-Grid Background */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.15]"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.2) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      ></div>

      {/* Subtle Lighting Accent */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center">
          
          {/* Left Column: The Goal Statement */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Minimalist Section Badge */}
            <div className={`transition-all duration-1000 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'} inline-flex items-center gap-2 mb-8`}>
              <div className="w-10 h-10 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center backdrop-blur-sm">
                <Target className="w-5 h-5 text-white" />
              </div>
              <span className="text-sm font-semibold tracking-widest uppercase text-white/90">Our Primary Goal</span>
            </div>

            {/* Bold, Authoritative Headline */}
            <h2 className={`transition-all duration-1000 delay-100 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'} text-4xl sm:text-5xl lg:text-6xl font-semibold text-white leading-[1.15] mb-8 tracking-tight`}>
              To become a trusted technology partner for businesses in <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60">Thailand and beyond.</span>
            </h2>

            {/* Divider Line */}
            <div className={`transition-all duration-1000 delay-300 ease-out transform ${isVisible ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'} origin-left h-px w-24 bg-white/30 mb-8`}></div>

            <p className={`transition-all duration-1000 delay-400 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'} text-lg sm:text-xl text-white/80 leading-relaxed max-w-2xl`}>
              We are committed to delivering solutions that set the foundation for your success.
            </p>
          </div>

          {/* Right Column: The 3 Pillars (Reliable, Scalable, Maintainable) */}
          <div className="lg:col-span-5 flex flex-col gap-5 relative">
            
            {/* Decorative background glow for the list */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[120%] bg-white/5 blur-2xl rounded-full pointer-events-none -z-10"></div>

            {features.map((feature, index) => (
              <div 
                key={index}
                className={`transition-all duration-1000 ease-out transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'} ${feature.delay} group flex items-center gap-5 p-5 sm:p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 hover:shadow-lg hover:shadow-black/5 transition-all cursor-default`}
              >
                {/* Icon Container */}
                <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center shrink-0 border border-white/5 group-hover:scale-110 group-hover:bg-white/20 transition-all duration-300">
                  {feature.icon}
                </div>
                
                {/* Text Content */}
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-1 tracking-wide">
                    {feature.title}
                  </h3>
                  {/* Subtle contextual text to make it look professional */}
                  <p className="text-sm text-white/60 font-medium">
                    {feature.description}
                  </p>
                </div>

                {/* Micro interaction arrow */}
                <ArrowRight className="w-5 h-5 text-white/0 -translate-x-4 group-hover:text-white/40 group-hover:translate-x-0 transition-all duration-300" />
              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}