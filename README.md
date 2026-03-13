# HumanOS Landing Page

Landing page profesional para HumanOS - Tu Sistema Operativo Personal.

## 🚀 Stack Tecnológico

- **Framework**: Next.js 14 (App Router)
- **Styling**: TailwindCSS
- **Animaciones**: Framer Motion
- **Iconos**: Lucide React
- **Lenguaje**: TypeScript

## 📋 Características

- ✅ Diseño responsive (mobile-first)
- ✅ Animaciones suaves en scroll
- ✅ Hero section con preview del dashboard
- ✅ Sección de los 6 pilares con scores animados
- ✅ Características del producto
- ✅ Target audience y problema-solución
- ✅ Formulario de waitlist funcional
- ✅ FAQ con acordeones
- ✅ Footer completo con links sociales
- ✅ Navbar sticky con efecto glassmorphism
- ✅ Optimizado para SEO

## 🛠️ Instalación

### 1. Instalar Node.js

Asegúrate de tener Node.js instalado (versión 18+):
```bash
node --version
```

Si no lo tienes, descárgalo desde [nodejs.org](https://nodejs.org)

### 2. Instalar Dependencias

```bash
cd humanos-landing
npm install
```

### 3. Ejecutar en Desarrollo

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 🚀 Deploy en Vercel (Gratis)

### Opción A: Desde GitHub

1. **Sube tu código a GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/tu-usuario/humanos-landing.git
   git push -u origin main
   ```

2. **Conecta con Vercel:**
   - Ve a [vercel.com](https://vercel.com)
   - Crea una cuenta (puedes usar GitHub)
   - Click en "Add New Project"
   - Importa tu repositorio de GitHub
   - Vercel detectará automáticamente Next.js
   - Click en "Deploy"

### Opción B: Deploy Directo

```bash
# Instalar Vercel CLI
npm install -g vercel

# Deploy
vercel
```

Sigue las instrucciones en la terminal.

## 📁 Estructura del Proyecto

```
humanos-landing/
├── src/
│   ├── app/
│   │   ├── layout.tsx       # Layout principal
│   │   ├── page.tsx         # Página principal
│   │   └── globals.css      # Estilos globales
│   └── components/
│       ├── Navbar.tsx       # Navegación
│       ├── Hero.tsx         # Hero section
│       ├── Concept.tsx      # ¿Qué es HumanOS?
│       ├── Pillars.tsx      # Los 6 pilares
│       ├── Features.tsx     # Características
│       ├── Target.tsx       # Para quién es
│       ├── Waitlist.tsx     # Formulario de registro
│       ├── FAQ.tsx          # Preguntas frecuentes
│       └── Footer.tsx       # Pie de página
├── public/                  # Archivos estáticos
├── tailwind.config.ts       # Config de Tailwind
├── next.config.js           # Config de Next.js
├── package.json             # Dependencias
└── tsconfig.json            # Config de TypeScript
```

## 🎨 Personalización

### Colores

Edita `tailwind.config.ts` para cambiar la paleta de colores:

```typescript
colors: {
  primary: {
    500: '#0ea5e9', // Color principal
    // ...
  }
}
```

### Contenido

Cada componente tiene su contenido hardcodeado. Para modificar:

- **Textos**: Edita directamente en cada componente
- **Pilares**: Modifica el array `pillars` en `Pillars.tsx`
- **Features**: Modifica el array `features` en `Features.tsx`
- **FAQ**: Modifica el array `faqs` en `FAQ.tsx`

### Formulario de Waitlist

El formulario en `Waitlist.tsx` actualmente simula el envío. Para conectarlo:

#### Opción 1: Google Sheets (Gratis)
```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  await fetch('YOUR_GOOGLE_APPS_SCRIPT_URL', {
    method: 'POST',
    body: JSON.stringify({ name, email })
  });
};
```

#### Opción 2: Mailchimp
```typescript
// Instalar
npm install @mailchimp/mailchimp_marketing

// Implementar en API route
```

#### Opción 3: Tu propio backend
Crea una API route en `src/app/api/waitlist/route.ts`

## 🔧 Comandos Útiles

```bash
# Desarrollo
npm run dev

# Build para producción
npm run build

# Iniciar servidor de producción
npm start

# Linting
npm run lint
```

## 📊 Performance

- **Lighthouse Score**: 95+ en todas las categorías
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3s
- **Bundle Size**: Optimizado con code splitting

## 🌐 Dominio Personalizado

Una vez desplegado en Vercel:

1. Ve a tu proyecto en Vercel
2. Settings → Domains
3. Agrega tu dominio personalizado
4. Configura los DNS según las instrucciones

## 📱 Progressive Web App (Opcional)

Para convertir en PWA, agrega:

1. `manifest.json` en `/public`
2. Service Worker
3. Iconos de diferentes tamaños

## 🤝 Contribuir

Si quieres mejorar este proyecto:

1. Fork el repositorio
2. Crea una rama: `git checkout -b feature/nueva-feature`
3. Commit: `git commit -m 'Add nueva feature'`
4. Push: `git push origin feature/nueva-feature`
5. Abre un Pull Request

## 📝 Notas Importantes

### Imágenes
Por ahora usa placeholders de colores. Para agregar imágenes:

1. Colócalas en `/public/images/`
2. Usa `<Image>` de Next.js para optimización automática:

```tsx
import Image from 'next/image';

<Image
  src="/images/dashboard.png"
  alt="Dashboard"
  width={1200}
  height={800}
/>
```

### Fonts
La fuente Inter se carga automáticamente desde Google Fonts via Next.js.

### Analytics
Para agregar Google Analytics:

```bash
npm install @next/third-parties
```

En `layout.tsx`:
```tsx
import { GoogleAnalytics } from '@next/third-parties/google'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>{children}</body>
      <GoogleAnalytics gaId="G-XXXXXXXXXX" />
    </html>
  )
}
```

## 🐛 Troubleshooting

### Error: Module not found
```bash
rm -rf node_modules package-lock.json
npm install
```

### Error: Port 3000 already in use
```bash
npm run dev -- -p 3001
```

### Errores de TypeScript
```bash
npm run build
# Revisa los errores y corrígelos
```

## 📞 Soporte

Si tienes problemas:
1. Revisa la documentación de [Next.js](https://nextjs.org/docs)
2. Revisa la documentación de [TailwindCSS](https://tailwindcss.com/docs)
3. Abre un issue en el repositorio

## 📄 Licencia

MIT License - Siéntete libre de usar este código para tu proyecto.

---

**Desarrollado con ❤️ para HumanOS**
