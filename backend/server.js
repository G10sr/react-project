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
<<<<<<< HEAD
    console.log("Servidor backend funcionando en puerto 3001");
});
=======
    console.log("Servidor backend funcionando en puerto 3001")
})

//API PARA AGREGAR PRODUCTOS AL CARRITO

const {nombre, precio, imagen} = req.body;
try {
    await Pool.query("INSERT INTO carrito (nombre, precio, imagen, cantidad) VALUES ($1, $2, $3, $4)", [nombre, precio, imagen, 1])
    res.json({message: "Producto agregado al carrito"})
} catch (error) {
    console.error("Error al agregar producto al carrito", error);
    res.status(500).json({message: "Error al agregar producto al carrito"})
}

//API PARA VER EL CARRITO

try{ 
    const result = await Pool.query("SELECT * FROM carrito");
    res.json(result.rows);
} catch (error) {
    console.log(error)
        console.log*(error)
        res.status*(500).json({error: "Error al obtener el carrito"})
    }

//API PARA ELIMINAR PRODUCTOS DEL CARRITO

const {id} = req.params;
try {
    await Pool.query("DELETE FROM carrito WHERE id = $1", [id]);
    res.json({message: "Producto eliminado del carrito"})
} catch (error) {
    console.error("Error al eliminar producto del carrito", error);
    res.status(500).json({message: "Error al eliminar producto del carrito"})
}

//API PARA VACIAR TODO EL CARRITO
app.delete("/carrito", async (req, res) => {
try {
    await Pool.query("DELETE FROM carrito");
    res.json({message: "Carrito vaciado"})
} catch (error) {
    console.error("Error al vaciar el carrito", error);
    res.status(500).json({message: "Error al vaciar el carrito"})
}})
>>>>>>> a05d7a2a2a33dcca12f4debeaf24e736573b2ba5
