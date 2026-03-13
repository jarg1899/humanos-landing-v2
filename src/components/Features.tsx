'use client';

import { motion } from 'framer-motion';
import { BarChart3, Zap, Repeat, Database, TrendingUp, Shield } from 'lucide-react';

const features = [
  {
    icon: BarChart3,
    title: 'Dashboard Unificado',
    description: 'Visualiza todas las áreas de tu vida en un solo lugar con métricas en tiempo real.'
  },
  {
    icon: Repeat,
    title: 'Seguimiento de Hábitos',
    description: 'Registra ejercicio, meditación, journaling y más. Los hábitos impactan tus scores.'
  },
  {
    icon: Database,
    title: 'Integraciones Múltiples',
    description: 'Conecta wearables, apps externas y estudios médicos. Importa datos automáticamente.'
  },
  {
    icon: TrendingUp,
    title: 'Análisis Predictivo',
    description: 'Descubre patrones y recibe insights para tomar mejores decisiones.'
  },
  {
    icon: Zap,
    title: 'Human Score en Tiempo Real',
    description: 'Un índice que combina todos tus pilares y muestra tu estado general.'
  },
  {
    icon: Shield,
    title: 'Privacidad Total',
    description: 'Tus datos están encriptados y solo tú tienes acceso a ellos.'
  }
];

export default function Features() {
  return (
    <section id="features" className="py-24 px-4 bg-dark-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Características</span> Potentes
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            HumanOS está diseñado para personas con alta responsabilidad que 
            necesitan claridad y control sobre su vida.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-dark-800 rounded-2xl p-6 border border-dark-700 hover:border-primary-500/50 transition-all duration-300 h-full">
                <div className="w-12 h-12 rounded-xl bg-primary-500/10 flex items-center justify-center mb-4 group-hover:bg-primary-500/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary-400" />
                </div>
                
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional feature highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 bg-gradient-to-r from-primary-500/10 to-blue-500/10 rounded-3xl p-8 md:p-12 border border-primary-500/20"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Calendario de Medición Inteligente
            </h3>
            <p className="text-gray-400 text-lg mb-6">
              HumanOS te guía en qué medir y cuándo:
            </p>
            <div className="grid md:grid-cols-4 gap-4 text-left">
              <div className="bg-dark-900/50 rounded-xl p-4">
                <div className="text-primary-400 font-bold mb-2">Diario</div>
                <div className="text-sm text-gray-400">Hábitos, estado mental, actividad</div>
              </div>
              <div className="bg-dark-900/50 rounded-xl p-4">
                <div className="text-primary-400 font-bold mb-2">Semanal</div>
                <div className="text-sm text-gray-400">Peso, revisión de objetivos</div>
              </div>
              <div className="bg-dark-900/50 rounded-xl p-4">
                <div className="text-primary-400 font-bold mb-2">Mensual</div>
                <div className="text-sm text-gray-400">Revisión financiera completa</div>
              </div>
              <div className="bg-dark-900/50 rounded-xl p-4">
                <div className="text-primary-400 font-bold mb-2">Trimestral</div>
                <div className="text-sm text-gray-400">Estudios médicos, análisis</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
