# Portfolio MCP (Framer)

Este proyecto crea un MCP (Model Context Protocol) local para conectar tu portafolio con Framer Desktop y permitir vista y edición de archivos.

Instalación y ejecución

```bash
npm install
npm start
```

El servidor corre por defecto en `http://localhost:3000`.

Conectar desde Framer Desktop

- Abre Framer Desktop → Integrations / Model Context Protocol.
- Añade un host local apuntando a `http://localhost:3000`.
- Deberías ver el `Portfolio MCP` y poder listar/abrir/editar archivos.

Host remoto añadido

- He añadido el host remoto que proporcionaste al manifest `mcp.json`:

	`https://mcp.unframer.co/mcp?id=f0653ba1fd877cb0a5f34f8718451a18faf37762ce504cd737512d9cfc1acf03&secret=PUs3Y72QfHRmWrw3aTSms1iOrWjLMJ83`

- En Framer Desktop → Integrations → Model Context Protocol, añade este URL como nuevo host para conectarte al MCP remoto.

Endpoints útiles

- `GET /mcp/files` → lista archivos (.html, .js, .css, .md)
- `GET /mcp/file?path=INDEX` → obtiene contenido del archivo (por ejemplo `index.html`)
- `POST /mcp/file` → guarda archivo (JSON: `{ "path": "index.html", "content": "..." }`)

Seguridad

El servidor normaliza rutas y sólo sirve/edita archivos dentro de la carpeta del proyecto.
