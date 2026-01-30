
import React from 'react';
import { CASES } from '../constants/content';

const Cases: React.FC = () => {
  return (
    <section id="cases" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">已完成交流案例</h2>
          <div className="p-4 bg-slate-50 border-l-4 border-slate-300 mb-6">
            <p className="text-slate-600 text-sm leading-relaxed">
              以下案例仅用于展示交流任务的<strong>设计逻辑与执行能力</strong>，不构成公开合作要约，也不代表固定路线产品。
            </p>
          </div>
          <p className="text-slate-400 text-xs italic">出于合规与隐私保护，已对具体单位信息进行去敏感化处理</p>
        </div>

        <div className="space-y-12">
          {CASES.map((item, idx) => (
            <div key={idx} className="bg-white border border-slate-100 p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                <span className="px-2 py-1 bg-slate-100 text-slate-500 text-[10px] rounded uppercase font-bold tracking-wider border border-slate-200">{item.type}</span>
              </div>
              
              <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">覆盖区域</h4>
                  <p className="text-slate-700 text-sm">{item.region}</p>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">核心需求</h4>
                  <p className="text-slate-700 text-sm">{item.needs}</p>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">执行内容</h4>
                  <p className="text-slate-700 text-sm font-light leading-relaxed">{item.content}</p>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">执行要点</h4>
                  <p className="text-slate-700 text-sm font-light leading-relaxed">{item.keyPoints}</p>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-slate-100">
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-blue-600/50 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-slate-500 text-sm italic">{item.feedback}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cases;
