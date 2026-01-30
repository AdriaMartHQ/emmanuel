
import React from 'react';

const WorkApproach: React.FC = () => {
  const principles = [
    {
      id: '核心逻辑',
      title: '任务驱动型咨询',
      desc: '一切行程安排均以完成公务交流、调研与访问任务为前提，不设固定线路，完全根据出访单位的具体调研重点提供咨询建议。'
    },
    {
      id: '资源协调',
      title: '精准渠道对接',
      desc: '提前协调当地相关政府部门、园区、高校、科研机构及行业组织，通过专业化预案确保交流对话的质量与深度。'
    },
    {
      id: '整体体验',
      title: '效能与节奏平衡',
      desc: '在确保公务效率的同时，合理优化行程节点，将区域人文调研与产业考察有机融合，提升考察任务的综合价值。'
    }
  ];

  return (
    <section id="approach" className="py-28 bg-[#fcfcfc] relative">
      <div className="absolute top-0 right-0 w-64 h-64 bg-slate-100/50 rounded-full blur-3xl -z-0"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-1.5 bg-amber-700"></div>
            <span className="text-amber-700 font-bold text-xs tracking-widest uppercase">Methodology</span>
          </div>
          <h2 className="text-4xl font-bold text-slate-900 tracking-tight">我们的工作方式</h2>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-12">
          {principles.map((p, idx) => (
            <div key={idx} className="group p-10 bg-white border-t-4 border-slate-200 shadow-sm hover:shadow-2xl hover:border-amber-700 transition-all duration-500">
              <span className="text-[10px] font-bold text-amber-600 uppercase tracking-widest block mb-6">{p.id}</span>
              <h3 className="text-2xl font-bold text-slate-900 mb-6 group-hover:text-amber-800 transition-colors">{p.title}</h3>
              <p className="text-slate-600 leading-relaxed font-light text-[15px]">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkApproach;
