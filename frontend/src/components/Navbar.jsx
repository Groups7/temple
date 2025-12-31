
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X, Sun, Instagram, Facebook, Youtube, Twitter } from 'lucide-react';
import { Button } from './ui/button';
import LanguageSwitcher from './LanguageSwitcher';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { t } = useTranslation();

  const navLinks = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.about'), path: '/about' },
    { name: t('nav.events'), path: '/events' },
    { name: t('nav.accommodation'), path: '/accommodation' },
    { name: t('nav.gallery'), path: '/gallery' },
    { name: t('nav.contact'), path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-[#2b0a0a]/90 border-b border-sunflower-gold/20 sticky top-0 z-50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center flex-shrink-0">
            <Link to="/" className="flex-shrink-0 flex items-center gap-2 group">
              <div className="relative">
                 <div className="absolute inset-0 bg-sunflower-gold blur-md opacity-40 group-hover:opacity-60 transition-opacity" />
                 <Sun className="h-8 w-8 text-sunflower-gold relative z-10" />
              </div>
              <span className="font-serif font-bold text-lg tracking-wide text-white">
                {t('brand.name')}
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`px-2 py-2 text-sm font-medium transition-all duration-200 relative group ${
                  isActive(link.path)
                    ? 'text-sunflower-gold'
                    : 'text-white/80 hover:text-sunflower-gold'
                }`}
              >
                {link.name}
                {isActive(link.path) && (
                   <span className="absolute bottom-0 left-0 w-full h-[1px] bg-sunflower-gold shadow-[0_0_10px_#ffc669]" />
                )}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-sunflower-gold transition-all duration-300 group-hover:w-full opacity-50" />
              </Link>
            ))}
            
            <div className="h-6 w-[1px] bg-white/10 mx-2" />

            {/* Social Icons */}
            <div className="flex items-center gap-2">
               <a href="#" className="text-white/70 hover:text-sunflower-gold transition-colors"><Instagram className="w-5 h-5" /></a>
               <a href="#" className="text-white/70 hover:text-sunflower-gold transition-colors"><Facebook className="w-5 h-5" /></a>
               <a href="#" className="text-white/70 hover:text-sunflower-gold transition-colors"><Youtube className="w-5 h-5" /></a>
            </div>

            <div className="ml-2">
              <LanguageSwitcher />
            </div>

            <Link to="/donate">
              <Button className="bg-gradient-to-r from-tomato to-coral-glow hover:from-coral-glow hover:to-tomato text-white shadow-[0_0_15px_rgba(255,101,66,0.4)] rounded-full px-6 border border-white/10">
                {t('nav.donate')}
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white/80 hover:text-white focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#2b0a0a] border-b border-sunflower-gold/20">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive(link.path)
                    ? 'text-sunflower-gold bg-white/5'
                    : 'text-white/70 hover:text-sunflower-gold hover:bg-white/5'
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            <div className="flex items-center gap-6 px-4 py-4 justify-center border-t border-white/10 mt-2">
               <a href="#" className="text-white/70 hover:text-sunflower-gold"><Instagram className="w-6 h-6" /></a>
               <a href="#" className="text-white/70 hover:text-sunflower-gold"><Facebook className="w-6 h-6" /></a>
               <a href="#" className="text-white/70 hover:text-sunflower-gold"><Youtube className="w-6 h-6" /></a>
            </div>

            <div className="pt-2 pb-2 px-3">
               <Link to="/donate" onClick={() => setIsOpen(false)} className="w-full block">
                <Button className="w-full bg-gradient-to-r from-tomato to-tomato-2 text-white rounded-full">
                  {t('nav.donate')}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
