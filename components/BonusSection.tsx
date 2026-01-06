
import React from 'react';
import { BONUSES } from '../constants';

const BonusSection: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20 max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black mb-6">Regalos <span className="text-pink-600">Extra</span></h2>
          <p className="text-gray-500 text-lg font-medium">Si te unes hoy, desbloqueas automáticamente estos recursos premium sin costo adicional.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BONUSES.map((bonus) => (
            <div key={bonus.id} className="relative group bg-white rounded-[2.5rem] p-4 border border-gray-100 hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col h-full">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden mb-6">
                <img 
                  src={bonus.image} 
                  alt={bonus.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-gray-900 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase z-10">
                  Bonus #{bonus.id}
                </div>
              </div>
              <div className="px-4 pb-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-black text-xl mb-3 group-hover:text-pink-600 transition-colors">{bonus.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{bonus.description}</p>
                </div>
                <div className="mt-8 pt-6 border-t border-gray-50 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none">Valor Real</span>
                    <span className="text-pink-600 font-black text-xl">{bonus.value}</span>
                  </div>
                  <div className="bg-green-50 text-green-600 px-4 py-1.5 rounded-full text-[10px] font-black uppercase">Gratis Hoy</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BonusSection;