
import React, { useEffect, useRef, useState } from 'react';
import { ENTITY_NAMES } from '../constants/content';

// 声明外部 Leaflet 全局变量
declare var L: any;

const Contact: React.FC = () => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<any>(null);
  const [isCopied, setIsCopied] = useState(false);

  // 处理微信复制
  const handleWeChatClick = async () => {
    const wechatId = 'EmmanuelTech';
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(wechatId);
        setIsCopied(true);
        // 持续约 1.5 - 2 秒后恢复状态
        setTimeout(() => setIsCopied(false), 1800);
      } else {
        throw new Error('Clipboard API unavailable');
      }
    } catch (err) {
      // 仅在 Clipboard 彻底不可用时回退到手动复制提示
      alert(`微信号：${wechatId}\n您的浏览器不支持一键复制，请手动复制。`);
    }
  };

  // 处理WhatsApp跳转
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/381665423472', '_blank');
  };

  useEffect(() => {
    const lat = 40.99299618338608;
    const lng = 28.850976569443908;
    const address = `
      <div class="p-1 text-center">
        <strong class="text-slate-900 block mb-0.5 text-sm tracking-tight">官方执行总部</strong>
        <p class="text-[11px] text-slate-500 font-sans">Istanbul · Bahçelievler</p>
      </div>
    `;

    if (mapContainerRef.current && !mapInstance.current && typeof L !== 'undefined') {
      mapInstance.current = L.map(mapContainerRef.current, {
        center: [lat, lng],
        zoom: 10,
        scrollWheelZoom: false,
        zoomControl: true,
      });

      L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: 'abcd',
        maxZoom: 20
      }).addTo(mapInstance.current);

      const customIcon = L.divIcon({
        className: 'custom-business-marker',
        html: `
          <div class="relative flex items-center justify-center">
            <div class="absolute w-8 h-8 bg-amber-500/20 rounded-full animate-ping"></div>
            <div class="relative w-4 h-4 bg-amber-600 rounded-full border-2 border-white shadow-lg"></div>
          </div>
        `,
        iconSize: [32, 32],
        iconAnchor: [16, 16]
      });

      const marker = L.marker([lat, lng], { icon: customIcon }).addTo(mapInstance.current);
      marker.bindPopup(address, {
        className: 'business-popup',
        offset: [0, -10],
        closeButton: false
      }).openPopup();

      const timer = setTimeout(() => {
        if (mapInstance.current) {
          mapInstance.current.invalidateSize();
        }
      }, 200);

      return () => clearTimeout(timer);
    }

    return () => {
      if (mapInstance.current) {
        mapInstance.current.remove();
        mapInstance.current = null;
      }
    };
  }, []);

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-20">
          <span className="text-amber-600 font-bold text-[10px] uppercase tracking-[0.4em] mb-4 block">BESPOKE EXCHANGE SOLUTIONS</span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 font-header tracking-tight">
            规划您的深度交流与调研
          </h2>
          <p className="text-slate-400 text-lg font-light">
            我们的执行专家常驻欧亚枢纽节点，随时为您规划任务导向的公务行程。
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-7 space-y-8">
            {[
              { name: 'Sanyi (三一)', title: '执行运营总监', phone: '+381 66 542 3472', tag: '常驻贝尔格莱德' },
              { name: 'Priscilla (柏吉拉)', title: '国际协调高级专家', phone: '+90 545 467 8762', tag: '常驻伊斯坦布尔' }
            ].map((expert, idx) => (
              <div key={idx} className="bg-slate-50/50 p-10 rounded-3xl border border-slate-100 group hover:bg-white hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500 relative">
                <div className="absolute top-8 right-10">
                  <span className="px-3 py-1 bg-white border border-slate-200 text-slate-400 text-[10px] rounded-full font-medium">
                    {expert.tag}
                  </span>
                </div>
                <div className="mb-6">
                  <h3 className="text-2xl font-black text-slate-900 mb-1">{expert.name}</h3>
                  <p className="text-amber-700 text-xs font-bold uppercase tracking-widest">{expert.title}</p>
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] text-slate-400 uppercase font-bold tracking-tighter">微信 / 手机号</span>
                  <div className="text-3xl font-mono font-bold text-slate-800 tracking-tighter group-hover:text-amber-600 transition-colors">
                    {expert.phone}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-5 sticky top-32">
            <div className="bg-white p-12 rounded-[2.5rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] border border-slate-50 relative">
              <div className="absolute top-0 left-12 right-12 h-1 bg-amber-500 rounded-b-full"></div>
              
              <div className="text-center mb-10">
                <div className="w-12 h-12 bg-amber-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-6 h-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">与专家即刻对话</h3>
                <p className="text-slate-400 text-sm font-light">Immediate Response Policy</p>
              </div>

              <div className="space-y-4 mb-12">
                <button 
                  onClick={handleWeChatClick}
                  className={`w-full pt-4 pb-3.5 px-6 border rounded-2xl flex flex-col items-center justify-center gap-1 font-bold transition-all group active:scale-[0.98] ${isCopied ? 'bg-amber-50 border-amber-200 text-amber-600' : 'bg-white border-slate-100 text-slate-700 hover:bg-slate-50 hover:text-amber-600'}`}
                >
                  <div className="flex items-center gap-2">
                    <svg className={`w-5 h-5 transition-colors ${isCopied ? 'text-amber-600' : 'text-slate-400 group-hover:text-amber-600'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      {isCopied ? (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      )}
                    </svg>
                    <span>{isCopied ? '已复制微信号 ✓' : '微信咨询'}</span>
                  </div>
                  <span className={`text-[10px] font-normal tracking-tight transition-colors ${isCopied ? 'text-amber-600/70' : 'text-slate-400 group-hover:text-amber-500/70'}`}>
                    {isCopied ? '请在微信搜索添加' : 'ID: EmmanuelTech'}
                  </span>
                </button>
                
                <button 
                  onClick={handleWhatsAppClick}
                  className="w-full pt-4 pb-3.5 px-6 border border-slate-100 rounded-2xl flex flex-col items-center justify-center gap-1 text-slate-700 font-bold bg-white hover:bg-slate-50 transition-all group hover:text-amber-600 active:scale-[0.98]"
                >
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-slate-400 group-hover:text-amber-600 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>WhatsApp</span>
                  </div>
                  <span className="text-[10px] text-slate-400 font-normal tracking-tight group-hover:text-amber-500/70">+381 66 542 3472</span>
                </button>
              </div>

              <div className="pt-10 border-t border-slate-50">
                <span className="block text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-6 text-center">邮件联系 ( 预订 / 合作 )</span>
                <div className="space-y-6">
                  <div className="flex items-center gap-4 group cursor-pointer" onClick={() => window.location.href = 'mailto:consult@emmanuel.tr'}>
                    <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center group-hover:bg-amber-50 transition-colors">
                      <svg className="w-4 h-4 text-slate-400 group-hover:text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-400 uppercase tracking-tighter">客户预订</p>
                      <p className="text-sm font-bold text-slate-800">consult@emmanuel.tr</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 group cursor-pointer" onClick={() => window.location.href = 'mailto:partners@emmanuel.tr'}>
                    <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center group-hover:bg-amber-50 transition-colors">
                      <svg className="w-4 h-4 text-slate-400 group-hover:text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-400 uppercase tracking-tighter">商务合作</p>
                      <p className="text-sm font-bold text-slate-800">partners@emmanuel.tr</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-32 rounded-[3rem] overflow-hidden border border-slate-100 shadow-xl relative h-[500px] z-10">
           <div ref={mapContainerRef} className="w-full h-full bg-slate-50 outline-none overflow-hidden"></div>
           <div className="absolute top-8 right-8 z-[1000] pointer-events-none hidden sm:block">
              <div className="px-6 py-4 bg-white/90 backdrop-blur-md shadow-2xl rounded-2xl flex items-center gap-3 border border-white/50 whitespace-nowrap">
                 <div className="w-2 h-2 bg-amber-600 rounded-full animate-pulse"></div>
                 <div>
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest block mb-0.5">Global Presence</span>
                    <span className="text-xs font-bold text-slate-800">伊斯坦布尔核心业务枢纽</span>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
