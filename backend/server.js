const express = require("express");
const cors = require("cors");
const pool = require("./db");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/productos", async (req, res) => {
  try {
    const result = await pool.query(
      `SELECT * FROM productos;`,
    );
    console.log(result.rows);
    res.json(result.rows);

  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro al obtener el carrito" });
  }
});

app.listen(3001, () => {
    console.log("Servidor backend funcionando en puerto 3001");
});
