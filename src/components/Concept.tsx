'use client'
import { motion } from 'framer-motion'
import { Target, TrendingUp, Brain } from 'lucide-react'

export default function Concept() {
  return (
    <section id="concepto" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            ¿Qué es HumanOS?
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Un sistema operativo personal que centraliza la gestión de tu vida en 6 pilares fundamentales,
            transformando datos en decisiones inteligentes.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Target,
              title: "Sistema Unificado",
              description: "Centraliza Health, Mind, Family, Work, Finance y Purpose en un solo dashboard intuitivo."
            },
            {
              icon: TrendingUp,
              title: "Medición Continua",
              description: "Tracking diario, semanal, mensual y trimestral de hábitos, métricas y progreso en cada pilar."
            },
            {
              icon: Brain,
              title: "Human Score",
              description: "Un score global de 0-100 que refleja el balance y calidad de vida en tiempo real."
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <item.icon className="text-blue-600" size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
              <p className="text-slate-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
