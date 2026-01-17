
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/95 py-4 shadow-sm border-b-2 border-yellow-400' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
        <a href="#inicio" className={`text-xl font-bold serif tracking-[0.2em] transition-colors ${isScrolled ? 'text-green-900' : 'text-green-900'}`}>
          Liceo de Artesanos
        </a>
        <div className={`mt-1 flex gap-1 transition-opacity duration-500 ${isScrolled ? 'opacity-100' : 'opacity-0'}`}>
          <div className="w-4 h-0.5 bg-green-600"></div>
          <div className="w-4 h-0.5 bg-yellow-400"></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
