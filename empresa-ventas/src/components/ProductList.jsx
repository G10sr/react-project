import ProductCard from "./ProductCard";

function ProductList({ title, items }) {
  return (
    <div>
      <h2>{title}</h2>

      <section className="caja-de-productos">
        {items.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </div>
  );
}

export default ProductList;