'use client'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-md z-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              HumanOS
            </h1>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#concepto" className="text-slate-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition">Concepto</a>
              <a href="#pilares" className="text-slate-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition">Pilares</a>
              <a href="#caracteristicas" className="text-slate-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition">Características</a>
              <a href="#waitlist" className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition">
                Únete a la Waitlist
              </a>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-700 hover:text-blue-600 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-b border-slate-200">
            <a href="#concepto" className="text-slate-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">Concepto</a>
            <a href="#pilares" className="text-slate-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">Pilares</a>
            <a href="#caracteristicas" className="text-slate-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">Características</a>
            <a href="#waitlist" className="bg-blue-600 text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700">
              Únete a la Waitlist
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
