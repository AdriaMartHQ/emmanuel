
import React from 'react';
import { ENTITY_NAMES } from '../constants/content';

const Cooperation: React.FC = () => {
  return (
    <section id="cooperation" className="py-24 bg-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-16 items-start">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">合作与执行模式</h2>
            <p className="text-slate-600 leading-relaxed mb-10 font-light">
              我们致力于跨境交流资源的精准匹配与方案咨询。基于合规与专业执行保障，项目采取“方案协调”与“服务保障”相分离的运行逻辑，确保每一个环节都具备高度的专业性与可审计性。
            </p>
            
            <div className="space-y-8">
              {/* Execution Part */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded bg-blue-600 flex items-center justify-center text-white font-bold">A</div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">全案咨询与全球资源协调</h4>
                  <p className="text-xs text-blue-700 mb-2 font-medium">
                    {ENTITY_NAMES.EXECUTION}<br/>
                    <span className="text-slate-500 font-normal">（中文对照名：{ENTITY_NAMES.EXECUTION_ZH}）</span>
                  </p>
                  <ul className="text-xs text-slate-500 space-y-1 list-disc pl-4">
                    <li>出访目标深度分析与调研模块建议</li>
                    <li>当地相关政府、园区、科研机构资源协调</li>
                    <li>行程中公务交流环节的专业执行与支持</li>
                  </ul>
                </div>
              </div>

              {/* Reception Part */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded bg-slate-800 flex items-center justify-center text-white font-bold">B</div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">落地服务保障与流程执行</h4>
                  <p className="text-xs text-slate-800 mb-2 font-medium">具备专项业务资质之全球合作伙伴</p>
                  <ul className="text-xs text-slate-500 space-y-1 list-disc pl-4">
                    <li>全流程落地食宿、车辆等接待保障</li>
                    <li>公务出访合同签署与专业财务处理</li>
                    <li>确保执行环节符合相关准则与合规要求</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-10 p-4 bg-slate-50 border-l-4 border-slate-300">
              <p className="text-xs text-slate-600 leading-relaxed">
                <strong>职能分工说明：</strong> Emmanuel 专注于方案咨询与机构联络支持，不介入具体财务结算。项目具体执行与结算由具备专项资质的合作伙伴负责，确保业务闭环之严谨。
              </p>
            </div>
          </div>

          <div className="md:w-1/2 w-full">
            <div className="bg-white p-8 shadow-xl border border-slate-200">
              <h4 className="text-lg font-bold text-slate-900 mb-8 pb-4 border-b border-slate-100">执行流程规范</h4>
              <div className="relative">
                {[
                  { step: '01', title: '需求评估与立项', desc: '由 Emmanuel 对接出访单位，明确调研指标与公务关注点。' },
                  { step: '02', title: '方案咨询与资源协调', desc: '匹配对应区域机构，前置打磨座谈议题与交流深度。' },
                  { step: '03', title: '服务保障方案确立', desc: '协调具备资质的保障机构介入，落实落地保障细节。' },
                  { step: '04', title: '任务执行与成果反馈', desc: '多方协同保障出访任务达成，并提供后续调研纪要支持。' }
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
