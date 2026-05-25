# Monnama — Guía del proyecto

## Qué es este proyecto
Tienda web para Monika (marca: **Monnama**). Expone y vende piezas artesanales hechas a mano: crochet y knitting. Los clientes llegan principalmente desde Instagram y compran contactando por Instagram DM o email.

## Restricciones clave
- **Coste cero**: hosting gratuito en Vercel. Solo se paga el dominio anual (~10€).
- **Sin base de datos**: los productos se gestionan directamente en `data/productos.ts`.
- **Sin pasarela de pago integrada**: el flujo de compra es contactar por Instagram o email.

## Stack técnico
- **Framework**: Next.js 15 (App Router)
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS
- **Fuentes**: Playfair Display (títulos) + Inter (texto) via `next/font/google`
- **Hosting objetivo**: Vercel (free tier)
- **Imágenes de productos**: carpeta `public/uploads/`

## Paleta de colores Monnama
| Clase Tailwind         | Hex       | Uso                          |
|------------------------|-----------|------------------------------|
| `monnama-cream`        | #FAF8F4   | Fondo principal              |
| `monnama-surface`      | #F0EBE3   | Fondo de tarjetas/secciones  |
| `monnama-terra`        | #B87A52   | Color primario (botones)     |
| `monnama-terra-dark`   | #8B5E3C   | Hover del primario           |
| `monnama-sage`         | #7B9B7E   | Color secundario             |
| `monnama-brown`        | #2D1E14   | Texto principal              |
| `monnama-brown-mid`    | #6B5744   | Texto secundario             |
| `monnama-peach`        | #E8D5BC   | Fondo secciones destacadas   |

## Estructura de páginas
- `/` — Home: hero + productos destacados + teaser sobre Monnama
- `/catalogo` — Catálogo completo con filtro por técnica (Crochet / Knitting)
- `/producto/[id]` — Detalle del producto con botones de contacto (Instagram + Email)
- `/sobre-monnama` — Historia y pasión de Monika
- `/contacto` — Instagram DM + Email

## Gestión de productos
Editar `data/productos.ts` para añadir, editar o eliminar productos. Cada producto tiene:
- `id`: slug único (ej: `"gorro-bebe-crochet"`)
- `nombre`, `precio`, `tecnica` (`"Crochet"` | `"Knitting"`)
- `descripcion`, `imagen` (ruta relativa a `/public`, ej: `/uploads/foto.jpg`), `disponible`

## Comandos de desarrollo
```bash
npm run dev    # servidor local en http://localhost:3000
npm run build  # build de producción
npm run start  # servidor de producción local
```

## Despliegue
1. Push a GitHub
2. Conectar repositorio con Vercel (vercel.com)
3. Deploy automático en cada push a `main`

## Contexto de aprendizaje
El desarrollador (Mauricio) acaba de salir de un bootcamp. Conoce HTML, CSS, JS, React, Bootstrap, JWT, REST APIs. Este proyecto es su base de aprendizaje real post-bootcamp. Priorizar explicaciones claras cuando se realicen cambios y fomentar que él mismo toque el código con mentoría.

## Contacto de Monnama (actualizar si cambia)
- Instagram: `@monnama` (placeholder — actualizar con el real)
- Email: `monnama.tienda@gmail.com` (placeholder — actualizar con el real)
