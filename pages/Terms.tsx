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
              Formal engagements require a separate signed agreement. For Balkan-region projects, the agreement identifies the registered company operating BalkanChina as the contracting and billing entity, including its payment details, service scope, fees, and cancellation terms. Website information does not replace that agreement.
              <br/><br/>
              正式合作须签署独立协议。巴尔干地区项目由 BalkanChina 对应的注册运营公司签约、收款并开具相应票据；合同须列明公司全称、收款账户、开票主体、服务范围、费用及变更与取消条件。本网站的信息不替代项目合同。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              <span className="w-1.5 h-6 bg-amber-700"></span>
              3. Execution Boundaries / 执行边界
            </h2>
            <p className="text-slate-600 leading-relaxed font-light">
              Emmanuel provides preliminary consulting, topic design, and institutional coordination. For Balkan-region projects, the registered company operating BalkanChina organizes local reception and supplier services and bears the delivery and refund responsibilities specified in the contract. Emmanuel does not collect payments for those services. Arrangements for other regions are confirmed separately.
              <br/><br/>
              Emmanuel 提供前期咨询、议题设计与机构协调，不代收巴尔干项目服务款项。BalkanChina 对应的注册运营公司组织当地接待与供应商服务，并按合同承担服务交付及退款责任。其他地区的承接主体与责任范围另行确认。
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
