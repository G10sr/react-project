import ProductList from "../components/ProductList";
import { useEffect, useState } from "react";
import "../assets/css/productos.css";
 
function Productos() {
  const [products, setProducts] = useState({
    almuerzos: [],
    bebidas: [],
    postres: [],
  });

  useEffect(() => {
    const obtenerProductos = async () => {
      try {
        const res = await fetch("http://localhost:3001/api/productos");
        const data = await res.json();

        const agrupados = {
          almuerzos: data.filter(p => p.categoria === "almuerzos"),
          bebidas: data.filter(p => p.categoria === "bebidas"),
          postres: data.filter(p => p.categoria === "postres"),
        };

        setProducts(agrupados);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    obtenerProductos();
  }, []);
  console.log(products);

  return (
    <div id="box">
      <h1>Productos</h1>
 
      <ProductList title="Almuerzos" items={products.almuerzos} />
      <ProductList title="Bebidas" items={products.bebidas} />
      <ProductList title="Postres" items={products.postres} />
    </div>
  );
}
 
export default Productos;