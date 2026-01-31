
import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import Logo from './Logo';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerBackgroundClass = (!isHomePage || scrolled)
    ? 'bg-[#0a1120]/95 backdrop-blur-md shadow-2xl py-2 sm:py-3 border-b border-white/5'
    : 'bg-transparent py-4 sm:py-8 border-b border-transparent';

  const navItems = [
    { name: '首页', href: '/' },
    { name: '工作方式', href: '/approach' },
    { name: '咨询方向', href: '/focus' },
    { name: '交流案例', href: '/cases' },
    { name: '合作模式', href: '/cooperation' },
    { name: '联系我们', href: '/contact' },
  ];

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header 
      style={{ 
        paddingTop: isHomePage && !scrolled 
          ? 'calc(1.5rem + env(safe-area-inset-top))' 
          : 'env(safe-area-inset-top)' 
      }}
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ease-in-out ${headerBackgroundClass} px-1 sm:px-0`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-12 sm:h-auto">
          <Link to="/" onClick={closeMenu} className="active:opacity-70 transition-opacity">
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10">
            <nav className="flex items-center space-x-8">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  className={({ isActive }) => `
                    text-[13px] font-medium tracking-widest transition-all duration-300
                    ${isActive ? 'text-amber-500' : 'text-slate-300 hover:text-white'}
                  `}
                >
                  {item.name}
                </NavLink>
              ))}
            </nav>
            <div className="flex items-center border-l border-white/10 pl-10">
              <Link 
                to="/contact" 
                className="px-6 py-2.5 bg-amber-600 hover:bg-amber-500 text-white text-[11px] font-bold uppercase tracking-[0.2em] rounded-sm transition-all shadow-lg shadow-amber-900/20"
              >
                即刻咨询
              </Link>
            </div>
          </div>

          {/* Mobile Toggle - 优化点击反馈与面积 */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden w-11 h-11 flex items-center justify-center text-white active:scale-90 active:bg-white/10 rounded-full transition-all focus:outline-none"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-4 flex flex-col justify-between items-end">
              <span className={`h-[1.5px] bg-current transition-all duration-300 ${isMenuOpen ? 'w-6 rotate-45 translate-y-[7.5px]' : 'w-6'}`}></span>
              <span className={`h-[1.5px] bg-current transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'w-4'}`}></span>
              <span className={`h-[1.5px] bg-current transition-all duration-300 ${isMenuOpen ? 'w-6 -rotate-45 -translate-y-[7.5px]' : 'w-6'}`}></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed inset-0 bg-[#0a1120] z-[90] transition-all duration-500 pt-32 px-10 ${isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'}`}>
        <div className="space-y-6">
          {navItems.map((item) => (
            <NavLink key={item.name} to={item.href} onClick={closeMenu} className="block text-2xl font-bold text-white border-b border-white/5 pb-4 active:text-amber-500">
              {item.name}
            </NavLink>
          ))}
          <Link to="/contact" onClick={closeMenu} className="block w-full py-5 bg-amber-600 text-center text-white font-bold uppercase tracking-widest mt-10 active:bg-amber-700 active:scale-[0.98] transition-all">
            即刻咨询
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
