import productosData from "./productos.json";

export type Tecnica = "Crochet" | "Knitting";
export type Categoria = "Gorros" | "Bufandas" | "Guantes" | "Bolsos" | "Amigurumis" | "Bebé" | "Hogar" | "Ropa";

export interface Producto {
  id: string;
  nombre: string;
  nombreEn: string;
  precio: number;
  tecnica: Tecnica;
  categoria: Categoria;
  descripcion: string;
  descripcionEn: string;
  imagen: string;
  disponible: boolean;
}

export function getNombre(p: Producto, locale: "es" | "en"): string {
  return locale === "en" ? p.nombreEn : p.nombre;
}

export function getDescripcion(p: Producto, locale: "es" | "en"): string {
  return locale === "en" ? p.descripcionEn : p.descripcion;
}

export const productos: Producto[] = productosData as Producto[];
