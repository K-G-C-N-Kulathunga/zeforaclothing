import { products } from "../data/products";
import ProductCard from "../components/products/ProductCard";

export default function Shop() {
  return (
    <main className="section">
      <p className="eyebrow">THE COMPLETE COLLECTION</p>
      <h1>Shop All</h1>

      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}