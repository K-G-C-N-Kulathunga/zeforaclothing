// NotFound.jsx
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="section">
      <h1>Page not found</h1>
      <Link to="/">Return home</Link>
    </main>
  );
}