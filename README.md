# Poqata

Página provisional de Poqata, creada con Next.js y exportada como sitio estático.

## Desarrollo local

```bash
npm ci
npm run dev
```

Para validar el proyecto:

```bash
npm run typecheck
npm run build
```

La URL local predeterminada es `http://localhost:3000`. Para una URL pública propia, copia `.env.example` a `.env.local` y configura `SITE_URL`. `BASE_PATH` solo es necesario cuando el sitio se publica dentro de una ruta, como en un repositorio de GitHub Pages.

## Despliegue

El workflow de GitHub Actions construye y publica el contenido de `out/` en GitHub Pages cuando se actualiza `main`, se ejecuta manualmente o recibe el evento `repository_dispatch` de tipo `sanity-content-update`.

Al crear el repositorio, selecciona **GitHub Actions** como origen de GitHub Pages. El workflow calcula la URL y la ruta base del repositorio. Si usas un dominio propio, define las variables de repositorio `SITE_URL` y `BASE_PATH` (vacía para la raíz del dominio).

Cuando se incorpore Sanity, su webhook deberá enviar el evento `sanity-content-update` a GitHub con una credencial de alcance mínimo. El contenido editable se consultará en el build; así el HTML publicado saldrá directamente de Sanity y cada publicación activará un nuevo despliegue. No guardes esa credencial en el repositorio.

No se incluyen imágenes, iconos, fuentes externas ni Analytics porque aún no se han proporcionado esos recursos o identificadores.
