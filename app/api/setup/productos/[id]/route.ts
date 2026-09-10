import { NextRequest, NextResponse } from "next/server";
import { leerProductos, escribirProductos } from "@/lib/setup-productos";
import type { Producto } from "@/data/productos";

function soloDev() {
  return process.env.NODE_ENV === "development";
}

export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!soloDev()) return NextResponse.json({ error: "Not found" }, { status: 404 });

  const { id } = await params;
  const body = (await req.json()) as Partial<Producto>;
  const productos = await leerProductos();
  const index = productos.findIndex((p) => p.id === id);

  if (index === -1) {
    return NextResponse.json({ error: "Producto no encontrado" }, { status: 404 });
  }

  productos[index] = { ...productos[index], ...body, id };
  await escribirProductos(productos);

  return NextResponse.json(productos[index]);
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!soloDev()) return NextResponse.json({ error: "Not found" }, { status: 404 });

  const { id } = await params;
  const productos = await leerProductos();
  const filtrados = productos.filter((p) => p.id !== id);

  if (filtrados.length === productos.length) {
    return NextResponse.json({ error: "Producto no encontrado" }, { status: 404 });
  }

  await escribirProductos(filtrados);
  return NextResponse.json({ ok: true });
}
