import { notFound } from "next/navigation";
import { leerProductos } from "@/lib/setup-productos";
import SetupClient from "@/components/setup/SetupClient";

export default async function SetupPage() {
  if (process.env.NODE_ENV !== "development") {
    notFound();
  }

  const productos = await leerProductos();

  return <SetupClient productosIniciales={productos} />;
}
