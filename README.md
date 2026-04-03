# CIAL — Centro Integral de Audiología y Lenguaje

Sitio web oficial del Centro Integral de Audiología y Lenguaje (CIAL), con versión **mobile** y **desktop** completamente separadas dentro del mismo proyecto.

---

## 🇦🇷 Español

### Descripción

Aplicación web construida con React + Vite que detecta automáticamente el dispositivo del usuario y renderiza el layout correspondiente (mobile o desktop) sin necesidad de dos URLs distintas.

### Tecnologías utilizadas

- **React 19** — biblioteca principal de UI
- **Vite 8** — bundler y servidor de desarrollo
- **React Router DOM v7** — enrutamiento del lado del cliente
- **react-slick** — slider de imágenes (hero y galería)
- **slick-carousel** — estilos del slider
- **Lucide React** — íconos
- **CSS puro** — estilos por componente, sin frameworks de CSS
- **gh-pages** — deploy en GitHub Pages

### Páginas y rutas

| Ruta | Descripción |
|---|---|
| `/` | Home con slider, about, equipo, servicios y novedades |
| `/equipo` | Grilla del equipo profesional |
| `/equipo/lorena-valenzuela` | Perfil completo con bio y galería |
| `/servicios` | Hub principal de servicios |
| `/servicios/talleres` | Hub de talleres |
| `/servicios/talleres/familias` | Talleres para familias |
| `/servicios/talleres/profesionales` | Talleres para profesionales |
| `/espacios` | Hub de los 6 espacios especializados |
| `/espacios/audiologia` | Audiología |
| `/espacios/fonoaudiologia` | Fonoaudiología |
| `/espacios/psicologia` | Psicología |
| `/espacios/psicopedagogia` | Psicopedagogía |
| `/espacios/psicomotricidad` | Psicomotricidad |
| `/espacios/rehabilitacion-auditiva` | Rehabilitación Auditiva |
| `/novedades` | Hub de noticias y blog |
| `/novedades/noticias` | Listado de noticias externas |
| `/novedades/blog` | Listado de posts del blog |
| `/novedades/blog/:slug` | Post individual del blog |
| `/contacto` | Mapa, datos de contacto y redes sociales |

### Cómo agregar un post al blog

**1.** Crear un archivo en `src/pages/novedades/blog/entries/` con el nombre del slug:
```
nombre-del-post.jsx
```

**2.** Exportar el objeto del post:
```jsx
const post = {
  title: "Título del post",
  author: "Lic. Nombre Apellido",
  date: "Mayo 2025",
  img: imageImport,
  content: (
    <div className="blog-post__content">
      <p>Primer párrafo...</p>
      <h3>Subtítulo</h3>
      <p>Segundo párrafo...</p>
    </div>
  ),
};
export default post;
```

**3.** Agregar la card al array en `blog_mobile.jsx` y `blog_desktop.jsx`:
```jsx
{
  id: 2,
  slug: "nombre-del-post",
  title: "Título del post",
  excerpt: "Breve descripción...",
  img: imageImport,
  author: "Lic. Nombre Apellido",
  date: "Mayo 2025",
}
```

### Instalación y desarrollo

```bash
git clone https://github.com/Jopotew/CialWebsite.git
git checkout mobile-app
npm install
npm run dev
```

### Deploy en GitHub Pages

```bash
npm run deploy
```

Sitio publicado en: `https://jopotew.github.io/CialWebsite/`

---

## 🇺🇸 English

### Description

Official website for CIAL (Centro Integral de Audiología y Lenguaje), built with React + Vite. The app automatically detects the user's device and renders the corresponding layout (mobile or desktop) without requiring two separate URLs.

### Tech Stack

- **React 19** — main UI library
- **Vite 8** — bundler and dev server
- **React Router DOM v7** — client-side routing
- **react-slick** — image slider (hero and gallery)
- **slick-carousel** — slider styles
- **Lucide React** — icons
- **Plain CSS** — per-component styles, no CSS framework
- **gh-pages** — GitHub Pages deployment

### Pages and Routes

| Route | Description |
|---|---|
| `/` | Home with slider, about, team, services and news |
| `/equipo` | Professional team grid |
| `/equipo/lorena-valenzuela` | Full profile with bio and gallery |
| `/servicios` | Main services hub |
| `/servicios/talleres` | Workshops hub |
| `/servicios/talleres/familias` | Family workshops |
| `/servicios/talleres/profesionales` | Professional workshops |
| `/espacios` | 6 specialized spaces hub |
| `/espacios/audiologia` | Audiology |
| `/espacios/fonoaudiologia` | Speech therapy |
| `/espacios/psicologia` | Psychology |
| `/espacios/psicopedagogia` | Psychopedagogy |
| `/espacios/psicomotricidad` | Psychomotricity |
| `/espacios/rehabilitacion-auditiva` | Auditory rehabilitation |
| `/novedades` | News and blog hub |
| `/novedades/noticias` | External news list |
| `/novedades/blog` | Blog post list |
| `/novedades/blog/:slug` | Individual blog post |
| `/contacto` | Map, contact info and social media |

### How to add a blog post

**1.** Create a file in `src/pages/novedades/blog/entries/` named after the slug:
```
post-name.jsx
```

**2.** Export the post object:
```jsx
const post = {
  title: "Post title",
  author: "Lic. Name Surname",
  date: "May 2025",
  img: imageImport,
  content: (
    <div className="blog-post__content">
      <p>First paragraph...</p>
      <h3>Subtitle</h3>
      <p>Second paragraph...</p>
    </div>
  ),
};
export default post;
```

**3.** Add the card to the array in `blog_mobile.jsx` and `blog_desktop.jsx`:
```jsx
{
  id: 2,
  slug: "post-name",
  title: "Post title",
  excerpt: "Short description...",
  img: imageImport,
  author: "Lic. Name Surname",
  date: "May 2025",
}
```

### Installation and development

```bash
git clone https://github.com/Jopotew/CialWebsite.git
git checkout mobile-app
npm install
npm run dev
```

### Deploy to GitHub Pages

```bash
npm run deploy
```

Live site: `https://jopotew.github.io/CialWebsite/`

---

*Developed for CIAL — Cipolletti, Río Negro, Argentina*
