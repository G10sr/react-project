import ProductCard from "./ProductCard";
import "../assets/css/productList.css";
function ProductList({ title, items }) {
  return (
    <div>
      <h2>{title}</h2>

      <section className="caja">
        {items.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </div>
  );
}

export default ProductList;