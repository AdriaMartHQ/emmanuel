
import React from 'react';
import Contact from '../components/Contact';

const ContactPage: React.FC = () => {
  return (
    <div className="fade-in bg-white min-h-screen pt-24">
      {/* 移除背景深色的 Header 区，直接展示内容以匹配参考图 */}
      <Contact />
    </div>
  );
};

export default ContactPage;
