
import React from 'react';
import { Link } from 'react-router-dom';
import { ENTITY_NAMES } from '../constants/content';

const Footer: React.FC = () => {
  const navLinks = [
    { name: '首页', href: '/' },
    { name: '工作方式', href: '/approach' },
    { name: '咨询方向', href: '/focus' },
    { name: '交流案例', href: '/cases' },
    { name: '联系我们', href: '/contact' },
  ];

  return (
    <footer className="bg-[#0a1120] text-slate-400 pt-24 pb-12 border-t border-white/5 font-sans">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* 三列布局 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 pb-20 border-b border-white/5">
          
          {/* 第一列：探索发现 */}
          <div>
            <h4 className="text-[11px] font-bold text-amber-500 mb-10 flex items-center gap-3 uppercase tracking-[0.2em]">
              <span className="w-1 h-4 bg-amber-500"></span>
              探索发现 / Navigation
            </h4>
            <div className="grid grid-cols-2 gap-y-4 mb-8">
              {navLinks.map(l => (
                <Link key={l.name} to={l.href} className="text-[14px] font-light hover:text-white transition-colors">
                  {l.name}
                </Link>
              ))}
            </div>
            <p className="text-[12px] leading-relaxed text-slate-500 font-light max-w-xs">
              Emmanuel 专注于为中国政企、园区及高校提供以任务为导向的深度调研咨询与全球资源协调支持。
            </p>
          </div>

          {/* 第二列：联系我们 */}
          <div>
            <h4 className="text-[11px] font-bold text-amber-500 mb-10 flex items-center gap-3 uppercase tracking-[0.2em]">
              <span className="w-1 h-4 bg-amber-500"></span>
              联系我们 / Contact
            </h4>
            <div className="space-y-8">
              <div className="group">
                <a href="tel:+905454678762" className="text-2xl font-bold text-white tracking-tight hover:text-amber-500 transition-colors inline-block">
                  +90 545 467 8762
                </a>
                <span className="block text-[10px] text-slate-600 mt-2 uppercase tracking-widest font-bold">Global Support / 国际联络</span>
              </div>
              <div className="group">
                <a href="mailto:consult@emmanuel.tr" className="text-lg font-medium text-slate-200 hover:text-amber-500 transition-colors block leading-none">
                  consult@emmanuel.tr
                </a>
                <span className="text-[10px] text-slate-600 uppercase tracking-widest mt-2 block font-bold">Official Liaison / 官方咨询电邮</span>
              </div>
            </div>
          </div>

          {/* 第三列：执行与接待 */}
          <div>
            <h4 className="text-[11px] font-bold text-amber-500 mb-10 flex items-center gap-3 uppercase tracking-[0.2em]">
              <span className="w-1 h-4 bg-amber-500"></span>
              执行与接待 / EXECUTION
            </h4>
            <div className="space-y-8">
              {/* 伊斯坦布尔办公室地址排版 */}
              <div className="text-[13px] font-light leading-relaxed text-slate-300">
                <p className="font-bold text-slate-100 mb-1">伊斯坦布尔接待办公室（Bakırköy）</p>
                <p>Moda Pasajı, Kat 2, Ofis 35</p>
                <p>34145 Bakırköy · İstanbul</p>
                <p className="text-[10px] text-slate-600 mt-2 font-mono leading-tight">
                  详细地址：MH, Halkçı Sk. MODA PASAJI NO:25 KAT:2 · BÜRO/OFİS NO:35, 34145
                </p>
              </div>
              
              <div className="flex items-center gap-5 p-5 bg-white/[0.02] border border-white/5 rounded-lg group hover:bg-white/[0.05] transition-all duration-500">
                <div className="w-14 h-14 bg-slate-800/50 flex items-center justify-center rounded border border-white/10 font-black text-[9px] text-slate-500 group-hover:text-amber-500 group-hover:border-amber-500/30 transition-all uppercase tracking-tighter">
                  Consulting
                </div>
                <div>
                  <h5 className="text-[12px] font-bold text-slate-100 tracking-tight">项目接待与执行协调</h5>
                  <p className="text-[10px] text-slate-500 mt-1 font-medium">全案逻辑咨询主体</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 合作机构 / PARTNERS - 低调设计 */}
        <div className="py-12 border-b border-white/5">
          <h4 className="text-[11px] font-bold text-slate-500 mb-10 flex items-center gap-3 uppercase tracking-[0.2em]">
            <span className="w-1 h-4 bg-slate-800"></span>
            合作机构 / PARTNERS
          </h4>
          <div className="flex flex-wrap gap-x-16 gap-y-4">
            <a 
              href="https://grace.tr" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[13px] font-light text-slate-400 hover:text-white transition-colors"
            >
              恩途国际旅行社 · Grace Way Travel
            </a>
            <a 
              href="https://balkanchina.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[13px] font-light text-slate-400 hover:text-white transition-colors"
            >
              巴尔干中国地接社 · Balkan China DMC
            </a>
          </div>
        </div>

        {/* 底部版权 */}
        <div className="pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] text-slate-700 font-mono tracking-[0.2em] uppercase text-center md:text-left">
            © 2025 EMMANUEL İÇ VE DIŞ TİCARET AGENCY. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-8">
            <span className="text-[10px] text-slate-800 uppercase tracking-widest font-bold">Privacy Policy</span>
            <span className="text-[10px] text-slate-800 uppercase tracking-widest font-bold">Terms of Liaison</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
