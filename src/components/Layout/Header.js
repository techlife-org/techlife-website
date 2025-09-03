import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const toggleSideMenu = () => {
    setIsSideMenuOpen(!isSideMenuOpen);
  };

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <>
      {/* Color Scheme Switcher */}
      <div className="color-scheme-wrap active">
        <button className="switchIcon">
          <i className="fa-solid fa-palette"></i>
        </button>
        <h4 className="color-scheme-wrap-title">
          <i className="far fa-palette me-2"></i>Style Switcher
        </h4>
        <div className="color-switch-btns">
          <button data-color="#3E66F3"><i className="fa-solid fa-droplet"></i></button>
          <button data-color="#684DF4"><i className="fa-solid fa-droplet"></i></button>
          <button data-color="#008080"><i className="fa-solid fa-droplet"></i></button>
          <button data-color="#323F7C"><i className="fa-solid fa-droplet"></i></button>
          <button data-color="#FC3737"><i className="fa-solid fa-droplet"></i></button>
          <button data-color="#8a2be2"><i className="fa-solid fa-droplet"></i></button>
        </div>
      </div>

      {/* Side Menu */}
      <div className={`sidemenu-wrapper ${isSideMenuOpen ? 'show' : ''}`}>
        <div className="sidemenu-content">
          <button className="closeButton sideMenuCls" onClick={toggleSideMenu}>
            <i className="far fa-times"></i>
          </button>
          <div className="widget woocommerce widget_shopping_cart">
            <h3 className="widget_title">Shopping cart</h3>
            <div className="widget_shopping_cart_content">
              <ul className="woocommerce-mini-cart cart_list product_list_widget">
                <li className="woocommerce-mini-cart-item mini_cart_item">
                  <Link to="#" className="remove remove_from_cart_button">
                    <i className="far fa-times"></i>
                  </Link>
                  <Link to="#">
                    <img src="/assets/img/product/product_thumb_1_1.jpg" alt="Cart Image" />
                    Gaming Computer
                  </Link>
                  <span className="quantity">
                    1 × <span className="woocommerce-Price-amount amount">
                      <span className="woocommerce-Price-currencySymbol">$</span>940.00
                    </span>
                  </span>
                </li>
                {/* Add more cart items as needed */}
              </ul>
              <p className="woocommerce-mini-cart__total total">
                <strong>Subtotal:</strong>
                <span className="woocommerce-Price-amount amount">
                  <span className="woocommerce-Price-currencySymbol">$</span>4398.00
                </span>
              </p>
              <p className="woocommerce-mini-cart__buttons buttons btn-wrap">
                <Link to="/cart" className="th-btn wc-forward">View cart</Link>
                <Link to="/checkout" className="th-btn checkout wc-forward">Checkout</Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Search Box */}
      <div className={`popup-search-box d-none d-lg-block ${isSearchOpen ? 'show' : ''}`}>
        <button className="searchClose" onClick={toggleSearch}>
          <i className="fal fa-times"></i>
        </button>
        <form action="#">
          <input type="text" placeholder="What are you looking for?" />
          <button type="submit">
            <i className="fal fa-search"></i>
          </button>
        </form>
      </div>

      {/* Mobile Menu */}
      <div className={`th-menu-wrapper ${isMenuOpen ? 'th-body-visible' : ''}`}>
        <div className="th-menu-area text-center">
          <button className="th-menu-toggle" onClick={toggleMenu}>
            <i className="fal fa-times"></i>
          </button>
          <div className="mobile-logo">
            <Link className="icon-masking" to="/">
              <span data-mask-src="/assets/img/logo.svg" className="mask-icon"></span>
              <img src="/assets/img/logo.svg" alt="Webteck" />
            </Link>
          </div>
          <div className="th-mobile-menu">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="th-header header-layout1 onepage-nav">
        <div className="header-top">
          <div className="container">
            <div className="row justify-content-center justify-content-lg-between align-items-center gy-2">
              <div className="col-auto d-none d-lg-block">
                <div className="header-links">
                  <ul>
                    <li>
                      <i className="fas fa-map-location"></i>
                      53-B Ja'oji Quaters, Zaria Road, Kano State, Nigeria
                    </li>
                    <li>
                      <i className="fas fa-phone"></i>
                      <a href="tel:+2349131033131">+234-913-103-3131</a>
                    </li>
                    <li>
                      <i className="fas fa-envelope"></i>
                      <a href="mailto:info@techlife.ng">info@techlife.ng</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-auto">
                <div className="header-social">
                  <span className="social-title">Follow Us On : </span>
                  <a href="https://www.instagram.com/">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="https://www.twitter.com/">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="https://www.linkedin.com/">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a href="https://www.youtube.com/">
                    <i className="fab fa-youtube"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`sticky-wrapper ${isSticky ? 'sticky' : ''}`}>
          <div className="menu-area">
            <div className="container">
              <div className="row align-items-center justify-content-between">
                <div className="col-auto">
                  <div className="header-logo">
                    <Link className="icon-masking" to="/">
                      <span data-mask-src="/assets/img/logo.svg" className="mask-icon"></span>
                      <img src="/assets/img/logo.svg" alt="Webteck" />
                    </Link>
                  </div>
                </div>
                <div className="col-auto">
                  <nav className="main-menu d-none d-lg-inline-block">
                    <ul>
                      <li className={isActive('/')}>
                        <Link to="/">Home</Link>
                      </li>
                      <li className={isActive('/about')}>
                        <Link to="/about">About Us</Link>
                      </li>
                      <li className={isActive('/services')}>
                        <Link to="/services">Services</Link>
                      </li>
                      <li className={isActive('/projects')}>
                        <Link to="/projects">Gallery</Link>
                      </li>
                      <li className={isActive('/blog')}>
                        <Link to="/blog">Blog</Link>
                      </li>
                      <li className={isActive('/contact')}>
                        <Link to="/contact">Contact Us</Link>
                      </li>
                    </ul>
                  </nav>
                  <div className="header-button">
                    <button
                      type="button"
                      className="icon-btn sideMenuToggler d-inline-block d-lg-none"
                      onClick={toggleSideMenu}
                    >
                      <i className="fal fa-shopping-cart"></i>
                      <span className="badge">5</span>
                    </button>
                    <button
                      type="button"
                      className="th-menu-toggle d-inline-block d-lg-none"
                      onClick={toggleMenu}
                    >
                      <i className="far fa-bars"></i>
                    </button>
                  </div>
                </div>
                <div className="col-auto d-none d-lg-block">
                  <div className="header-button">
                    <button
                      type="button"
                      className="icon-btn searchBoxToggler"
                      onClick={toggleSearch}
                    >
                      <i className="fal fa-search"></i>
                    </button>
                    <Link to="/contact" className="th-btn style3 shadow-none">
                      Make Appointment
                      <i className="fas fa-arrow-right ms-1"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="logo-bg"></div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;