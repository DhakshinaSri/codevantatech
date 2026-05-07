import React, { useEffect, useRef, useState } from 'react';
import { MessageSquare, Map, PenTool, ShieldCheck, Rocket, Headphones, Sparkles } from 'lucide-react';

// You can rename this to 'ProcessSection' when importing it into your main project.
export default function Process() {
  const [activeStep, setActiveStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const stepRefs = useRef([]);

  // Data for the process steps
  const steps = [
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Understanding Your Needs",
      paragraphs: [
        "Every project starts with a conversation. We take time to understand your business, how you currently operate, and what challenges you are facing.",
        "We don’t rush this stage, because clarity at the beginning saves time later. Whether you already have a clear idea or just a rough concept, we help you shape it into something more concrete.",
        "We also identify your target audience, expected outcomes, and any specific requirements. This helps us ensure that the solution we build is not just technically sound, but also useful in real-world situations."
      ]
    },
    {
      icon: <Map className="w-6 h-6" />,
      title: "Planning the Right Solution",
      paragraphs: [
        "Once we understand your needs, we move into planning. This is where we define the structure of your project.",
        "We create a clear roadmap that includes features, timelines, and key milestones. Instead of overwhelming you with technical details, we explain things in a simple and understandable way so you know exactly what to expect.",
        "We also consider scalability at this stage—so the solution we build today can grow along with your business tomorrow."
      ]
    },
    {
      icon: <PenTool className="w-6 h-6" />,
      title: "Design & Development",
      paragraphs: [
        "This is where your idea starts taking shape. Our design team focuses on creating a clean and user-friendly interface, while our developers work on building a strong and reliable system behind it.",
        "We keep usability at the center of everything we build. The goal is to create a solution that is not only functional but also easy for your team and customers to use.",
        "Throughout this phase, we stay in touch with you, share progress updates, and make adjustments based on your feedback. This ensures the final product aligns with your expectations."
      ]
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Testing & Quality Assurance",
      paragraphs: [
        "Before launching, we thoroughly test the solution to make sure everything works smoothly.",
        "We check for performance, usability, and reliability across different devices and environments. Our goal is to identify and fix any issues before your users experience them.",
        "We also ensure that the system is secure and stable, so you can use it with confidence from day one."
      ]
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Deployment & Launch",
      paragraphs: [
        "Once everything is ready, we move to deployment. We handle the technical aspects of launching your website or application so that the transition is smooth and hassle-free.",
        "We make sure everything is properly set up, optimized, and ready for real users. If needed, we also guide your team on how to use and manage the system effectively."
      ]
    },
    {
      icon: <Headphones className="w-6 h-6" />,
      title: "Ongoing Support & Improvement",
      paragraphs: [
        "Our work doesn’t end after launch. We continue to support you as your business grows.",
        "Whether it’s fixing issues, adding new features, or improving performance, we are here to help. Technology keeps evolving, and we make sure your solution stays updated and relevant.",
        "We believe in building long-term relationships, not just completing projects."
      ]
    }
  ];

  // Intersection Observer to track scroll and update the active step
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -50% 0px', // Triggers when the card hits the middle/upper part of the screen
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = Number(entry.target.getAttribute('data-index'));
          setActiveStep(index);
        }
      });
    }, observerOptions);

    stepRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  // Entrance animation for the section header
  useEffect(() => {
    const headerObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (sectionRef.current) headerObserver.unobserve(sectionRef.current);
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) headerObserver.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) headerObserver.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative py-24 lg:py-32 bg-white font-sans">
      
      {/* Required CSS for 3D preserve-3d and floating animations */}
      <style dangerouslySetInnerHTML={{__html: `
        .preserve-3d { transform-style: preserve-3d; }
        @keyframes slow-bob {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        .animate-slow-bob { animation: slow-bob 6s ease-in-out infinite; }
      `}} />

      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-b from-[#807DFE]/5 to-transparent rounded-full blur-[80px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
          <div className={`transition-all duration-1000 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'} inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-100 shadow-sm mb-6`}>
            <Sparkles className="w-4 h-4 text-[#807DFE]" />
            <span className="text-sm font-bold tracking-widest uppercase text-gray-700">How We Work</span>
          </div>
          
          <h2 className={`transition-all duration-1000 delay-100 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'} text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight mb-6`}>
            Our <span className="text-transparent bg-clip-text bg-[#807DFE]">Process</span>
          </h2>
          
          <p className={`transition-all duration-1000 delay-200 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'} text-lg text-gray-600 leading-relaxed`}>
            At CodevantaTech, we believe that a good process leads to better results. We follow a structured yet flexible approach that keeps things clear, collaborative, and focused on your business goals.
          </p>
        </div>

        {/* Main Process Layout (Sticky Left, Scrollable Right) */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 relative">
          
          {/* LEFT SIDE: Sticky 3D Isometric Visual */}
          <div className="lg:w-1/3 hidden lg:block">
            <div className="sticky top-40 w-full h-[500px] flex items-center justify-center">
              
              {/* 3D Isometric Container */}
              <div 
                className="relative w-64 h-64 preserve-3d animate-slow-bob"
                style={{ transform: 'rotateX(55deg) rotateZ(-45deg)' }}
              >
                {/* Connecting Core Pillar */}
                <div 
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 bg-gradient-to-b from-[#807DFE]/30 to-[#4250E7]/10 rounded-full blur-sm"
                  style={{ height: `${steps.length * 35}px`, transform: 'rotateX(-90deg) translateZ(0px)' }}
                ></div>

                {/* 3D Layers representing steps */}
                {[...steps].reverse().map((_, reversedIdx) => {
                  // Reverse index so the bottom is 0 and top is 5 in the visual stack
                  const idx = steps.length - 1 - reversedIdx;
                  const isActive = idx === activeStep;
                  const isPast = idx < activeStep;
                  
                  // Calculate dynamic Z-heights based on scroll position
                  let baseZ = idx * 40;
                  if (isActive) baseZ += 50; // Pop up the active step
                  if (isPast) baseZ += 10;   // Slightly raise completed steps
                  
                  return (
                    <div
                      key={idx}
                      className={`absolute inset-0 rounded-3xl border-2 transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] flex items-center justify-center`}
                      style={{
                        transform: `translateZ(${baseZ}px)`,
                        backgroundColor: isActive ? 'rgba(255, 255, 255, 0.95)' : isPast ? 'rgba(66, 80, 231, 0.9)' : 'rgba(255, 255, 255, 0.6)',
                        borderColor: isActive ? 'rgba(128, 125, 254, 0.6)' : isPast ? 'transparent' : 'rgba(229, 231, 235, 0.5)',
                        boxShadow: isActive ? '0 30px 60px rgba(66,80,231,0.3), inset 0 0 20px rgba(128,125,254,0.2)' : isPast ? '0 10px 30px rgba(0,0,0,0.1)' : 'none',
                      }}
                    >
                      <div
  className={`transition-all duration-700 text-center px-4 text-[#807DFE]`}
>
  <p className="text-3xl font-black leading-none">
    Our
  </p>
  <p className="text-3xl font-black leading-none">
    Process
  </p>
</div>
                    </div>
                  );
                })}
              </div>

            </div>
          </div>

          {/* RIGHT SIDE: Scrollable Step Cards */}
          <div className="lg:w-2/3 relative pb-20">
            
            {/* Vertical Progress Line (Mobile & Desktop) */}
            <div className="absolute left-[27px] sm:left-[39px] lg:left-[39px] top-10 bottom-0 w-1 bg-gray-100 rounded-full overflow-hidden">
              <div 
                className="w-full bg-[#4250E7] transition-all duration-700 ease-out rounded-full"
                style={{ height: `${((activeStep + 1) / steps.length) * 100}%` }}
              ></div>
            </div>

            <div className="space-y-16 sm:space-y-24">
              {steps.map((step, index) => {
                const isActive = index === activeStep;
                const isPast = index < activeStep;

                return (
                  <div 
                    key={index} 
                    data-index={index}
                    ref={(el) => (stepRefs.current[index] = el)}
                    className="relative flex gap-6 sm:gap-10"
                  >
                    
                    {/* Step Number / Icon Indicator */}
                    <div className="relative shrink-0 z-10 pt-2">
                      <div className={`w-14 h-14 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center transition-all duration-700 shadow-lg ${isActive ? 'bg-gradient-to-br from-[#4250E7] to-[#807DFE] text-white shadow-[#807DFE]/40 scale-110' : isPast ? 'bg-[#4250E7] text-white shadow-black/5' : 'bg-white border-2 border-gray-100 text-gray-400'}`}>
                        {isActive ? (
                          <div className="absolute inset-0 rounded-2xl animate-ping opacity-20 bg-white"></div>
                        ) : null}
                        {step.icon}
                      </div>
                    </div>

                    {/* Content Card */}
                    <div 
                      className={`flex-1 transition-all duration-700 ease-out ${isActive ? 'opacity-100 translate-x-0' : 'opacity-40 translate-x-4 lg:translate-x-8'}`}
                    >
                      <div className="flex items-center gap-4 mb-4">
                        <span className={`font-mono text-xl sm:text-2xl font-bold ${isActive ? 'text-[#807DFE]' : 'text-gray-300'}`}>
                          0{index + 1}
                        </span>
                        <h3 className={`text-2xl sm:text-3xl font-bold transition-colors duration-700 ${isActive ? 'text-gray-900' : 'text-gray-500'}`}>
                          {step.title}
                        </h3>
                      </div>
                      
                      <div className={`p-6 sm:p-8 rounded-3xl transition-all duration-700 ${isActive ? 'bg-white shadow-[0_20px_50px_-12px_rgba(66,80,231,0.15)] border border-[#4250E7]/10' : 'bg-gray-50 border border-transparent'}`}>
                        <div className="space-y-4">
                          {step.paragraphs.map((para, pIdx) => (
                            <p key={pIdx} className={`text-base sm:text-lg leading-relaxed transition-colors duration-700 ${isActive ? 'text-gray-600' : 'text-gray-500'}`}>
                              {para}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>

                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}