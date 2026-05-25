export type Tecnica = "Crochet" | "Knitting";

export interface Producto {
  id: string;
  nombre: string;
  precio: number;
  tecnica: Tecnica;
  descripcion: string;
  imagen: string;
  disponible: boolean;
}

export const productos: Producto[] = [
  {
    id: "gorro-bebe-crochet",
    nombre: "Gorro Bebé Crochet",
    precio: 18,
    tecnica: "Crochet",
    descripcion:
      "Adorable gorro de ganchillo para bebé, tejido a mano con lana suave y cálida. Perfecto para mantener calentitos a los más pequeños. Disponible en distintos colores bajo pedido.",
    imagen: "/uploads/1773173468040-Gorro bebe crochet.jpg",
    disponible: true,
  },
  {
    id: "bufanda-infinita-knitting",
    nombre: "Bufanda Infinita",
    precio: 30,
    tecnica: "Knitting",
    descripcion:
      "Bufanda circular de punto tejida a mano, cómoda y muy versátil. Ideal para los días de frío con un toque artesanal y único que no encontrarás en ninguna tienda.",
    imagen: "",
    disponible: true,
  },
  {
    id: "guantes-sin-dedos-crochet",
    nombre: "Guantes Sin Dedos",
    precio: 15,
    tecnica: "Crochet",
    descripcion:
      "Guantes de ganchillo sin dedos, perfectos para usar el móvil sin pasar frío. Elegantes, prácticos y hechos con mucho cariño. Una pieza única para el día a día.",
    imagen: "",
    disponible: true,
  },
];
