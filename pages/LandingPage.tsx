
import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import BonusSection from '../components/BonusSection';
import Curriculum from '../components/Curriculum';
import Pricing from '../components/Pricing';
import FAQ from '../components/FAQ';
import StickyCTA from '../components/StickyCTA';
import CountdownTimer from '../components/CountdownTimer';

const LandingPage: React.FC = () => {
    const scrollToPricing = (e?: React.MouseEvent) => {
        if (e) e.preventDefault();
        const element = document.getElementById('pricing');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    const testimonialImages = [
        "https://www.maquillajeyvida.com/wp-content/uploads/2023/10/testimonio-dayana.webp",
        "https://www.maquillajeyvida.com/wp-content/uploads/2023/10/testimonio-alisson.webp",
        "https://www.maquillajeyvida.com/wp-content/uploads/2023/10/testimonio-melissa.webp",
        "https://www.maquillajeyvida.com/wp-content/uploads/2023/10/testimonio-paola-castro.webp",
        "https://www.maquillajeyvida.com/wp-content/uploads/2023/10/testimonio-nadia.webp",
        "https://www.maquillajeyvida.com/wp-content/uploads/2023/10/testimonio-alejita.webp",
        "https://www.maquillajeyvida.com/wp-content/uploads/2023/10/testiomonio-eva.webp",
        "https://www.maquillajeyvida.com/wp-content/uploads/2023/10/testimonio-gaby.webp"
    ];

    const guaranteeSealUrl = "https://www.maquillajeyvida.com/wp-content/uploads/2023/10/sello-satisfaccion.webp";
    const hotmartLogoUrl = "https://upload.wikimedia.org/wikipedia/commons/a/a5/Logo_hotmart.png";

    return (
        <div className="min-h-screen relative bg-white text-gray-900 selection:bg-pink-100 selection:text-pink-600">
            {/* Header Fijo Original */}
            <header className="fixed top-0 left-0 right-0 z-[100] bg-white/90 backdrop-blur-md border-b border-gray-100 py-4 px-6 flex justify-between items-center">
                <div className="text-xl md:text-2xl font-black text-gray-900 tracking-tight">
                    Aprende<span className="text-pink-600">.top</span>
                </div>
                <button
                    onClick={() => scrollToPricing()}
                    className="hidden md:block bg-pink-600 text-white px-6 py-2 rounded-full font-bold text-sm hover:bg-pink-700 transition-all cursor-pointer"
                >
                    RESERVAR MI LUGAR
                </button>
            </header>

            <main>
                <div data-aos="fade-up">
                    <Hero onCtaClick={scrollToPricing} />
                </div>
                <div data-aos="fade-up" data-aos-delay="200">
                    <Stats />
                </div>

                {/* Sección "Para quién es" */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto" data-aos="fade-up">
                            <h2 className="text-center text-3xl md:text-6xl font-black mb-16 leading-tight text-gray-900">
                                ¿Es este <span className="text-pink-600 italic">tu momento</span> de brillar?
                            </h2>

                            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
                                {[
                                    { icon: "✨", title: "Apasionada", desc: "Amas el maquillaje y quieres técnicas pro." },
                                    { icon: "💰", title: "Ahorradora", desc: "No más gastos en maquilladores externos." },
                                    { icon: "🦁", title: "Valiente", desc: "Buscas proyectar seguridad y confianza." },
                                    { icon: "🚀", title: "Emprendedora", desc: "Quieres iniciar en la industria de la belleza." },
                                    { icon: "🌱", title: "Principiante", desc: "Aprendes desde cero, paso a paso." },
                                    { icon: "🛡️", title: "Piel Sensible", desc: "Aprende a cuidar y elegir productos." }
                                ].map((item, idx) => (
                                    <div
                                        key={idx}
                                        className="p-8 bg-gray-50 rounded-3xl flex flex-col items-center text-center hover:bg-pink-50 transition-colors group"
                                        data-aos="fade-up"
                                        data-aos-delay={idx * 100}
                                    >
                                        <span className="text-4xl mb-4">{item.icon}</span>
                                        <h3 className="font-bold text-lg text-gray-900 mb-2">{item.title}</h3>
                                        <p className="text-xs text-gray-500 font-medium leading-relaxed">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Sección de Transformación */}
                <section className="py-24 bg-beauty-pink overflow-hidden relative">
                    <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-16">
                        <div className="md:w-1/2" data-aos="fade-right">
                            <img
                                src="https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=1000&auto=format&fit=crop"
                                alt="Maquillaje Profesional"
                                className="rounded-3xl shadow-2xl"
                            />
                        </div>
                        <div className="md:w-1/2 text-center md:text-left" data-aos="fade-left">
                            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">Domina el <span className="text-pink-600">espejo</span></h2>
                            <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-lg">
                                El maquillaje no oculta quién eres, revela tu mejor versión. Deja de sentirte insegura y empieza a proyectar la mujer imparable que llevas dentro.
                            </p>
                            <button
                                onClick={() => scrollToPricing()}
                                className="inline-block bg-pink-600 text-white px-12 py-5 rounded-2xl font-black text-lg transition-all hover:bg-pink-700 active:scale-95 shadow-xl shadow-pink-200 cursor-pointer"
                            >
                                ¡QUIERO APRENDER TODO DESDE CASA!
                            </button>
                        </div>
                    </div>
                </section>

                {/* Testimonios */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-4">
                        <h2 className="text-center text-3xl md:text-6xl font-black mb-16 italic text-gray-900">Resultados <span className="text-pink-600">Innegables</span></h2>

                        <div className="grid md:grid-cols-2 gap-8 mb-16 max-w-5xl mx-auto">
                            <div className="aspect-video bg-gray-100 rounded-3xl overflow-hidden shadow-xl">
                                <iframe src="https://player.vimeo.com/video/878989450?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen className="w-full h-full" title="Testimonio Diana"></iframe>
                            </div>
                            <div className="aspect-video bg-gray-100 rounded-3xl overflow-hidden shadow-xl">
                                <iframe src="https://player.vimeo.com/video/878989435?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen className="w-full h-full" title="Testimonio Marisabel"></iframe>
                            </div>
                        </div>

                        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
                            {testimonialImages.map((src, i) => (
                                <div key={i} className="break-inside-avoid rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                                    <img src={src} className="w-full object-cover" alt={`Alumna ${i}`} />
                                    <div className="p-3 bg-white">
                                        <div className="flex text-pink-500 text-[10px] mb-1">★★★★★</div>
                                        <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Alumna Verificada</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <Curriculum onCtaClick={scrollToPricing} />

                {/* CTA Intermedio con Contador */}
                <div className="py-24 bg-pink-50 flex flex-col items-center px-4">
                    <p className="text-pink-600 font-bold mb-10 animate-pulse text-lg flex items-center gap-3">
                        <span>🔥</span> Oferta por tiempo limitado - Quedan pocos cupos
                    </p>
                    <div className="mb-14">
                        <CountdownTimer />
                    </div>
                    <button
                        onClick={() => scrollToPricing()}
                        className="w-full max-w-lg bg-pink-600 text-white text-center py-6 rounded-2xl font-black text-xl transition-all shadow-xl hover:bg-pink-700 active:scale-95 uppercase cursor-pointer"
                    >
                        ¡EMPEZAR MI CAMBIO HOY MISMO!
                    </button>
                </div>

                <BonusSection />

                <Pricing />

                <FAQ />

                {/* Last Chance CTA */}
                <section className="py-24 bg-white border-t border-gray-100">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-4xl md:text-7xl font-black mb-8 leading-none">¿Estás lista para <br /> <span className="italic text-pink-600">cambiar tu vida</span>?</h2>
                        <p className="text-xl text-gray-500 mb-12 max-w-xl mx-auto">Únete a más de 1,400 mujeres que ya dominan el arte del automaquillaje.</p>
                        <button
                            onClick={() => scrollToPricing()}
                            className="inline-block bg-pink-600 text-white px-12 py-6 rounded-2xl font-black text-xl hover:bg-pink-700 transition-all shadow-2xl active:scale-95 uppercase cursor-pointer"
                        >
                            ¡SÍ, QUIERO SER UNA EXPERTA!
                        </button>
                    </div>
                </section>

                {/* Trust Section */}
                <section className="py-24 bg-gray-50">
                    <div className="container mx-auto px-4 text-center">
                        <div className="max-w-2xl mx-auto flex flex-col items-center">
                            <img src={guaranteeSealUrl} className="w-24 md:w-32 mb-12" alt="Garantía" />
                            <h3 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 uppercase tracking-tight">
                                INVERSIÓN <span className="text-pink-600">PROTEGIDA</span>
                            </h3>
                            <p className="text-gray-600 text-lg leading-relaxed max-w-xl mb-12">
                                Estamos tan seguros de nuestra metodología que si en 7 días no ves resultados, te devolvemos cada centavo. Sin preguntas, sin trabas.
                            </p>
                            <div className="flex items-center space-x-6 justify-center">
                                <img src={hotmartLogoUrl} className="h-8 opacity-40 grayscale" alt="Hotmart" />
                                <div className="h-8 w-px bg-gray-200"></div>
                                <div className="text-left">
                                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Plataforma Segura</p>
                                    <p className="font-bold text-gray-600 text-base">HOTMART®</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="bg-white text-gray-400 py-20 px-4 border-t border-gray-100">
                <div className="container mx-auto text-center">
                    <div className="text-2xl font-black text-gray-900 mb-8">
                        Aprende<span className="text-pink-600">.top</span>
                    </div>
                    <p className="text-[10px] mb-12 max-w-lg mx-auto leading-relaxed uppercase tracking-widest">Esta página no forma parte del sitio web de Facebook o Facebook Inc. Además, este sitio NO está respaldado por Facebook de ninguna manera.</p>
                    <div className="flex flex-wrap justify-center gap-8 text-xs font-bold">
                        <Link to="/politica-de-privacidad" className="hover:text-pink-600 transition-colors">Política de Privacidad</Link>
                        <Link to="/terminos-de-servicio" className="hover:text-pink-600 transition-colors">Términos de Servicio</Link>
                    </div>
                </div>
            </footer>

            <StickyCTA onCtaClick={scrollToPricing} />
        </div>
    );
};

export default LandingPage;
