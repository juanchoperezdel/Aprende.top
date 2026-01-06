
import { Bonus, Module, FAQItem } from './types';

export const BONUSES: Bonus[] = [
  {
    id: 1,
    title: "Guía de Pestañas",
    description: "Ebook diseñado para complementar tu mirada. Técnicas de aplicación y cuidado efectivo.",
    value: "$27 USD",
    image: "https://www.maquillajeyvida.com/wp-content/uploads/2023/10/guia-de-pestanas.webp"
  },
  {
    id: 2,
    title: "Guía de Brochas",
    description: "Información esencial sobre tipos de brochas y herramientas. Maximiza el uso de cada pincel.",
    value: "$22 USD",
    image: "https://www.maquillajeyvida.com/wp-content/uploads/2023/10/guia-de-brochas.webp"
  },
  {
    id: 3,
    title: "Guía de Cejas",
    description: "Aprende a definir, dar forma y realzar tus cejas de manera profesional y precisa.",
    value: "$32 USD",
    image: "https://www.maquillajeyvida.com/wp-content/uploads/2023/10/guia-de-cejas-automaquillaje.webp"
  },
  {
    id: 4,
    title: "Combinación de Color",
    description: "Crea looks únicos que se adapten a tu tono de piel, ojos y cabello con tendencias actuales.",
    value: "$27 USD",
    image: "https://www.maquillajeyvida.com/wp-content/uploads/2023/10/Combinacion-de-color-Automaquillaje.webp"
  },
  {
    id: 5,
    title: "Checklist",
    description: "Lista de verificación paso a paso para que no olvides ningún detalle en tu rutina.",
    value: "$19 USD",
    image: "https://www.maquillajeyvida.com/wp-content/uploads/2023/10/checklist-curso-de-automaquillaje.webp"
  }
];

export const MODULES: Module[] = [
  { title: "Colorimetría", description: "Descubre qué colores te favorecen y potencian tu belleza natural." },
  { title: "Visagismo y Contornos", description: "Estudia las formas de tu rostro y usa contornos para resaltar tus facciones." },
  { title: "Cuidado de la Piel", description: "Rutinas esenciales para mantener una piel sana y que el maquillaje dure más." },
  { title: "Brochas y Limpieza", description: "Uso correcto de cada herramienta y su higiene fundamental." },
  { title: "Maquillaje Clásico Día", description: "Looks elegantes y espectaculares en tonos cálidos para el diario." },
  { title: "Maquillaje Noche", description: "Técnicas impactantes, exóticas y llenas de color para eventos nocturnos." },
  { title: "Maquillaje Glam", description: "Logra un acabado de alfombra roja que te dejará asombrada." },
  { title: "Maquillaje Semi Cut", description: "Técnica avanzada especial para todo tipo de ojos." },
  { title: "Maquillaje Piel y Labios", description: "Secretos para una piel radiante, sin imperfecciones y labios perfectos." },
  { title: "Pestañas Postizas", description: "Aprende a ponerlas de forma fácil para una mirada de alto impacto." },
  { title: "Tips Especiales", description: "Secretos modernos y útiles acumulados por años de experiencia." }
];

export const FAQS: FAQItem[] = [
  {
    question: "¿Cuánto tiempo tendré acceso al curso?",
    answer: "Tienes acceso al curso para toda la vida, podrás ver el contenido las veces que quieras y por siempre."
  },
  {
    question: "¿Por dónde puedo ver el curso?",
    answer: "Puedes verlo en tu teléfono, tableta, computadora, TV o cualquier dispositivo con acceso a Internet."
  },
  {
    question: "¿Entregan certificado al finalizar?",
    answer: "¡Sí! Recibirás dos certificaciones: una propia de Maquillaje y Vida (Automaquillaje Avanzado) y una externa profesional."
  },
  {
    question: "¿Cómo puedo acceder después de pagar?",
    answer: "Recibirás un enlace a tu correo electrónico inmediatamente para crear tu contraseña y acceder a la plataforma."
  },
  {
    question: "¿El pago es seguro?",
    answer: "Totalmente. Usamos Hotmart®, uno de los procesadores más seguros del mundo. Tus datos están protegidos."
  },
  {
    question: "¿Necesito experiencia previa?",
    answer: "No, el curso está diseñado para llevarte desde cero hasta un nivel profesional paso a paso."
  }
];
