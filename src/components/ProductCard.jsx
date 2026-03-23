import '../assets/css/productCard.css';
import Button from "./CustomButton";
import "../assets/css/productCard.css";

function ProductCard({ product }) {
  const comprar = async () => {
  await fetch("http://localhost:3001/agregarcarrito", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nombre: productos.nombre,
        precio: productos.precio,
        imagen: producto.img,
      }),
    })
    alert("Producto agregado al carrito")
  }

  return (
    <div className="producto">
      <img src={product.img} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>{product.price}</p>
 
      <Button> Comprar </Button>
    </div>
  );
}
 
export default ProductCard;

