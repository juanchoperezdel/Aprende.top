
import React from 'react';
import CountdownTimer from './CountdownTimer';

interface HeroProps {
  onCtaClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  return (
    <section className="relative pt-32 pb-16 md:pt-48 md:pb-32 overflow-hidden bg-white">
      {/* Background Decor - Minimalist Pink Gradient */}
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-pink-50 via-transparent to-transparent -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-block px-4 py-1.5 bg-pink-50 border border-pink-100 rounded-full mb-8">
            <p className="text-[10px] md:text-xs font-bold text-pink-600 uppercase tracking-widest">Oferta Especial de Lanzamiento</p>
          </div>

          <h1 className="text-4xl md:text-8xl font-black mb-6 tracking-tighter leading-none text-gray-900">
            Domina el Arte del <br className="hidden md:block" /> 
            <span className="italic font-serif text-pink-600">Automaquillaje</span>
          </h1>
          
          <p className="text-lg md:text-2xl text-gray-500 max-w-2xl mx-auto mb-12 font-medium leading-relaxed">
            De cero a resultados profesionales desde casa, potencia tu seguridad y ahorra miles de dólares en productos mal elegidos.
          </p>

          {/* Ultra-Sharp Video Container */}
          <div className="relative max-w-4xl mx-auto mb-16 group">
            <div className="absolute -inset-1 bg-pink-200 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative bg-black rounded-3xl overflow-hidden shadow-2xl aspect-video">
              <iframe 
                className="w-full h-full"
                src="https://player.vimeo.com/video/874457484?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" 
                title="Curso Automaquillaje"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          <div className="max-w-xl mx-auto mt-12">
            <CountdownTimer />
            <div className="mt-12">
              <button 
                onClick={onCtaClick}
                className="group relative w-full md:w-auto inline-block bg-pink-600 text-white px-12 py-5 rounded-2xl text-xl font-black transition-all transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-pink-100 active:scale-95 uppercase tracking-tight cursor-pointer"
              >
                ¡Reservar mi lugar con 68% OFF!
              </button>
              <p className="mt-4 text-[10px] text-gray-400 uppercase font-bold tracking-widest">Garantía Incondicional de 7 Días</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
