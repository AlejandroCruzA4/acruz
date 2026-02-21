# Guía: De Figma a la Web 🚀

Esta guía te explica paso a paso cómo llevar tu portafolio de diseño a internet, ya sea usando **Framer**, **Webflow**, o subiendo el HTML directamente a **GitHub Pages** (gratis).

---

## Opción 1: Framer (Recomendado para diseñadores)

Framer te permite importar tus diseños de Figma y publicar gratis en un subdominio `.framer.app`.

### Paso a paso

1. **En Figma**: Asegúrate de que tu diseño use **Auto Layout** en todos los frames principales (esto se traduce mejor a Framer).

2. **Copiar de Figma**: Selecciona los frames que quieras → `Ctrl+C`

3. **En Framer** ([framer.com](https://framer.com)):
   - Crea un nuevo proyecto
   - Pega con `Ctrl+V` — Framer importará tus frames con estilos
   - Ajusta las capas si es necesario

4. **Agregar interacciones**:
   - Selecciona cualquier elemento → Panel derecho → **Interactions**
   - Agrega hover effects, scroll animations, etc.
   - Los links de navegación los configuras en el panel de propiedades

5. **Publicar gratis**:
   - Click en **Publish** (esquina superior derecha)
   - Tu sitio estará en `tunombre.framer.app`
   - Para dominio propio necesitas plan de pago

> **Tip**: Framer tiene componentes nativos (formularios, menús) que puedes arrastrar directamente.

---

## Opción 2: Webflow

Webflow te da más control sobre el código generado y un plan gratuito con subdominio `.webflow.io`.

### Paso a paso

1. **Plugin Figma → Webflow**:
   - En Figma, instala el plugin **"Figma to Webflow"** (de Webflow oficial)
   - Selecciona tus frames → Ejecuta el plugin → Exporta a Webflow

2. **En Webflow** ([webflow.com](https://webflow.com)):
   - El plugin creará los elementos con clases CSS
   - Revisa la estructura en el **Navigator** panel (izquierda)
   - Ajusta estilos en el **Style** panel (derecha)

3. **Estructura recomendada de clases**:
   ```
   .section-hero
   .section-about
   .section-projects
     .project-card
       .project-card__image
       .project-card__info
   .section-contact
   ```

4. **Responsive**:
   - Usa los breakpoints de Webflow (desktop → tablet → mobile)
   - Ajusta layouts usando Flexbox/Grid desde el panel visual

5. **Publicar gratis**:
   - Click en **Publish** → `tunombre.webflow.io`
   - Plan gratuito: 1 sitio, 2 páginas, subdominio webflow.io

---

## Opción 3: HTML estático en GitHub Pages (100% gratis)

Esta es la opción que ya tienes lista con los archivos que creamos. Es totalmente gratuita, sin límites, y con dominio personalizable.

### Paso a paso

1. **Crear cuenta en GitHub**: Ve a [github.com](https://github.com) y regístrate (gratis)

2. **Crear repositorio**:
   - Click en **"New repository"**
   - Nombre: `tunombre.github.io` (esto te da un dominio automático)
   - Marca como **Public**
   - Click en **Create repository**

3. **Subir archivos**: Tienes dos opciones:

   **Opción A — Desde la web (más fácil)**:
   - En tu repo nuevo, click en **"uploading an existing file"**
   - Arrastra los 3 archivos: `index.html`, `style.css`, `script.js`
   - Click en **"Commit changes"**

   **Opción B — Desde la terminal**:
   ```bash
   cd e:\Alejandro\Design\portfolio
   git init
   git add .
   git commit -m "Mi portafolio"
   git branch -M main
   git remote add origin https://github.com/TU_USUARIO/TU_USUARIO.github.io.git
   git push -u origin main
   ```

4. **Activar GitHub Pages**:
   - Ve a **Settings** → **Pages**
   - Source: **Deploy from a branch**
   - Branch: `main` / `/(root)`
   - Click **Save**

5. **Tu sitio estará en**: `https://tunombre.github.io` (puede tardar 1-2 minutos)

---

## Opción 4: Netlify o Vercel (Alternativas gratuitas)

### Netlify
1. Ve a [netlify.com](https://netlify.com) → **Sign up** con GitHub
2. Click en **"Add new site"** → **"Deploy manually"**
3. Arrastra la carpeta `portfolio/` completa al área de drop
4. ¡Listo! Tu sitio estará en `tunombre.netlify.app`

### Vercel
1. Ve a [vercel.com](https://vercel.com) → **Sign up** con GitHub
2. Importa tu repositorio de GitHub
3. Se despliega automáticamente en `tunombre.vercel.app`

---

## Comparación rápida

| Plataforma | Gratis | Dominio gratuito | Nivel técnico | Ideal para |
|---|---|---|---|---|
| **Framer** | ✅ | `tu.framer.app` | Bajo | Diseñadores que quieren interacciones rápidas |
| **Webflow** | ✅ | `tu.webflow.io` | Medio | Control visual completo sin código |
| **GitHub Pages** | ✅ | `tu.github.io` | Medio | Control total + dominio propio gratis |
| **Netlify** | ✅ | `tu.netlify.app` | Bajo | Deploy rápido arrastrando archivos |
| **Vercel** | ✅ | `tu.vercel.app` | Bajo | Deploy automático desde GitHub |

---

## Tips para tu diseño en Figma

Para que la transición sea más fluida, sigue estas prácticas:

- **Auto Layout** en todo: esto se traduce directamente a Flexbox/Grid
- **Componentes**: crea componentes para cards, botones, tags (reutilizables)
- **Naming limpio**: nombra tus layers claramente (`hero-section`, `project-card`, etc.)
- **8px grid**: usa múltiplos de 8 para spacing (8, 16, 24, 32, 48, 64)
- **Restringe colores**: define tus estilos de color en Figma (`primary`, `accent`, `text-primary`)
- **Tipografía**: define estilos de texto (`Heading/H1`, `Body/Regular`, etc.)

> 💡 **Tu portafolio HTML ya tiene todo configurado** con variables CSS que corresponden a un sistema de diseño. Puedes replicar esta misma estructura en tu archivo de Figma.
