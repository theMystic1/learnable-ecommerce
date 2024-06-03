import { Link, NavLink, useNavigate } from "react-router-dom";
import Logo from "./Logo";
import { useSelector } from "react-redux";
import { useState } from "react";

function MainNav() {
  const cart = useSelector((state) => state.cart);
  const navigate = useNavigate();
  const { items } = cart;
  const [isOpen, setIsOpen] = useState(false);

  function handleIsOpen() {
    setIsOpen((isOpen) => !isOpen);
  }
  return (
    <nav className="man-nav">
      <div className="nav-logo">
        <Logo />
        <span className={`lists ${isOpen ? "active" : "hidden"}`}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/">Shop</NavLink> <NavLink to="/">About</NavLink>
          <NavLink to="/">Blog</NavLink> <NavLink to="/">Contact</NavLink>
          <NavLink to="/">Pages</NavLink>
        </span>
      </div>

      <div className="login-reg">
        <img src="" alt="" />
        <span className="navlog">
          <Link to="/">Login</Link> / <Link to="/">Register</Link>
        </span>

        <span className="cart-count">
          <img src="/assets/btn-32.png" alt="" />
        </span>

        <span className="cart-count" onClick={() => navigate("/cart")}>
          <img src="/assets/cart.png" alt="cart" />
          <p className="count">{items.length > 0 ? items.length : ""}</p>
        </span>

        <span className="cart-count love">
          <img src="/assets/icn settings icn-xs (5).png" alt="social" />
          <p className="count">1</p>
        </span>

        <span className={`cart-count menu `} onClick={handleIsOpen}>
          <img src="/assets/menu.png" alt="" />
        </span>
      </div>
    </nav>
  );
}

export default MainNav;
