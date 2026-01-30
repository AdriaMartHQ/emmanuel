import React from 'react';
import { FOCUS_AREAS } from '../constants/content';

const FocusAreas: React.FC = () => {
  return (
    <section id="focus" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-20 text-center">
          <span className="text-blue-600 font-bold text-[10px] uppercase tracking-[0.3em] mb-4 block">Selected Themes</span>
          <h2 className="text-4xl font-bold text-slate-900 mb-6">交流考察重点方向</h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-base font-light">
            我们不提供固定线路，所有模块均基于具体的出访目标灵活叠加，确保持续触达调研核心。
          </p>
          <div className="w-16 h-1 bg-blue-600 mx-auto mt-8 rounded-full"></div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {FOCUS_AREAS.map((area, idx) => (
            <div 
              key={idx} 
              className="group relative bg-slate-50 p-8 border border-slate-100 transition-all duration-500 hover:bg-white hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2"
            >
              <div className="w-12 h-12 mb-6 text-blue-600 transition-transform duration-500 group-hover:scale-110">
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d={area.icon} />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">{area.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed font-light">{area.description}</p>
              
              {/* Subtle Decorative Number */}
              <span className="absolute top-4 right-6 text-slate-200 font-mono text-2xl font-black group-hover:text-blue-100 transition-colors">
                {(idx + 1).toString().padStart(2, '0')}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FocusAreas;