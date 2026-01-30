import React from 'react';
import Cases from '../components/Cases';

const CasesPage: React.FC = () => {
  return (
    <div className="fade-in">
      <div className="bg-slate-900 pt-32 pb-16 sm:pt-44 sm:pb-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-6">交流案例展示</h1>
          <p className="text-slate-400 max-w-2xl font-light leading-relaxed">
            以下案例代表了我们在不同区域、不同领域的任务执行逻辑与资源整合能力。
          </p>
        </div>
      </div>
      <Cases />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 text-center">
         <div className="inline-block px-6 py-4 bg-slate-50 border border-slate-200">
            <p className="text-sm text-slate-500">更多定制场景与非公开案例，请联系我们获取专门的背景说明。</p>
         </div>
      </div>
    </div>
  );
};

export default CasesPage;