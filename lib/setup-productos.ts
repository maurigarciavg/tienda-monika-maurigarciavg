import fs from "fs/promises";
import path from "path";
import type { Producto } from "@/data/productos";

const DATA_PATH = path.join(process.cwd(), "data", "productos.json");

export async function leerProductos(): Promise<Producto[]> {
  const raw = await fs.readFile(DATA_PATH, "utf8");
  return JSON.parse(raw) as Producto[];
}

export async function escribirProductos(productos: Producto[]): Promise<void> {
  await fs.writeFile(DATA_PATH, JSON.stringify(productos, null, 2) + "\n", "utf8");
}

const DIACRITICS_REGEX = /[̀-ͯ]/g;

export function slugify(texto: string): string {
  return texto
    .toLowerCase()
    .normalize("NFD")
    .replace(DIACRITICS_REGEX, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
