
import React from 'react';
import { REGIONS } from '../constants/content';
import Logo from './Logo';

const Regions: React.FC = () => {
  return (
    <section id="regions" className="py-20 sm:py-32 bg-slate-950 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 sm:opacity-10 pointer-events-none overflow-hidden">
        <svg viewBox="0 0 1000 500" className="w-full h-full object-cover">
          <path d="M100 250 Q250 100 400 250 T700 250" stroke="#3b82f6" fill="none" strokeWidth="0.5" />
          <circle cx="400" cy="250" r="2" fill="#3b82f6" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 sm:gap-20 items-start">
          <div className="lg:w-1/3 sm:sticky sm:top-32">
            <span className="text-blue-500 font-bold text-[10px] uppercase tracking-[0.3em] mb-4 block">Strategic Nodes</span>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8">全球交流网络</h2>
            <p className="text-slate-400 font-light leading-relaxed mb-8 sm:mb-10 text-base sm:text-lg">
              我们以关键交通枢纽与产业聚集地为节点，构建跨区域协作网。每一个节点都具备深度协调能力。
            </p>
          </div>
          
          <div className="lg:w-2/3 grid gap-6 sm:gap-8 sm:grid-cols-2">
            {REGIONS.map((reg, idx) => (
              <div key={idx} className="group p-6 sm:p-8 bg-slate-900/50 backdrop-blur-sm border border-slate-800 active:border-blue-500/50 transition-all rounded-xl sm:rounded-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-6 opacity-[0.02] sm:opacity-5 group-hover:opacity-20 transition-opacity">
                  <Logo className="w-20 h-20 sm:w-24 sm:h-24" />
                </div>
                
                <h3 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6 flex items-center gap-3">
                  <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-blue-600/20 text-blue-400 flex items-center justify-center text-[10px]">
                    0{idx + 1}
                  </span>
                  {reg.title}
                </h3>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {reg.nodes.map((node, i) => (
                    <span key={i} className="px-2.5 py-0.5 bg-slate-800 text-slate-300 text-[10px] sm:text-[11px] rounded-full border border-slate-700">
                      {node}
                    </span>
                  ))}
                </div>

                <div className="mt-auto pt-5 border-t border-slate-800">
                  <p className="text-[11px] text-slate-500 leading-relaxed italic">
                    {reg.tag}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Regions;
