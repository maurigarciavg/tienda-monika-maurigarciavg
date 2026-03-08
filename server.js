const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;
const multer = require('multer');
const fs = require('fs');

if (!fs.existsSync('./public/uploads')) {
    fs.mkdirSync('./public/uploads', { recursive: true });
}

const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, './public/uploads/'),
    filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname)
});
const upload = multer({ storage: storage });

const inventario = [
  { nombre: "Gorro de Lana Azul", precio: 10.5, tecnica: "Crochet" },
  { nombre: "Bufanda Infinita", precio: 30, tecnica: "Knitting" },
  { nombre: "Guantes sin dedos", precio: 15, tecnica: "Crochet" },
];

app.use(express.static("public"));

app.get("/api/inventario", (req, res) => {
  res.json(inventario);
});

app.post('/api/inventario', upload.single('foto'), (req, res) => {
    const nuevoProducto = {
        nombre: req.body.nombre,
        precio: req.body.precio,
        tecnica: req.body.tecnica,
        imagen: '/uploads/' + req.file.filename
    };
    inventario.push(nuevoProducto);
    res.json({ mensaje: "¡Producto y foto guardados!" });
});

app.listen(port, () => {
  console.log(`✅ Servidor de Monika en http://localhost:${port}`);
});
