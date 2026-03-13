'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle } from 'lucide-react';

export default function Waitlist() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate form submission (replace with actual backend integration)
    setTimeout(() => {
      setSubmitted(true);
      setLoading(false);
      setEmail('');
      setName('');
    }, 1000);

    // TODO: Integrate with actual backend or service like:
    // - Google Sheets API
    // - Mailchimp
    // - ConvertKit
    // - Your own backend
  };

  return (
    <section id="waitlist" className="py-24 px-4 bg-gradient-to-br from-primary-500/10 via-dark-900 to-blue-500/10">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Únete al <span className="text-gradient">Waitlist</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Sé de los primeros en acceder a HumanOS. Recibirás acceso anticipado, 
            descuentos exclusivos y la oportunidad de influir en el desarrollo.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-dark-800 rounded-3xl p-8 md:p-12 border border-dark-700"
        >
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Nombre completo
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full px-4 py-3 bg-dark-900 border border-dark-700 rounded-xl focus:outline-none focus:border-primary-500 transition-colors text-white"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 bg-dark-900 border border-dark-700 rounded-xl focus:outline-none focus:border-primary-500 transition-colors text-white"
                  placeholder="tu@email.com"
                />
              </div>

              <div className="bg-primary-500/5 border border-primary-500/20 rounded-xl p-4">
                <p className="text-sm text-gray-400">
                  <strong className="text-white">¿Qué obtienes al unirte?</strong>
                  <br />
                  ✓ Acceso anticipado al lanzamiento
                  <br />
                  ✓ Descuento exclusivo de early adopter
                  <br />
                  ✓ Influencia directa en el desarrollo del producto
                  <br />
                  ✓ Comunidad privada de beta testers
                </p>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full px-8 py-4 bg-gradient-to-r from-primary-500 to-blue-500 rounded-xl font-semibold text-lg hover:shadow-lg hover:shadow-primary-500/50 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>Enviando...</>
                ) : (
                  <>
                    Unirme al Waitlist
                    <Send className="w-5 h-5" />
                  </>
                )}
              </button>

              <p className="text-xs text-gray-500 text-center">
                No spam. Solo actualizaciones importantes sobre HumanOS.
              </p>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-8"
            >
              <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">¡Bienvenido a HumanOS! 🎉</h3>
              <p className="text-gray-400 mb-6">
                Te hemos enviado un email de confirmación. Pronto recibirás 
                novedades sobre el desarrollo.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="text-primary-400 hover:text-primary-300 transition-colors"
              >
                Registrar otro email
              </button>
            </motion.div>
          )}
        </motion.div>

        {/* Social proof */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="flex items-center justify-center gap-8 text-gray-400">
            <div>
              <div className="text-3xl font-bold text-white">500+</div>
              <div className="text-sm">En el waitlist</div>
            </div>
            <div className="w-px h-12 bg-dark-700" />
            <div>
              <div className="text-3xl font-bold text-white">Q2 2024</div>
              <div className="text-sm">Fecha de lanzamiento</div>
            </div>
            <div className="w-px h-12 bg-dark-700" />
            <div>
              <div className="text-3xl font-bold text-white">6</div>
              <div className="text-sm">Pilares de vida</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
