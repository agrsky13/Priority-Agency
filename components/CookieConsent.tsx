import { useState, useEffect } from 'react';
import { PrivacyPolicy } from './PrivacyPolicy';

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-neutral-900/95 backdrop-blur-xl border-t border-neutral-400/20 p-3 sm:p-4 md:p-6 pb-[max(1rem,env(safe-area-inset-bottom))]">
        <div className="container mx-auto max-w-6xl px-1 sm:px-0">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 md:gap-4">
            <div className="flex-1 min-w-0">
              <p className="text-neutral-300 text-xs sm:text-sm md:text-base leading-relaxed text-pretty">
                Мы используем файлы cookie для улучшения работы сайта. 
                Продолжая использовать сайт, вы соглашаетесь с нашей{' '}
                <button 
                  onClick={() => setShowPrivacy(true)}
                  className="text-neutral-400 hover:text-neutral-300 underline transition-colors"
                >
                  Политикой конфиденциальности
                </button>
              </p>
            </div>
            <div className="flex gap-3 shrink-0 justify-center md:justify-end">
              <button
                type="button"
                onClick={acceptCookies}
                className="touch-manipulation w-full md:w-auto bg-gradient-to-r from-neutral-400/20 to-neutral-400/10 hover:from-neutral-400/30 hover:to-neutral-400/20 backdrop-blur-xl border border-neutral-400/30 text-neutral-300 px-6 py-3 rounded-xl transition-all duration-300 font-medium md:hover:scale-105 min-h-[48px]"
              >
                Принять
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {showPrivacy && (
        <PrivacyPolicy onClose={() => setShowPrivacy(false)} />
      )}
    </>
  );
}
