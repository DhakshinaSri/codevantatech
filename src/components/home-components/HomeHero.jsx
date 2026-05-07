import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { ArrowRight, Play, CheckCircle2, BarChart3, Code2, Layers, Cpu, Activity } from 'lucide-react';

// You can rename this to 'HeroSection' when importing it into your main project.
export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Trigger entrance animations after a slight delay
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen bg-white overflow-hidden flex items-center font-sans">
      {/* Custom Styles for Animations */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0px); }
        }
        @keyframes float-delayed {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 7s ease-in-out infinite 1s; }
      `}} />

      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 -mr-16 sm:-mr-32 -mt-16 sm:-mt-32 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] rounded-full bg-[#807DFE]/10 blur-[60px] sm:blur-[80px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-16 sm:-ml-32 -mb-16 sm:-mb-32 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] rounded-full bg-[#4250E7]/5 blur-[60px] sm:blur-[80px] pointer-events-none"></div>
      
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9IiNFNUU3RUIiLz48L3N2Zz4=')] opacity-50 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-12 sm:py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Content Area */}
          <div className="flex flex-col justify-center max-w-2xl mx-auto lg:mx-0 items-center lg:items-start text-center lg:text-left">
            {/* Badge */}
            <div 
              className={`transition-all duration-700 ease-out transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'} inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#4250E7]/10 text-[#4250E7] text-sm font-semibold w-max mb-6 border border-[#4250E7]/20 cursor-default hover:bg-[#4250E7]/15`}
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#807DFE] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#4250E7]"></span>
              </span>
              CodevantaTech Solutions
            </div>

            {/* Headline */}
            <h1 
              className={`transition-all duration-1000 delay-100 ease-out transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'} text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-[1.15] mb-6 tracking-tight`}
            >
              Building Digital Solutions That <span className="bg-clip-text text-transparent bg-[#807DFE]">Actually Work</span>
            </h1>

            {/* Paragraph 1 */}
            <p 
              className={`transition-all duration-1500 delay-300 ease-out transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'} text-base sm:text-lg text-gray-600 mb-4 leading-relaxed`}
            >
              In a fast-growing digital market like Thailand, businesses need technology that is dependable, practical, and easy to use. At CodevantaTech, we focus on creating digital solutions that solve real business problems—whether it’s improving online presence, streamlining operations, or building smarter systems.
            </p>


            {/* Call to Action Buttons */}
            <div 
              className={`transition-all duration-1500 delay-500 ease-out transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'} flex flex-col sm:flex-row gap-4 w-full sm:w-auto`}
            >
              <button
        onClick={() => navigate("/services")}
        className="group w-full sm:w-auto relative inline-flex items-center justify-center gap-2 px-8 py-3.5 text-base font-semibold text-white bg-[#4250E7] rounded-xl overflow-hidden transition-all duration-300 hover:shadow-[0_8px_25px_-8px_rgba(66,80,231,0.6)] hover:-translate-y-0.5"
      >
        <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#4250E7] to-[#807DFE] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>

        <span className="relative flex items-center gap-2">
          Explore our works
          <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </button>

      {/* About Button */}
      <button
        onClick={() => navigate("/about")}
        className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-base font-semibold text-[#4250E7] bg-white border-2 border-[#4250E7]/20 rounded-xl transition-all duration-300 hover:border-[#807DFE] hover:bg-[#807DFE]/5 hover:-translate-y-0.5"
      >
        <Play
          className="w-5 h-5 text-[#807DFE] transition-colors duration-300 group-hover:text-[#4250E7]"
          fill="currentColor"
        />
        More About Us
      </button>
            </div>
            
            {/* Trust indicators */}
            <div className={`transition-all duration-700 delay-500 ease-out transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'} mt-8 sm:mt-10 flex flex-wrap justify-center lg:justify-start items-center gap-4 sm:gap-6 text-sm font-medium text-gray-500`}>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#807DFE]" />
                <span>Tailored Systems</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#807DFE]" />
                <span>Scalable Tech</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#807DFE]" />
                <span>Reliable Support</span>
              </div>
            </div>
          </div>

          {/* Right Visual Area - Abstract Tech Illustration */}
          <div className={`transition-all duration-1000 delay-300 ease-out transform ${isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'} relative h-[400px] sm:h-[500px] lg:h-[600px] w-full mt-8 lg:mt-0`}>
            
            {/* Main Floating Card */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] sm:w-[85%] h-[80%] sm:h-[75%] bg-white rounded-2xl shadow-[0_20px_50px_-12px_rgba(66,80,231,0.15)] border border-gray-100 p-4 sm:p-6 flex flex-col animate-float z-20 overflow-hidden">
              {/* Card Header */}
              <div className="flex items-center justify-between mb-6 sm:mb-8 pb-4 border-b border-gray-50">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-[#4250E7] to-[#807DFE] flex items-center justify-center text-white shadow-lg">
                    <Layers className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-xs sm:text-sm">System Architecture</h3>
                    <p className="text-[10px] sm:text-xs text-gray-400">Optimized for growth</p>
                  </div>
                </div>
                <div className="flex gap-1 sm:gap-1.5">
                  <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-gray-200"></div>
                  <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-gray-200"></div>
                  <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#807DFE]"></div>
                </div>
              </div>
              
              {/* Card Body - Mock UI Lines */}
              <div className="flex-1 space-y-4 sm:space-y-5">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="flex items-center gap-3 sm:gap-4 group">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-[#4250E7]/10 group-hover:text-[#4250E7] transition-colors">
                      {i === 0 ? <Code2 className="w-3 h-3 sm:w-4 sm:h-4" /> : i === 1 ? <Cpu className="w-3 h-3 sm:w-4 sm:h-4" /> : <BarChart3 className="w-3 h-3 sm:w-4 sm:h-4" />}
                    </div>
                    <div className="flex-1 space-y-1.5 sm:space-y-2">
                      <div className="h-2 bg-gray-100 rounded-full w-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-[#4250E7] to-[#807DFE] rounded-full opacity-80 transition-all duration-1000 ease-out"
                          style={{ width: isLoaded ? `${85 - (i * 15)}%` : '0%' }}
                        ></div>
                      </div>
                      <div className="h-2 bg-gray-50 rounded-full w-2/3"></div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom Chart Mock */}
              <div className="mt-auto pt-4 sm:pt-6 flex items-end gap-1.5 sm:gap-2 h-16 sm:h-20">
                {[40, 60, 45, 80, 55, 90, 70, 100].map((height, i) => (
                  <div 
                    key={i} 
                    className="flex-1 bg-gradient-to-t from-[#4250E7]/20 to-[#807DFE]/20 rounded-t-sm transition-all duration-1000 ease-out hover:from-[#4250E7] hover:to-[#807DFE]"
                    style={{ 
                      height: isLoaded ? `${height}%` : '0%',
                      transitionDelay: `${i * 100}ms`
                    }}
                  ></div>
                ))}
              </div>
            </div>

            {/* Floating Element 1 - Performance Badge */}
            <div className="absolute top-4 sm:top-16 right-0 sm:right-4 bg-white p-3 sm:p-4 rounded-xl shadow-[0_15px_30px_-10px_rgba(66,80,231,0.2)] border border-gray-100 flex items-center gap-2 sm:gap-3 animate-float-delayed z-30">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#807DFE]/15 flex items-center justify-center text-[#4250E7]">
                <Activity className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div>
                <p className="text-[10px] sm:text-xs text-gray-500 font-medium">System Health</p>
                <p className="text-xs sm:text-sm font-bold text-gray-900">99.9% Uptime</p>
              </div>
            </div>

            {/* Floating Element 2 - Project Status */}
            <div className="absolute bottom-10 sm:bottom-20 left-0 sm:left-0 bg-white p-2.5 sm:p-3 pr-4 sm:pr-5 rounded-full shadow-[0_15px_30px_-10px_rgba(66,80,231,0.2)] border border-gray-100 flex items-center gap-2 sm:gap-3 animate-float z-30" style={{ animationDelay: '2s' }}>
              <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-[#4250E7] flex items-center justify-center text-white shadow-md">
                <CheckCircle2 className="w-3 h-3 sm:w-4 sm:h-4" />
              </div>
              <p className="text-xs sm:text-sm font-semibold text-gray-900">Ready to scale</p>
            </div>

            {/* Decorative background shapes for the right visual */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[80%] border-2 border-dashed border-[#807DFE]/20 rounded-3xl -rotate-6 z-10 transition-transform duration-700 hover:rotate-0"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[80%] bg-[#4250E7]/5 rounded-3xl rotate-3 z-0"></div>
            
          </div>
        </div>
      </div>
    </section>
  );
}