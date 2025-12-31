
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Sun, Mail, MapPin, Phone, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-[#1a0606] pt-16 pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Sun className="h-6 w-6 text-tomato" />
              <span className="font-bold text-lg text-white">{t('footer.brand')}</span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              {t('footer.brandDescription')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-white">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-white/70 hover:text-tomato transition-colors">{t('footer.aboutUs')}</Link></li>
              <li><Link to="/events" className="text-white/70 hover:text-tomato transition-colors">{t('footer.upcomingEvents')}</Link></li>
              <li><Link to="/gallery" className="text-white/70 hover:text-tomato transition-colors">{t('footer.photoGallery')}</Link></li>
              <li><Link to="/donate" className="text-white/70 hover:text-tomato transition-colors">{t('footer.makeDonation')}</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3 text-white/70">
                <MapPin className="h-5 w-5 text-tomato shrink-0" />
                <span>123 Spiritual Avenue,<br />Peace City, PC 54321</span>
              </li>
              <li className="flex items-center gap-3 text-white/70">
                <Phone className="h-5 w-5 text-tomato shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3 text-white/70">
                <Mail className="h-5 w-5 text-tomato shrink-0" />
                <span>info@divinetemple.org</span>
              </li>
            </ul>
          </div>

          {/* Newsletter / Hours */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Temple Hours</h3>
            <div className="space-y-2 text-sm text-white/70">
              <p className="flex justify-between">
                <span>Mon - Fri:</span>
                <span>6:00 AM - 9:00 PM</span>
              </p>
              <p className="flex justify-between">
                <span>Sat - Sun:</span>
                <span>5:30 AM - 10:00 PM</span>
              </p>
              <div className="mt-6 pt-6 border-t border-white/20">
                 <p className="text-xs text-white/60">
                   Follow us on social media for daily updates.
                 </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/20 text-center text-sm text-white/60">
          <p className="flex items-center justify-center gap-1">
            {t('footer.copyright')} <Heart className="h-3 w-3 text-tomato fill-current" /> {t('footer.copyrightSuffix')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
