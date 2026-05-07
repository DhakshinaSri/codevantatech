import React, { useEffect, useRef, useState } from 'react';
import Heroimg3 from "@/assets/heroimg3.jpg";
import { MapPin, Globe2, Briefcase, Code2, ArrowLeftRight, User } from 'lucide-react';

// You can rename this to 'WhoWeAreSection' when importing it into your main project.
export default function WhoWeAre() {
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

  return (
    <section ref={sectionRef} className="relative py-20 sm:py-32 bg-white overflow-hidden font-sans">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-[#4250E7]/5 to-[#807DFE]/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9IiNFNUU3RUIiLz48L3N2Zz4=')] opacity-30 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">
          
          {/* Left Content Area (Text) */}
          <div className="flex flex-col justify-center max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">
            
            {/* Section Eyebrow */}
            <div className={`transition-all duration-1000 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'} inline-flex items-center justify-center lg:justify-start gap-2 mb-6`}>
              <div className="w-8 h-8 rounded-full bg-[#4250E7]/10 flex items-center justify-center">
                <User className="w-4 h-4 text-[#4250E7]" />
              </div>
              <span className="text-sm font-bold tracking-wider uppercase text-[#807DFE]">Who We Are</span>
            </div>

            {/* Main Content */}
            <h2 className={`transition-all duration-1200 delay-200 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'} text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-8`}>
              Delivering <span className="text-transparent bg-clip-text bg-[#807DFE]">Meaningful</span> Digital Solutions
            </h2>

            <div className={`transition-all duration-1500 delay-400 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'} space-y-6 text-base sm:text-lg text-gray-600 leading-relaxed`}>
              <p>
                <strong className="text-gray-900 font-semibold">Codevanta Tech</strong> is a Thailand-based IT startup committed to delivering meaningful digital solutions. Our team combines technical skills with practical business understanding, allowing us to create systems that are both functional and relevant.
              </p>
              
              <p>
                We work closely with local businesses as well as international clients operating in Thailand, helping them navigate digital transformation with confidence.
              </p>
            </div>

            {/* Accent Line */}
            <div className={`transition-all duration-1500 delay-800 ease-out transform ${isVisible ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'} origin-left h-1 w-24 bg-gradient-to-r from-[#4250E7] to-[#807DFE] rounded-full mt-10 mx-auto lg:mx-0`}></div>
          </div>

          {/* Right Content Area (Bento Grid Visual) */}
          <div className="relative w-full max-w-lg mx-auto lg:max-w-none lg:mx-0 h-[450px] sm:h-[500px]">
            
            {/* Custom animations for the bento boxes */}
            <style dangerouslySetInnerHTML={{__html: `
              @keyframes hover-float {
                0% { transform: translateY(0px); }
                50% { transform: translateY(-8px); }
                100% { transform: translateY(0px); }
              }
              .bento-card { transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1); }
              .bento-card:hover { transform: translateY(-5px) scale(1.02); box-shadow: 0 20px 40px -10px rgba(66,80,231,0.15); z-index: 30; }
            `}} />

            {/* Bento Grid Container */}
            <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6">
              
              {/* Box 1: Tech + Business (Tall) */}
<div
  className={`bento-card row-span-2 rounded-3xl p-6 sm:p-8 flex flex-col relative overflow-hidden shadow-lg transition-all duration-1200 delay-[800ms] ease-out transform bg-cover bg-center ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}
  style={{
    backgroundImage: `url(${Heroimg3})`,
  }}
>
  
  {/* Optional Dark Overlay */}
  <div className="absolute inset-0 bg-black/40"></div>

  {/* Optional Pattern */}
  <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>

  <div className="relative z-10 flex-1 flex flex-col">
    
    <div className="flex items-center justify-center gap-3 mb-auto">
      <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/20">
        <Code2 className="w-6 h-6 text-white" />
      </div>

      <ArrowLeftRight className="w-5 h-5 text-white/50" />

      <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/20">
        <Briefcase className="w-6 h-6 text-white" />
      </div>
    </div>

    <div className="mt-8">
      <h3 className="text-white font-bold text-xl sm:text-2xl mb-2 leading-tight">
        Tech Meets Business
      </h3>

      <p className="text-white/80 text-sm leading-relaxed">
        Functional systems built with practical business understanding.
      </p>
    </div>

  </div>
</div>

              {/* Box 2: Thailand Based (Top Right) */}
              <div 
                className={`bento-card bg-gradient-to-b from-[#4250E7] to-[#807DFE] border border-gray-100 rounded-3xl p-6 flex flex-col justify-center relative overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-1200 delay-[800ms] ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
              >
                <div className="absolute -right-6 -top-6 w-24 h-24 bg-[#4250E7]/5 rounded-full blur-xl pointer-events-none"></div>
                
                <div className="flex items-center gap-4 mb-3">
                  <div className="relative">
                    <div className="absolute inset-0 bg-white rounded-full animate-ping opacity-20"></div>
                    <div className="w-10 h-10 rounded-full bg-[#4250E7]/10 flex items-center justify-center relative z-10">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <h3 className="font-bold text-white text-lg">Thailand<br/>Based</h3>
                </div>
                <p className="text-xs sm:text-sm text-white">Deep local market insight.</p>
              </div>

              {/* Box 3: Global Reach (Bottom Right) */}
              <div 
                className={`bento-card bg-gray-100 border border-gray-100 rounded-3xl p-6 flex flex-col justify-center relative overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-1500 delay-[1000ms] ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
              >
                <div className="absolute -left-6 -bottom-6 w-24 h-24 bg-[#807DFE]/5 rounded-full blur-xl pointer-events-none"></div>

                <div className="flex items-center gap-4 mb-3">
                  <div className="w-10 h-10 rounded-full bg-[#807DFE]/10 flex items-center justify-center">
                    <Globe2 className="w-5 h-5 text-[#807DFE]" />
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg">Global<br/>Reach</h3>
                </div>
                <p className="text-xs sm:text-sm text-gray-500">Supporting international clients.</p>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}