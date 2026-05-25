# Monnama — Tienda artesanal online

Tienda web para **Monnama**, la marca de Monika. Expone y vende piezas artesanales hechas a mano: crochet y knitting. Los clientes llegan desde Instagram y contactan por DM o email para comprar.

## Stack técnico

- **Framework:** Next.js 15 (App Router)
- **Lenguaje:** TypeScript
- **Estilos:** Tailwind CSS
- **Hosting:** Vercel (free tier)

## Cómo ejecutarlo en local

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000)

## Páginas

| Ruta | Descripción |
|------|-------------|
| `/` | Home con hero y productos destacados |
| `/catalogo` | Catálogo completo con filtros por técnica |
| `/producto/[id]` | Detalle del producto con botones de contacto |
| `/sobre-monnama` | Historia de Monika |
| `/contacto` | Instagram y email |

## Añadir o editar productos

Editar el archivo `data/productos.ts`. Cada producto tiene:

```ts
{
  id: "nombre-unico-kebab-case",
  nombre: "Nombre visible",
  precio: 20,
  tecnica: "Crochet" | "Knitting",
  descripcion: "Descripción del producto",
  imagen: "/uploads/foto.jpg",  // o "" si no hay foto
  disponible: true,
}
```

Las imágenes van en la carpeta `public/uploads/`.

## Despliegue

1. Push a GitHub
2. Conectar el repositorio en [vercel.com](https://vercel.com)
3. Deploy automático en cada push a `main`
