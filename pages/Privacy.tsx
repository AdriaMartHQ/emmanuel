import React, { useEffect } from 'react';

const Privacy: React.FC = () => {
  useEffect(() => {
    document.title = "Privacy Policy | Emmanuel Global Consulting";
  }, []);

  return (
    <div className="fade-in bg-white min-h-screen">
      <div className="bg-[#0a1120] pt-32 pb-16 sm:pt-44 sm:pb-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-header font-bold mb-4 tracking-tight">Privacy Policy</h1>
          <p className="text-slate-400 text-lg font-light italic">隐私政策</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-20">
        <div className="prose prose-slate max-w-none space-y-12">
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              <span className="w-1.5 h-6 bg-amber-700"></span>
              1. Data Collection / 数据收集
            </h2>
            <p className="text-slate-600 leading-relaxed font-light">
              We only collect information that you voluntarily provide to us when expressing an interest in obtaining information about our liaison services. This may include your name, organization, position, and contact information (email/phone).
              <br/><br/>
              我们仅收集您在表达对交流考察服务兴趣时自愿提供的信息，包括姓名、所属机构、职务及联系方式。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              <span className="w-1.5 h-6 bg-amber-700"></span>
              2. Use of Information / 信息使用
            </h2>
            <p className="text-slate-600 leading-relaxed font-light">
              The information we collect is used solely to facilitate professional communication, coordinate institutional liaison, and provide bespoke consulting proposals. We do not sell or lease your data to third parties for marketing purposes.
              <br/><br/>
              所收集的信息仅用于促进专业沟通、协调机构联络以及提供定制化的咨询方案。我们绝不会为了营销目的将您的数据出售或出租给第三方。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              <span className="w-1.5 h-6 bg-amber-700"></span>
              3. Confidentiality / 保密性
            </h2>
            <p className="text-slate-600 leading-relaxed font-light">
              As a professional consulting platform, we understand the sensitive nature of international exchange missions. All inquiry details are treated with the highest level of institutional confidentiality.
              <br/><br/>
              作为专业的咨询平台，我们深知国际交流任务的敏感性。所有咨询详情均作为机构最高机密处理。
            </p>
          </section>

          <section className="bg-slate-50 p-10 border border-slate-100 mt-16 text-center">
            <h3 className="text-slate-900 font-bold mb-4">Contact for Privacy / 隐私联络</h3>
            <p className="text-slate-500 text-sm font-light">
              If you have questions about this policy, please contact us at:<br/>
              <span className="text-amber-700 font-bold">consult@emmanuel.tr</span>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Privacy;