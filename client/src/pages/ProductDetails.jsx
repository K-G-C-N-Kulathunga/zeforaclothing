import { Link, useParams } from "react-router-dom";
import { products } from "../data/products";

export default function ProductDetails() {
  const { id } = useParams();
  const product = products.find((item) => item.id === id);

  if (!product) {
    return <main className="section"><h1>Product not found</h1></main>;
  }

  return (
    <main className="section">
      <img
        src={product.image}
        alt={product.name}
        style={{ width: "100%", maxWidth: 480 }}
      />
      <h1>{product.name}</h1>
      <p>LKR {product.price.toLocaleString("en-LK")}</p>
      <p>Available sizes: {product.sizes.join(", ")}</p>
      <Link to="/cart">Continue to cart</Link>
    </main>
  );
}