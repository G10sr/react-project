const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");

const app = express();
app.use(cors());
app.use(express.json());


//Aqui va la base de datos

//Aqui va el app listen

app.listen(3001, () => {
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