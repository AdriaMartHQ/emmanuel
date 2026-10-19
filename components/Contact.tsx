
import React, { useEffect, useRef, useState } from 'react';
import * as L from 'leaflet';
import type { GeoJsonObject } from 'geojson';
import 'leaflet/dist/leaflet.css';
import '../styles/map.css';
import serviceLand from '../data/service-land.json';
import { BALKAN_PARTNER, WECHAT_ID } from '../constants/content';

const RECEPTION_HUBS = [
  { name: 'Istanbul (伊斯坦布尔)', sub: '总部 / 执行中心', lat: 41.0082, lng: 28.9784 },
  { name: 'Belgrade (贝尔格莱德)', sub: 'BalkanChina · 巴尔干项目接待', lat: 44.7866, lng: 20.4489 },
  { name: 'Dubai (迪拜)', sub: '接待资源分部', lat: 25.2048, lng: 55.2708 },
  { name: 'Nairobi (内罗毕)', sub: '接待资源分部', lat: -1.2921, lng: 36.8219 },
  { name: 'Yerevan (埃里温)', sub: '接待资源分部', lat: 40.1772, lng: 44.5133 },
  { name: 'Rwanda · Kigali (基加利)', sub: '接待资源分部', lat: -1.9441, lng: 30.0619 },
  { name: 'Bahrain · Manama (麦纳麦)', sub: '接待资源分部', lat: 26.2285, lng: 50.5860 }
];

