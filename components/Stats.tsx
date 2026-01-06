
import React from 'react';

const Stats: React.FC = () => {
  const stats = [
    { label: "Estudiantes", value: "1,400+" },
    { label: "Cursos", value: "10+" },
    { label: "Suscriptores", value: "30,269+" },
    { label: "Países", value: "18+" }
  ];

  return (
    <div className="bg-pink-600 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center text-white">
              <div className="text-3xl md:text-5xl font-black mb-2">{stat.value}</div>
              <div className="text-pink-100 text-[10px] uppercase font-bold tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;