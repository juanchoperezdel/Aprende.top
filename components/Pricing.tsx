
import React from 'react';

const Pricing: React.FC = () => {
  const purchaseLink = "https://go.hotmart.com/S103515813I?ap=6fff";
  const mockupUrl = "https://www.maquillajeyvida.com/wp-content/uploads/2023/10/productos-automaquillaje-avanzado-scaled.webp";
  const guaranteeSealUrl = "https://www.maquillajeyvida.com/wp-content/uploads/2023/10/sello-satisfaccion.webp";

  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-gray-100 relative">
          <div className="absolute top-6 left-6 z-10">
            <div className="bg-red-500 text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase animate-bounce tracking-widest shadow-lg">
              ¡Últimos 14 cupos!
            </div>
          </div>
          <div className="grid md:grid-cols-2">
            {/* Columna de Oferta */}
            <div className="p-12 md:p-16 bg-pink-600 text-white">
              <h2 className="text-3xl font-black mb-8 italic font-serif">¿Qué incluye toda la oferta?</h2>

              <div className="md:hidden mb-10">
                <img
                  src={mockupUrl}
                  alt="Contenido del Curso"
                  className="w-full rounded-2xl shadow-xl border border-pink-400"
                />
              </div>

              <ul className="space-y-5 mb-12">
                {[
                  "Certificación en Automaquillaje Avanzado",
                  "Certificación en Automaquillaje Profesional",
                  "Acceso de por vida al contenido",
                  "Soporte académico vitalicio",
                  "Grupo VIP Exclusivo",
                  "5 Bonus: Pestañas, Brochas, Cejas, Color y Checklist"
                ].map((item, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-pink-200 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm md:text-base font-semibold text-pink-50">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="text-center">
                <p className="text-pink-200 line-through mb-1 font-bold tracking-widest text-xs uppercase">VALOR REAL: $127.00 USD</p>
                <div className="text-6xl font-black mb-3">$40 USD</div>
                <p className="text-[10px] uppercase font-bold text-pink-200 mb-10 tracking-[0.2em]">Pago único - Acceso Inmediato</p>
                <a
                  href={purchaseLink}
                  className="block w-full bg-white text-pink-600 py-5 rounded-2xl font-black text-xl hover:bg-gray-50 transition-all shadow-xl active:scale-95 transform uppercase"
                >
                  OBTENER ACCESO INMEDIATO
                </a>
                <div className="flex justify-center items-center gap-4 mt-6">
                  {/* Logos in white */}
                  <div className="flex gap-4 brightness-0 invert opacity-90">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" className="h-4" alt="Visa" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/b/b7/MasterCard_Logo.svg" className="h-6" alt="Mastercard" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" className="h-5" alt="PayPal" />
                  </div>
                  <div className="flex items-center text-[10px] font-bold text-white/90 border-l border-white/20 pl-4 ml-2">
                    <svg className="w-4 h-4 text-white mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                    PAGO SEGURO
                  </div>
                </div>
              </div>
            </div>

            {/* Columna de Garantía */}
            <div className="p-12 md:p-16 flex flex-col justify-center bg-white text-center">
              <div className="hidden md:block mb-10">
                <img src={mockupUrl} alt="Contenido del Curso" className="w-full rounded-2xl shadow-lg border border-gray-50" />
              </div>

              <div className="mb-8">
                <img src={guaranteeSealUrl} alt="Garantía" className="w-28 mx-auto mb-6" />
                <h3 className="text-2xl font-black text-gray-900 mb-4 uppercase tracking-tight">Garantía Total de 7 Días</h3>
                <p className="text-gray-500 text-sm leading-relaxed px-4">
                  Prueba el curso por una semana entera. Si no estás fascinada, te devolvemos el 100% de tu dinero de inmediato.
                </p>
              </div>

              <div className="flex justify-center space-x-6 items-center border-t border-gray-50 pt-8 opacity-40 grayscale">
                <img src="https://cdn-icons-png.flaticon.com/512/179/179431.png" className="h-6" alt="Icono" />
                <img src="https://cdn-icons-png.flaticon.com/512/349/349221.png" className="h-6" alt="Icono" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" className="h-4" alt="Icono" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;