import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from './ui/button';
import { Languages } from 'lucide-react';

const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('i18nextLng', lng);
  };

  return (
    <div className="flex items-center gap-2">
      <Languages className="h-4 w-4 text-sunflower-gold" />
      <div className="flex gap-1">
        <Button
          variant={i18n.language === 'en' ? 'default' : 'ghost'}
          size="sm"
          onClick={() => changeLanguage('en')}
          className={`text-xs px-2 py-1 ${
            i18n.language === 'en'
              ? 'bg-sunflower-gold text-black hover:bg-sunflower-gold/80'
              : 'text-white hover:bg-white/10'
          }`}
        >
          EN
        </Button>
        <Button
          variant={i18n.language === 'te' ? 'default' : 'ghost'}
          size="sm"
          onClick={() => changeLanguage('te')}
          className={`text-xs px-2 py-1 ${
            i18n.language === 'te'
              ? 'bg-tomato text-white hover:bg-tomato/80'
              : 'text-white hover:bg-white/10'
          }`}
        >
          తె
        </Button>
      </div>
    </div>
  );
};

export default LanguageSwitcher;
