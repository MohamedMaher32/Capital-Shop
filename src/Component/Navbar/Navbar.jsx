import { Link, NavLink } from "react-router-dom"
import logo from "../../image/logo.png"
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCarts, getCartItemsCount, getCartTotal } from "../../Rduex/CartSlice";
export default function Navbar() {
  let Dispatch = useDispatch()
  let [searchTerm, setSearchTerm] = useState("");
  const carts = useSelector(getAllCarts);
  const itemsCount = useSelector(getCartItemsCount);
  let handleSearchTerm = (e) => {
    e.preventDefault();
    setSearchTerm(e.target.value);
  }
  useEffect(() => {
    Dispatch(getCartTotal());
  }, [carts])
  return (
    <nav className="navbar navbar-expand-lg bg-white py-3 shadow fixed-top">
      <div className="container">
        <Link to='/'><img src={logo} alt="logo" className="w-100" /></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink to='/' className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to='/shop' className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Shop</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to='/categories' className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Categories</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to='/contact' className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Contact</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to='/cart' className="nav-link">
                <i className="fa-solid fa-cart-shopping fs-5 position-relative">
                  <span className="position-absolute translate-middle rounded-2">{itemsCount}</span>
                </i>
              </NavLink>
            </li>
            <li className="nav-item">
              <form className="d-flex" role="search">
                <input className="form-control rounded-0" type="search" placeholder="Search..." aria-label="Search" onChange={(e) => handleSearchTerm(e)} />
                <Link to={`/search/${searchTerm}`} className='flex align-center justify-center'>
                  <i className='fa-solid fa-magnifying-glass'></i>
                </Link>
              </form>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}