# 🎯 QUICK START - HumanOS Landing Page

## ⚡ Inicio Rápido (3 pasos)

### 1️⃣ Extraer archivos
Descomprime `humanos-landing.zip` en tu computadora

### 2️⃣ Instalar
```bash
cd humanos-landing
npm install
```

### 3️⃣ Ejecutar
```bash
npm run dev
```

Abre: http://localhost:3000

---

## 📋 Lo que Incluye

✅ Landing page completa y profesional
✅ 9 secciones (Hero, Pilares, Features, FAQ, etc.)
✅ Formulario de waitlist funcional
✅ Animaciones suaves (Framer Motion)
✅ Diseño responsive (mobile-first)
✅ Optimizado para SEO
✅ Listo para deploy en Vercel (gratis)

---

## 🚀 Deploy en 5 minutos

### Opción Recomendada: Vercel

1. Crea cuenta en [vercel.com](https://vercel.com)
2. Sube tu código a [GitHub](https://github.com)
3. En Vercel: "New Project" → Import tu repo
4. Click "Deploy" ✨

**¡Listo!** Tu sitio estará en línea.

Lee `DEPLOY_GUIDE.md` para instrucciones detalladas.

---

## 📁 Archivos Importantes

- `README.md` - Documentación técnica completa
- `DEPLOY_GUIDE.md` - Guía paso a paso para deploy
- `OVERVIEW.md` - Vista previa de todas las secciones
- `install.sh` - Script de instalación (Linux/Mac)

---

## 🎨 Personalización Rápida

### Cambiar colores
Edita `tailwind.config.ts` → `primary.500`

### Cambiar email de contacto
Busca y reemplaza: `hola@humanos.app`

### Conectar formulario
Sigue instrucciones en `DEPLOY_GUIDE.md` → Sección "Conectar Formulario"

---

## 💡 Tips

- **Desarrollo**: `npm run dev` reinicia automáticamente al hacer cambios
- **Testing**: `npm run build` verifica que todo funciona antes de deploy
- **Deploy**: Vercel redeploya automáticamente al hacer `git push`

---

## 🆘 Problemas Comunes

**Error al instalar dependencias:**
```bash
rm -rf node_modules package-lock.json
npm install
```

**Puerto 3000 ocupado:**
```bash
npm run dev -- -p 3001
```

**Necesitas Node.js:**
Descarga desde [nodejs.org](https://nodejs.org)

---

## 📞 Recursos

- [Next.js Docs](https://nextjs.org/docs)
- [TailwindCSS Docs](https://tailwindcss.com/docs)
- [Vercel Deploy](https://vercel.com/docs)

---

**🎉 ¡Tu landing page está lista para conquistar el mundo!**

Desarrollado con ❤️ para HumanOS
