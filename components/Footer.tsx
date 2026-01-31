
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const navLinks = [
    { name: '首页', href: '/' },
    { name: '工作方式', href: '/approach' },
    { name: '咨询方向', href: '/focus' },
    { name: '交流案例', href: '/cases' },
    { name: '联系我们', href: '/contact' },
  ];

  const friendLinks = [
    { name: '恩途国际旅行社', en: 'Grace Travel', url: 'https://grace.tr' },
    { name: '巴尔干中国 DMC', en: 'BalkanChina DMC', url: 'https://balkanchina.com' },
  ];

  return (
    <footer className="bg-[#0a1120] text-slate-400 pt-12 sm:pt-16 pb-8 sm:pb-10 border-t border-white/5 font-sans">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12 pb-10 border-b border-white/5 text-center sm:text-left">
          
          {/* 探索与了解 */}
          <div>
            <h4 className="text-[13px] font-bold text-amber-500 mb-6 flex items-center justify-center sm:justify-start gap-2 tracking-wider">
              <span className="w-1 h-3 bg-amber-500"></span>
              探索与了解 <span className="text-[9px] opacity-40 uppercase font-normal ml-1">Navigation</span>
            </h4>
            <div className="grid grid-cols-2 gap-y-2 mb-4">
              {navLinks.map(l => (
                <Link key={l.name} to={l.href} className="text-[13px] font-light text-slate-400 hover:text-white active:text-amber-500 py-1 transition-colors">
                  {l.name}
                </Link>
              ))}
            </div>
          </div>

          {/* 联系我们 */}
          <div>
            <h4 className="text-[13px] font-bold text-amber-500 mb-6 flex items-center justify-center sm:justify-start gap-2 tracking-wider">
              <span className="w-1 h-3 bg-amber-500"></span>
              联系我们 <span className="text-[9px] opacity-40 uppercase font-normal ml-1">Contact</span>
            </h4>
            <div className="space-y-4">
              <div>
                <a href="tel:+905454678762" className="text-xl font-bold text-white tracking-tight active:text-amber-500 transition-colors">
                  +90 545 467 8762
                </a>
                <a href="mailto:consult@emmanuel.tr" className="block text-[15px] font-medium text-slate-300 mt-1 hover:text-amber-500 transition-colors">
                  consult@emmanuel.tr
                </a>
                <p className="text-[10px] text-slate-600 mt-2 font-medium tracking-wide">
                  用于前期沟通与咨询协调 <span className="opacity-40 ml-1 uppercase">Liaison Support</span>
                </p>
              </div>
            </div>
          </div>

          {/* 执行与接待 */}
          <div>
            <h4 className="text-[13px] font-bold text-amber-500 mb-6 flex items-center justify-center sm:justify-start gap-2 tracking-wider">
              <span className="w-1 h-3 bg-amber-500"></span>
              执行与接待 <span className="text-[9px] opacity-40 uppercase font-normal ml-1">Execution</span>
            </h4>
            <div className="text-[13px] font-light leading-relaxed text-slate-300">
              <p className="font-bold text-slate-100 mb-0.5">伊斯坦布尔接待协调办公室</p>
              <p className="text-[11px] text-slate-500 font-sans">Bakırköy · İstanbul, Turkey</p>
              <p className="text-[10px] text-slate-600 mt-2 italic">基于合规化执行保障体系运行</p>
            </div>
          </div>
        </div>

        {/* 友情链接 - 放置于版权信息上方的次级区域 */}
        <div className="py-6 border-b border-white/5 flex flex-wrap justify-center sm:justify-start items-center gap-x-8 gap-y-3">
          <span className="text-[11px] text-slate-600 font-bold uppercase tracking-widest">友情链接 / Links:</span>
          {friendLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="text-[12px] text-slate-500 hover:text-amber-500 transition-colors flex items-center gap-1.5"
            >
              <span>{link.name}</span>
              <span className="text-[10px] opacity-40 font-mono hidden sm:inline">{link.en}</span>
            </a>
          ))}
        </div>

        {/* Bottom Legal - 紧凑化处理 */}
        <div 
          style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
          className="pt-8 flex flex-col md:flex-row justify-between items-center gap-6"
        >
          <p className="text-[9px] text-slate-700 font-mono tracking-wider uppercase text-center md:text-left">
            © 2025 EMMANUEL İÇ VE DIŞ TİCARET AGENCY. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-6">
            <Link 
              to="/privacy" 
              className="text-[11px] text-slate-600 hover:text-slate-400 active:text-amber-500 transition-colors"
            >
              隐私政策 <span className="text-[9px] opacity-30 uppercase ml-0.5">Privacy</span>
            </Link>
            <Link 
              to="/terms" 
              className="text-[11px] text-slate-600 hover:text-slate-400 active:text-amber-500 transition-colors"
            >
              服务条款 <span className="text-[9px] opacity-30 uppercase ml-0.5">Terms</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
