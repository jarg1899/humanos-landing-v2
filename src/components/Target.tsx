'use client'
import { motion } from 'framer-motion'
import { Users, Target, TrendingUp } from 'lucide-react'

export default function TargetAudience() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            ¿Para quién es HumanOS?
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Ideal para personas que buscan optimizar su vida de manera integral.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Users,
              title: "Profesionales Ocupados",
              description: "Que necesitan balancear trabajo, familia, salud y crecimiento personal de manera eficiente."
            },
            {
              icon: Target,
              title: "Optimizadores de Vida",
              description: "Personas orientadas a datos que quieren medir y mejorar continuamente su calidad de vida."
            },
            {
              icon: TrendingUp,
              title: "Buscadores de Balance",
              description: "Quienes sienten que algún pilar de su vida está descuidado y buscan equilibrio sostenible."
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-xl border border-blue-200"
            >
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <item.icon className="text-white" size={24} />
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
