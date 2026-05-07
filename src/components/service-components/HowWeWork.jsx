import React, { useEffect, useRef, useState } from 'react';
import { HeartHandshake, Smile, RefreshCw, ShieldCheck, ArrowRight, Sparkles } from 'lucide-react';

// You can rename this to 'ClientRelationshipSection' when importing it into your main project.
export default function HowWeWork() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Intersection Observer for scroll animations
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

  const traits = [
    { icon: <Smile className="w-4 h-4" />, text: "Approachable", color: "from-[#4250E7] to-[#5a64eb]" },
    { icon: <RefreshCw className="w-4 h-4" />, text: "Flexible", color: "from-[#5a64eb] to-[#807DFE]" },
    { icon: <ShieldCheck className="w-4 h-4" />, text: "Committed", color: "from-[#807DFE] to-[#9b99ff]" }
  ];

  return (
    <section ref={sectionRef} className="relative py-24 sm:py-32 bg-white overflow-hidden font-sans">
      
      {}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes orbit-left {
          0%, 100% { transform: translate(-10%, -5%) scale(1); }
          50% { transform: translate(-20%, 5%) scale(1.05); }
        }
        @keyframes orbit-right {
          0%, 100% { transform: translate(10%, 5%) scale(1); }
          50% { transform: translate(20%, -5%) scale(1.05); }
        }
        @keyframes float-center {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-10px) scale(1.02); }
        }
        .animate-orbit-left { animation: orbit-left 8s ease-in-out infinite; }
        .animate-orbit-right { animation: orbit-right 8s ease-in-out infinite 0.5s; }
        .animate-float-center { animation: float-center 6s ease-in-out infinite; }
      `}} />

      {}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-b from-[#807DFE]/5 to-transparent rounded-full blur-[80px] pointer-events-none -translate-y-1/3 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-t from-[#4250E7]/5 to-transparent rounded-full blur-[80px] pointer-events-none translate-y-1/3 -translate-x-1/3"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9IiNFNUU3RUIiLz48L3N2Zz4=')] opacity-40 pointer-events-none" style={{ maskImage: 'radial-gradient(ellipse at center, transparent 30%, black 100%)', WebkitMaskImage: 'radial-gradient(ellipse at center, transparent 30%, black 100%)' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">
          
          {}
          <div className="flex flex-col justify-center max-w-2xl mx-auto lg:mx-0 text-center lg:text-left order-2 lg:order-1">
            
            {/* Eyebrow Tag */}
            <div className={`transition-all duration-1000 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'} inline-flex items-center justify-center lg:justify-start gap-2 mb-6`}>
              <div className="w-10 h-10 rounded-full bg-[#807DFE]/10 flex items-center justify-center border border-[#807DFE]/20">
                <HeartHandshake className="w-5 h-5 text-[#807DFE]" />
              </div>
              <span className="text-sm font-bold tracking-wider uppercase text-[#4250E7]">Client Partnership</span>
            </div>

            {/* Headline */}
            <h2 className={`transition-all duration-1000 delay-100 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'} text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-6 tracking-tight`}>
              How We Work With <span className="text-transparent bg-clip-text bg-[#807DFE]">Clients</span>
            </h2>

            {/* Paragraph 1 */}
            <p className={`transition-all duration-1000 delay-200 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'} text-lg sm:text-xl text-gray-600 leading-relaxed mb-6`}>
              We believe in building strong relationships with our clients. Instead of just delivering a project and moving on, we stay connected and continue to support your growth.
            </p>

            {/* Paragraph 2 */}
            <div className={`transition-all duration-1000 delay-300 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'} p-6 sm:p-8 rounded-2xl bg-gray-50 border border-gray-100 shadow-inner mb-8`}>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-medium">
                We are approachable, flexible, and committed to helping you succeed in your digital journey.
              </p>
              
              {}
              <div className="mt-6 flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4">
                {traits.map((trait, index) => (
                  <div 
                    key={index}
                    className="group relative px-4 py-2 bg-white rounded-full border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 flex items-center gap-2 cursor-default overflow-hidden"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-r ${trait.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                    <div className="text-gray-400 group-hover:text-[#4250E7] transition-colors duration-300 relative z-10">
                      {trait.icon}
                    </div>
                    <span className="text-sm font-bold text-gray-700 group-hover:text-gray-900 transition-colors duration-300 relative z-10">
                      {trait.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {}
          <div className={`transition-all duration-1000 delay-400 ease-out transform ${isVisible ? 'scale-100 opacity-100' : 'scale-90 opacity-0'} relative w-full h-[400px] sm:h-[500px] flex items-center justify-center order-1 lg:order-2`}>
            
            {/* Visual Container */}
            <div className="relative w-full max-w-md aspect-square flex items-center justify-center">
              
              {/* Left Orb (CodevantaTech) */}
              <div className="absolute w-[60%] sm:w-[65%] aspect-square rounded-full bg-gradient-to-br from-[#4250E7] to-[#5a64eb] opacity-90 animate-orbit-left mix-blend-multiply filter blur-[1px] shadow-2xl"></div>
              
              {/* Right Orb (The Client) */}
              <div className="absolute w-[60%] sm:w-[65%] aspect-square rounded-full bg-gradient-to-bl from-[#807DFE] to-[#9b99ff] opacity-90 animate-orbit-right mix-blend-multiply filter blur-[1px] shadow-2xl"></div>

              {/* Center Glass Panel (The Partnership) */}
              <div className="relative z-20 w-48 h-48 sm:w-56 sm:h-56 rounded-3xl bg-white/20 backdrop-blur-xl border border-white/40 shadow-[0_20px_50px_rgba(0,0,0,0.15)] flex flex-col items-center justify-center p-6 animate-float-center group hover:bg-white/30 transition-colors duration-500">
                
                {/* Glossy highlight line */}
                <div className="absolute top-0 left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-white to-transparent opacity-70"></div>

                {/* Center Icon */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/30 backdrop-blur-md border border-white/50 flex items-center justify-center mb-4 shadow-inner group-hover:scale-110 transition-transform duration-500">
                  <HeartHandshake className="w-8 h-8 sm:w-10 sm:h-10 text-white" strokeWidth={1.5} />
                </div>
                
                {/* Center Text */}
                <h3 className="text-white font-bold text-lg sm:text-xl tracking-wide text-center">
                  Strong<br/>Partnership
                </h3>

                {/* Decorative floating dots inside the glass */}
                <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-white animate-ping opacity-50"></div>
                <div className="absolute bottom-6 left-6 w-1.5 h-1.5 rounded-full bg-white opacity-70"></div>
              </div>

              {/* Sparkles around the rings */}
              <Sparkles className="absolute top-[15%] right-[20%] w-6 h-6 text-[#807DFE]/60 animate-pulse" />
              <Sparkles className="absolute bottom-[20%] left-[15%] w-5 h-5 text-[#4250E7]/60 animate-pulse" style={{ animationDelay: '1s' }} />

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}