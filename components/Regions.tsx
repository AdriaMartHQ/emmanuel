import React from 'react';
import { REGIONS } from '../constants/content';
// Added missing Logo import
import Logo from './Logo';

const Regions: React.FC = () => {
  return (
    <section id="regions" className="py-32 bg-slate-950 text-white relative overflow-hidden">
      {/* Decorative World Map Trace */}
      <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden">
        <svg viewBox="0 0 1000 500" className="w-full h-full object-cover">
          <path d="M100 250 Q250 100 400 250 T700 250" stroke="#3b82f6" fill="none" strokeWidth="0.5" />
          <path d="M200 150 Q450 400 700 150" stroke="#3b82f6" fill="none" strokeWidth="0.5" strokeDasharray="5 5" />
          <circle cx="400" cy="250" r="2" fill="#3b82f6" />
          <circle cx="700" cy="150" r="2" fill="#3b82f6" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20 items-start">
          <div className="lg:w-1/3 sticky top-32">
            <span className="text-blue-500 font-bold text-[10px] uppercase tracking-[0.3em] mb-4 block">Strategic Nodes</span>
            <h2 className="text-4xl font-bold mb-8">全球交流网络</h2>
            <p className="text-slate-400 font-light leading-relaxed mb-10 text-lg">
              我们以关键交通枢纽与产业聚集地为节点，构建跨区域协作网。每一个节点都具备深度协调当地优质资源的成熟能力。
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-white/5 border border-white/10 rounded-lg">
                <div className="text-2xl font-bold text-white mb-1">Eurasia</div>
                <div className="text-[10px] text-slate-500 uppercase font-bold">欧亚走廊</div>
              </div>
              <div className="p-4 bg-white/5 border border-white/10 rounded-lg">
                <div className="text-2xl font-bold text-white mb-1">Africa</div>
                <div className="text-[10px] text-slate-500 uppercase font-bold">非洲增长极</div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-2/3 grid sm:grid-cols-2 gap-8">
            {REGIONS.map((reg, idx) => (
              <div key={idx} className="group p-8 bg-slate-900 border border-slate-800 hover:border-blue-500/50 transition-all duration-500 rounded-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-20 transition-opacity">
                  <Logo className="w-24 h-24" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-blue-600/20 text-blue-400 flex items-center justify-center text-xs">
                    0{idx + 1}
                  </span>
                  {reg.title}
                </h3>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {reg.nodes.map((node, i) => (
                    <span key={i} className="px-3 py-1 bg-slate-800 text-slate-300 text-[11px] rounded-full border border-slate-700">
                      {node}
                    </span>
                  ))}
                </div>

                <div className="mt-auto pt-6 border-t border-slate-800">
                  <p className="text-xs text-slate-500 leading-relaxed italic">
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