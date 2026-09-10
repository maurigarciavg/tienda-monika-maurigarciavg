"use client";

import { useState } from "react";
import Image from "next/image";
import type { Producto, Categoria, Tecnica } from "@/data/productos";

const CATEGORIAS: Categoria[] = ["Gorros", "Bufandas", "Guantes", "Bolsos", "Amigurumis", "Bebé", "Hogar", "Ropa"];
const TECNICAS: Tecnica[] = ["Crochet", "Knitting"];

const PRODUCTO_VACIO: Omit<Producto, "id"> = {
  nombre: "",
  nombreEn: "",
  precio: 0,
  tecnica: "Crochet",
  categoria: "Gorros",
  descripcion: "",
  descripcionEn: "",
  imagen: "",
  disponible: true,
};

export default function SetupClient({ productosIniciales }: { productosIniciales: Producto[] }) {
  const [productos, setProductos] = useState<Producto[]>(productosIniciales);
  const [formAbierto, setFormAbierto] = useState(false);
  const [editandoId, setEditandoId] = useState<string | null>(null);
  const [form, setForm] = useState<Omit<Producto, "id">>(PRODUCTO_VACIO);
  const [subiendoImagen, setSubiendoImagen] = useState(false);
  const [guardando, setGuardando] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const abrirParaCrear = () => {
    setEditandoId(null);
    setForm(PRODUCTO_VACIO);
    setError(null);
    setFormAbierto(true);
  };

  const abrirParaEditar = (p: Producto) => {
    setEditandoId(p.id);
    const { id, ...resto } = p;
    setForm(resto);
    setError(null);
    setFormAbierto(true);
  };

  const cerrarForm = () => {
    setFormAbierto(false);
    setEditandoId(null);
  };

  const subirImagen = async (file: File) => {
    setSubiendoImagen(true);
    setError(null);
    try {
      const body = new FormData();
      body.append("file", file);
      const res = await fetch("/api/setup/upload", { method: "POST", body });
      if (!res.ok) throw new Error((await res.json()).error || "Error al subir la imagen");
      const data = await res.json();
      setForm((f) => ({ ...f, imagen: data.url }));
    } catch (e) {
      setError(e instanceof Error ? e.message : "Error al subir la imagen");
    } finally {
      setSubiendoImagen(false);
    }
  };

  const guardar = async () => {
    setGuardando(true);
    setError(null);
    try {
      if (editandoId) {
        const res = await fetch(`/api/setup/productos/${editandoId}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        });
        if (!res.ok) throw new Error((await res.json()).error || "Error al guardar");
        const actualizado = await res.json();
        setProductos((prev) => prev.map((p) => (p.id === editandoId ? actualizado : p)));
      } else {
        const res = await fetch("/api/setup/productos", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        });
        if (!res.ok) throw new Error((await res.json()).error || "Error al crear");
        const nuevo = await res.json();
        setProductos((prev) => [...prev, nuevo]);
      }
      cerrarForm();
    } catch (e) {
      setError(e instanceof Error ? e.message : "Error al guardar");
    } finally {
      setGuardando(false);
    }
  };

  const eliminar = async (id: string) => {
    if (!confirm("¿Eliminar este producto? No se puede deshacer.")) return;
    const res = await fetch(`/api/setup/productos/${id}`, { method: "DELETE" });
    if (res.ok) setProductos((prev) => prev.filter((p) => p.id !== id));
  };

  const toggleDisponible = async (p: Producto) => {
    const res = await fetch(`/api/setup/productos/${p.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ disponible: !p.disponible }),
    });
    if (res.ok) {
      const actualizado = await res.json();
      setProductos((prev) => prev.map((x) => (x.id === p.id ? actualizado : x)));
    }
  };

  return (
    <div className="min-h-screen bg-monnama-cream py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
          <div>
            <h1 className="font-display text-4xl text-monnama-brown mb-1">Gestión de productos</h1>
            <p className="text-monnama-brown-mid text-sm">
              Panel privado, solo disponible en desarrollo. {productos.length} productos.
            </p>
          </div>
          <button
            onClick={abrirParaCrear}
            className="bg-monnama-terra hover:bg-monnama-terra-dark text-white px-6 py-3 rounded-full font-medium transition-colors"
          >
            + Añadir producto
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {productos.map((p) => (
            <div key={p.id} className="bg-white rounded-xl overflow-hidden shadow-sm border border-monnama-peach">
              <div className="aspect-video relative bg-monnama-surface">
                {p.imagen ? (
                  <Image src={p.imagen} alt={p.nombre} fill className="object-cover" unoptimized />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-4xl">🧶</div>
                )}
                {!p.disponible && (
                  <span className="absolute top-2 right-2 bg-gray-800 text-white text-xs px-2 py-1 rounded-full">
                    Agotado
                  </span>
                )}
              </div>
              <div className="p-4">
                <p className="font-medium text-monnama-brown truncate">{p.nombre}</p>
                <p className="text-sm text-monnama-brown-mid mb-3">
                  {p.categoria} · {p.tecnica} · {p.precio}€
                </p>
                <div className="flex gap-2 flex-wrap">
                  <button
                    onClick={() => abrirParaEditar(p)}
                    className="text-xs px-3 py-1.5 rounded-full border border-monnama-terra text-monnama-terra hover:bg-monnama-terra hover:text-white transition-colors"
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => toggleDisponible(p)}
                    className="text-xs px-3 py-1.5 rounded-full border border-monnama-brown-mid text-monnama-brown-mid hover:bg-monnama-brown-mid hover:text-white transition-colors"
                  >
                    {p.disponible ? "Marcar agotado" : "Marcar disponible"}
                  </button>
                  <button
                    onClick={() => eliminar(p.id)}
                    className="text-xs px-3 py-1.5 rounded-full border border-red-400 text-red-500 hover:bg-red-500 hover:text-white transition-colors"
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {formAbierto && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50 overflow-y-auto">
          <div className="bg-white rounded-2xl max-w-2xl w-full my-8 p-8">
            <h2 className="font-display text-2xl text-monnama-brown mb-6">
              {editandoId ? "Editar producto" : "Nuevo producto"}
            </h2>

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-600 text-sm rounded-lg px-4 py-3 mb-4">
                {error}
              </div>
            )}

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-monnama-brown mb-1">Nombre (ES)</label>
                  <input
                    type="text"
                    value={form.nombre}
                    onChange={(e) => setForm((f) => ({ ...f, nombre: e.target.value }))}
                    className="w-full border border-monnama-peach rounded-lg px-3 py-2"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-monnama-brown mb-1">Nombre (EN)</label>
                  <input
                    type="text"
                    value={form.nombreEn}
                    onChange={(e) => setForm((f) => ({ ...f, nombreEn: e.target.value }))}
                    className="w-full border border-monnama-peach rounded-lg px-3 py-2"
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-monnama-brown mb-1">Precio (€)</label>
                  <input
                    type="number"
                    value={form.precio}
                    onChange={(e) => setForm((f) => ({ ...f, precio: Number(e.target.value) }))}
                    className="w-full border border-monnama-peach rounded-lg px-3 py-2"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-monnama-brown mb-1">Técnica</label>
                  <select
                    value={form.tecnica}
                    onChange={(e) => setForm((f) => ({ ...f, tecnica: e.target.value as Tecnica }))}
                    className="w-full border border-monnama-peach rounded-lg px-3 py-2"
                  >
                    {TECNICAS.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-monnama-brown mb-1">Categoría</label>
                  <select
                    value={form.categoria}
                    onChange={(e) => setForm((f) => ({ ...f, categoria: e.target.value as Categoria }))}
                    className="w-full border border-monnama-peach rounded-lg px-3 py-2"
                  >
                    {CATEGORIAS.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-monnama-brown mb-1">Descripción (ES)</label>
                <textarea
                  value={form.descripcion}
                  onChange={(e) => setForm((f) => ({ ...f, descripcion: e.target.value }))}
                  rows={3}
                  className="w-full border border-monnama-peach rounded-lg px-3 py-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-monnama-brown mb-1">Descripción (EN)</label>
                <textarea
                  value={form.descripcionEn}
                  onChange={(e) => setForm((f) => ({ ...f, descripcionEn: e.target.value }))}
                  rows={3}
                  className="w-full border border-monnama-peach rounded-lg px-3 py-2"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-monnama-brown mb-1">Foto</label>
                <input
                  type="file"
                  accept="image/jpeg,image/png,image/webp"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) subirImagen(file);
                  }}
                  className="w-full text-sm"
                />
                {subiendoImagen && <p className="text-sm text-monnama-brown-mid mt-1">Subiendo...</p>}
                {form.imagen && (
                  <div className="mt-2 relative w-32 aspect-square rounded-lg overflow-hidden bg-monnama-surface">
                    <Image src={form.imagen} alt="preview" fill className="object-cover" unoptimized />
                  </div>
                )}
              </div>

              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={form.disponible}
                  onChange={(e) => setForm((f) => ({ ...f, disponible: e.target.checked }))}
                />
                <span className="text-sm text-monnama-brown">Disponible</span>
              </label>
            </div>

            <div className="flex justify-end gap-3 mt-8">
              <button
                onClick={cerrarForm}
                className="px-5 py-2.5 rounded-full text-monnama-brown-mid hover:bg-monnama-surface transition-colors"
              >
                Cancelar
              </button>
              <button
                onClick={guardar}
                disabled={guardando || subiendoImagen}
                className="bg-monnama-terra hover:bg-monnama-terra-dark text-white px-6 py-2.5 rounded-full font-medium transition-colors disabled:opacity-50"
              >
                {guardando ? "Guardando..." : "Guardar"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
