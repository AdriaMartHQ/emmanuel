
import React, { useEffect, useRef, useState } from 'react';
import { ENTITY_NAMES } from '../constants/content';

declare var L: any;

const Contact: React.FC = () => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<any>(null);
  const [isCopied, setIsCopied] = useState(false);
  const [isMapActive, setIsMapActive] = useState(false);

  const handleWeChatClick = async () => {
    const wechatId = 'EmmanuelTech';
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(wechatId);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 1800);
      } else {
        throw new Error('Clipboard API unavailable');
      }
    } catch (err) {
      alert(`微信号：${wechatId}\n您的浏览器不支持一键复制，请手动复制。`);
    }
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/381665423472', '_blank');
  };

  useEffect(() => {
    const lat = 40.99299618338608;
    const lng = 28.850976569443908;
    const address = `
      <div class="p-1 text-center">
        <strong class="text-slate-900 block mb-0.5 text-xs tracking-tight">官方执行总部</strong>
        <p class="text-[10px] text-slate-500 font-sans leading-tight">Istanbul · Bahçelievler</p>
      </div>
    `;

    if (mapContainerRef.current && !mapInstance.current && typeof L !== 'undefined') {
      const isMobile = window.innerWidth <= 768;

      mapInstance.current = L.map(mapContainerRef.current, {
        center: [lat, lng],
        zoom: 12,
        scrollWheelZoom: false,
        zoomControl: !isMobile,
        dragging: !isMobile, // 移动端初始禁用拖拽，防止滚动卡手
        touchZoom: isMobile ? 'center' : true,
        tap: false
      });

      L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; CARTO',
        subdomains: 'abcd',
        maxZoom: 20
      }).addTo(mapInstance.current);

      const customIcon = L.divIcon({
        className: 'custom-business-marker',
        html: `
          <div class="relative flex items-center justify-center">
            <div class="absolute w-8 h-8 bg-amber-500/20 rounded-full animate-pulse"></div>
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
        closeButton: false,
        maxWidth: 200
      }).openPopup();

      return () => {
        if (mapInstance.current) {
          mapInstance.current.remove();
          mapInstance.current = null;
        }
      };
    }
  }, []);

  // 手机端激活地图功能
  const activateMap = () => {
    if (mapInstance.current) {
      mapInstance.current.dragging.enable();
      setIsMapActive(true);
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-12 sm:mb-20">
          <span className="text-amber-600 font-bold text-[10px] uppercase tracking-[0.3em] sm:tracking-[0.4em] mb-4 block">BESPOKE EXCHANGE SOLUTIONS</span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 font-header tracking-tight leading-tight">
            规划您的深度交流与调研
          </h2>
          <p className="text-slate-400 text-base sm:text-lg font-light leading-relaxed">
            我们的执行专家常驻欧亚枢纽节点，随时为您规划任务导向的公务行程。
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 sm:gap-16 items-start">
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            {[
              { name: 'Sanyi (三一)', title: '执行运营总监', phone: '+381 66 542 3472', tag: '常驻贝尔格莱德' },
              { name: 'Priscilla (柏吉拉)', title: '国际协调高级专家', phone: '+90 545 467 8762', tag: '常驻伊斯坦布尔' }
            ].map((expert, idx) => (
              <div key={idx} className="bg-slate-50/50 p-6 sm:p-10 rounded-2xl sm:rounded-3xl border border-slate-100 group active:bg-white active:shadow-lg hover:shadow-xl transition-all duration-300 relative">
                <div className="sm:absolute sm:top-8 sm:right-10 mb-4 sm:mb-0">
                  <span className="px-2.5 py-1 bg-white border border-slate-200 text-slate-400 text-[9px] rounded-full font-medium">
                    {expert.tag}
                  </span>
                </div>
                <div className="mb-5">
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-1">{expert.name}</h3>
                  <p className="text-amber-700 text-[10px] sm:text-xs font-bold uppercase tracking-widest">{expert.title}</p>
                </div>
                <div className="space-y-1">
                  <span className="text-[9px] text-slate-400 uppercase font-bold tracking-tighter">微信 / 手机号</span>
                  {/* P0: 一键拨号适配 */}
                  <a 
                    href={`tel:${expert.phone.replace(/\s/g, '')}`} 
                    className="block text-2xl sm:text-3xl font-mono font-bold text-slate-800 tracking-tighter active:text-amber-600 transition-colors"
                  >
                    {expert.phone}
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-5 sm:sticky sm:top-32">
            <div className="bg-white p-8 sm:p-12 rounded-[2rem] sm:rounded-[2.5rem] shadow-xl border border-slate-50 relative">
              <div className="absolute top-0 left-12 right-12 h-1 bg-amber-500 rounded-b-full"></div>
              
              <div className="text-center mb-8">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">与专家即刻对话</h3>
                <p className="text-slate-400 text-[11px] font-light uppercase tracking-widest">Immediate Response Policy</p>
              </div>

              <div className="space-y-3.5 mb-10">
                <button 
                  onClick={handleWeChatClick}
                  className={`w-full py-5 px-6 border rounded-xl flex flex-col items-center justify-center gap-1 font-bold transition-all active:scale-[0.98] ${isCopied ? 'bg-amber-50 border-amber-200 text-amber-600' : 'bg-white border-slate-100 text-slate-700 active:bg-slate-50'}`}
                >
                  <span className="text-sm">{isCopied ? '已复制微信号 ✓' : '微信咨询'}</span>
                  <span className="text-[9px] font-normal opacity-60">{isCopied ? '请在微信搜索添加' : 'ID: EmmanuelTech'}</span>
                </button>
                
                <button 
                  onClick={handleWhatsAppClick}
                  className="w-full py-5 px-6 border border-slate-100 rounded-xl flex flex-col items-center justify-center gap-1 text-slate-700 font-bold bg-white active:bg-slate-50 active:scale-[0.98] transition-all"
                >
                  <span className="text-sm">WhatsApp</span>
                  <span className="text-[9px] text-slate-400 font-normal tracking-tight">+381 66 542 3472</span>
                </button>
              </div>

              <div className="pt-8 border-t border-slate-50 space-y-5">
                <div 
                  className="group cursor-pointer flex items-center gap-4 active:bg-slate-50 p-2 -m-2 rounded-lg transition-colors" 
                  onClick={() => window.location.href = 'mailto:consult@emmanuel.tr'}
                >
                  <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center group-active:bg-amber-50">
                    <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </div>
                  <div className="text-left">
                    <p className="text-[9px] text-slate-400 uppercase font-bold">客户预订</p>
                    <p className="text-sm font-bold text-slate-800">consult@emmanuel.tr</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 
          移动端地图优化： 
          1. 采用“方案 A”：高度压缩 + 交互遮罩。
          2. 使用 z-index 确保遮罩在地图交互之上，防止误触。
        */}
        <div className="mt-16 sm:mt-32 rounded-3xl sm:rounded-[3rem] overflow-hidden border border-slate-100 shadow-xl relative h-[320px] sm:h-[500px] z-10 group">
           <div ref={mapContainerRef} className="w-full h-full bg-slate-50 outline-none"></div>
           
           {!isMapActive && (
              <div 
                onClick={activateMap}
                className="lg:hidden absolute inset-0 z-[1001] bg-[#0a1120]/40 backdrop-blur-[2px] flex flex-col items-center justify-center cursor-pointer transition-opacity duration-500"
              >
                <div className="bg-white/90 px-6 py-3 rounded-full flex items-center gap-3 shadow-2xl active:scale-95 transition-transform">
                   <svg className="w-4 h-4 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                   <span className="text-xs font-bold text-slate-900 tracking-wider">点击激活位置交互</span>
                </div>
                <p className="mt-4 text-[10px] text-white/80 font-light tracking-[0.2em] uppercase">Global Execution Hub · Istanbul</p>
              </div>
           )}

           {isMapActive && (
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-[1000] pointer-events-none lg:hidden animate-fade-in">
                <div className="px-4 py-2 bg-[#0a1120]/80 backdrop-blur-md text-white rounded-full text-[10px] font-medium tracking-wider flex items-center gap-2">
                   <span>双指缩放地图</span>
                </div>
              </div>
           )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
