import { Link, useLocation } from "react-router-dom";
import "./styles.css";

function Layout({ children }) {
  const location = useLocation();

  return (
    <div className="app-layout">
      <header className="app-header">
        <div className="app-header-inner">
          <Link to="/products" className="app-logo">
            E‑Commerce
          </Link>
          <nav className="app-nav">
            <Link
              to="/products"
              className={location.pathname === "/products" ? "active" : ""}
            >
              Products
            </Link>
          </nav>
        </div>
      </header>
      <main className="app-main">{children}</main>
    </div>
  );
}

export default Layout;