const Contact: React.FC = () => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<L.Map | null>(null);
  const [isCopied, setIsCopied] = useState(false);
  const [isMapActive, setIsMapActive] = useState(false);

  const handleWeChatClick = async () => {
    const wechatId = WECHAT_ID;
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
    window.open('https://wa.me/381665423472', '_blank', 'noopener,noreferrer');
  };

  useEffect(() => {
    if (mapContainerRef.current && !mapInstance.current) {
      const isMobile = window.innerWidth <= 768;

      // 初始化地图
      mapInstance.current = L.map(mapContainerRef.current, {
        scrollWheelZoom: false,
        zoomControl: !isMobile,
        dragging: !isMobile,
        touchZoom: isMobile ? 'center' : true,
        minZoom: 2,
        maxZoom: 6,
        attributionControl: true
      });

      // Physical coastlines are bundled locally: no tile API or API key.
      L.geoJSON(serviceLand as GeoJsonObject, {
        style: { color: '#cbd5e1', weight: 1, fillColor: '#e2e8f0', fillOpacity: 1 },
        interactive: false,
      }).addTo(mapInstance.current);
      mapInstance.current.attributionControl.setPrefix(false);
      mapInstance.current.attributionControl.addAttribution(
        'Made with <a href="https://www.naturalearthdata.com/" target="_blank" rel="noopener noreferrer">Natural Earth</a>'
      );

      const bounds = L.latLngBounds([]);
      
      const customIcon = L.divIcon({
        className: 'custom-hub-marker',
        html: `
          <div class="relative flex items-center justify-center">
            <div class="absolute w-6 h-6 bg-amber-500/30 rounded-full animate-pulse"></div>
            <div class="relative w-3 h-3 bg-amber-600 rounded-full border-2 border-white shadow-md"></div>
          </div>
        `,
        iconSize: [24, 24],
        iconAnchor: [12, 12]
      });

      // 遍历添加节点
      RECEPTION_HUBS.forEach(hub => {
        const marker = L.marker([hub.lat, hub.lng], { icon: customIcon, title: hub.name, alt: hub.name }).addTo(mapInstance.current);
        const labelBelow = /^(Bahrain|Rwanda)/.test(hub.name);
        marker.bindTooltip(hub.name.replace(/^.*\((.*?)\).*$/, '$1'), {
          permanent: !isMobile,
          direction: labelBelow ? 'bottom' : 'top',
          offset: labelBelow ? [0, 10] : [0, -10],
          className: 'hub-label',
        });
        const popupContent = `
          <div class="p-1 text-center font-sans">
            <p class="text-[9px] text-amber-700 font-bold uppercase tracking-wider mb-0.5">${hub.sub} / Resource Hub</p>
            <strong class="text-slate-900 block text-xs tracking-tight">${hub.name}</strong>
          </div>
        `;
        marker.bindPopup(popupContent, {
          className: 'business-popup',
          offset: [0, -5],
          closeButton: true
        });
        bounds.extend([hub.lat, hub.lng]);
      });

      // 自动缩放以包含所有城市，添加 padding 确保不贴边
      mapInstance.current.fitBounds(bounds, { 
        padding: isMobile ? [30, 30] : [80, 80],
        maxZoom: 6 
      });

      return () => {
        if (mapInstance.current) {
          mapInstance.current.remove();
          mapInstance.current = null;
        }
      };
    }
  }, []);

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
            与 Emmanuel 沟通调研主题、拟访机构与方案需求；巴尔干项目的报价、签约、付款及落地接待请联系 BalkanChina。
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
                  <a href={`tel:${expert.phone.replace(/\s/g, '')}`} className="block text-2xl sm:text-3xl font-mono font-bold text-slate-800 tracking-tighter active:text-amber-600 transition-colors">
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
                <div className="mt-4 text-sm text-slate-500 leading-relaxed">
                  <p>Emmanuel：前期咨询与机构协调</p>
                  <p className="mt-2">BalkanChina：巴尔干项目签约、收款与接待</p>
                  <a href={BALKAN_PARTNER.contact} target="_blank" rel="noopener noreferrer" className="inline-block mt-4 px-4 py-3 bg-amber-50 text-amber-800 border border-amber-200 rounded-lg font-medium underline underline-offset-4">
                    联系 BalkanChina · 项目报价与接待 ↗
                  </a>
                </div>
              </div>
              <div className="space-y-3.5 mb-10">
                <button onClick={handleWeChatClick} className={`w-full py-5 px-6 border rounded-xl flex flex-col items-center justify-center gap-1 font-bold transition-all active:scale-[0.98] ${isCopied ? 'bg-amber-50 border-amber-200 text-amber-600' : 'bg-white border-slate-100 text-slate-700 active:bg-slate-50'}`}>
                  <span className="text-sm">{isCopied ? '已复制微信号 ✓' : '微信咨询'}</span>
                  <span className="text-[9px] font-normal opacity-60">ID: {WECHAT_ID}</span>
                </button>
                <button onClick={handleWhatsAppClick} className="w-full py-5 px-6 border border-slate-100 rounded-xl flex flex-col items-center justify-center gap-1 text-slate-700 font-bold bg-white active:bg-slate-50 active:scale-[0.98] transition-all">
                  <span className="text-sm">WhatsApp</span>
                  <span className="text-[9px] text-slate-400 font-normal tracking-tight">+381 66 542 3472</span>
                </button>
              </div>
              <div className="pt-8 border-t border-slate-50">
                <a className="group flex items-center gap-4 active:bg-slate-50 p-2 -m-2 rounded-lg transition-colors" href="mailto:consult@emmanuel.tr">
                  <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center group-active:bg-amber-50">
                    <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </div>
                  <div className="text-left">
                    <p className="text-[9px] text-slate-400 uppercase font-bold">Emmanuel · 前期咨询</p>
                    <p className="text-sm font-bold text-slate-800">consult@emmanuel.tr</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 
        多城市接待资源分布示意图 
        高度调整：桌面 520px / 移动 320px 
      */}
      <div className="mt-16 sm:mt-24 w-full px-0 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-6 px-6 sm:px-0">
             <h3 className="text-sm font-bold text-slate-900 tracking-widest uppercase flex items-center gap-3">
               <span className="w-8 h-px bg-amber-500"></span>
               交流与接待资源示意 / Service Network
             </h3>
          </div>
          <div className="rounded-none sm:rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-xl relative h-[320px] sm:h-[520px] z-10 group">
             <div ref={mapContainerRef} role="region" aria-label="交流与接待资源分布地图，可缩放并点击城市标记查看详情" className="w-full h-full bg-slate-50 outline-none"></div>
             {!isMapActive && (
                <button type="button" onClick={activateMap} className="lg:hidden absolute inset-0 z-[1001] bg-[#0a1120]/30 backdrop-blur-[1px] flex flex-col items-center justify-center cursor-pointer">
                  <div className="bg-white/95 px-6 py-3 rounded-full flex items-center gap-3 shadow-2xl">
                     <svg className="w-4 h-4 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                     <span className="text-xs font-bold text-slate-900 tracking-wider">点击查看城市与缩放地图</span>
                  </div>
                </button>
             )}
          </div>
          <div className="px-6 sm:px-0 mt-6 space-y-3">
            <p className="text-sm text-slate-500 leading-relaxed">
              地图仅展示城市级资源位置。巴尔干项目由 BalkanChina 承接；其他地区的具体服务安排以项目确认为准。
            </p>
            <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-600">
              {RECEPTION_HUBS.map(hub => <li key={hub.name}>{hub.name}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
