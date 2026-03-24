import express from "express";
import cors from "cors";
import postgres from "postgres";
import "dotenv/config";

const sql = postgres(process.env.DATABASE_URL);

const app = express();
app.use(cors());
app.use(express.json());


app.get("/api/productos", async (req, res) => {
  try {
    const productos = await sql`SELECT * FROM productos`;
    res.json(productos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener los productos" });
  }
});

app.listen(3001, () => {
  console.log("Servidor backend funcionando en puerto 3001");
});