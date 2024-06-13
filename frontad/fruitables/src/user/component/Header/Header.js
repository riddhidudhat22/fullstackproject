import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { ThemeContext } from '../../../context/Themcontext';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import LightModeIcon from '@mui/icons-material/LightMode';
import { IconButton } from '@mui/material';
import Brightness7Icon from '@mui/icons-material/Brightness7';

function Header(props) {

  const cart = useSelector(state => state.cart);
  console.log(cart);

  const categories = useSelector(state => state.categories);
  console.log(categories);

  const subcategori = useSelector(state => state.subcategories)
  console.log(subcategori);

  const product = useSelector(state => state.product)
  console.log(product);

  const cart_Count = cart.cart.reduce((acc, v) => acc + v.qty, 0);
  console.log(cart_Count);

  const themcontext = useContext(ThemeContext);
  console.log(themcontext);

  const handletheme = () => {
    themcontext.togaleTheme(themcontext.theme);
  };

  return (
    <div>
      {/* Navbar start */}
      <div className={`container-fluid fixed-top ${themcontext.theme}`}>
        <div className="container topbar bg-primary d-none d-lg-block">
          <div className="d-flex justify-content-between">
            <div className="top-info ps-2">
              <small className="me-3"><i className="fas fa-map-marker-alt me-2 text-secondary" /> <a href="#" className="text-white">123 Street, New York</a></small>
              <small className="me-3"><i className="fas fa-envelope me-2 text-secondary" /><a href="#" className="text-white">Email@Example.com</a></small>
            </div>
            <div className="top-link pe-2">
              <a href="#" className="text-white"><small className="text-white mx-2">Privacy Policy</small>/</a>
              <a href="#" className="text-white"><small className="text-white mx-2">Terms of Use</small>/</a>
              <a href="#" className="text-white"><small className="text-white ms-2">Sales and Refunds</small></a>
            </div>
          </div>
        </div>
        <div className={`container px-0 ${themcontext.theme}`}>
          <nav className="navbar navbar-expand-xl">
            <a href="index.html" className="navbar-brand"><h1 className="text-primary display-6">Fruitables</h1></a>
            <button className="navbar-toggler py-2 px-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
              <span className="fa fa-bars text-primary" />
            </button>
            <div className={`collapse navbar-collapse ${themcontext.theme}`} id="navbarCollapse">
              <div className="navbar-nav mx-auto">
                <NavLink to="/" className="nav-item nav-link active">Home</NavLink>
                <NavLink to="/shop" className="nav-item nav-link">Shop</NavLink>
                <NavLink to="/shopdetail" className="nav-item nav-link">Shop Detail</NavLink>

                <div className="nav-item dropdown">
                  <NavLink className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Categories</NavLink>
                  <div className="dropdown-menu m-0 bg-secondary rounded-0">
                    {Array.isArray(categories) && categories.map((v) => (
                      <NavLink key={v.id} to={`/category/${v.id}`} className="dropdown-item">
                        {v.name}
                      </NavLink>
                    ))}
                  </div>
                </div>

                <div className="nav-item dropdown">
                  <NavLink href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</NavLink>
                  <div className="dropdown-menu m-0 bg-secondary rounded-0">
                    <NavLink to="/cart" className="dropdown-item">Cart</NavLink>
                    <NavLink to="/checkout" className="dropdown-item">Checkout</NavLink>
                    <NavLink to="/testimonial" className="dropdown-item">Testimonial</NavLink>
                    <NavLink to="/error" className="dropdown-item">404 Page</NavLink>
                    <NavLink to="/review" className="dropdown-item">Review</NavLink>
                  </div>
                </div>
                <NavLink to="/contact" className="nav-item nav-link">Contact</NavLink>
              </div>
              <div className="d-flex m-3 me-0">
                <button className="btn-search btn border border-secondary btn-md-square rounded-circle bg-white me-4" data-bs-toggle="modal" data-bs-target="#searchModal"><i className="fas fa-search text-primary" /></button>
                <NavLink to="/cart/" className="position-relative me-4 my-auto">
                  <i className="fa fa-shopping-bag fa-2x" />
                  <span className="position-absolute bg-secondary rounded-circle d-flex align-items-center justify-content-center text-dark px-1" style={{ top: '-5px', left: 15, height: 20, minWidth: 20 }}>{cart_Count}</span>
                </NavLink>
                <a href="#" className="my-auto">
                  <i className="fas fa-user fa-2x" />
                </a>
                <IconButton onClick={handletheme}>
                  {themcontext.theme === 'light' ? <Brightness7Icon className='iconcolor' /> : <LightModeIcon className='iconcolor' />}
                </IconButton>
              </div>
            </div>
          </nav>
        </div>
      </div>
      {/* Navbar End */}
      {/* Modal Search Start */}
      <div className="modal fade" id="searchModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-fullscreen">
          <div className="modal-content rounded-0">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Search by keyword</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body d-flex align-items-center">
              <div className="input-group w-75 mx-auto d-flex">
                <input type="search" className="form-control p-3" placeholder="keywords" aria-describedby="search-icon-1" />
                <span id="search-icon-1" className="input-group-text p-3"><i className="fa fa-search" /></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Modal Search End */}
    </div>
  );
}

export default Header;
