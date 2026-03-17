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