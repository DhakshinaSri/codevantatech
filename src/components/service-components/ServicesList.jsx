import React, { useEffect, useState, useRef, useCallback } from 'react';
import { Globe, Layout, BrainCircuit, Network, Rocket, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';

// You can rename this to 'ServicesSection' when importing it into your main project.
export default function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const services = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Web Development",
      description: "A strong online presence is essential in today’s market. We develop websites that are fast, responsive, and optimized for both local and global audiences.",
      subText: "Whether you need a corporate website, an e-commerce platform, or a custom web application, we ensure that your website performs well and represents your business professionally."
    },
    {
      icon: <Layout className="w-8 h-8" />,
      title: "Website Designing",
      description: "Design is more than just appearance—it’s about how users experience your brand. We create designs that are clean, modern, and easy to navigate.",
      subText: "We also consider cultural preferences and user behavior in Thailand, ensuring that your website connects effectively with your target audience."
    },
    {
      icon: <BrainCircuit className="w-8 h-8" />,
      title: "AI-Based Solutions",
      description: "AI can help businesses work smarter when applied in a practical way. We develop AI-based solutions that assist with automation, customer insights, and data-driven decision-making.",
      subText: "Our focus is on creating tools that are easy to integrate into your existing systems and provide real value without unnecessary complexity."
    },
    {
      icon: <Network className="w-8 h-8" />,
      title: "ERP & Business Solutions",
      description: "Managing multiple operations can be challenging, especially as your business grows. Our ERP solutions bring everything together into one system, helping you manage processes like inventory, finance, and operations efficiently.",
      subText: "We customize these systems to fit your workflow, making them easier for your team to adopt and use."
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Product Development",
      description: "We support businesses and startups in turning their ideas into real products. From initial planning to final deployment, we guide you through each stage of development.",
      subText: "Our goal is to create products that are not only functional but also scalable and ready for real-world use."
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setActiveIndex((current) => (current === services.length - 1 ? 0 : current + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [isHovered, services.length]);

  // Entrance animation observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (sectionRef.current) observer.unobserve(sectionRef.current);
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const handleNext = () => {
    setActiveIndex((prev) => (prev === services.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? services.length - 1 : prev - 1));
  };

  return (
    <section ref={sectionRef} className="relative py-24 lg:py-32 bg-white overflow-hidden font-sans">
      
      {/* Dynamic Backgrounds */}
      <div className="absolute inset-0 )] opacity-40 pointer-events-none" style={{ maskImage: 'linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)'}}></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-white rounded-full blur-[100px] pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center">
        
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          
          <h2 className={`transition-all duration-1000 delay-100 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'} text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight mb-6`}>
            Our <span className="text-transparent bg-clip-text bg-[#807DFE]">Services</span>
          </h2>
          
          <p className={`transition-all duration-1000 delay-200 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'} text-lg text-gray-600 leading-relaxed`}>
            We provide comprehensive digital solutions tailored to solve real business challenges, helping you adapt, grow, and succeed in a dynamic market.
          </p>
        </div>

        {/* 3D Carousel Container */}
        <div 
          className={`transition-all duration-1000 delay-400 ease-out transform ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'} relative w-full h-[420px] sm:h-[480px] lg:h-[420px] flex items-center justify-center perspective-[1500px]`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {services.map((service, index) => {
            // Calculate relative position for 3D effect
            const diff = index - activeIndex;
            // Handle wrap-around math so carousel feels continuous (optional logic, using clamped diff here for linear)
            let clampedDiff = diff;
            if (diff > 2) clampedDiff = diff - services.length;
            if (diff < -2) clampedDiff = diff + services.length;
            
            const absDiff = Math.abs(clampedDiff);
            const isActive = clampedDiff === 0;

            // 3D Transform calculations
            const translateX = clampedDiff * 110; // Percentage of own width
            const translateZ = absDiff * -150; // Push back into screen
            const rotateY = clampedDiff * -15; // Angle inwards
            const opacity = absDiff > 1 ? 0 : 1 - (absDiff * 0.4);
            const zIndex = 50 - absDiff;

            return (
              <div
                key={index}
                onClick={() => !isActive && setActiveIndex(index)}
                className={`absolute w-[90%] sm:w-[70%] md:w-[60%] lg:w-[45%] max-w-xl rounded-3xl p-6 sm:p-8 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] flex flex-col h-full bg-white overflow-hidden ${
                isActive
                  ? 'cursor-default shadow-[0_20px_50px_-12px_rgba(66,80,231,0.25)] border border-[#4250E7]/20'
                  : 'cursor-pointer shadow-lg border border-gray-100 hover:bg-gray-50'
                }`}
                style={{
                  transform: `translateX(${translateX}%) translateZ(${translateZ}px) rotateY(${rotateY}deg)`,
                  opacity: opacity,
                  zIndex: zIndex,
                  pointerEvents: absDiff > 1 ? 'none' : 'auto'
                }}
              >
                {isActive && (
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#4250E7] to-[#807DFE]" />
                )}

                
                {/* Card Icon */}
                <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 shrink-0 ${isActive ? 'bg-gradient-to-br from-[#4250E7] to-[#807DFE] text-white shadow-lg shadow-[#807DFE]/30 scale-110' : 'bg-gray-100 text-gray-400'}`}>
                  {service.icon}
                </div>

                {/* Card Content */}
                <div className="flex-1 flex flex-col overflow-y-auto pr-2 custom-scrollbar">
                  <h3 className={`text-xl sm:text-2xl font-bold mb-4 transition-colors duration-500 ${isActive ? 'text-gray-900' : 'text-gray-500'}`}>
                    {service.title}
                  </h3>
                  
                  <p className={`text-sm sm:text-base leading-relaxed mb-4 transition-colors duration-500 ${isActive ? 'text-gray-600' : 'text-gray-400'}`}>
                    {service.description}
                  </p>
                  
                  <div className={`w-10 h-0.5 mb-4 transition-colors duration-500 ${isActive ? 'bg-[#807DFE]/30' : 'bg-gray-200'}`}></div>
                  
                  <p className={`text-sm sm:text-base leading-relaxed mt-4 sm:mt-auto transition-colors duration-500 ${isActive ? 'text-gray-500' : 'text-gray-400'}`}>
                    {service.subText}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Carousel Controls */}
        <div className={`transition-all duration-1000 delay-500 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'} flex items-center justify-center gap-6 mt-8 lg:mt-12 w-full`}>
          
          {/* Prev Button */}
          <button 
            onClick={handlePrev}
            className="w-12 h-12 rounded-full flex items-center justify-center bg-white border border-gray-200 text-gray-500 hover:text-[#4250E7] hover:border-[#4250E7]/30 hover:bg-[#4250E7]/5 hover:shadow-md transition-all group focus:outline-none focus:ring-2 focus:ring-[#807DFE]"
            aria-label="Previous service"
          >
            <ChevronLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" />
          </button>

          {/* Progress Dots */}
          <div className="flex gap-2.5">
            {services.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`transition-all duration-500 rounded-full ${activeIndex === idx ? 'w-8 h-2.5 bg-[#4250E7]' : 'w-2.5 h-2.5 bg-gray-200 hover:bg-gray-300'}`}
                aria-label={`Go to service ${idx + 1}`}
              />
            ))}
          </div>

          {/* Next Button */}
          <button 
            onClick={handleNext}
            className="w-12 h-12 rounded-full flex items-center justify-center bg-white border border-gray-200 text-gray-500 hover:text-[#4250E7] hover:border-[#4250E7]/30 hover:bg-[#4250E7]/5 hover:shadow-md transition-all group focus:outline-none focus:ring-2 focus:ring-[#807DFE]"
            aria-label="Next service"
          >
            <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
          </button>

        </div>

      </div>

      {/* Add minimal custom scrollbar CSS for the overflowing text just in case on small mobile */}
      <style dangerouslySetInnerHTML={{__html: `
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #e5e7eb; border-radius: 4px; }
        .custom-scrollbar:hover::-webkit-scrollbar-thumb { background: #d1d5db; }
      `}} />
    </section>
  );
}