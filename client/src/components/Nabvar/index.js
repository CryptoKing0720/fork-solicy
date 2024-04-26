import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const handleNavMenu = (e) => {
    const hamCont = document.getElementsByClassName("nav-hamburgerContainer");
    hamCont.setAttribute("class", "nav-hamburgerContainer nav-active");
  };
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <span className="img-span1">
              <span className="img-span2">
                <img
                  className="img-span3"
                  alt=""
                  aria-hidden="true"
                  src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27150%27%20height=%2743%27/%3e"
                />
              </span>
              <img
                alt="solicy-logo.svg"
                draggable="false"
                href="/"
                src="https://ik.imagekit.io/2zlgs27bjo/public/icons/solicy-logo.svg?tr=w-150,q-100"
                decoding="async"
                data-nimg="intrinsic"
                className="img-span4"
                srcset="https://ik.imagekit.io/2zlgs27bjo/public/icons/solicy-logo.svg?tr=w-150,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/icons/solicy-logo.svg?tr=w-150,q-100 2x"
              />
              <noscript>
                <img
                  alt="solicy-logo.svg"
                  draggable="false"
                  href="/"
                  srcSet="https://ik.imagekit.io/2zlgs27bjo/public/icons/solicy-logo.svg?tr=w-150,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/icons/solicy-logo.svg?tr=w-150,q-100 2x"
                  src="https://ik.imagekit.io/2zlgs27bjo/public/icons/solicy-logo.svg?tr=w-150,q-100"
                  decoding="async"
                  data-nimg="intrinsic"
                  className="img-span5"
                  loading="lazy"
                />
              </noscript>
            </span>
          </div>
          <div className="nav-navbar">
            <ul className="nav-menu">
              <li>
                <NavLink
                  exact
                  to="/"
                  activeClassName="nav-active"
                  onClick={handleClick}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  exact
                  to="/about"
                  activeClassName="nav-active"
                  onClick={handleClick}
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  exact
                  to="/"
                  className="nav-special"
                  onClick={handleClick}
                >
                  <div className="nav-dropdown">
                    <p>
                      Services
                      <span className="img-span1">
                        <span className="img-span2">
                          <img
                            className="img-span3"
                            alt=""
                            aria-hidden="true"
                            src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2710%27%20height=%2710%27/%3e"
                          />
                        </span>
                        <img
                          alt="header-arrow.svg"
                          draggable="false"
                          src="https://ik.imagekit.io/2zlgs27bjo/public/icons/header-arrow.svg?tr=w-10,q-100"
                          decoding="async"
                          data-nimg="intrinsic"
                          className="img-span4"
                          srcset="https://ik.imagekit.io/2zlgs27bjo/public/icons/header-arrow.svg?tr=w-10,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/icons/header-arrow.svg?tr=w-10,q-100 2x"
                        />
                      </span>
                    </p>
                    <div className="nav-dropdown-content">
                      <span href="/blockchain">Blockchain</span>
                      <span href="/software">Software</span>
                    </div>
                  </div>
                </NavLink>
              </li>
              <li>
                <NavLink
                  exact
                  to="/portfolio"
                  activeClassName="nav-active"
                  onClick={handleClick}
                >
                  Portfolio
                </NavLink>
              </li>
              <li>
                <NavLink
                  exact
                  to="/careers"
                  activeClassName="nav-active"
                  onClick={handleClick}
                >
                  Careers
                </NavLink>
              </li>
              <li>
                <NavLink
                  exact
                  to="/blog"
                  activeClassName="nav-active"
                  onClick={handleClick}
                >
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink
                  exact
                  to="/contact"
                  activeClassName="nav-active"
                  onClick={handleClick}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="nav-navMenu" role="button" tabIndex={0}>
            <span className="img-span1">
              <span className="img-span2">
                <img
                  className="img-span3"
                  alt=""
                  aria-hidden="true"
                  src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2724%27%20height=%2724%27/%3e"
                />
              </span>
              <img
                alt="menu.svg"
                draggable="false"
                src="https://ik.imagekit.io/2zlgs27bjo/public/icons/menu.svg?tr=w-24,q-100"
                decoding="async"
                data-nimg="intrinsic"
                className="img-span4"
                srcset="https://ik.imagekit.io/2zlgs27bjo/public/icons/menu.svg?tr=w-24,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/icons/menu.svg?tr=w-24,q-100 2x"
              />
            </span>
          </div>
        </div>
        <div className="nav-hamburgerContainer">
          <div className="nav-navigationList">
            <NavLink
              exact
              to="/"
              activeClassName="nav-active"
              onClick={handleClick}
            >
              Home
            </NavLink>
            <NavLink
              exact
              to="/about"
              activeClassName="nav-active"
              onClick={handleClick}
            >
              About
            </NavLink>
            <NavLink exact to="/" className="nav-special" onClick={handleClick}>
              <div className="nav-dropdown">
                <p>
                  Services
                  <span className="img-span1">
                    <span className="img-span2">
                      <img
                        className="img-span3"
                        alt=""
                        aria-hidden="true"
                        src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2710%27%20height=%2710%27/%3e"
                      />
                    </span>
                    <img
                      alt="header-arrow.svg"
                      draggable="false"
                      src="https://ik.imagekit.io/2zlgs27bjo/public/icons/header-arrow.svg?tr=w-10,q-100"
                      decoding="async"
                      data-nimg="intrinsic"
                      className="img-span4"
                      srcset="https://ik.imagekit.io/2zlgs27bjo/public/icons/header-arrow.svg?tr=w-10,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/icons/header-arrow.svg?tr=w-10,q-100 2x"
                    />
                  </span>
                </p>
                <div className="nav-dropdown-content">
                  <span href="/blockchain">Blockchain</span>
                  <span href="/software">Software</span>
                </div>
              </div>
            </NavLink>
            <NavLink
              exact
              to="/portfolio"
              activeClassName="nav-active"
              onClick={handleClick}
            >
              Portfolio
            </NavLink>
            <NavLink
              exact
              to="/careers"
              activeClassName="nav-active"
              onClick={handleClick}
            >
              Careers
            </NavLink>
            <NavLink
              exact
              to="/blog"
              activeClassName="nav-active"
              onClick={handleClick}
            >
              Blog
            </NavLink>
            <NavLink
              exact
              to="/contact"
              activeClassName="nav-active"
              onClick={handleClick}
            >
              Contact
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
