import { NextRequest, NextResponse } from "next/server";
import { leerProductos, escribirProductos, slugify } from "@/lib/setup-productos";
import type { Producto } from "@/data/productos";

function soloDev() {
  return process.env.NODE_ENV === "development";
}

export async function GET() {
  if (!soloDev()) return NextResponse.json({ error: "Not found" }, { status: 404 });
  const productos = await leerProductos();
  return NextResponse.json(productos);
}

export async function POST(req: NextRequest) {
  if (!soloDev()) return NextResponse.json({ error: "Not found" }, { status: 404 });

  const body = (await req.json()) as Omit<Producto, "id">;
  const productos = await leerProductos();

  let baseId = slugify(`${body.nombre}-${body.tecnica}`);
  let id = baseId;
  let n = 2;
  while (productos.some((p) => p.id === id)) {
    id = `${baseId}-${n}`;
    n++;
  }

  const nuevo: Producto = { ...body, id };
  productos.push(nuevo);
  await escribirProductos(productos);

  return NextResponse.json(nuevo, { status: 201 });
}
