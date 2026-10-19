
import React from 'react';
import WorkApproach from '../components/WorkApproach';
import ExecutionLogic from '../components/ExecutionLogic';

const Approach: React.FC = () => {
  return (
    <div className="fade-in bg-white min-h-screen">
      {/* 头部：保持专业感 */}
      <div className="bg-[#0a1120] pt-32 pb-16 sm:pt-44 sm:pb-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-3xl sm:text-4xl font-header font-bold mb-6 tracking-tight">工作逻辑说明</h1>
            <p className="text-slate-400 text-base sm:text-lg font-light leading-relaxed">
              基于研究型支撑的跨境调研咨询逻辑，致力于将任务目标转化为实证价值。
            </p>
          </div>
        </div>
      </div>

      {/* 核心方法论卡片 */}
      <WorkApproach />

      {/* 深度执行逻辑文本 */}
      <ExecutionLogic />

      <div className="max-w-3xl mx-auto px-4 py-20">
        {/* 原有的补充说明 */}
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
