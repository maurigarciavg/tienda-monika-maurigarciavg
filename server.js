const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;

// Los datos que Monika quiere mostrar
const inventario = [
  { nombre: "Gorro de Lana Azul", precio: 10.5, tecnica: "Crochet" },
  { nombre: "Bufanda Infinita", precio: 30, tecnica: "Knitting" },
  { nombre: "Guantes sin dedos", precio: 15, tecnica: "Crochet" },
];

// Servir archivos estáticos (HTML, CSS) desde la carpeta 'public'
app.use(express.static("public"));

// La "ventanilla" donde el navegador pedirá los datos
app.get("/api/inventario", (req, res) => {
  res.json(inventario);
});
// Ruta POST: Aquí es donde el formulario enviará los datos
app.post("/api/inventario", (req, res) => {
  const nuevoProducto = req.body; // Recogemos los datos (nombre, precio, etc.)
  inventario.push(nuevoProducto); // Los metemos en la lista de lanas
  console.log("¡Producto añadido con éxito!", nuevoProducto);
  res.json({ mensaje: "Guardado correctamente" }); // Respondemos que todo OK
});

app.listen(port, () => {
  console.log(`✅ Servidor de Monika en http://localhost:${port}`);
});
