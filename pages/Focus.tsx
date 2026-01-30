import React from 'react';
import FocusAreas from '../components/FocusAreas';
import Regions from '../components/Regions';

const Focus: React.FC = () => {
  return (
    <div className="fade-in">
      <div className="bg-slate-50 border-b border-slate-200 pt-32 pb-16 sm:pt-44 sm:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">交流考察重点方向</h1>
          <p className="text-slate-500 max-w-2xl font-light leading-relaxed">
            模块化设计的定制专题，根据您的调研任务灵活组合。
          </p>
        </div>
      </div>
      <FocusAreas />
      <Regions />
    </div>
  );
};

export default Focus;