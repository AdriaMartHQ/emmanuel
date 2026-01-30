
import React from 'react';

const ServiceBoundaries: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50 border-y border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="mb-12">
          <h2 className="text-sm font-bold text-slate-400 uppercase tracking-[0.3em] mb-4">Service Scope</h2>
          <h3 className="text-2xl font-bold text-slate-900 font-header">平台角色与服务边界</h3>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h4 className="text-lg font-bold text-slate-800">专注于机构维度的交流支持</h4>
            <p className="text-slate-600 leading-relaxed font-light text-[15px]">
              平台的服务逻辑始终锚定在机构、园区及公共组织层面。我们的资源协调工作仅针对具备明确公务目标、学科背景或产业调研需求的法人实体展开。这种定位确保了所有的对接活动均服务于组织层面的知识获取与战略协作，而非解决碎片化的个人事务或非业务相关的私人诉求。
            </p>
          </div>

          <div className="space-y-6">
            <h4 className="text-lg font-bold text-slate-800">恪守公开透明的交流导向</h4>
            <p className="text-slate-600 leading-relaxed font-light text-[15px]">
              所有方案的设计与执行均以公开、合规的专业对话为唯一目的。我们通过正式的行业渠道与当地机构建立联络，确保每一场座谈、每一次访问的议题均在相关专业领域内展开。平台不介入任何涉及非公开事项、非对称信息交换或与调研任务无关的行政游说活动。
            </p>
          </div>
        </div>

        <div className="mt-12 pt-10 border-t border-slate-200">
          <p className="text-slate-500 leading-relaxed font-light text-sm italic">
            我们致力于维护一个专业且纯粹的跨境交流语境。通过明确服务边界，平台能够更高效地配置核心研究资源，确保出访主体的调研任务在严谨、务实且符合国际惯例的轨道上运行。
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServiceBoundaries;
