# CV/Portfolio con Astro

Un sitio web de CV y portfolio personal construido con Astro, TypeScript y CSS moderno.

## 🚀 Características

- ⚡ **Súper rápido** - Construido con Astro para máximo rendimiento
- � **Responsive** - Diseño adaptable a todos los dispositivos
- 🎨 **Moderno** - Interfaz limpia y profesional
- ♿ **Accesible** - Siguiendo las mejores prácticas de accesibilidad
- 🔧 **TypeScript** - Tipado estático para mejor desarrollo
- 📄 **SEO optimizado** - Meta tags y estructura semántica

## 🏗️ Estructura del Proyecto

```text
/
├── public/                 # Archivos estáticos
├── src/
│   ├── components/         # Componentes reutilizables
│   │   ├── Hero.astro
│   │   └── Skills.astro
│   ├── layouts/           # Layouts de página
│   │   └── Layout.astro
│   └── pages/             # Páginas del sitio
│       ├── index.astro    # Página principal
│       ├── about.astro    # Sobre mí
│       ├── bitacora.astro # Bitácora
│       └── contact.astro  # Contacto
├── .github/
│   └── copilot-instructions.md
└── package.json
```

## 🚀 Comandos

Todos los comandos se ejecutan desde la raíz del proyecto en una terminal:

| Comando                   | Acción                                      |
| :------------------------ | :------------------------------------------ |
| `npm install`             | Instala las dependencias                   |
| `npm run dev`             | Inicia servidor de desarrollo en `localhost:4321` |
| `npm run build`           | Construye el sitio para producción en `./dist/` |
| `npm run preview`         | Vista previa del build localmente antes de desplegar |

## 🎨 Personalización

### Información Personal
Edita los siguientes archivos para personalizar tu información:

1. **`src/pages/index.astro`** - Información principal y habilidades
2. **`src/pages/about.astro`** - Experiencia y educación
3. **`src/pages/bitacora.astro`** - Tu bitácora personal
4. **`src/pages/contact.astro`** - Información de contacto

### Imágenes
Coloca tus imágenes en la carpeta `public/` y actualiza las referencias:
- `placeholder-avatar.jpg` - Tu foto de perfil
- `project-placeholder.jpg` - Imágenes de proyectos

### Estilos
Los estilos están incluidos en cada componente usando CSS scoped de Astro. Puedes:
- Modificar los colores en las variables CSS
- Ajustar el layout y espaciado
- Agregar nuevos componentes y estilos

## � Despliegue

Este proyecto está listo para ser desplegado en:
- [Netlify](https://netlify.com)
- [Vercel](https://vercel.com)
- [GitHub Pages](https://pages.github.com)
- [Railway](https://railway.app)

Simplemente conecta tu repositorio y el sitio se construirá automáticamente.

## 🤝 Contribuciones

Las contribuciones, problemas y solicitudes de características son bienvenidas.

## 📄 Licencia

Este proyecto está bajo la Licencia MIT.
