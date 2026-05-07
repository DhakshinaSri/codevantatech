import React, { useEffect, useRef, useState } from 'react';
import {
  Globe,
  LayoutDashboard,
  Database,
  BrainCircuit,
  Rocket,
  CheckCircle2,
  Sparkles
} from 'lucide-react';

// You can rename this to 'WorkSection' when importing it into your main project.
export default function OurWork() {
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

  const workTypes = [
    {
      title: "Business and corporate websites",
      icon: <Globe className="w-10 h-10 sm:w-12 sm:h-12" />,
      tag: "Web Presence",
      color: "from-[#4250E7] to-[#5a64eb]"
    },
    {
      title: "Custom web applications",
      icon: <LayoutDashboard className="w-10 h-10 sm:w-12 sm:h-12" />,
      tag: "Web Apps",
      color: "from-[#5a64eb] to-[#807DFE]"
    },
    {
      title: "ERP systems for operational management",
      icon: <Database className="w-10 h-10 sm:w-12 sm:h-12" />,
      tag: "Enterprise",
      color: "from-[#4250E7] to-[#807DFE]"
    },
    {
      title: "AI tools for automation and insights",
      icon: <BrainCircuit className="w-10 h-10 sm:w-12 sm:h-12" />,
      tag: "Artificial Intelligence",
      color: "from-[#807DFE] to-[#9b99ff]"
    },
    {
      title: "Product development for startups",
      icon: <Rocket className="w-10 h-10 sm:w-12 sm:h-12" />,
      tag: "Startups",
      color: "from-[#4250E7] via-[#807DFE] to-[#9b99ff]"
    }
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-24 sm:py-22 bg-white overflow-hidden font-sans"
    >
      {/* Background Effects */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-[#807DFE]/5 to-transparent rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/4"></div>

      <div
        className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zz4PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9IiNFNUU3RUIiLz48L3N2Zz4=')] opacity-40 pointer-events-none"
        style={{
          maskImage:
            'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)',
          WebkitMaskImage:
            'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)'
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 lg:mb-24">
          <div
            className={`transition-all duration-1000 ease-out transform ${
              isVisible
                ? 'translate-y-0 opacity-100'
                : 'translate-y-8 opacity-0'
            } inline-flex items-center gap-2 mb-6`}
          >
            <div className="w-8 h-8 rounded-full bg-[#4250E7]/10 flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-[#4250E7]" />
            </div>

            <span className="text-sm font-bold tracking-wider uppercase text-[#807DFE]">
              Proven Experience
            </span>
          </div>

          <h2
            className={`transition-all duration-1000 delay-100 ease-out transform ${
              isVisible
                ? 'translate-y-0 opacity-100'
                : 'translate-y-8 opacity-0'
            } text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight tracking-tight mb-6`}
          >
            Our{' '}
            <span className="text-transparent bg-clip-text bg-[#807DFE]">
              Work
            </span>
          </h2>

          <p
            className={`transition-all duration-1000 delay-200 ease-out transform ${
              isVisible
                ? 'translate-y-0 opacity-100'
                : 'translate-y-8 opacity-0'
            } text-xl text-gray-600 leading-relaxed`}
          >
            Our experience includes working on a diverse range of digital
            solutions tailored to modern business needs:
          </p>
        </div>

        {/* Work Cards */}
<div className="flex flex-wrap lg:flex-nowrap justify-center gap-6">
  {workTypes.map((item, index) => (
    <div
      key={index}
      className={`transition-all duration-700 ease-out transform ${
        isVisible
          ? 'translate-y-0 opacity-100'
          : 'translate-y-12 opacity-0'
      } relative w-full sm:w-[280px] lg:w-[240px] aspect-square p-6 rounded-[2rem] border border-gray-100 bg-white hover:shadow-[0_20px_50px_-12px_rgba(66,80,231,0.12)] hover:border-[#4250E7]/20 overflow-hidden group flex flex-col justify-between`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Hover Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#4250E7]/5 to-[#807DFE]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      <div className="relative z-10 flex flex-col h-full justify-between">
        
        {/* Tag */}
        <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#807DFE]">
          0{index + 1}
        </p>

        {/* Title */}
        <div className="flex-1 flex items-center">
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 leading-snug">
            {item.title}
          </h3>
        </div>
      </div>
    </div>
  ))}
</div>

        {/* Bottom Banner */}
        <div
          className={`transition-all duration-1000 delay-[600ms] ease-out transform ${
            isVisible
              ? 'translate-y-0 opacity-100 scale-100'
              : 'translate-y-12 opacity-0 scale-95'
          } mt-20 relative p-8 sm:p-10 bg-gradient-to-br from-[#4250E7] to-[#807DFE] rounded-3xl overflow-hidden shadow-2xl shadow-[#4250E7]/20 flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left group`}
        >
          {/* Decorative Overlay */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zz4PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9IiNmZmZmZmYiIG9wYWNpdHk9IjAuMSIvPjwvc3ZnPg==')] z-0"></div>

          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 transition-transform duration-700 group-hover:scale-150 z-0"></div>

          <div className="w-16 h-16 shrink-0 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/20 relative z-10 shadow-inner">
            <CheckCircle2 className="w-8 h-8 text-white" />
          </div>

          <div className="relative z-10">
            <p className="text-xl sm:text-2xl text-white font-medium leading-relaxed">
              Each project is handled with{' '}
              <strong className="font-bold border-b-2 border-white/40 pb-0.5">
                attention to detail
              </strong>{' '}
              and a focus on delivering real results.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}