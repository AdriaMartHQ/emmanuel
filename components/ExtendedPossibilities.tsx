
import React from 'react';

const ExtendedPossibilities: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="mb-16">
          <h2 className="text-sm font-bold text-amber-800 uppercase tracking-[0.3em] mb-4">Post-Visit Extension</h2>
          <h3 className="text-2xl font-bold text-slate-900 font-header">交流项目的延展与合作可能性</h3>
        </div>

        <div className="space-y-16">
          {/* 1. 后续需求演进 */}
          <div className="relative pl-8 border-l-2 border-slate-100">
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-amber-700"></div>
            <h4 className="text-lg font-bold text-slate-900 mb-4">访问后的需求沉淀与二次穿透</h4>
            <p className="text-slate-600 leading-relaxed font-light">
              在系统的交流考察结束后的 3-6 个月内，出访主体通常会进入信息的深度消化期。常见的后续需求集中在对调研现场提及的特定政策细则、技术指标或行政流程进行“穿透式”的二次核验。这种需求往往源于决策层在撰写调研报告或制定战略规划时，需要对特定变量进行更为精准的定量分析。此外，建立常态化的机构联络机制、获取目标区域的阶段性动态简报，也是确保调研价值不随行程结束而衰减的核心诉求。
            </p>
          </div>

          {/* 2. 意向形成逻辑 */}
          <div className="relative pl-8 border-l-2 border-slate-100">
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-800"></div>
            <h4 className="text-lg font-bold text-slate-900 mb-4">合作、研究与投资意向的梯度累积</h4>
            <p className="text-slate-600 leading-relaxed font-light">
              实质性的合作意向往往不是瞬间形成的，而是一个基于实证数据的“梯度累积”过程。通过实地考察建立的初步信任，会逐步转化为对当地法理底座、产业生态位以及合作伙伴真实执行能级的理性研判。当出访主体的战略目标与当地的资源红利在经过多轮信息对冲达到平衡点时，关于联合研发、产业落地或资源互换的初步共识方能稳固。这一阶段的核心在于通过持续的专业对话，消除因语境差异导致的信息噪音，使感性认知升华为具备可操作性的决策数据。
            </p>
          </div>

          {/* 3. 平台支持服务 */}
          <div className="relative pl-8 border-l-2 border-slate-100">
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-amber-700"></div>
            <h4 className="text-lg font-bold text-slate-900 mb-4">平台提供的合规支持与研究辅助</h4>
            <p className="text-slate-600 leading-relaxed font-light">
              平台在延展阶段的角色定位于“信息网桥”与“研究支撑”。我们协助出访单位维持与当地机构的专业沟通渠道，提供针对特定议题的深度背景调查与行业趋势研判报告。通过组织专题性的线上对话或小范围的技术研讨，我们致力于增强双方在专业语境上的对等性，提升信息交换的纯度。所有支持服务均严格限定在信息咨询、资源协调与研究支持范畴内，不涉及具体的资金操作或商业担保，旨在为出访主体的后续决策提供中立、客观且具前瞻性的实证参考。
            </p>
          </div>
        </div>

        {/* 补充声明 */}
        <div className="mt-20 p-6 bg-slate-50 border border-slate-100 text-center">
          <p className="text-xs text-slate-400 leading-relaxed italic">
            * 延展支持旨在提升交流实效，所有合作成果取决于相关机构自身的决策与落地执行。
          </p>
        </div>
      </div>
    </section>
  );
};

export default ExtendedPossibilities;
