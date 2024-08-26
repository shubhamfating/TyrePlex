import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const Navbar = () => {
  return (
    <div className="navfix">
    <nav className="navbar navbar-expand-lg navbar-light bg-light custom-navbar fixed-top">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <a href="/">
          {" "}
          <img
            src="https://cdn.tyreplex.net/themes/moonlight/images/TP-logo.png?tr=w-150,q-60"
            className="ms-5"
            alt="Logo"
          />
        </a>
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle custom-nav-link"
                href="#"
                id="carTyresDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Car Tyres
              </a>
              <ul className="dropdown-menu" aria-labelledby="carTyresDropdown">
                <li>
                  <a className="dropdown-item custom-dropdown-item" href="/mrf">
                    MRF Tyres
                  </a>
                </li>
                <li>
                  <a className="dropdown-item custom-dropdown-item" href="#">
                    CEAT Tyres
                  </a>
                </li>
                <li>
                  <a className="dropdown-item custom-dropdown-item" href="#">
                    Goodyear Tyres
                  </a>
                </li>
                <li>
                  <a className="dropdown-item custom-dropdown-item" href="#">
                    Apollo Tyres
                  </a>
                </li>
                <li>
                  <a className="dropdown-item custom-dropdown-item" href="#">
                    JK Tyres
                  </a>
                </li>
                <li>
                  <a className="dropdown-item custom-dropdown-item" href="#">
                    ALL Car Tyres
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle custom-nav-link"
                href="#"
                id="carTyresDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Bike Tyres
              </a>
              <ul className="dropdown-menu" aria-labelledby="carTyresDropdown">
                <li>
                  <a className="dropdown-item custom-dropdown-item" href="/mrf">
                    MRF Tyres
                  </a>
                </li>
                <li>
                  <a className="dropdown-item custom-dropdown-item" href="/mrf">
                    CEAT Tyres
                  </a>
                </li>
                <li>
                  <a className="dropdown-item custom-dropdown-item" href="/mrf">
                    Goodyear Tyres
                  </a>
                </li>
                <li>
                  <a className="dropdown-item custom-dropdown-item" href="/mrf">
                    Apollo Tyres
                  </a>
                </li>
                <li>
                  <a className="dropdown-item custom-dropdown-item" href="/mrf">
                    JK Tyres
                  </a>
                </li>
                <li>
                  <a className="dropdown-item custom-dropdown-item" href="/mrf">
                    ALL Car Tyres
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <a
                className="nav-link active custom-nav-link"
                aria-current="page"
                href="#"
              >
                Tyre Pressure
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle custom-nav-link"
                href="#"
                id="commercialTyresDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Commercial Tyres
              </a>
              <ul
                className="dropdown-menu"
                aria-labelledby="commercialTyresDropdown"
              >
                <li>
                  <a className="dropdown-item custom-dropdown-item" href="/">
                    All Commercial Tyres
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle custom-nav-link"
                href="#"
                id="accessoriesDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Accessories
              </a>
              <ul
                className="dropdown-menu"
                aria-labelledby="accessoriesDropdown"
              >
                <li>
                  <a className="dropdown-item custom-dropdown-item" href="#">
                    Accessories
                  </a>
                </li>
                <li>
                  <a className="dropdown-item custom-dropdown-item" href="#">
                    Batteries
                  </a>
                </li>
                <li>
                  <a className="dropdown-item custom-dropdown-item" href="#">
                    Alloys Wheels
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle custom-nav-link"
                href="#"
                id="moreDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                More
              </a>
              <ul className="dropdown-menu" aria-labelledby="moreDropdown">
                <li>
                  <a className="dropdown-item custom-dropdown-item" href="#">
                    CashBack Offer
                  </a>
                </li>
                <li>
                  <a className="dropdown-item custom-dropdown-item" href="#">
                    Find Tyre Dealers
                  </a>
                </li>
                <li>
                  <a className="dropdown-item custom-dropdown-item" href="#">
                    Compare Tyres
                  </a>
                </li>
                <li>
                  <a className="dropdown-item custom-dropdown-item" href="#">
                    Are You A Tyre Dealer
                  </a>
                </li>
                <li>
                  <a className="dropdown-item custom-dropdown-item" href="#">
                    Wheel Balancing
                  </a>
                </li>
                <li>
                  <a className="dropdown-item custom-dropdown-item" href="#">
                    Wheel Alignment
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <ul className="navbar-nav ms-auto custom-login">
          <li className="nav-item">
            <a className="nav-link custom-login-link" href="/login">
              <i className="bi bi-person-circle me-1"></i> Login
            </a>
          </li>
        </ul>
      </div>
    </nav>
    </div>
  );
};

export default Navbar;
