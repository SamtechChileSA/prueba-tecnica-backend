const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const PORT = 5005;

// Datos en memoria
let users = [
  { id: 1, name: "Juan Pérez", email: "juan@test.com" },
  { id: 2, name: "María Gómez", email: "maria@test.com" },
  { id: 3, name: "Carlos López", email: "carlos@test.com" },
];

const adminUser = { email: "admin@test.com", password: "123456" };

// Rutas

// Login
app.post("/login", (req, res) => {
  const { email, password } = req.body;
  if (email === adminUser.email && password === adminUser.password) {
    return res.json({ success: true });
  }
  res.status(401).json({ success: false, message: "Credenciales incorrectas" });
});

// Obtener usuarios
app.get("/users", (req, res) => {
  res.json(users);
});

// Crear usuario
app.post("/users", (req, res) => {
  const { name, email } = req.body;
  const newUser = { id: users.length + 1, name, email };
  users.push(newUser);
  res.json(newUser);
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
