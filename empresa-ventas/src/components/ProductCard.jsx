import '../assets/css/productCard.css';
import Button from "./CustomButton";
import "../assets/css/productCard.css";

function ProductCard({ product }) {
  return (
    <div className="producto">
      <img src={product.img} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>{product.price}</p>
 
      <Button text="Comprar" />
    </div>
  );
}
 
export default ProductCard;