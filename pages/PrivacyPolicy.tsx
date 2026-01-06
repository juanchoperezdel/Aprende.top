
import React from 'react';
import { Link } from 'react-router-dom';

const PrivacyPolicy: React.FC = () => {
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
                <h1 className="text-3xl md:text-5xl font-black mb-4 text-gray-900">Política de Privacidad</h1>
                <p className="text-gray-500 mb-12">Última actualización: {currentDate}</p>

                <div className="prose prose-pink prose-lg text-gray-600 max-w-none">
                    <p>
                        En Aprende.top, respetamos y protegemos la privacidad de nuestros usuarios.
                        Esta Política de Privacidad describe cómo recopilamos, utilizamos y protegemos la información personal que nos proporcionas al utilizar nuestro sitio web.
                    </p>
                    <p>
                        Al acceder y utilizar este sitio, aceptas las prácticas descritas en esta política.
                    </p>

                    <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">1. Información que recopilamos</h3>
                    <p>Podemos recopilar los siguientes datos personales cuando interactuás con nuestro sitio:</p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Nombre y apellido</li>
                        <li>Dirección de correo electrónico</li>
                        <li>Información de contacto</li>
                        <li>Información de pago (procesada de forma segura por plataformas externas)</li>
                        <li>Dirección IP, tipo de navegador y datos de uso del sitio</li>
                        <li>Información proporcionada voluntariamente a través de formularios</li>
                    </ul>
                    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
                        <p className="font-bold text-yellow-800 m-0 text-sm">⚠️ Aprende.top no almacena datos de tarjetas de crédito ni información bancaria sensible.</p>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">2. Cómo utilizamos tu información</h3>
                    <p>La información recopilada se utiliza para:</p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Brindarte acceso a nuestros cursos y contenidos digitales</li>
                        <li>Procesar pagos y gestionar tu compra</li>
                        <li>Enviarte información relacionada con tu compra, acceso o soporte</li>
                        <li>Enviar comunicaciones educativas, promocionales o informativas (si aceptaste recibirlas)</li>
                        <li>Mejorar la experiencia del usuario y optimizar nuestro sitio web</li>
                        <li>Cumplir con obligaciones legales y de seguridad</li>
                    </ul>

                    <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">3. Plataformas de terceros</h3>
                    <p>Para operar correctamente, utilizamos servicios de terceros que pueden procesar datos personales de forma segura, tales como:</p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Hotmart (procesamiento de pagos y entrega del producto)</li>
                        <li>Plataformas de email marketing</li>
                        <li>Herramientas de análisis y medición (como Google Analytics)</li>
                        <li>Plataformas publicitarias como Meta (Facebook/Instagram) y Google Ads</li>
                    </ul>
                    <p className="mt-2">Cada una de estas plataformas cuenta con sus propias políticas de privacidad.</p>

                    <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">4. Cookies y tecnologías similares</h3>
                    <p>Utilizamos cookies y tecnologías similares para:</p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Analizar el tráfico y comportamiento de los usuarios</li>
                        <li>Mejorar la navegación y personalizar la experiencia</li>
                        <li>Medir el rendimiento de campañas publicitarias</li>
                    </ul>
                    <p className="mt-2">Podés desactivar las cookies desde la configuración de tu navegador, aunque esto puede afectar el funcionamiento del sitio.</p>

                    <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">5. Protección de la información</h3>
                    <p>Implementamos medidas de seguridad técnicas y organizativas para proteger tu información personal contra accesos no autorizados, pérdidas o usos indebidos.</p>
                    <p>Aun así, ningún sistema es 100% seguro, por lo que no podemos garantizar seguridad absoluta.</p>

                    <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">6. Derechos del usuario</h3>
                    <p>Tenés derecho a:</p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Acceder a tus datos personales</li>
                        <li>Solicitar la corrección o actualización de tus datos</li>
                        <li>Solicitar la eliminación de tu información</li>
                        <li>Retirar tu consentimiento para recibir comunicaciones comerciales</li>
                    </ul>
                    <p className="mt-4">
                        Podés ejercer estos derechos escribiéndonos a: <br />
                        <a href="mailto:contact@veta.agency" className="text-pink-600 font-bold hover:underline">📩 contact@veta.agency</a>
                    </p>

                    <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">7. Menores de edad</h3>
                    <p>Nuestros contenidos están dirigidos a personas mayores de 18 años. No recopilamos intencionalmente información de menores de edad.</p>

                    <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">8. Cambios en esta política</h3>
                    <p>Nos reservamos el derecho de modificar esta Política de Privacidad en cualquier momento. Las actualizaciones serán publicadas en esta misma página.</p>
                    <p>El uso continuado del sitio implica la aceptación de dichos cambios.</p>

                    <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">9. Contacto</h3>
                    <p>Si tenés dudas sobre esta Política de Privacidad o el uso de tus datos, podés contactarnos en:</p>
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

export default PrivacyPolicy;
