import fs from "fs/promises";
import path from "path";

export interface FotoInstagram {
  id: string;
  imagen: string;
}

const DATA_PATH = path.join(process.cwd(), "data", "instagram.json");

export async function leerFotosInstagram(): Promise<FotoInstagram[]> {
  const raw = await fs.readFile(DATA_PATH, "utf8");
  return JSON.parse(raw) as FotoInstagram[];
}

export async function escribirFotosInstagram(fotos: FotoInstagram[]): Promise<void> {
  await fs.writeFile(DATA_PATH, JSON.stringify(fotos, null, 2) + "\n", "utf8");
}
