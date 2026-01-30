
import React from 'react';
import Cooperation from '../components/Cooperation';
import ExtendedPossibilities from '../components/ExtendedPossibilities';
import ServiceBoundaries from '../components/ServiceBoundaries';

const CooperationPage: React.FC = () => {
  return (
    <div className="fade-in">
      <div className="bg-slate-50 border-b border-slate-200 pt-32 pb-16 sm:pt-44 sm:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">合作与执行模式</h1>
          <p className="text-slate-500 max-w-2xl font-light leading-relaxed">
            基于合规、专业与高效的原则，我们建立了清晰的业务隔离与协同机制。
          </p>
        </div>
      </div>
      
      {/* 合作模式与执行逻辑 */}
      <Cooperation />
      
      {/* 平台角色与服务边界 */}
      <ServiceBoundaries />
      
      {/* 延展与合作可能性模块 */}
      <ExtendedPossibilities />
      
      {/* 补充：底部指引 */}
      <div className="bg-slate-950 py-24 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-white text-2xl font-bold mb-8 font-header">构建长效的跨境对话机制</h2>
          <p className="text-slate-400 font-light leading-relaxed mb-12">
            我们理解每一次访问都是一个新视角的开启。通过专业化的结构设计与持续的研究支持，我们将单次的考察任务转化为机构长期的战略资产。
          </p>
          <div className="w-12 h-px bg-amber-700 mx-auto"></div>
        </div>
      </div>
    </div>
  );
};

export default CooperationPage;
