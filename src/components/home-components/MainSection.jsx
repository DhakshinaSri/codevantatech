import React, { useEffect, useRef, useState } from 'react';
import { Lightbulb, Route, Users, Puzzle, Sparkles } from 'lucide-react';

// You can rename this to 'ApproachSection' when importing it into your main project.
export default function App() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    // Set up intersection observer to trigger animations on scroll
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Optional: unobserve after triggering once
          if (sectionRef.current) observer.unobserve(sectionRef.current);
        }
      },
      { threshold: 0.2 } // Triggers when 20% of the section is visible
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
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Clear Vision",
      description: "We help shape your initial idea into a real, usable platform.",
      delay: "delay-[300ms]",
      position: "translate-x-0 sm:-translate-x-4",
    },
    {
      icon: <Route className="w-6 h-6" />,
      title: "Step-by-Step Guidance",
      description: "Whether a startup or enterprise, we guide you through every phase.",
      delay: "delay-[500ms]",
      position: "translate-x-0 sm:translate-x-8 z-10",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "User-Centric",
      description: "Technically strong solutions built for your team and customers.",
      delay: "delay-[700ms]",
      position: "translate-x-0 sm:-translate-x-4",
    }
  ];

  return (
    <section ref={sectionRef} className="relative py-20 sm:py-22 bg-white overflow-hidden font-sans">
      
      {/* Subtle Background Gradients */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-[#807DFE]/5 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#4250E7]/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">
          
          {/* Left Content Area (Text) */}
          <div className="flex flex-col justify-center max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">
            
            {/* Section Tag */}
            <div className={`transition-all duration-1000 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} flex items-center justify-center lg:justify-start gap-2 mb-6`}>
              <Sparkles className="w-5 h-5 text-[#807DFE]" />
              <span className="text-sm font-bold tracking-wider uppercase text-[#4250E7]">Our Approach</span>
            </div>

            {/* Main Content */}
            <h2 className={`transition-all duration-1000 delay-100 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-8`}>
              From Ideas to <br className="hidden sm:block lg:hidden" />
              <span className="relative whitespace-nowrap">
                <span className="relative z-10 bg-clip-text text-transparent bg-[#807DFE]">Real-World Solutions</span>
              </span>
            </h2>

            <p className={`transition-all duration-1000 delay-200 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} text-lg sm:text-xl text-gray-600 leading-relaxed mb-6`}>
              Every successful product starts with a clear idea. At CodevantaTech, we help you shape that idea into something real and usable. Whether you are a startup launching your first platform or an established business looking to upgrade your systems, we guide you step by step.
            </p>

            <div className={`transition-all duration-1000 delay-300 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative overflow-hidden group hover:shadow-[0_8px_30px_rgba(66,80,231,0.08)] transition-shadow duration-500`}>
              {/* Decorative accent inside the box */}
              <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-[#4250E7] to-[#807DFE] opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed italic relative z-10">
                "We focus on building solutions that are not only technically strong but also easy for your team and customers to use. Our goal is to ensure that technology works for you—not the other way around."
              </p>
            </div>
          </div>

          {/* Right Content Area (Cascading Cards) */}
          <div className="relative w-full max-w-lg mx-auto lg:max-w-none lg:mx-0 flex flex-col gap-4 sm:gap-6 mt-8 lg:mt-0 py-10">
            
            {/* Connecting Line behind cards (Desktop only) */}
            <div className={`hidden sm:block absolute left-12 top-20 bottom-20 w-0.5 bg-gradient-to-b from-[#4250E7]/20 via-[#807DFE]/20 to-transparent transition-all duration-1000 delay-500 ease-out ${isVisible ? 'h-full opacity-100' : 'h-0 opacity-0'}`}></div>

            {features.map((feature, index) => (
              <div 
                key={index}
                className={`transition-all duration-1000 ease-out transform 
                  ${isVisible ? `translate-y-0 opacity-100 ${feature.position}` : 'translate-y-16 opacity-0'} 
                  ${feature.delay}
                  group relative bg-white p-5 sm:p-6 rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] border border-gray-100 hover:border-[#807DFE]/30 hover:shadow-[0_15px_40px_-10px_rgba(128,125,254,0.2)] hover:-translate-y-1 transition-all flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6`}
              >
                {/* Icon Container */}
                <div className="relative shrink-0">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#4250E7] to-[#807DFE] opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300"></div>
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gray-50 flex items-center justify-center text-[#4250E7] group-hover:text-[#807DFE] group-hover:scale-110 transition-all duration-300 shadow-sm border border-gray-100">
                    {feature.icon}
                  </div>
                </div>

                {/* Text Content */}
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1 sm:mb-2 group-hover:text-[#4250E7] transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Micro interaction dot */}
                <div className="hidden sm:block absolute right-6 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-gray-200 group-hover:bg-[#807DFE] transition-colors duration-300"></div>
              </div>
            ))}

            {/* Floating Puzzle Piece Decoration */}
            <div className={`hidden sm:flex absolute -right-6 -bottom-6 w-16 h-16 bg-white rounded-2xl shadow-xl border border-gray-100 items-center justify-center text-[#4250E7] transition-all duration-1000 delay-1000 ease-out transform ${isVisible ? 'scale-100 rotate-12 opacity-100' : 'scale-0 rotate-0 opacity-0'}`}>
              <Puzzle className="w-8 h-8" />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}