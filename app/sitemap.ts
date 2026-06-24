import { MetadataRoute } from "next";
import { productos } from "@/data/productos";

const BASE_URL = "https://tienda-monika-maurigarciavg.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const paginasEstaticas: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/catalogo`,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/sobre-monnama`,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/contacto`,
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];

  const paginasProductos: MetadataRoute.Sitemap = productos.map((producto) => ({
    url: `${BASE_URL}/producto/${producto.id}`,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  return [...paginasEstaticas, ...paginasProductos];
}
