
import React from 'react';
import Logo from './Logo';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center bg-[#050a18] overflow-hidden text-center">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" 
          alt="Modern Architecture" 
          className="w-full h-full object-cover opacity-20 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050a18] via-transparent to-[#050a18]"></div>
      </div>
      
      <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8 flex flex-col items-center">
        {/* 中心 Logo */}
        <Logo isHero className="mb-4" />
        
        <h2 className="text-white text-3xl sm:text-5xl font-black tracking-[0.05em] sm:tracking-[0.15em] mb-4 uppercase leading-tight">
          EMMANUEL GLOBAL LIAISON
        </h2>
        
        <div className="text-amber-500 text-lg sm:text-xl font-bold tracking-[0.3em] sm:tracking-[0.8em] mb-10 sm:mb-12 border-y border-amber-600/20 py-4 w-full">
          以马内利 · 国际执行
        </div>

        <div className="inline-flex px-6 sm:px-8 py-2.5 sm:py-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-slate-400 text-[10px] sm:text-xs font-medium tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-16">
          跨境交流逻辑 · 专业咨询专家
        </div>

        <div className="w-px h-20 sm:h-24 bg-gradient-to-b from-amber-500 to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;
