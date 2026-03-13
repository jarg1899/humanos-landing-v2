'use client'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6">
            Tu Vida,
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {' '}Optimizada
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto">
            HumanOS convierte tu vida en un sistema medible y gestionable. 
            <strong> 6 pilares. 1 score. Decisiones más inteligentes.</strong>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#waitlist"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition flex items-center gap-2"
            >
              Únete a la Waitlist
              <ArrowRight size={20} />
            </a>
            <a
              href="#concepto"
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition"
            >
              Conocer más
            </a>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mt-16"
          >
            <div className="inline-block p-8 bg-white rounded-2xl shadow-xl border border-slate-200">
              <div className="flex items-center justify-center gap-8">
                <div className="text-center">
                  <div className="text-5xl font-bold text-blue-600 mb-2">82</div>
                  <div className="text-sm text-slate-600 font-semibold">Human Score</div>
                </div>
                <div className="h-16 w-px bg-slate-300"></div>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-slate-700">85</div>
                    <div className="text-xs text-slate-500">Health</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-slate-700">78</div>
                    <div className="text-xs text-slate-500">Mind</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-slate-700">90</div>
                    <div className="text-xs text-slate-500">Family</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
