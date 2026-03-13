'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Twitter, Linkedin, Instagram, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-dark-900 border-t border-dark-800 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-2">
            <h3 className="text-2xl font-bold mb-4 text-gradient">HumanOS</h3>
            <p className="text-gray-400 mb-4 max-w-md">
              Tu sistema operativo personal. Gestiona salud, mente, familia, 
              trabajo, finanzas y propósito en un solo dashboard.
            </p>
            <div className="flex gap-4">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-dark-800 hover:bg-primary-500/20 border border-dark-700 hover:border-primary-500 flex items-center justify-center transition-all"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-dark-800 hover:bg-primary-500/20 border border-dark-700 hover:border-primary-500 flex items-center justify-center transition-all"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-dark-800 hover:bg-primary-500/20 border border-dark-700 hover:border-primary-500 flex items-center justify-center transition-all"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="mailto:hola@humanos.app"
                className="w-10 h-10 rounded-lg bg-dark-800 hover:bg-primary-500/20 border border-dark-700 hover:border-primary-500 flex items-center justify-center transition-all"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold mb-4">Producto</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="#concept" className="hover:text-primary-400 transition-colors">
                  Concepto
                </Link>
              </li>
              <li>
                <Link href="#pillars" className="hover:text-primary-400 transition-colors">
                  Los 6 Pilares
                </Link>
              </li>
              <li>
                <Link href="#features" className="hover:text-primary-400 transition-colors">
                  Características
                </Link>
              </li>
              <li>
                <Link href="#target" className="hover:text-primary-400 transition-colors">
                  Para quién es
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold mb-4">Recursos</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="#faq" className="hover:text-primary-400 transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#waitlist" className="hover:text-primary-400 transition-colors">
                  Waitlist
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-primary-400 transition-colors">
                  Blog (Próximamente)
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-400 transition-colors">
                  Documentación
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-dark-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
          <div>
            © 2024 HumanOS. Todos los derechos reservados.
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary-400 transition-colors">
              Privacidad
            </a>
            <a href="#" className="hover:text-primary-400 transition-colors">
              Términos
            </a>
            <a href="#" className="hover:text-primary-400 transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
