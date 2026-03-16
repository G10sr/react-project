import products from "../data/productos";
import ProductList from "../components/ProductList";
import "../assets/css/productos.css";
 
function Productos() {
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