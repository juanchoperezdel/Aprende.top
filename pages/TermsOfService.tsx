
import React from 'react';
import { Link } from 'react-router-dom';

const TermsOfService: React.FC = () => {
    const currentDate = new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' });

    return (
        <div className="min-h-screen bg-gray-50 text-gray-900 font-sans selection:bg-pink-100 selection:text-pink-600">
            <header className="bg-white border-b border-gray-100 py-6">
                <div className="container mx-auto px-4 flex justify-between items-center">
                    <Link to="/" className="text-2xl font-black text-gray-900 tracking-tight">
                        Aprende<span className="text-pink-600">.top</span>
                    </Link>
                    <Link to="/" className="text-sm font-bold text-gray-500 hover:text-pink-600 transition-colors uppercase tracking-wider">
                        ← Volver al inicio
                    </Link>
                </div>
            </header>

            <main className="container mx-auto px-4 py-12 max-w-3xl">
                <h1 className="text-3xl md:text-5xl font-black mb-4 text-gray-900">Términos y Condiciones de Uso</h1>
                <p className="text-gray-500 mb-12">Última actualización: {currentDate}</p>

                <div className="prose prose-pink prose-lg text-gray-600 max-w-none">
                    <p>
                        Al acceder y utilizar el sitio web Aprende.top, aceptás estos Términos y Condiciones.
                        Si no estás de acuerdo con alguno de ellos, te recomendamos no utilizar este sitio ni adquirir nuestros productos.
                    </p>

                    <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">1. Objeto del sitio</h3>
                    <p>
                        Aprende.top ofrece contenidos educativos digitales, cursos online, guías, materiales descargables y recursos relacionados con el automaquillaje y la formación estética.
                        El acceso a ciertos contenidos está sujeto a la compra previa a través de plataformas autorizadas.
                    </p>

                    <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">2. Acceso y uso del contenido</h3>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>El acceso al contenido adquirido es personal e intransferible.</li>
                        <li>Está prohibido compartir, revender, copiar, distribuir o reproducir total o parcialmente el contenido sin autorización expresa.</li>
                        <li>El incumplimiento podrá derivar en la cancelación del acceso sin derecho a reembolso.</li>
                    </ul>

                    <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">3. Proceso de compra y pagos</h3>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Los pagos son procesados de forma segura a través de Hotmart u otras plataformas externas autorizadas.</li>
                        <li>Aprende.top no almacena información bancaria ni datos de tarjetas de crédito.</li>
                        <li>El precio, la moneda y las condiciones de pago se detallan claramente antes de finalizar la compra.</li>
                    </ul>

                    <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">4. Entrega del producto</h3>
                    <p>
                        Una vez confirmado el pago, el acceso al curso y a los materiales digitales es inmediato, salvo que se indique lo contrario.
                        El acceso se realiza mediante los datos enviados al correo electrónico informado al momento de la compra.
                    </p>

                    <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">5. Política de reembolsos y garantía</h3>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Todos nuestros productos cuentan con una garantía de satisfacción de 7 días, salvo indicación distinta en la página de venta.</li>
                        <li>Si el usuario solicita el reembolso dentro de ese plazo, se devolverá el 100% del importe abonado.</li>
                        <li>Los reembolsos se gestionan conforme a las políticas de Hotmart.</li>
                    </ul>

                    <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">6. Responsabilidad y resultados</h3>
                    <p>
                        Los contenidos ofrecidos tienen fines educativos. Aprende.top no garantiza resultados específicos, ya que estos dependen del compromiso, práctica y dedicación de cada persona.
                        No nos responsabilizamos por interpretaciones incorrectas o usos indebidos del contenido.
                    </p>

                    <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">7. Propiedad intelectual</h3>
                    <p>
                        Todo el contenido de Aprende.top, incluyendo videos, textos, imágenes, diseños, logotipos, audios y materiales descargables, es propiedad exclusiva de Aprende.top o de sus licenciantes.
                        Queda prohibido su uso comercial o distribución sin autorización expresa por escrito.
                    </p>

                    <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">8. Modificaciones del servicio</h3>
                    <p>Aprende.top se reserva el derecho de:</p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Actualizar, modificar o discontinuar contenidos</li>
                        <li>Actualizar estos Términos y Condiciones en cualquier momento</li>
                    </ul>
                    <p className="mt-2">El uso continuado del sitio implica la aceptación de dichas modificaciones.</p>

                    <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">9. Limitación de responsabilidad</h3>
                    <p>Aprende.top no será responsable por:</p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Interrupciones técnicas del sitio</li>
                        <li>Fallas de terceros o plataformas externas</li>
                        <li>Pérdidas indirectas derivadas del uso del contenido</li>
                    </ul>

                    <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">10. Uso indebido del sitio</h3>
                    <p>Está prohibido utilizar el sitio para:</p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Actividades ilegales o fraudulentas</li>
                        <li>Difundir contenido ofensivo o dañino</li>
                        <li>Intentar acceder a áreas restringidas del sistema</li>
                    </ul>
                    <p className="mt-2">El incumplimiento podrá derivar en la suspensión del acceso.</p>

                    <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">11. Enlaces externos</h3>
                    <p>El sitio puede contener enlaces a plataformas de terceros. Aprende.top no se responsabiliza por el contenido, políticas o prácticas de dichos sitios.</p>

                    <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">12. Legislación aplicable</h3>
                    <p>
                        Estos Términos y Condiciones se rigen por las leyes del país donde opera Aprende.top.
                        Cualquier controversia será resuelta por los tribunales competentes correspondientes.
                    </p>

                    <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">13. Contacto</h3>
                    <p>Para consultas relacionadas con estos Términos y Condiciones, podés escribirnos a:</p>
                    <p className="font-bold text-gray-900 mt-4">
                        📧 <a href="mailto:contact@veta.agency" className="text-pink-600 hover:underline">contact@veta.agency</a> <br />
                        🌐 <Link to="/" className="text-pink-600 hover:underline">https://aprende.top</Link>
                    </p>
                </div>
            </main>

            <footer className="bg-white border-t border-gray-100 py-12 text-center text-gray-400 text-sm">
                <p>&copy; {new Date().getFullYear()} Aprende.top. Todos los derechos reservados.</p>
            </footer>
        </div>
    );
};

export default TermsOfService;
