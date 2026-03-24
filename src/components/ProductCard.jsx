import '../assets/css/productCard.css';
import Button from "./CustomButton";
import "../assets/css/productCard.css";

function ProductCard({ product }) {

  return (
    <div className="producto">
      <img src={product.imagen} alt={product.name} />
      <h3>{product.nombre}</h3>
      <p>{product.descripcion}</p>
      <p>{product.precio}</p>
 
      <Button> Comprar </Button>
    </div>
  );
}
 
export default ProductCard;

