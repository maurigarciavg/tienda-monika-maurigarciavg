import { NextRequest, NextResponse } from "next/server";
import { leerFotosInstagram, escribirFotosInstagram } from "@/lib/setup-instagram";

function soloDev() {
  return process.env.NODE_ENV === "development";
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!soloDev()) return NextResponse.json({ error: "Not found" }, { status: 404 });

  const { id } = await params;
  const fotos = await leerFotosInstagram();
  const filtradas = fotos.filter((f) => f.id !== id);

  if (filtradas.length === fotos.length) {
    return NextResponse.json({ error: "Foto no encontrada" }, { status: 404 });
  }

  await escribirFotosInstagram(filtradas);
  return NextResponse.json({ ok: true });
}
