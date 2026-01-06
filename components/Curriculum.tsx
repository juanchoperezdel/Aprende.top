
import React from 'react';
import { MODULES } from '../constants';

interface CurriculumProps {
  onCtaClick: () => void;
}

const Curriculum: React.FC<CurriculumProps> = ({ onCtaClick }) => {
  return (
    <section className="py-24 bg-white border-y border-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-pink-600 text-xs font-bold uppercase tracking-[0.3em] mb-4">Plan de Estudio</p>
            <h2 className="text-4xl md:text-7xl font-black leading-tight text-gray-900 mb-8">
              Mapa del <br /> 
              <span className="text-pink-600 italic font-serif">Aprendizaje</span>
            </h2>
            <p className="text-gray-500 text-lg font-medium max-w-2xl mx-auto leading-relaxed">
              11 módulos prácticos con más de 40 lecciones diseñadas para transformar tu técnica desde el primer día.
            </p>
          </div>

          <div className="grid gap-4">
            {MODULES.map((module, i) => (
              <div 
                key={i} 
                className="group flex items-center p-6 md:p-8 bg-gray-50 rounded-3xl hover:bg-pink-50 transition-all duration-300 border border-transparent hover:border-pink-100"
              >
                <div className="w-12 h-12 bg-white text-pink-600 rounded-2xl flex items-center justify-center font-black text-xl shrink-0 shadow-sm group-hover:bg-pink-600 group-hover:text-white transition-all">
                  {i + 1}
                </div>
                
                <div className="ml-6 flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {module.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {module.description}
                  </p>
                </div>

                <div className="hidden md:block ml-4 text-pink-200 group-hover:text-pink-500 transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7"></path>
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-20 text-center px-4">
        <button 
          onClick={onCtaClick}
          className="inline-block bg-pink-600 text-white px-12 py-6 rounded-2xl text-xl font-black hover:bg-pink-700 transition-all shadow-xl shadow-pink-100 active:scale-95 uppercase cursor-pointer"
        >
          ¡QUIERO TODAS ESTAS LECCIONES!
        </button>
      </div>
    </section>
  );
};

export default Curriculum;
