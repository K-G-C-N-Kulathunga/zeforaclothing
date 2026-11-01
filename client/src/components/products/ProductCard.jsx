import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <article className="product-card">
      <Link to={`/product/${product.id}`}>
        <div className="product-image">
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
          />
        </div>

        <div className="product-info">
          <h3>{product.name}</h3>
          <p>
            LKR {product.price.toLocaleString("en-LK")}
          </p>
        </div>
      </Link>
    </article>
  );
}