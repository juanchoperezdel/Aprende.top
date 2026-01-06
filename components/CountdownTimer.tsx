
import React from 'react';
import { useCountdown } from '@/hooks/useCountdown';

const CountdownTimer: React.FC = () => {
  const { hours, minutes, seconds } = useCountdown();

  return (
    <div className="inline-flex items-center space-x-6 bg-pink-50/80 backdrop-blur-md px-10 py-5 rounded-[2rem] border border-pink-100 shadow-sm">
      <div className="flex flex-col items-center">
        <span className="text-3xl font-black text-gray-900 leading-none">{hours}</span>
        <span className="text-[9px] uppercase font-bold text-gray-400 mt-2 tracking-widest">Hrs</span>
      </div>
      <span className="text-2xl font-bold text-pink-300">:</span>
      <div className="flex flex-col items-center">
        <span className="text-3xl font-black text-pink-600 leading-none">{minutes}</span>
        <span className="text-[9px] uppercase font-bold text-gray-400 mt-2 tracking-widest">Min</span>
      </div>
      <span className="text-2xl font-bold text-pink-300">:</span>
      <div className="flex flex-col items-center">
        <span className="text-3xl font-black text-gray-900 leading-none">{seconds}</span>
        <span className="text-[9px] uppercase font-bold text-gray-400 mt-2 tracking-widest">Seg</span>
      </div>
    </div>
  );
};

export default CountdownTimer;