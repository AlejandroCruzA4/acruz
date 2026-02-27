# Guía: Conectar Figma MCP con tu Editor de Código

Esta guía te explica cómo conectar Figma con tu editor (VS Code, Cursor, etc.) para que la IA pueda **leer tus diseños de Figma** y generar código directamente desde ellos.

---

## ¿Qué es un MCP?

**MCP (Model Context Protocol)** es un protocolo que permite que herramientas de IA (como yo) se conecten a servicios externos como Figma. Con el MCP de Figma, yo puedo:

- 🎨 **Leer** la estructura de tu diseño (frames, componentes, colores, tipografía)
- 📐 **Obtener** las propiedades exactas (tamaños, spacing, estilos)
- 💻 **Generar** código HTML/CSS que refleje tu diseño de Figma

---

## Requisitos previos

- ✅ **Figma Desktop App** instalada y actualizada (la versión web NO funciona para el MCP local)
- ✅ Un editor de código: **VS Code** (con GitHub Copilot) o **Cursor**
- ✅ Un archivo de Figma con tu diseño del portafolio

---

## Paso 1: Activar el MCP Server en Figma Desktop

1. Abre la **app de escritorio de Figma** (no la web)
2. Abre tu archivo de diseño del portafolio
3. Activa **Dev Mode** — click en el toggle `< >` en la parte superior de la interfaz (o presiona `Shift + D`)
4. En el **panel derecho (Inspect)**, busca la sección **MCP Server**
5. Click en **"Enable desktop MCP server"**
6. Figma te mostrará un mensaje de confirmación con la URL del servidor:
   ```
   http://127.0.0.1:3845/sse
   ```
   > **Copia esta URL**, la necesitas para el siguiente paso.

> **Alternativa**: También puedes activarlo desde el menú: `Figma > Preferences > Enable local MCP Server`

---

## Paso 2: Conectar con tu Editor

### Opción A: VS Code (necesitas GitHub Copilot activo)

1. Abre **VS Code**
2. Abre la **Command Palette**: `Ctrl + Shift + P`
3. Busca: **"MCP: Add Server"**
4. Selecciona **HTTP**
5. Escribe un ID, por ejemplo: `figma`
6. Ingresa la URL: `http://127.0.0.1:3845/sse`
7. Elige si quieres que sea **global** o solo para este workspace
8. ¡Listo! Ahora GitHub Copilot puede acceder a tu diseño de Figma

**Verificar**: Abre Copilot Chat y pregunta algo como:
> "Describe the current Figma selection"

---

### Opción B: Cursor

1. Abre **Cursor**
2. Ve a **Settings** (⚙️) → pestaña **"Tools & MCP"**
3. Click en **"Add custom MCP"**
4. Pega esta configuración:

```json
{
  "mcpServers": {
    "figma": {
      "url": "http://127.0.0.1:3845/sse"
    }
  }
}
```

5. Guarda y verifica que el servidor de Figma aparezca como **"Enabled"** ✅

---

## Paso 3: Cómo usarlo en tu workflow

Una vez conectado, este es el flujo para diseñar en Figma y generar código:

### 1. Diseña en Figma
Crea tu diseño del portafolio como lo harías normalmente. Tips:
- Usa **Auto Layout** en todos los frames
- Nombra las capas de forma clara (`hero-section`, `project-card`, etc.)
- Define tus **color styles** y **text styles**

### 2. Selecciona en Figma
En Dev Mode, selecciona el frame o componente que quieras convertir a código.

### 3. Pídele al AI en tu editor
Abre el chat del AI (Copilot o Cursor) y escribe algo como:

> "Genera el HTML y CSS para el frame que tengo seleccionado en Figma"

> "Obtén los colores y tipografía del diseño de Figma y actualiza mi style.css"

> "Convierte mi sección Hero de Figma a código responsive"

### 4. El AI leerá tu diseño de Figma y generará el código 🎉

---

## Solución de problemas

| Problema | Solución |
|---|---|
| No veo la opción de MCP en Figma | Actualiza la app de escritorio a la última versión |
| El servidor no se conecta | Verifica que Figma Desktop esté abierto y Dev Mode activo |
| VS Code no reconoce el MCP | Asegúrate de tener GitHub Copilot instalado y activo |
| Cursor no muestra el servidor | Reinicia Cursor después de agregar la configuración |

---

## Nota sobre el plan de Figma

- **Dev Mode** está disponible en el plan **Professional** de Figma
- Si estás en el **plan gratuito (Starter)**, Dev Mode tiene acceso limitado
- Figma ofrece un **trial gratuito** del plan Professional que puedes usar para probar

---

## Resumen del flujo completo

```
Figma (diseñas) → MCP Server (transmite datos) → Tu Editor + AI (genera código) → GitHub Pages (publicas)
```
