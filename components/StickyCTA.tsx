
import React from 'react';

import { useCountdown } from '@/hooks/useCountdown';

interface StickyCTAProps {
  onCtaClick: () => void;
}

const StickyCTA: React.FC<StickyCTAProps> = ({ onCtaClick }) => {
  const [isVisible, setIsVisible] = React.useState(false);
  const { minutes, seconds } = useCountdown();

  React.useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past the hero section (approx 600px)
      setIsVisible(window.scrollY > 600);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-3 bg-white/95 backdrop-blur-md border-t border-gray-100 md:hidden flex justify-between items-center shadow-[0_-10px_30px_rgba(0,0,0,0.05)] animate-slide-up">
      <div className="flex flex-col">
        <div className="flex items-center space-x-1 mb-1">
          <span className="text-[10px] font-bold text-red-500 animate-pulse">🔥 Oferta termina en:</span>
          <span className="text-xs font-mono font-bold text-gray-900 bg-gray-100 px-1 rounded">
            {format(timeLeft.minutes)}:{format(timeLeft.seconds)}
          </span>
        </div>
        <div className="flex items-baseline space-x-2">
          <span className="text-[10px] text-gray-400 line-through font-bold leading-none">$127</span>
          <span className="text-xl font-black text-pink-600 leading-none">$40 <small className="text-[9px] text-gray-500 font-bold uppercase">USD</small></span>
        </div>
      </div>
      <button
        onClick={onCtaClick}
        className="bg-pink-600 text-white px-6 py-3 rounded-xl font-black text-xs shadow-xl shadow-pink-100 active:scale-95 transition-all uppercase tracking-tight cursor-pointer"
      >
        RESERVAR LUGAR
      </button>
    </div>
  );
};

export default StickyCTA;
