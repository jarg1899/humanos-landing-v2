'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-20 pb-12 relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-sm font-medium">
            <Sparkles className="w-4 h-4" />
            El futuro de la gestión personal
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
        >
          Tu vida como un{' '}
          <span className="text-gradient">Sistema Operativo</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          HumanOS es el dashboard definitivo para gestionar tu salud, mente, familia, 
          trabajo, finanzas y propósito en un solo lugar. Con métricas, hábitos y análisis de datos.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link href="#waitlist">
            <button className="group px-8 py-4 bg-gradient-to-r from-primary-500 to-blue-500 rounded-xl font-semibold text-lg hover:shadow-lg hover:shadow-primary-500/50 transition-all duration-300 flex items-center gap-2">
              Únete al Waitlist
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
          
          <Link href="#concept">
            <button className="px-8 py-4 border border-gray-700 rounded-xl font-semibold text-lg hover:border-primary-500 transition-all duration-300">
              Conoce el Concepto
            </button>
          </Link>
        </motion.div>

        {/* Mock Dashboard Preview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-20 relative"
        >
          <div className="relative mx-auto max-w-5xl">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-blue-500/20 rounded-3xl blur-2xl" />
            <div className="relative bg-dark-800/80 backdrop-blur-xl rounded-3xl border border-dark-700 p-8 shadow-2xl">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              
              <div className="text-center mb-8">
                <div className="text-7xl font-bold text-gradient mb-2">82</div>
                <div className="text-gray-400">Human Score</div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  { name: 'Health', score: 85, color: 'from-red-500 to-pink-500' },
                  { name: 'Mind', score: 78, color: 'from-purple-500 to-indigo-500' },
                  { name: 'Family', score: 90, color: 'from-green-500 to-emerald-500' },
                  { name: 'Work', score: 80, color: 'from-blue-500 to-cyan-500' },
                  { name: 'Finance', score: 76, color: 'from-yellow-500 to-orange-500' },
                  { name: 'Purpose', score: 83, color: 'from-pink-500 to-rose-500' },
                ].map((pillar, i) => (
                  <motion.div
                    key={pillar.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.7 + i * 0.1 }}
                    className="bg-dark-900/50 rounded-xl p-4 border border-dark-700"
                  >
                    <div className="text-sm text-gray-400 mb-1">{pillar.name}</div>
                    <div className={`text-2xl font-bold bg-gradient-to-r ${pillar.color} bg-clip-text text-transparent`}>
                      {pillar.score}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
