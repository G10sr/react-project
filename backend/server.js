const express = require("express");
const cors = require("cors");
const pool = require("./db");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

app.post("/carrito", async (req, res) => {
  const { nombre, precio, imagen } = req.body;

  if (!nombre || !precio || !imagen) {
    return res.status(400).json({ error: "Faltan datos" });
  }

  try {
    const result = await pool.query(
      `INSERT INTO carrito (nombre, precio, imagen, cantidad)
       VALUES ($1, $2, $3, $4)
       RETURNING *`,
      [nombre, precio, imagen, 1]
    );

    res.json(result.rows[0]);

  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error al agregar producto" });
  }
});


app.listen(3001, () => {
    console.log("Servidor backend funcionando en puerto 3001");
});