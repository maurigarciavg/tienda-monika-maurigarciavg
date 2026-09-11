import { NextRequest, NextResponse } from "next/server";
import { leerFotosInstagram, escribirFotosInstagram, type FotoInstagram } from "@/lib/setup-instagram";

function soloDev() {
  return process.env.NODE_ENV === "development";
}

export async function GET() {
  if (!soloDev()) return NextResponse.json({ error: "Not found" }, { status: 404 });
  const fotos = await leerFotosInstagram();
  return NextResponse.json(fotos);
}

export async function POST(req: NextRequest) {
  if (!soloDev()) return NextResponse.json({ error: "Not found" }, { status: 404 });

  const body = (await req.json()) as { imagen: string };
  if (!body.imagen) {
    return NextResponse.json({ error: "Falta la imagen" }, { status: 400 });
  }

  const fotos = await leerFotosInstagram();
  const nueva: FotoInstagram = { id: `ig-${Date.now()}`, imagen: body.imagen };
  fotos.push(nueva);
  await escribirFotosInstagram(fotos);

  return NextResponse.json(nueva, { status: 201 });
}
