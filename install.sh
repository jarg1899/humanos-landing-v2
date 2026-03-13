#!/bin/bash

# 🚀 HumanOS Landing - Quick Start Script
# Este script automatiza la instalación inicial

echo "🎯 Iniciando instalación de HumanOS Landing..."
echo ""

# Check Node.js
if ! command -v node &> /dev/null; then
    echo "❌ Node.js no está instalado"
    echo "📥 Descarga Node.js desde: https://nodejs.org"
    exit 1
fi

echo "✅ Node.js detectado: $(node --version)"
echo ""

# Install dependencies
echo "📦 Instalando dependencias..."
npm install

if [ $? -eq 0 ]; then
    echo "✅ Dependencias instaladas correctamente"
else
    echo "❌ Error al instalar dependencias"
    exit 1
fi

echo ""
echo "🎉 ¡Instalación completada!"
echo ""
echo "📝 Comandos disponibles:"
echo "   npm run dev      - Ejecutar en desarrollo (localhost:3000)"
echo "   npm run build    - Construir para producción"
echo "   npm start        - Servidor de producción"
echo ""
echo "🚀 Para empezar, ejecuta:"
echo "   npm run dev"
echo ""
echo "📖 Lee el README.md para más información"
echo "📖 Lee el DEPLOY_GUIDE.md para instrucciones de deploy"
