import { useParams, Link } from "react-router-dom";
import { products } from "../data/products";
import ProductCard from "../components/products/ProductCard";

const labels = {
  ladies: "All Ladies",
  men: "All Men",
  kids: "All Kids",
};

export default function CategoryPage() {
  const { category } = useParams();

  const validCategory = Object.hasOwn(labels, category);
  const filtered = products.filter(
    (product) => product.category === category
  );

  if (!validCategory) {
    return <main className="section"><h1>Category not found</h1></main>;
  }

  return (
    <main className="section">
      <p className="eyebrow">EXPLORE THE COLLECTION</p>
      <h1>{labels[category]}</h1>

      {filtered.length ? (
        <div className="product-grid">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div>
          <p>New styles are on their way.</p>
          <Link to="/shop">Explore all available products</Link>
        </div>
      )}
    </main>
  );
}