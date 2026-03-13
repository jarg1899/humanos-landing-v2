'use client';

import { motion } from 'framer-motion';
import { Activity, Brain, Users, Briefcase, Wallet, Target, ArrowRight } from 'lucide-react';

const pillars = [
  {
    icon: Activity,
    name: 'Health',
    description: 'Biometría, sueño, ejercicio y análisis médicos',
    color: 'from-red-500 to-pink-500',
    score: 85
  },
  {
    icon: Brain,
    name: 'Mind',
    description: 'Estado mental, estrés, journaling y terapia',
    color: 'from-purple-500 to-indigo-500',
    score: 78
  },
  {
    icon: Users,
    name: 'Family',
    description: 'Tiempo con familia, eventos y seguimiento',
    color: 'from-green-500 to-emerald-500',
    score: 90
  },
  {
    icon: Briefcase,
    name: 'Work',
    description: 'Proyectos, objetivos y tiempo enfocado',
    color: 'from-blue-500 to-cyan-500',
    score: 80
  },
  {
    icon: Wallet,
    name: 'Finance',
    description: 'Ingresos, gastos, inversiones y patrimonio',
    color: 'from-yellow-500 to-orange-500',
    score: 76
  },
  {
    icon: Target,
    name: 'Purpose',
    description: 'Metas, proyectos personales y valores',
    color: 'from-pink-500 to-rose-500',
    score: 83
  }
];

export default function Pillars() {
  return (
    <section id="pillars" className="py-24 px-4 bg-dark-800/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Los 6 Pilares de <span className="text-gradient">tu Vida</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            HumanOS organiza tu vida en áreas estratégicas. Cada pilar tiene métricas, 
            hábitos y un score que alimenta tu Human Score.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="relative group"
            >
              <div className="bg-dark-900 rounded-2xl p-6 border border-dark-700 hover:border-primary-500 transition-all duration-300 h-full">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${pillar.color} flex items-center justify-center mb-4`}>
                  <pillar.icon className="w-6 h-6 text-white" />
                </div>
                
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-2xl font-bold">{pillar.name}</h3>
                  <span className="text-2xl font-bold text-primary-400">{pillar.score}</span>
                </div>
                
                <p className="text-gray-400 mb-4">{pillar.description}</p>
                
                <div className="w-full bg-dark-800 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${pillar.score}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                    className={`h-2 rounded-full bg-gradient-to-r ${pillar.color}`}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-gradient-to-r from-primary-500/20 to-blue-500/20 rounded-2xl p-8 border border-primary-500/30">
            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="text-6xl font-bold text-gradient">82</span>
            </div>
            <h3 className="text-2xl font-bold mb-2">Human Score</h3>
            <p className="text-gray-400 max-w-md">
              El índice que unifica todos tus pilares en un solo número. 
              Tu sistema operativo en tiempo real.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
