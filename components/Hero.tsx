import React from 'react';
import { ArrowDown, MapPin } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          // Replace this src with your local file: "/images/hero-sunset.jpg"
          src="https://images.unsplash.com/photo-1476673160081-cf065607f39d?q=80&w=2070&auto=format&fit=crop" 
          alt="Sunset over Grand Traverse Bay" 
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay for text readability */}
        <div className="absolute inset-0 bg-navy-900/60 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="mb-6 flex justify-center items-center gap-2 text-cyan-400 font-medium tracking-widest text-sm uppercase">
          <MapPin className="h-4 w-4" />
          <span>Traverse City, Michigan</span>
        </div>
        
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
          Traverse City <br />
          <span className="text-cyan-400 italic">Bass Fishing Charters</span>
        </h1>
        
        <p className="text-gray-100 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-light drop-shadow-md">
          Experience world-class smallmouth bass fishing on Grand Traverse Bay with Captain Butch Derickson.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#contact" 
            className="bg-cyan-600 hover:bg-cyan-500 text-white px-8 py-4 rounded-full font-semibold transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-cyan-500/30"
          >
            Book Your Trip
          </a>
          <a 
            href="#rates" 
            className="bg-transparent border-2 border-white/50 hover:border-white text-white px-8 py-4 rounded-full font-semibold transition-all backdrop-blur-sm hover:bg-white/10"
          >
            View Rates
          </a>
        </div>
      </div>

      <a 
        href="#about" 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 hover:text-white transition-colors animate-bounce"
      >
        <ArrowDown className="h-8 w-8" />
      </a>
    </section>
  );
};