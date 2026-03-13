'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: '¿Qué es exactamente HumanOS?',
    answer: 'HumanOS es un sistema operativo personal que funciona como un dashboard unificado para gestionar las áreas más importantes de tu vida: salud, mente, familia, trabajo, finanzas y propósito. Combina seguimiento de hábitos, métricas biométricas, análisis de datos y objetivos en un solo lugar.'
  },
  {
    question: '¿Cómo se calcula el Human Score?',
    answer: 'El Human Score es un índice compuesto que combina los scores individuales de los 6 pilares (Health, Mind, Family, Work, Finance, Purpose). Cada pilar tiene su propio algoritmo basado en métricas específicas, hábitos cumplidos y progreso hacia objetivos. El resultado es un número del 0-100 que refleja tu estado general.'
  },
  {
    question: '¿Puedo integrar mis wearables y apps?',
    answer: 'Sí. HumanOS está diseñado para integrarse con dispositivos como Apple Watch, Fitbit, Oura Ring, y apps como Apple Health, Google Fit, y servicios financieros. También puedes ingresar datos manualmente si prefieres.'
  },
  {
    question: '¿Mis datos están seguros?',
    answer: 'Absolutamente. Usamos encriptación de nivel bancario (AES-256), todos los datos están encriptados en tránsito y en reposo. Tú eres el único dueño de tus datos y puedes exportarlos o eliminarlos en cualquier momento. No vendemos ni compartimos información personal.'
  },
  {
    question: '¿Cuánto tiempo necesito invertir diariamente?',
    answer: 'La mayoría de las métricas se sincronizan automáticamente. Solo necesitas 5-10 minutos al día para registrar hábitos y hacer journaling si lo deseas. Las revisiones semanales y mensuales toman 15-30 minutos.'
  },
  {
    question: '¿Habrá versión móvil?',
    answer: 'Sí. HumanOS estará disponible en web, iOS y Android. La versión móvil será nativa y optimizada para registro rápido de hábitos y visualización de scores en tiempo real.'
  },
  {
    question: '¿Cuál es el precio?',
    answer: 'Aún estamos definiendo el modelo de precios. Los early adopters del waitlist tendrán acceso a descuentos significativos y posiblemente acceso de por vida a precio reducido. Te mantendremos informado.'
  },
  {
    question: '¿Puedo usarlo solo para algunas áreas de mi vida?',
    answer: 'Sí, aunque el sistema está diseñado para funcionar mejor de forma holística. Puedes empezar con 1-2 pilares y expandir gradualmente. El Human Score se ajustará automáticamente basado en los pilares que tengas activos.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 px-4 bg-dark-900">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Preguntas <span className="text-gradient">Frecuentes</span>
          </h2>
          <p className="text-xl text-gray-400">
            Todo lo que necesitas saber sobre HumanOS
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full bg-dark-800 border border-dark-700 hover:border-primary-500/50 rounded-2xl p-6 text-left transition-all duration-300"
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-lg font-bold pr-4">{faq.question}</h3>
                  <ChevronDown
                    className={`w-5 h-5 text-primary-400 flex-shrink-0 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </div>
                
                <motion.div
                  initial={false}
                  animate={{
                    height: openIndex === index ? 'auto' : 0,
                    opacity: openIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="text-gray-400 mt-4 leading-relaxed">
                    {faq.answer}
                  </p>
                </motion.div>
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-400 mb-4">¿Tienes más preguntas?</p>
          <a
            href="mailto:hola@humanos.app"
            className="text-primary-400 hover:text-primary-300 font-semibold transition-colors"
          >
            Contáctanos en hola@humanos.app
          </a>
        </motion.div>
      </div>
    </section>
  );
}
