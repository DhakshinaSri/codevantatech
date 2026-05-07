import React, { useEffect, useState } from 'react';
import { Users, Code2, PenTool, Lightbulb, Target, Sparkles, ArrowDown } from 'lucide-react';

// You can rename this to 'AboutHeroSection' when importing it into your main project.
export default function AboutHero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger entrance animations after a slight delay for a smooth load
    const timer = setTimeout(() => setIsLoaded(true), 150);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-white overflow-hidden font-sans min-h-[90vh] flex items-center">
      
      {/* Custom Styles for Floating Animations */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(2deg); }
        }
        @keyframes float-medium {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(-2deg); }
        }
        @keyframes pulse-ring {
          0% { transform: scale(0.8); opacity: 0.5; }
          100% { transform: scale(1.3); opacity: 0; }
        }
        .animate-float-slow { animation: float-slow 7s ease-in-out infinite; }
        .animate-float-medium { animation: float-medium 5s ease-in-out infinite 1s; }
        .animate-pulse-ring { animation: pulse-ring 3s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
      `}} />

      {/* Decorative Background Gradients */}
      <div className="absolute top-0 right-0 w-[500px] sm:w-[800px] h-[500px] sm:h-[800px] bg-gradient-to-bl from-[#807DFE]/10 via-[#4250E7]/5 to-transparent rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-gradient-to-tr from-[#4250E7]/5 to-transparent rounded-full blur-[80px] translate-y-1/3 -translate-x-1/4 pointer-events-none"></div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9IiNFNUU3RUIiLz48L3N2Zz4=')] opacity-40 pointer-events-none" style={{ maskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex justify-center items-center">
          
          {/* Left Content Area */}
          <div className="flex flex-col justify-center items-center max-w-3xl mx-auto text-center">
            
            {/* Eyebrow Badge */}
            <div 
              className={`transition-all duration-1000 ease-out transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'} inline-flex items-center justify-center lg:justify-start gap-2.5 px-4 py-2 rounded-full bg-white border border-gray-100 shadow-sm w-max mx-auto lg:mx-0 mb-8`}
            >
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#807DFE] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#4250E7]"></span>
              </span>
              <span className="text-sm font-semibold tracking-wide text-gray-700">About Codevanta Tech</span>
            </div>

            {/* Main Headline */}
            <h1 
              className={`transition-all duration-1000 delay-100 ease-out transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'} text-3xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-[1.15] mb-6 tracking-tight`}
            >
              A Team That Understands <br className="hidden lg:block" />
              <span className="relative inline-block mt-2">
                <span className="relative z-10 bg-clip-text text-transparent bg-[#807DFE]">
                  Both Technology and Business
                </span>

              </span>
            </h1>

            {/* Paragraph 1 */}
            <p 
              className={`transition-all duration-1000 delay-200 ease-out transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'} text-lg sm:text-xl text-gray-600 mb-5 leading-relaxed`}
            >
              We are a team of developers, designers, and problem-solvers who believe in doing things the right way. We understand the challenges businesses face—whether it’s managing operations, reaching customers, or staying competitive in a digital-first world.
            </p>

            {/* Paragraph 2 */}
            <div 
              className={`transition-all duration-1000 delay-300 ease-out transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'} relative pl-6 sm:pl-8 py-2 mt-6`}
            >
              {/* Vertical Gradient Line */}
              <div className="absolute left-0 top-0 bottom-0 w-1 sm:w-1.5 bg-gradient-to-b from-[#4250E7] to-[#807DFE] rounded-full"></div>
              
              <p className="text-base sm:text-lg text-gray-700 font-medium leading-relaxed">
                Our strength lies in balancing technology with real-world business needs. We don’t just build software—we build solutions that people can actually use in their daily work.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}