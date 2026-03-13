'use client';

import { motion } from 'framer-motion';
import { Briefcase, TrendingUp, Clock, Users } from 'lucide-react';

const targetAudience = [
  {
    icon: Briefcase,
    title: 'Emprendedores',
    description: 'Gestiona tu negocio y tu vida sin sacrificar ninguno de los dos.',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: TrendingUp,
    title: 'Ejecutivos',
    description: 'Toma decisiones estratégicas sobre tu carrera y bienestar con datos reales.',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: Clock,
    title: 'Profesionales de Alto Rendimiento',
    description: 'Optimiza tu tiempo y energía para maximizar resultados en todas las áreas.',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: Users,
    title: 'Líderes de Equipo',
    description: 'Balancea responsabilidades laborales con salud mental y vida personal.',
    color: 'from-orange-500 to-red-500'
  }
];

export default function Target() {
  return (
    <section id="target" className="py-24 px-4 bg-dark-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Diseñado para <span className="text-gradient">Personas como Tú</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Si tienes alta responsabilidad y múltiples prioridades, HumanOS es tu aliado 
            para mantener claridad y control.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {targetAudience.map((audience, index) => (
            <motion.div
              key={audience.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-dark-800 rounded-2xl p-8 border border-dark-700 hover:border-primary-500/50 transition-all duration-300 h-full">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${audience.color} flex items-center justify-center mb-6`}>
                  <audience.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold mb-4">{audience.title}</h3>
                <p className="text-gray-400 text-lg leading-relaxed">{audience.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Problem-Solution Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-2 gap-8"
        >
          {/* Problem */}
          <div className="bg-red-500/5 border border-red-500/20 rounded-2xl p-8">
            <div className="text-red-400 font-bold text-sm mb-4">EL PROBLEMA</div>
            <h3 className="text-2xl font-bold mb-6">La Vida Sin Sistema</h3>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-3">
                <span className="text-red-400 mt-1">✗</span>
                <span>Múltiples apps desconectadas para cada área de tu vida</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 mt-1">✗</span>
                <span>No hay visión holística de tu progreso general</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 mt-1">✗</span>
                <span>Decisiones basadas en intuición, no en datos</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 mt-1">✗</span>
                <span>Sensación constante de estar apagando incendios</span>
              </li>
            </ul>
          </div>

          {/* Solution */}
          <div className="bg-green-500/5 border border-green-500/20 rounded-2xl p-8">
            <div className="text-green-400 font-bold text-sm mb-4">LA SOLUCIÓN</div>
            <h3 className="text-2xl font-bold mb-6">La Vida con HumanOS</h3>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-3">
                <span className="text-green-400 mt-1">✓</span>
                <span>Un solo dashboard unificado para todas las áreas</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 mt-1">✓</span>
                <span>Human Score que refleja tu estado general en tiempo real</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 mt-1">✓</span>
                <span>Decisiones estratégicas basadas en métricas reales</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 mt-1">✓</span>
                <span>Claridad total sobre qué necesita tu atención ahora</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
