import { notFound } from "next/navigation";
import { leerProductos } from "@/lib/setup-productos";
import { leerFotosInstagram } from "@/lib/setup-instagram";
import SetupClient from "@/components/setup/SetupClient";

export default async function SetupPage() {
  if (process.env.NODE_ENV !== "development") {
    notFound();
  }

  const [productos, fotosInstagram] = await Promise.all([
    leerProductos(),
    leerFotosInstagram(),
  ]);

  return <SetupClient productosIniciales={productos} fotosInstagramIniciales={fotosInstagram} />;
}
