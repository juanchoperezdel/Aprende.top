
import React, { useState, useEffect } from 'react';

const CountdownTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 27,
    seconds: 45
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const format = (n: number) => n.toString().padStart(2, '0');

  return (
    <div className="inline-flex items-center space-x-6 bg-pink-50/80 backdrop-blur-md px-10 py-5 rounded-[2rem] border border-pink-100 shadow-sm">
      <div className="flex flex-col items-center">
        <span className="text-3xl font-black text-gray-900 leading-none">{format(timeLeft.hours)}</span>
        <span className="text-[9px] uppercase font-bold text-gray-400 mt-2 tracking-widest">Hrs</span>
      </div>
      <span className="text-2xl font-bold text-pink-300">:</span>
      <div className="flex flex-col items-center">
        <span className="text-3xl font-black text-pink-600 leading-none">{format(timeLeft.minutes)}</span>
        <span className="text-[9px] uppercase font-bold text-gray-400 mt-2 tracking-widest">Min</span>
      </div>
      <span className="text-2xl font-bold text-pink-300">:</span>
      <div className="flex flex-col items-center">
        <span className="text-3xl font-black text-gray-900 leading-none">{format(timeLeft.seconds)}</span>
        <span className="text-[9px] uppercase font-bold text-gray-400 mt-2 tracking-widest">Seg</span>
      </div>
    </div>
  );
};

export default CountdownTimer;