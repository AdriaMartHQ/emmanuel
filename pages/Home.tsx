
import React from 'react';
import Hero from '../components/Hero';

const Home: React.FC = () => {
  return (
    <div className="fade-in pb-24">
      <Hero />
      
      {/* 核心服务逻辑与价值定位 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20">
        <div className="bg-white border-t-8 border-amber-800 shadow-2xl p-10 md:p-16">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row gap-16 items-start">
              <div className="md:w-1/3">
                <h2 className="text-3xl font-bold text-slate-900 mb-6 leading-tight font-header tracking-tight">
                  项目逻辑与<br/>咨询原则
                </h2>
                <div className="w-16 h-1.5 bg-amber-700 mt-6"></div>
                <p className="mt-8 text-sm text-slate-400 font-light leading-relaxed">
                  本项目立足于服务政府机构、国有企业及科研院所的跨境交流需求，旨在构建任务导向型的深度访问咨询体系。
                </p>
              </div>
              <div className="md:w-2/3">
                <div className="space-y-8 text-[17px] text-slate-700 leading-relaxed font-light mb-12">
                  <p>
                    方案核心摒弃固定线路，完全围绕出访单位的公务目标、调研主题及拟对接机构进行定制化咨询逻辑推演。通过深度研判区域政策环境与产业布局，项目在确保外事接待流程合规与执行透明的前提下，将调研效率与交流成果置于首位。
                  </p>
                  <p>
                    依托对海外政经环境与机构运作模式的系统性理解，我们致力于为出访主体实现交流成效与程序正当的深度平衡。超越简单的行程堆砌，侧重对交流逻辑、政策环境与行业趋势的深度研判与资源精准匹配。
                  </p>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-12 pt-8 border-t border-slate-100">
                  <div className="flex flex-col gap-3">
                    <span className="text-[10px] font-bold text-amber-800 uppercase tracking-[0.2em]">定位 / Positioning</span>
                    <h4 className="text-lg font-bold text-slate-900">研究型咨询视角</h4>
                    <p className="text-sm text-slate-500 leading-relaxed">
                      将每一次访问视为课题研究，前期通过资源对冲确立交流深度，确保公务环节的实质性与确定性。
                    </p>
                  </div>
                  <div className="flex flex-col gap-3">
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em]">基石 / Foundation</span>
                    <h4 className="text-lg font-bold text-slate-900">合规执行保障</h4>
                    <p className="text-sm text-slate-500 leading-relaxed">
                      严格遵守公务出访相关流程规范，通过具备专业资质的渠道确保财务结算与接待保障的可审计性。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 核心能力分布矩阵 */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: "政策环境研判",
                desc: "针对区域准入、财税激励及行业监管等硬性环境，提供前置性的背景综述与调研指引。",
                tag: "Policy Insight"
              },
              {
                title: "机构资源对冲",
                desc: "基于任务目标，在目标区域协调政府部委、行业协会及核心产业园区等非公开层面的交流渠道。",
                tag: "Institutional Liaison"
              },
              {
                title: "执行品质反馈",
                desc: "建立出访成果的质量回访机制，协助出访单位整理调研纪要，并提供后续的对接持续支持。",
                tag: "Quality Assurance"
              }
            ].map((item, i) => (
              <div key={i} className="p-8 bg-slate-50 border border-slate-100 group hover:bg-slate-900 transition-colors duration-500">
                <span className="text-[9px] font-bold text-amber-700 uppercase tracking-widest mb-4 block group-hover:text-amber-500">{item.tag}</span>
                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-white">{item.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed font-light group-hover:text-slate-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
