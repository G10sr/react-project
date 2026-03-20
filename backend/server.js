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
    res.json(result.rows);

  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro al obtener el carrito" });
  }
});

async function getGames() { 
    const url = "../m/json/juegos.json"; //ruta del json de juegos
    try{
        const response = await fetch(url); //fetch de los datos
        if(!response.ok){
            throw new Error('Response status: '+response.status)
        } else{
            const data = await response.json();
            return data; //Retorno de datos
        }
    } catch (error){
        console.error(error);
    }
}


app.listen(3001, () => {
    console.log("Servidor backend funcionando en puerto 3001");
});
