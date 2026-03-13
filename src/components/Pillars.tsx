'use client'
import { motion } from 'framer-motion'
import { Heart, Brain, Users, Briefcase, DollarSign, Compass } from 'lucide-react'

export default function Pillars() {
  const pillars = [
    {
      icon: Heart,
      name: "Health",
      score: 85,
      color: "bg-red-500",
      metrics: ["Ejercicio", "Peso", "Estudios médicos"]
    },
    {
      icon: Brain,
      name: "Mind",
      score: 78,
      color: "bg-purple-500",
      metrics: ["Lectura", "Meditación", "Journaling"]
    },
    {
      icon: Users,
      name: "Family",
      score: 90,
      color: "bg-blue-500",
      metrics: ["Tiempo de calidad", "Eventos", "Comunicación"]
    },
    {
      icon: Briefcase,
      name: "Work",
      score: 80,
      color: "bg-green-500",
      metrics: ["Productividad", "Objetivos", "Desarrollo"]
    },
    {
      icon: DollarSign,
      name: "Finance",
      score: 76,
      color: "bg-yellow-500",
      metrics: ["Ingresos", "Ahorros", "Inversiones"]
    },
    {
      icon: Compass,
      name: "Purpose",
      score: 83,
      color: "bg-indigo-500",
      metrics: ["Misión", "Valores", "Impacto"]
    }
  ]

  return (
    <section id="pilares" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Los 6 Pilares de HumanOS
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Cada pilar tiene métricas específicas y hábitos que contribuyen a tu Human Score global.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition border border-slate-200"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 ${pillar.color} rounded-lg flex items-center justify-center`}>
                  <pillar.icon className="text-white" size={24} />
                </div>
                <div className="text-3xl font-bold text-slate-900">{pillar.score}</div>
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-3">{pillar.name}</h3>
              
              <div className="space-y-2">
                {pillar.metrics.map((metric, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
                    <span className="text-sm text-slate-600">{metric}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
