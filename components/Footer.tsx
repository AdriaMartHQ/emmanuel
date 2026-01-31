
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
    <footer className="bg-[#0a1120] text-slate-400 pt-16 sm:pt-24 pb-12 sm:pb-16 border-t border-white/5 font-sans">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 sm:gap-16 pb-16 border-b border-white/5 text-center sm:text-left">
          
          <div>
            <h4 className="text-[11px] font-bold text-amber-500 mb-8 flex items-center justify-center sm:justify-start gap-3 uppercase tracking-[0.2em]">
              <span className="w-1 h-4 bg-amber-500"></span>
              探索发现 / Navigation
            </h4>
            <div className="grid grid-cols-2 gap-y-3 mb-8">
              {navLinks.map(l => (
                <Link key={l.name} to={l.href} className="text-[14px] font-light active:text-white py-2 block px-1">
                  {l.name}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[11px] font-bold text-amber-500 mb-8 flex items-center justify-center sm:justify-start gap-3 uppercase tracking-[0.2em]">
              <span className="w-1 h-4 bg-amber-500"></span>
              联系我们 / Contact
            </h4>
            <div className="space-y-6">
              <div className="group">
                <a href="tel:+905454678762" className="text-xl sm:text-2xl font-bold text-white tracking-tight active:text-amber-500 transition-colors">
                  +90 545 467 8762
                </a>
                <span className="block text-[10px] text-slate-600 mt-2 uppercase tracking-widest font-bold">Global Support / 国际联络</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-[11px] font-bold text-amber-500 mb-8 flex items-center justify-center sm:justify-start gap-3 uppercase tracking-[0.2em]">
              <span className="w-1 h-4 bg-amber-500"></span>
              执行与接待 / EXECUTION
            </h4>
            <div className="text-[13px] font-light leading-relaxed text-slate-300">
              <p className="font-bold text-slate-100 mb-1">伊斯坦布尔接待办公室</p>
              <p className="font-sans">Bakırköy · İstanbul</p>
            </div>
          </div>
        </div>

        {/* Bottom Legal - 为移动端优化字号与点击区域 */}
        <div 
          style={{ paddingBottom: 'calc(2rem + env(safe-area-inset-bottom))' }}
          className="pt-10 flex flex-col md:flex-row justify-between items-center gap-8"
        >
          <p className="text-[10px] text-slate-700 font-mono tracking-[0.1em] uppercase text-center md:text-left leading-relaxed">
            © 2025 EMMANUEL İÇ VE DIŞ TİCARET AGENCY.<br className="sm:hidden" /> ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-6 sm:gap-8">
            <Link 
              to="/privacy" 
              className="text-[12px] sm:text-[10px] text-slate-500 active:text-amber-500 py-3 uppercase tracking-wider font-bold transition-colors"
            >
              Privacy <span className="text-[10px] opacity-40 sm:inline hidden">Policy</span>
            </Link>
            <Link 
              to="/terms" 
              className="text-[12px] sm:text-[10px] text-slate-500 active:text-amber-500 py-3 uppercase tracking-wider font-bold transition-colors"
            >
              Terms <span className="text-[10px] opacity-40 sm:inline hidden">of Service</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
