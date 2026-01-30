
import React from 'react';

const Approach: React.FC = () => {
  return (
    <div className="fade-in bg-white min-h-screen">
      {/* 头部：保持专业感但简化视觉 */}
      <div className="bg-[#0a1120] pt-32 pb-16 sm:pt-44 sm:pb-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-3xl sm:text-4xl font-header font-bold mb-6 tracking-tight">工作逻辑说明</h1>
            <p className="text-slate-400 text-base sm:text-lg font-light leading-relaxed">
              基于研究型支撑的跨境调研咨询逻辑
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-20 sm:py-28">
        {/* 第一部分：引导段 */}
        <section className="mb-20">
          <p className="text-slate-800 text-[16px] sm:text-[17px] leading-relaxed font-light">
            平台专注于将复杂的跨境调研需求转化为具备实证价值的机构访问方案。通过对任务目标的深度解构，我们协调目标区域的产业园区、科研机构及行政主体，构建逻辑严密的专业对话路径，旨在提升出访实效，确保公务目标的精准达成。
          </p>
        </section>

        {/* 第二部分：核心逻辑 */}
        <section className="mb-24 space-y-12">
          <div className="flex flex-col sm:flex-row sm:items-baseline gap-4">
            <h3 className="text-amber-800 font-bold text-sm tracking-widest uppercase sm:w-24 flex-shrink-0">任务导向</h3>
            <p className="text-slate-600 text-[15px] font-light">依据出访单位的调研指标定制咨询路径，使行程安排完全服务于特定的公务关注点。</p>
          </div>
          
          <div className="flex flex-col sm:flex-row sm:items-baseline gap-4 border-t border-slate-100 pt-10">
            <h3 className="text-amber-800 font-bold text-sm tracking-widest uppercase sm:w-24 flex-shrink-0">资源匹配</h3>
            <p className="text-slate-600 text-[15px] font-light">在全球关键节点中筛选对等的交流载体，前置打磨具备实质研讨深度的业务议题。</p>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-baseline gap-4 border-t border-slate-100 pt-10">
            <h3 className="text-amber-800 font-bold text-sm tracking-widest uppercase sm:w-24 flex-shrink-0">执行协同</h3>
            <p className="text-slate-600 text-[15px] font-light">通过现场语境转换与专业节奏把控，确保公务座谈聚焦于核心任务并达成预期。</p>
          </div>
        </section>

        {/* 第三部分：原则说明 */}
        <section className="bg-slate-50 p-10 border border-slate-100">
          <p className="text-slate-500 text-sm leading-relaxed font-light">
            平台以研究支撑与信息协调为核心职能，不介入非公开事务。所有执行环节均在公开、透明的框架下运行，并由具备资质的合作方负责接待与结算，确保业务边界的清晰与执行流程的确定。
          </p>
        </section>

        <div className="mt-20 text-center">
          <div className="w-8 h-px bg-amber-700 mx-auto"></div>
        </div>
      </div>
    </div>
  );
};

export default Approach;
