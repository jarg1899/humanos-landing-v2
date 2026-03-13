# 🚀 Guía Completa de Deploy - HumanOS

Esta guía te llevará paso a paso desde tener el código hasta tener tu sitio en línea.

## 📦 Pre-requisitos

- [ ] Node.js 18+ instalado ([Descargar aquí](https://nodejs.org))
- [ ] Git instalado ([Descargar aquí](https://git-scm.com))
- [ ] Una cuenta de GitHub (gratis)
- [ ] Una cuenta de Vercel (gratis, puedes usar tu cuenta de GitHub)

## 🎯 Pasos Rápidos

### 1️⃣ Preparar el Código Localmente

```bash
# Navega a la carpeta del proyecto
cd humanos-landing

# Instala las dependencias
npm install

# Verifica que funciona en local
npm run dev
```

Abre http://localhost:3000 - deberías ver tu landing page funcionando.

### 2️⃣ Crear Repositorio en GitHub

1. **Ve a GitHub**: https://github.com/new
2. **Crea un nuevo repositorio:**
   - Nombre: `humanos-landing` (o el que prefieras)
   - Visibilidad: Privado o Público
   - ❌ NO inicialices con README, .gitignore, o licencia
3. **Click en "Create repository"**

### 3️⃣ Subir tu Código a GitHub

```bash
# En la carpeta humanos-landing, ejecuta:

# Inicializa git (si no lo has hecho)
git init

# Agrega todos los archivos
git add .

# Haz tu primer commit
git commit -m "🚀 Initial commit - HumanOS landing page"

# Conecta con tu repositorio de GitHub
# Reemplaza TU-USUARIO con tu usuario de GitHub
git remote add origin https://github.com/TU-USUARIO/humanos-landing.git

# Cambia la rama a main
git branch -M main

# Sube el código
git push -u origin main
```

### 4️⃣ Deploy en Vercel (5 minutos)

#### Opción A: Desde la Web (Recomendado)

1. **Ve a Vercel**: https://vercel.com
2. **Sign Up / Login** con tu cuenta de GitHub
3. **Click en "Add New..."** → "Project"
4. **Importa tu repositorio**:
   - Busca `humanos-landing`
   - Click en "Import"
5. **Configuración** (Vercel detecta Next.js automáticamente):
   - Project Name: `humanos` (o el que quieras)
   - Framework Preset: Next.js ✅
   - Root Directory: `./`
   - Build Command: `npm run build` (auto-detectado)
   - Output Directory: `.next` (auto-detectado)
6. **Click en "Deploy"** 🚀

¡Eso es todo! En 2-3 minutos tu sitio estará live.

#### Opción B: Desde la Terminal

```bash
# Instala Vercel CLI
npm install -g vercel

# Login en Vercel
vercel login

# Deploy
vercel

# Para producción
vercel --prod
```

### 5️⃣ Verificar el Deploy

Una vez completado, Vercel te dará:
- ✅ **URL de producción**: https://humanos-xxxxx.vercel.app
- ✅ **Dashboard del proyecto**: para gestionar el sitio

## 🌐 Configurar Dominio Personalizado

### Si ya tienes un dominio (ejemplo: humanos.app):

1. **En Vercel:**
   - Ve a tu proyecto
   - Settings → Domains
   - Agrega tu dominio: `humanos.app` y `www.humanos.app`

2. **En tu proveedor de dominios** (GoDaddy, Namecheap, etc.):
   
   Agrega estos registros DNS:

   **Para dominio raíz (humanos.app):**
   ```
   Tipo: A
   Nombre: @
   Valor: 76.76.21.21
   ```

   **Para www (www.humanos.app):**
   ```
   Tipo: CNAME
   Nombre: www
   Valor: cname.vercel-dns.com
   ```

3. **Espera** 10-60 minutos para que los DNS se propaguen

### Si NO tienes dominio:

Puedes usar el dominio gratuito de Vercel:
- `https://humanos.vercel.app` (puedes personalizarlo en Settings)

O comprar uno en:
- [Namecheap](https://www.namecheap.com) (~$10/año)
- [Google Domains](https://domains.google)
- [Porkbun](https://porkbun.com) (económico)

## ⚙️ Configuración Post-Deploy

### Conectar el Formulario de Waitlist

Actualmente el formulario simula el envío. Para hacerlo funcional:

#### Opción 1: Google Sheets (Más Simple)

1. **Crea un Google Sheet** para guardar los emails
2. **Usa Google Apps Script:**
   - En tu Sheet: Extensions → Apps Script
   - Pega este código:

```javascript
function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSheet();
  const data = JSON.parse(e.postData.contents);
  
  sheet.appendRow([
    new Date(),
    data.name,
    data.email
  ]);
  
  return ContentService.createTextOutput(
    JSON.stringify({success: true})
  ).setMimeType(ContentService.MimeType.JSON);
}
```

3. **Deploy:** Deploy → New deployment → Web app
4. **Copia la URL** del deployment
5. **En Waitlist.tsx**, reemplaza en `handleSubmit`:

```typescript
await fetch('TU_URL_DE_APPS_SCRIPT', {
  method: 'POST',
  body: JSON.stringify({ name, email })
});
```

#### Opción 2: Supabase (Base de datos real)

1. **Crea cuenta en** [Supabase](https://supabase.com)
2. **Crea un proyecto nuevo**
3. **Crea una tabla `waitlist`:**

```sql
CREATE TABLE waitlist (
  id SERIAL PRIMARY KEY,
  name TEXT,
  email TEXT UNIQUE,
  created_at TIMESTAMP DEFAULT NOW()
);
```

4. **Instala el cliente:**
```bash
npm install @supabase/supabase-js
```

5. **Crea un archivo de API** en `src/app/api/waitlist/route.ts`:

```typescript
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function POST(request: Request) {
  const { name, email } = await request.json();
  
  const { error } = await supabase
    .from('waitlist')
    .insert({ name, email });
  
  if (error) {
    return Response.json({ error: error.message }, { status: 400 });
  }
  
  return Response.json({ success: true });
}
```

6. **En Vercel**, agrega las variables de entorno:
   - Settings → Environment Variables
   - Agrega `NEXT_PUBLIC_SUPABASE_URL`
   - Agrega `NEXT_PUBLIC_SUPABASE_ANON_KEY`

### Agregar Google Analytics

1. **Crea una propiedad en** [Google Analytics](https://analytics.google.com)
2. **Instala el paquete:**
```bash
npm install @next/third-parties
```

3. **En `src/app/layout.tsx`**, agrega:
```tsx
import { GoogleAnalytics } from '@next/third-parties/google'

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
      <GoogleAnalytics gaId="G-XXXXXXXXXX" />
    </html>
  );
}
```

4. **Redeploy** (automático si conectaste con GitHub)

## 🔄 Actualizar el Sitio

### Si usaste GitHub + Vercel:

```bash
# Haz cambios en tu código
# Luego:

git add .
git commit -m "Descripción de cambios"
git push
```

¡Vercel desplegará automáticamente! ⚡

### Si usaste Vercel CLI:

```bash
vercel --prod
```

## 📊 Monitoreo y Analytics

### En Vercel Dashboard puedes ver:
- 📈 Número de visitas
- ⚡ Performance metrics
- 🌍 Geografía de visitantes
- 🐛 Errores y logs

### Para analytics más detallados:
- Google Analytics (gratis)
- Plausible (privacidad-friendly)
- Fathom (pago, simple)

## 🎨 Personalizaciones Comunes

### Cambiar colores principales:

En `tailwind.config.ts`:
```typescript
primary: {
  500: '#TU_COLOR_HEX',
}
```

### Cambiar el email de contacto:

En `Footer.tsx` y `FAQ.tsx`, busca y reemplaza:
```typescript
hola@humanos.app → tu@email.com
```

### Agregar tu logo:

1. Coloca `logo.png` en `/public/`
2. En `Navbar.tsx`:
```tsx
<Image src="/logo.png" alt="HumanOS" width={40} height={40} />
```

## 🐛 Solución de Problemas

### El sitio no se despliega:

```bash
# Verifica que el build funciona localmente
npm run build

# Si hay errores, corrígelos y vuelve a intentar
```

### Error 404 en rutas:

Next.js usa file-based routing. Asegúrate que:
- `page.tsx` existe en cada ruta
- Los nombres de archivo son correctos

### Formulario no funciona:

- Verifica la URL de tu API
- Revisa la consola del navegador (F12)
- Verifica los logs en Vercel Dashboard

### Cambios no se reflejan:

```bash
# Limpia cache y reconstruye
rm -rf .next
npm run build
```

## 📱 Siguientes Pasos

- [ ] Configurar dominio personalizado
- [ ] Conectar formulario a base de datos real
- [ ] Agregar Google Analytics
- [ ] Crear contenido para blog (si planeas tener uno)
- [ ] Optimizar imágenes (cuando las tengas)
- [ ] Configurar meta tags para redes sociales
- [ ] Crear favicon y app icons

## 🆘 Necesitas Ayuda?

- **Documentación de Next.js**: https://nextjs.org/docs
- **Documentación de Vercel**: https://vercel.com/docs
- **TailwindCSS**: https://tailwindcss.com/docs
- **Framer Motion**: https://www.framer.com/motion/

---

**¡Tu HumanOS landing está listo para conquistar el mundo! 🚀**
