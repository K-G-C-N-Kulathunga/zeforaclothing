import { Link, NavLink } from "react-router-dom";
import { ShoppingBag, Search, Menu } from "lucide-react";

export default function Navbar() {
  return (
    <>
      <div className="announcement">
        A little luxury, every day.
      </div>

      <header className="navbar">
        <button
          className="icon-button mobile-menu"
          aria-label="Open menu"
        >
          <Menu size={22} />
        </button>

        <Link to="/" className="brand">
          YOUR BRAND
          <span>THE FASHION EDIT</span>
        </Link>

        <nav className="nav-links">
          <NavLink to="/shop">SHOP ALL</NavLink>
          <NavLink to="/shop/ladies">LADIES</NavLink>
          <NavLink to="/shop/men">MEN</NavLink>
          <NavLink to="/shop/kids">KIDS</NavLink>
        </nav>

        <div className="nav-actions">
          <button
            className="icon-button"
            aria-label="Search products"
          >
            <Search size={20} />
          </button>
          <Link
            to="/cart"
            className="icon-button"
            aria-label="Shopping bag"
          >
            <ShoppingBag size={20} />
          </Link>
        </div>
      </header>
    </>
  );
}