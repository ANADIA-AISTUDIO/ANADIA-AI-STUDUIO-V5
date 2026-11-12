# Anadia AI Studio · V5 Next.js + React (prototipo de revisión)

Migración desde V4 (HTML/CSS/JS) a Next.js App Router + React con el logo y favicon originales intactos. Se conservan las secciones del sitio mediante contenido migrado; la portada introduce una imagen conceptual y animaciones discretas. Insights incluye portada editorial, filtros y 4 artículos de ejemplo.

## Inicio local

1. Instala Node.js 20.9 o posterior.
2. En una terminal, ejecuta `npm install` y `npm run dev`.
3. Abre http://localhost:3000.
4. Antes de publicar ejecuta `npm run build`.

## Vercel / GitHub

**No reemplaces la V4 publicada sin revisar esta versión.** Sube el contenido del ZIP a un repositorio o rama de prueba y crea un proyecto Vercel nuevo con framework **Next.js**, Root Directory `./`, Build Command por defecto `next build`. No uses el framework `Other` ni los ajustes de salida de V4. No copies el archivo `vercel.json` de V4: sus rewrites son exclusivos del sitio estático.

## Insights

- Ruta editorial: `/insights`. Artículos: `/insights/<slug>`.
- Borradores Markdown con frontmatter: `content/insights/*.md`.
- Decap CMS prototipo: `/admin/index.html`.
- **No funciona el inicio de sesión todavía**: `/public/admin/config.yml` tiene un repo de ejemplo y necesita autenticación OAuth para GitHub compatible con Vercel.
- El CMS administra Markdown, mientras Next.js procesa el Markdown desde el disco en tiempo de compilación. Al aprobar nuevos contenidos se crea un commit y se dispara un nuevo despliegue.
- El filtro editorial usa un índice generado (`data/article-index.json`); para artículos nuevos hay que automatizar su generación. El panel de administración en esta entrega es una base técnica, no un CMS terminado listo para uso no técnico.
- Los borradores se muestran marcados como borradores en el prototipo; **no publicar esta versión públicamente como edición definitiva de Insights** hasta aprobar contenido o cambiar la visibilidad.

## Controles importantes

Se conservan colores, logotipo y favicon; revisar responsive en móvil y escritorio, rutas y enlaces, SEO de páginas, accesibilidad y rendimiento antes de sustituir V4. La fotografía de cabecera es arte conceptual generado para este prototipo, no una persona o cliente real.

## Documento aparte

`docs/LINEAS_EDITORIALES_INSIGHTS.md` incluye las cuatro líneas, enfoque, propuestas de temas y criterios de calidad.
