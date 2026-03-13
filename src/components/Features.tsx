'use client'
import { motion } from 'framer-motion'
import { Smartphone, BarChart3, Calendar, Zap } from 'lucide-react'

export default function Features() {
  const features = [
    {
      icon: Smartphone,
      title: "Integración con Wearables",
      description: "Conecta tu Apple Watch, Fitbit o cualquier dispositivo para importar datos automáticamente."
    },
    {
      icon: BarChart3,
      title: "Dashboard Visual",
      description: "Visualiza tu Human Score y el desempeño de cada pilar con gráficos intuitivos."
    },
    {
      icon: Calendar,
      title: "Tracking Flexible",
      description: "Medición diaria, semanal, mensual y trimestral adaptada a cada métrica."
    },
    {
      icon: Zap,
      title: "Decisiones Inteligentes",
      description: "Insights basados en datos para optimizar tu tiempo y energía en lo que más importa."
    }
  ]

  return (
    <section id="caracteristicas" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Características Principales
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Todo lo que necesitas para convertir tu vida en un sistema eficiente y balanceado.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition flex gap-4"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <feature.icon className="text-blue-600" size={24} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
