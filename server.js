const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;

const inventario = [
  { nombre: "Gorro de Lana Azul", precio: 10.5, tecnica: "Crochet" },
  { nombre: "Bufanda Infinita", precio: 30, tecnica: "Knitting" },
  { nombre: "Guantes sin dedos", precio: 15, tecnica: "Crochet" },
];

app.use(express.static("public"));

app.get("/api/inventario", (req, res) => {
  res.json(inventario);
});

app.post("/api/inventario", (req, res) => {
  const nuevoProducto = req.body;
  inventario.push(nuevoProducto);
  console.log("¡Producto añadido con éxito!", nuevoProducto);
  res.json({ mensaje: "Guardado correctamente" });
});

app.listen(port, () => {
  console.log(`✅ Servidor de Monika en http://localhost:${port}`);
});
