'use client';

import { motion } from 'framer-motion';
import { Target, TrendingUp, Shield } from 'lucide-react';

export default function Concept() {
  return (
    <section id="concept" className="py-24 px-4 bg-dark-800/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            ¿Qué es <span className="text-gradient">HumanOS</span>?
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Más que una app. Es una filosofía de vida convertida en sistema.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold mb-6">El Concepto Central</h3>
            <p className="text-gray-400 text-lg mb-4 leading-relaxed">
              <strong className="text-white">HumanOS</strong> parte de una premisa simple pero poderosa: 
              tu vida puede gestionarse como un sistema operativo. Así como Windows o macOS 
              administran recursos de hardware, <strong className="text-primary-400">HumanOS administra 
              los recursos de tu vida</strong>.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              Organizamos tu vida en <strong className="text-white">6 pilares fundamentales</strong>. 
              Cada pilar contiene métricas, hábitos y objetivos que alimentan un 
              <strong className="text-primary-400"> Human Score</strong> —tu indicador de rendimiento vital.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-dark-900 rounded-3xl p-8 border border-dark-700"
          >
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary-500/10 flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-primary-400" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Sistema, no App</h4>
                  <p className="text-gray-400">
                    HumanOS no es solo una herramienta de tracking. Es un framework completo 
                    para vivir con intención y claridad.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary-500/10 flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-primary-400" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Medible y Accionable</h4>
                  <p className="text-gray-400">
                    Todo se convierte en datos. Los datos se convierten en insights. 
                    Los insights se convierten en decisiones.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary-500/10 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-primary-400" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Para Líderes</h4>
                  <p className="text-gray-400">
                    Diseñado para empresarios, ejecutivos y personas con alta responsabilidad 
                    que necesitan gestionar múltiples áreas de forma eficiente.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Visual explanation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-dark-900 to-dark-800 rounded-3xl p-8 md:p-12 border border-dark-700"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">
            Cómo Funciona el Sistema
          </h3>
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1 text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary-500 to-blue-500 flex items-center justify-center">
                <span className="text-3xl font-bold">1</span>
              </div>
              <h4 className="font-bold mb-2">Registras Datos</h4>
              <p className="text-gray-400 text-sm">
                Hábitos diarios, métricas de salud, objetivos, actividades
              </p>
            </div>

            <div className="hidden md:block text-primary-500 text-3xl">→</div>

            <div className="flex-1 text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                <span className="text-3xl font-bold">2</span>
              </div>
              <h4 className="font-bold mb-2">Sistema Calcula</h4>
              <p className="text-gray-400 text-sm">
                Algoritmos analizan tus pilares y generan scores
              </p>
            </div>

            <div className="hidden md:block text-purple-500 text-3xl">→</div>

            <div className="flex-1 text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                <span className="text-3xl font-bold">3</span>
              </div>
              <h4 className="font-bold mb-2">Tomas Decisiones</h4>
              <p className="text-gray-400 text-sm">
                Insights claros para mejorar tu vida basados en datos reales
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
