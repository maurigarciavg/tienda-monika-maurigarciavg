# Unravelled Corner — Tienda artesanal online

Tienda web para **Unravelled Corner** (marca: Monnama), de Monika. Expone y vende piezas artesanales hechas a mano: crochet y knitting. Los clientes llegan desde Instagram y contactan por DM, WhatsApp o email para comprar.

## Stack técnico

- **Framework:** Next.js 15 (App Router)
- **Lenguaje:** TypeScript
- **Estilos:** Tailwind CSS
- **Analítica:** Vercel Analytics (solo se activa si el usuario acepta cookies)
- **Hosting:** Vercel (free tier)

## Cómo ejecutarlo en local

```bash
npm install
npm run dev
```

Abre [http://localhost:3002](http://localhost:3002)

## Idiomas (ES / EN)

Cada página existe en `/` (español) y `/en/...` (inglés). `middleware.ts` detecta el país por IP en la primera visita y redirige a `/en` si no es un país hispanohablante; guarda la elección en una cookie para no repetir la redirección. No usa ninguna librería de i18n, es manual.

## Páginas

| Ruta | Descripción |
|------|-------------|
| `/` | Home con hero, cifras, destacados, cómo comprar, testimonios e Instagram |
| `/catalogo` | Catálogo completo con filtro por técnica, disponibilidad y búsqueda de texto |
| `/producto/[id]` | Detalle del producto con botones de contacto y productos relacionados |
| `/sobre-monika` | Historia de Monika |
| `/contacto` | Instagram, WhatsApp y email |
| `/faq` | Preguntas frecuentes (envíos, pedidos) |
| `/cuidados` | Instrucciones de cuidado de las piezas |
| `/privacidad` | Política de privacidad |

Todas las anteriores tienen su versión `/en/...`.

## Añadir o editar productos

**Opción recomendada — panel de gestión (solo en local):**

Con `npm run dev` corriendo, entra a [http://localhost:3002/setup](http://localhost:3002/setup). Permite crear, editar y borrar productos y fotos del feed de Instagram sin tocar código. Guarda los cambios directamente en `data/productos.json` / `data/instagram.json`. Solo funciona en desarrollo (`NODE_ENV=development`); en producción esa ruta y sus API devuelven 404.

**Opción manual:** editar `data/productos.json` directamente. Cada producto:

```json
{
  "id": "nombre-unico-kebab-case",
  "nombre": "Nombre visible (ES)",
  "nombreEn": "Nombre visible (EN)",
  "precio": 20,
  "tecnica": "Crochet" | "Knitting",
  "categoria": "Gorros" | "Bufandas" | "Guantes" | "Bolsos" | "Amigurumis" | "Bebé" | "Hogar" | "Ropa",
  "descripcion": "Descripción (ES)",
  "descripcionEn": "Descripción (EN)",
  "imagen": "/uploads/foto.jpg",
  "disponible": true
}
```

Las imágenes van en `public/uploads/`.

## Despliegue

Ya está desplegado en Vercel (proyecto `tienda-monika-maurigarciavg`, linkeado en `.vercel/`). Cada push a `main` dispara un deploy automático.
