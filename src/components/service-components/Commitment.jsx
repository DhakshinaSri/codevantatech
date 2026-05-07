import React, { useEffect, useRef, useState } from 'react';
import { Sparkles, MessageCircle, Wrench, Eye, TrendingUp, CheckCircle2 } from 'lucide-react';

// You can rename this to 'CommitmentSection' when importing it into your main project.
export default function Commitment() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Setup Intersection Observer for scroll animations
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

  const commitments = [
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Clear Communication",
      description: "Keeping you informed and aligned at every single step.",
      delay: "delay-[200ms]"
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "Practical Solutions",
      description: "Building tech that solves real problems without unnecessary complexity.",
      delay: "delay-[300ms]"
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Attention to Detail",
      description: "Meticulous design and robust code to ensure flawless performance.",
      delay: "delay-[400ms]"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Long-Term Value",
      description: "Creating scalable foundations that grow alongside your business.",
      delay: "delay-[500ms]"
    }
  ];

  return (
    <section ref={sectionRef} className="relative py-24 sm:py-32 bg-white overflow-hidden font-sans">
      
      {/* Background Decorative Accents */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#807DFE]/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#4250E7]/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-12 items-center">
          
          {/* Left Column: Heading and Intro */}
          <div className="lg:w-5/12 flex flex-col justify-center text-center lg:text-left">
            
            <div className={`transition-all duration-1000 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'} inline-flex items-center justify-center lg:justify-start gap-2 mb-6 mx-auto lg:mx-0`}>
              <div className="w-8 h-8 rounded-full bg-[#4250E7]/10 flex items-center justify-center">
                <CheckCircle2 className="w-4 h-4 text-[#4250E7]" />
              </div>
              <span className="text-sm font-bold tracking-wider uppercase text-[#807DFE]">Our Promise</span>
            </div>

            <h2 className={`transition-all duration-1000 delay-100 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'} text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-6`}>
              Our <span className="text-transparent bg-clip-text bg-[#807DFE]">Commitment</span>
            </h2>

            <p className={`transition-all duration-1000 delay-200 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'} text-lg sm:text-xl text-gray-600 leading-relaxed relative`}>
              At every stage of the process, we don't just write code or design interfaces. We focus on the core principles that guarantee a successful partnership.
            </p>
          </div>

          {/* Right Column: 2x2 Feature Grid */}
          <div className="lg:w-7/12 w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {}
              {commitments.map((item, index) => (
                <div 
                  key={index}
                  className={`transition-all duration-1000 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'} ${item.delay} group relative bg-gray-50 hover:bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 hover:border-[#807DFE]/30 shadow-sm hover:shadow-[0_20px_40px_-10px_rgba(66,80,231,0.15)] transition-all flex flex-col`}
                >
                  <div className="w-12 h-12 rounded-2xl bg-white border border-gray-100 flex items-center justify-center text-gray-400 group-hover:bg-gradient-to-br group-hover:from-[#4250E7] group-hover:to-[#807DFE] group-hover:text-white group-hover:scale-110 group-hover:shadow-lg transition-all duration-300 mb-6">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#4250E7] transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {}
        {/* Bottom Banner: Final Goal Statement */}
        <div className={`transition-all duration-1000 delay-[700ms] ease-out transform ${isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-12 opacity-0 scale-95'} mt-16 sm:mt-24 relative rounded-3xl overflow-hidden group`}>
          
          {/* Banner Background */}
          <div className="absolute inset-0 bg-[#807DFE] transition-transform duration-700 group-hover:scale-105"></div>
          
          {/* Banner Glossy Reflection */}
          <div className="absolute top-0 -left-1/4 w-1/2 h-full bg-white/20 skew-x-[45deg] transform -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-in-out"></div>

          {/* Banner Content */}
          <div className="relative z-10 p-8 sm:p-12 md:p-16 flex flex-col md:flex-row items-center gap-6 md:gap-10 text-center md:text-left">
            <div className="w-16 h-16 shrink-0 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            
            <div>
              <p className="text-xl sm:text-2xl md:text-3xl font-bold text-white leading-tight">
                Our goal is to make the entire experience <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60 border-b-2 border-white/30 pb-1">smooth, transparent, and beneficial</span> for your business.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}