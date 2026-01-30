
import React from 'react';

const RequirementTypes: React.FC = () => {
  const types = [
    {
      title: "政企与公共机构交流访问",
      desc: "政企与公共机构的交流访问侧重于解决治理经验的跨区对冲与公共政策的实效性研判。此类需求通常源于出访主体在面对复杂的国际政经环境时，需要通过高层次、非公开的对话渠道，透彻理解当地行政决策逻辑与行业监管红利。通过对公共职能部门及行业半官方组织的深度访问，调研团队旨在打破行政信息壁垒，为本机构的制度设计与对外交往策略提供一手的实证支撑。"
    },
    {
      title: "高校与科研机构交流合作",
      desc: "高校与科研机构的合作需求聚焦于学术资源的跨境整合与联合创新体系的机制衔接。出访单位往往面临国际学科动态掌握不全面、跨境联合办学行政路径不明等痛点。通过对目标区域顶尖实验室、科研孵化中心及高校国际事务部门的系统性对接，此类访问旨在解决学术成果转化的对等评估问题，建立长期稳定的学分互认、导师互访及联合课题攻关机制，提升教育资源的国际化配置效率。"
    },
    {
      title: "产业园区与企业考察",
      desc: "针对产业园区与特定企业的考察，其核心诉求在于穿透物理空间、洞察产业链配套效能与园区运营的底层逻辑。出访单位通常希望通过对成熟经贸合作区及标杆企业的实地走访，研判当地工业生态位的真实状态、劳动力素质与财税配套的执行细节。此类调研致力于解决市场环境感知模糊、供应链响应速度未知等现实问题，为园区建设模式的借鉴或产业链跨境延展提供具象化的参考基准。"
    },
    {
      title: "文化、媒体、体育专项交流",
      desc: "专项交流涵盖了影视文化、内容传播、体育竞技等专业领域，旨在通过垂直维度的互动解决行业标准对等与文化语义对冲的问题。在专项访问中，出访主体侧重于考察当地内容产业的运作规律、媒体生态的监管尺度以及专业人才的培养模式。此类交流通过建立专业领域的对话，解决跨境内容传播的文化壁垒问题，促成专业技术标准的对等认同及行业协会层面的深度协作。"
    },
    {
      title: "合作或投资前的前期调研访问",
      desc: "合作或投资前的前期调研访问是穿透“信息黑箱”、降低决策试错成本的关键环节。当机构面临重大跨境项目决策时，往往需要通过多维度的实证调研，核验政策承诺的兑现程度及当地商业环境的潜在风险。此类需求侧重于对投资软环境的实质性考察，通过访谈当地政策专家、法律从业者及已落地的同类机构，解决“纸面数据”与“执行现场”脱节的问题，为合作可行性评估提供真实的决策依据。"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="mb-16">
          <h2 className="text-sm font-bold text-amber-800 uppercase tracking-[0.3em] mb-4">Requirement Types</h2>
          <h3 className="text-2xl font-bold text-slate-900 font-header">典型交流与考察需求类型</h3>
        </div>
        
        <div className="space-y-12">
          {types.map((type, idx) => (
            <div key={idx} className="group border-b border-slate-100 pb-10 last:border-0">
              <h4 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-3">
                <span className="w-1.5 h-6 bg-amber-700"></span>
                {type.title}
              </h4>
              <p className="text-slate-600 leading-relaxed font-light text-[16px]">
                {type.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RequirementTypes;
