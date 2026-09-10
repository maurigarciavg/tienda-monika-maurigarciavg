import { NextRequest, NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

function soloDev() {
  return process.env.NODE_ENV === "development";
}

const EXTENSIONES_PERMITIDAS = [".jpg", ".jpeg", ".png", ".webp"];

export async function POST(req: NextRequest) {
  if (!soloDev()) return NextResponse.json({ error: "Not found" }, { status: 404 });

  const formData = await req.formData();
  const file = formData.get("file");

  if (!(file instanceof File)) {
    return NextResponse.json({ error: "No se recibió ningún archivo" }, { status: 400 });
  }

  const ext = path.extname(file.name).toLowerCase();
  if (!EXTENSIONES_PERMITIDAS.includes(ext)) {
    return NextResponse.json({ error: "Formato de imagen no permitido" }, { status: 400 });
  }

  const nombreArchivo = `${Date.now()}-${Math.round(Math.random() * 1e6)}${ext}`;
  const destino = path.join(process.cwd(), "public", "uploads", nombreArchivo);

  const bytes = Buffer.from(await file.arrayBuffer());
  await fs.writeFile(destino, bytes);

  return NextResponse.json({ url: `/uploads/${nombreArchivo}` }, { status: 201 });
}
