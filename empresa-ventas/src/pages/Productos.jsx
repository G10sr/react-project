import { useState } from "react";
import Button from "../components/CustomButton";
import "../assets/css/productos.css";

function Productos() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Producto 1",
      description: "Descripción del producto 1",
      price: "$10.00",
      img: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Producto 2",
      description: "Descripción del producto 2",
      price: "$15.00",
      img: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      name: "Producto 3",
      description: "Descripción del producto 3",
      price: "$20.00",
      img: "https://via.placeholder.com/150",
    },
  ]);

  return (
    <div id="box">
      <h1>Productos</h1>

      <section className="caja-de-productos">
        {products.map((product) => (
          <div key={product.id} className="producto">
            <img src={product.img} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>{product.price}</p>

            <Button text="Comprar" />
          </div>
        ))}
      </section>
    </div>
  );
}

export default Productos;
