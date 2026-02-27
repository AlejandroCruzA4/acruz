# Guía: Conectar Penpot MCP con Antigravity 🖋️

Penpot es una alternativa a Figma **100% gratuita y de código abierto**. Al conectarlo como un MCP, yo podré leer tus diseños de Penpot para generar código para tu portafolio.

---

## Paso 1: Obtener tu Penpot Access Token

1. Entra a tu cuenta en [Penpot.app](https://design.penpot.app/).
2. Haz clic en tu perfil (esquina inferior izquierda) → **Settings**.
3. Ve a la pestaña **Access Tokens**.
4. Haz clic en **Generate new token**.
5. Ponle un nombre (ej. "Antigravity") y presiona **Generate**.
6. **Copia el token inmediatamente** (no se volverá a mostrar).

---

## Paso 2: Configurar tu Token en Antigravity

1. Abre el archivo de configuración: [mcp_config.json](file:///C:/Users/Alejandro/.gemini/antigravity/mcp_config.json).
2. Busca la sección que dice `"penpot"`.
3. Reemplaza `"PON_TU_TOKEN_AQUI"` por el token que copiaste de Penpot. Debe quedar algo así:
   ```json
   "env": {
     "PENPOT_TOKEN": "tu_token_largo_de_penpot"
   }
   ```
4. Guarda el archivo (`Ctrl + S`).

---

## Paso 3: Reiniciar Antigravity

Para que el cambio surta efecto:
1. **Cierra Antigravity** completamente.
2. Vuelve a abrirlo.

---

## Cómo usar Penpot para diseñar

1. Crea tu diseño en un archivo de Penpot.
2. Copia la **URL de tu archivo** de la barra de direcciones del navegador.
3. En el chat conmigo, dime algo como:
   > "Usa este diseño de Penpot para mejorar el portafolio: https://design.penpot.app/#/view/..."
   
4. Yo podré entrar al archivo (usando tu token) y leer los colores, tipografía y estructura para aplicarlos al código.

---

## Ventajas de Penpot
- **Gratis ilimitado**: No necesitas plan Professional para Dev Mode o inspección de código.
- **Open Source**: Tus diseños son tuyos.
- **Fácil transición**: Si sabes usar Figma, Penpot te resultará muy familiar.
