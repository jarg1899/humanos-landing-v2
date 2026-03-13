'use client'
import { motion } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
import { useState } from 'react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "¿Qué dispositivos son compatibles?",
      answer: "HumanOS funcionará en web, iOS y Android. Integraremos wearables como Apple Watch, Fitbit, Garmin, y servicios como Google Fit y Apple Health."
    },
    {
      question: "¿Cuándo estará disponible?",
      answer: "Estamos en fase de desarrollo. Los primeros de la waitlist tendrán acceso a la beta en Q2 2024."
    },
    {
      question: "¿Será gratuito?",
      answer: "Tendremos una versión gratuita con funciones básicas y una versión premium con integraciones avanzadas, analytics y coaching personalizado."
    },
    {
      question: "¿Mis datos estarán seguros?",
      answer: "Absolutamente. Usamos encriptación de nivel bancario y nunca vendemos tus datos. Tienes control total sobre tu información."
    },
    {
      question: "¿Cómo se calcula el Human Score?",
      answer: "Es un promedio ponderado de los 6 pilares, considerando tus métricas diarias, hábitos y objetivos personalizados."
    }
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Preguntas Frecuentes
          </h2>
          <p className="text-xl text-slate-600">
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
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 text-left flex justify-between items-center hover:bg-slate-50 transition"
              >
                <span className="font-semibold text-lg text-slate-900">{faq.question}</span>
                {openIndex === index ? (
                  <Minus className="text-blue-600 flex-shrink-0" size={24} />
                ) : (
                  <Plus className="text-slate-400 flex-shrink-0" size={24} />
                )}
              </button>
              
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: 'auto' }}
                  exit={{ height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-6"
                >
                  <p className="text-slate-600">{faq.answer}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
