
import React from 'react';

interface StickyCTAProps {
  onCtaClick: () => void;
}

const StickyCTA: React.FC<StickyCTAProps> = ({ onCtaClick }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-white/95 backdrop-blur-md border-t border-gray-100 md:hidden flex justify-between items-center shadow-[0_-10px_30px_rgba(0,0,0,0.05)]">
      <div className="flex flex-col">
        <span className="text-[10px] text-gray-400 line-through font-bold leading-none">$127 USD</span>
        <span className="text-2xl font-black text-pink-600 leading-none mt-1">$40 <small className="text-[10px] text-gray-400 font-bold uppercase">USD</small></span>
      </div>
      <button 
        onClick={onCtaClick}
        className="bg-pink-600 text-white px-8 py-4 rounded-2xl font-black text-sm shadow-xl shadow-pink-100 active:scale-95 transition-all uppercase tracking-tight cursor-pointer"
      >
        RESERVAR AHORA
      </button>
    </div>
  );
};

export default StickyCTA;
