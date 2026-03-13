# 🚀 HumanOS Landing Page

Landing page profesional para HumanOS - Tu Sistema Operativo de Vida Personal.

## 📦 Tecnologías

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion**
- **Lucide Icons**

## 🛠️ Instalación

```bash
npm install
```

## 🚀 Desarrollo

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 🌐 Deployment

### Opción 1: Netlify (Recomendado)

1. Sube el proyecto a GitHub
2. Ve a [Netlify](https://app.netlify.com)
3. Conecta tu repositorio
4. Deploy automático configurado

### Opción 2: Vercel

```bash
npm i -g vercel
vercel
```

### Opción 3: Build estático

```bash
npm run build
```

## 📁 Estructura

```
humanos-landing/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   └── components/
│       ├── Navbar.tsx
│       ├── Hero.tsx
│       ├── Concept.tsx
│       ├── Pillars.tsx
│       ├── Features.tsx
│       ├── Target.tsx
│       ├── Waitlist.tsx
│       ├── FAQ.tsx
│       └── Footer.tsx
├── public/
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

## 🎨 Personalización

- **Colores**: Edita `tailwind.config.ts`
- **Contenido**: Modifica los componentes en `src/components/`
- **Metadata SEO**: Actualiza `src/app/layout.tsx`

## 📧 Integración de Formularios

Actualmente el formulario de waitlist guarda los emails en console. Para integrarlo:

1. **Netlify Forms** (más fácil):
   - Añade `data-netlify="true"` al formulario
   
2. **Supabase** (recomendado para app completa):
   - Crea proyecto en Supabase
   - Añade credenciales en `.env.local`
   - Implementa función de submit

3. **ConvertKit / Mailchimp**:
   - Usa su API para capturar emails

## 🔧 Solución de Problemas

### Error de PostCSS
Si ves errores relacionados con PostCSS, asegúrate de que `postcss.config.js` tenga:

```javascript
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

### Build falla en Netlify
- Verifica que `package.json` tenga las dependencias correctas
- Build command: `npm run build`
- Publish directory: `.next`

## 📄 Licencia

MIT

## 👤 Autor

Tu nombre - HumanOS
