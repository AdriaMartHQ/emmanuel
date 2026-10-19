
import React from 'react';
import { BALKAN_PARTNER, ENTITY_NAMES } from '../constants/content';

const Cooperation: React.FC = () => {
  return (
    <section id="cooperation" className="py-24 bg-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-16 items-start">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">合作与执行模式</h2>
            <p className="text-slate-600 leading-relaxed mb-10 font-light">
              Emmanuel 负责前期咨询、议题设计与机构协调；巴尔干地区项目由 BalkanChina 对应的注册运营公司负责签约、收款、开票及落地接待。具体服务范围、费用与责任以项目合同为准。
            </p>
            
            <div className="space-y-8">
              {/* Execution Part */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded bg-blue-600 flex items-center justify-center text-white font-bold">A</div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">前期咨询与机构协调</h4>
                  <p className="text-xs text-blue-700 mb-2 font-medium">
                    {ENTITY_NAMES.CONSULTING}<br/>
                    <span className="text-slate-500 font-normal">（服务角色：{ENTITY_NAMES.CONSULTING_ROLE}）</span>
                  </p>
                  <ul className="text-xs text-slate-500 space-y-1 list-disc pl-4">
                    <li>出访目标深度分析与调研模块建议</li>
                    <li>当地相关政府、园区、科研机构资源协调</li>
                    <li>交流议题、机构联络与调研纪要支持</li>
                  </ul>
                </div>
              </div>

              {/* Reception Part */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded bg-slate-800 flex items-center justify-center text-white font-bold">B</div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">巴尔干项目签约、收款与接待</h4>
                  <a href={BALKAN_PARTNER.website} target="_blank" rel="noopener noreferrer" className="inline-block text-sm text-amber-800 mb-2 font-medium underline underline-offset-4">
                    {BALKAN_PARTNER.name} ↗
                  </a>
                  <ul className="text-xs text-slate-500 space-y-1 list-disc pl-4">
                    <li>组织巴尔干地区食宿、车辆、翻译及现场接待</li>
                    <li>由注册运营公司签约、收款并开具相应票据</li>
                    <li>按合同承担服务交付、变更与退款责任</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-10 p-4 bg-slate-50 border-l-4 border-slate-300">
              <p className="text-xs text-slate-600 leading-relaxed">
                <strong>职能分工说明：</strong> Emmanuel 专注于前期咨询与机构协调，不代收巴尔干项目服务款项。BalkanChina 为巴尔干项目的签约与接待品牌，合同须列明实际注册公司全称、收款账户、开票主体及责任范围；其他地区的承接安排另行确认。
              </p>
            </div>
          </div>

          <div className="md:w-1/2 w-full">
            <div className="bg-white p-8 shadow-xl border border-slate-200">
              <h4 className="text-lg font-bold text-slate-900 mb-8 pb-4 border-b border-slate-100">执行流程规范</h4>
              <div className="relative">
                {[
                  { step: '01', title: '需求评估与立项', desc: '由 Emmanuel 对接客户，明确目的地、调研主题、人数与计划日期。' },
                  { step: '02', title: '方案咨询与资源协调', desc: '由 Emmanuel 设计议题与交流方案，协调拟访问机构。' },
                  { step: '03', title: '报价、签约与付款确认', desc: '巴尔干项目由 BalkanChina 对应的注册运营公司报价、签约及收款，合同列明公司与账户信息、费用及取消条件。' },
                  { step: '04', title: '任务执行与成果反馈', desc: 'BalkanChina 组织巴尔干落地接待与供应商执行；Emmanuel 提供议题协调及后续纪要支持，具体交付以合同为准。' }
                ].map((s, idx) => (
                  <div key={idx} className="mb-10 last:mb-0 relative pl-10">
                    <div className="absolute left-0 top-0 w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-[10px] font-bold text-slate-400">
                      {s.step}
                    </div>
                    {idx !== 3 && <div className="absolute left-3 top-6 bottom-[-24px] w-[1px] bg-slate-100"></div>}
                    <h5 className="font-bold text-sm text-slate-800 mb-1">{s.title}</h5>
                    <p className="text-xs text-slate-500 leading-relaxed font-light">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cooperation;
