import { Link } from "react-router-dom";
import { products } from "../data/products";
import ProductCard from "../components/products/ProductCard";

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-content">
          <p className="eyebrow">THE NEW COLLECTION</p>

          <h1>
            Elegance in
            <br />
            Every Detail.
          </h1>

          <p className="hero-description">
            Discover timeless pieces designed to make
            every moment feel special.
          </p>

          <Link to="/shop/ladies" className="primary-button">
            DISCOVER THE COLLECTION
          </Link>
        </div>
      </section>

      <section className="section collection-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">CURATED FOR YOU</p>
            <h2>Our Latest Pieces</h2>
          </div>

          <Link to="/shop">View All</Link>
        </div>

        <div className="product-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}