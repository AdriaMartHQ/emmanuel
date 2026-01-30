import React, { useEffect } from 'react';

const Terms: React.FC = () => {
  useEffect(() => {
    document.title = "Terms of Service | Emmanuel Global Consulting";
  }, []);

  return (
    <div className="fade-in bg-white min-h-screen">
      <div className="bg-[#0a1120] pt-32 pb-16 sm:pt-44 sm:pb-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-header font-bold mb-4 tracking-tight">Terms of Service</h1>
          <p className="text-slate-400 text-lg font-light italic">服务条款</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-20">
        <div className="prose prose-slate max-w-none space-y-12">
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              <span className="w-1.5 h-6 bg-amber-700"></span>
              1. Professional Scope / 服务范畴
            </h2>
            <p className="text-slate-600 leading-relaxed font-light">
              Emmanuel Global Consulting provides professional liaison, research-based consulting, and coordination support for international exchange missions. We act as a consultant and resource coordinator for institutional entities.
              <br/><br/>
              以马内利（Emmanuel）为国际交流任务提供专业联络、研究型咨询及协调支持。我们作为法人实体的顾问和资源协调方开展工作。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              <span className="w-1.5 h-6 bg-amber-700"></span>
              2. Engagement Protocol / 合作协议
            </h2>
            <p className="text-slate-600 leading-relaxed font-light">
              All formal engagements require a separate signed agreement. The information provided on this website is for informational purposes and does not constitute a binding contract until a formal project proposal is accepted.
              <br/><br/>
              所有正式合作均需签署独立协议。本网站提供的信息仅供参考，在正式项目方案被接受前，不构成具有法律约束力的合同。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              <span className="w-1.5 h-6 bg-amber-700"></span>
              3. Execution Boundaries / 执行边界
            </h2>
            <p className="text-slate-600 leading-relaxed font-light">
              As detailed in our Methodology, physical logistics and financial settlements are handled by our certified local partners to ensure full compliance and auditability in each jurisdiction.
              <br/><br/>
              正如我们的“工作方式”中所述，具体的落地保障和财务结算由我们具备资质的当地合作伙伴负责，以确保在各法区内的完全合规与可审计性。
            </p>
          </section>

          <section className="bg-slate-50 p-10 border border-slate-100 mt-16 text-center">
            <h3 className="text-slate-900 font-bold mb-4">Agreement Inquiries / 条款咨询</h3>
            <p className="text-slate-500 text-sm font-light">
              For legal or professional engagement inquiries, please reach out to:<br/>
              <span className="text-amber-700 font-bold">consult@emmanuel.tr</span>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Terms;