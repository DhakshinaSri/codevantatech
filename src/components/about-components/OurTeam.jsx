import React, { useEffect, useRef, useState } from 'react';
import { Search, MessageCircle, ShieldCheck, GitCommit, Layers, Sparkles } from 'lucide-react';

// You can rename this to 'WayOfWorkingSection' when importing it into your main project.
export default function OurTeam() {
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
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative py-24 sm:py-32 bg-white overflow-hidden font-sans">
      
      {/* --- 3D Animation Custom CSS --- */}
      <style dangerouslySetInnerHTML={{__html: `
        .preserve-3d { transform-style: preserve-3d; }
        
        @keyframes float-layer-1 {
          0%, 100% { transform: translateZ(0px); }
          50% { transform: translateZ(15px); }
        }
        @keyframes float-layer-2 {
          0%, 100% { transform: translateZ(80px); }
          50% { transform: translateZ(105px); }
        }
        @keyframes float-layer-3 {
          0%, 100% { transform: translateZ(160px); }
          50% { transform: translateZ(195px); }
        }
        
        .animate-layer-1 { animation: float-layer-1 6s ease-in-out infinite; }
        .animate-layer-2 { animation: float-layer-2 6s ease-in-out infinite 0.5s; }
        .animate-layer-3 { animation: float-layer-3 6s ease-in-out infinite 1s; }
        
        /* Isometric Base Transformation */
        .isometric-view {
          transform: rotateX(55deg) rotateZ(-45deg);
        }
      `}} />

      {/* Decorative Background Glows */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-[#4250E7]/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-[#807DFE]/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          
          {/* LEFT SIDE: Content */}
          <div className="flex flex-col justify-center max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">

            {/* Headline */}
            <h2 className={`transition-all duration-1000 delay-100 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-8`}>
              Our Way of <span className="text-transparent bg-clip-text bg-[#807DFE]">Working</span>
            </h2>

            {/* Content Paragraph 1 */}
            <div className={`transition-all duration-1000 delay-200 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} mb-8 relative`}>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                We keep our process simple and transparent. Every project begins with understanding your business—<strong className="text-gray-900 font-semibold">how you operate, what challenges you face, and what you want to achieve.</strong>
              </p>
            </div>

            {/* Content Paragraph 2 */}
            <div className={`transition-all duration-1000 delay-300 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} bg-white p-6 sm:p-8 rounded-2xl border border-gray-100 shadow-[0_10px_40px_-10px_rgba(66,80,231,0.08)] relative overflow-hidden group hover:shadow-[0_15px_50px_-10px_rgba(128,125,254,0.15)] transition-all duration-500`}>
              <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-[#4250E7] to-[#807DFE]"></div>
              <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-[#807DFE]/5 rounded-full blur-2xl group-hover:bg-[#807DFE]/10 transition-colors"></div>
              
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed relative z-10">
                We communicate clearly at every stage, ensuring you always know what’s happening. Instead of rushing through projects, we focus on getting things right. This approach helps us build <span className="text-[#4250E7] font-semibold border-b-2 border-[#807DFE]/30 pb-0.5">long-term trust</span> with our clients.
              </p>
            </div>
          </div>

          {/* RIGHT SIDE: 3D Isometric Process Visual */}
          <div className={`transition-all duration-1000 delay-500 ease-out transform ${isVisible ? 'translate-x-0 opacity-100 scale-100' : 'translate-x-16 opacity-0 scale-95'} relative h-[450px] sm:h-[600px] w-full mt-12 lg:mt-0 perspective-[1000px] flex items-center justify-center`}>
            
            {/* 3D Container */}
            <div className="relative w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] preserve-3d isometric-view">
              
             
              {/* --- LAYER 1: Understanding (Bottom) --- */}
              <div className="absolute inset-0 bg-white/80 backdrop-blur-md rounded-3xl border-2 border-[#4250E7]/10 shadow-[20px_20px_40px_rgba(66,80,231,0.1),-10px_-10px_20px_rgba(255,255,255,0.8)] animate-layer-1 flex items-center p-6 preserve-3d">
                <div className="w-16 h-16 rounded-2xl bg-[#4250E7]/10 flex items-center justify-center mr-6 border border-[#4250E7]/20" style={{ transform: 'translateZ(20px)' }}>
                  <Search className="w-8 h-8 text-[#4250E7]" />
                </div>
                <div style={{ transform: 'translateZ(30px)' }}>
                  <p className="text-[#4250E7] font-black text-xl tracking-tight">01</p>
                  <h3 className="text-gray-900 font-bold text-lg leading-none mt-1">Understand</h3>
                  <p className="text-gray-500 text-xs mt-2 font-medium uppercase tracking-wider">Business & Goals</p>
                </div>
                {/* Decorative nodes */}
                <div className="absolute right-6 top-6 w-3 h-3 bg-[#4250E7] rounded-full shadow-[0_0_10px_rgba(66,80,231,0.5)]" style={{ transform: 'translateZ(15px)' }}></div>
              </div>

              {/* --- LAYER 2: Communication (Middle) --- */}
              <div className="absolute inset-0 bg-white/85 backdrop-blur-md rounded-3xl border-2 border-[#807DFE]/20 shadow-[15px_15px_30px_rgba(128,125,254,0.15)] animate-layer-2 flex items-center p-6 preserve-3d">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#4250E7]/10 to-[#807DFE]/10 flex items-center justify-center mr-6 border border-[#807DFE]/30" style={{ transform: 'translateZ(20px)' }}>
                  <MessageCircle className="w-8 h-8 text-[#807DFE]" />
                </div>
                <div style={{ transform: 'translateZ(30px)' }}>
                  <p className="text-[#807DFE] font-black text-xl tracking-tight">02</p>
                  <h3 className="text-gray-900 font-bold text-lg leading-none mt-1">Communicate</h3>
                  <p className="text-gray-500 text-xs mt-2 font-medium uppercase tracking-wider">Clear & Transparent</p>
                </div>
                {/* Decorative nodes */}
                <div className="absolute right-6 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center border border-gray-100" style={{ transform: 'translateZ(25px)' }}>
                  <GitCommit className="w-4 h-4 text-gray-400" />
                </div>
              </div>

              {/* --- LAYER 3: Trust/Delivery (Top) --- */}
              <div className="absolute inset-0 bg-gradient-to-br from-white to-[#f8f9ff] backdrop-blur-md rounded-3xl border border-white shadow-[10px_10px_25px_rgba(66,80,231,0.2),inset_0_0_20px_rgba(255,255,255,1)] animate-layer-3 flex items-center p-6 preserve-3d group">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#4250E7] to-[#807DFE] flex items-center justify-center mr-6 shadow-lg shadow-[#807DFE]/30 relative" style={{ transform: 'translateZ(25px)' }}>
                  <div className="absolute inset-0 bg-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <ShieldCheck className="w-8 h-8 text-white relative z-10" />
                </div>
                <div style={{ transform: 'translateZ(40px)' }}>
                  <div className="flex items-center gap-2">
                    <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#4250E7] to-[#807DFE] font-black text-xl tracking-tight">03</p>
                    <Sparkles className="w-4 h-4 text-[#807DFE]" />
                  </div>
                  <h3 className="text-gray-900 font-bold text-xl leading-none mt-1">Deliver & Trust</h3>
                  <p className="text-gray-500 text-xs mt-2 font-medium uppercase tracking-wider">Getting things right</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}