import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
          <div className="container-fluid">
            <Link
              onClick={() => window.scrollTo(0, 0)}
              className="navbar-brand m-2"
              to="/home">
              <i>
                <h2 className="text-warning">Riya Dhiman.</h2>
              </i>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-center"
              id="navbarNavDropdown">
              <ul className="navbar-nav justify-content-center">
                <li className="nav-item m-2 p-2">
                  <Link
                    onClick={() => window.scrollTo(0, 0)}
                    className="nav-link active"
                    aria-current="page"
                    to="/home">
                    Home
                  </Link>
                </li>
                <li className="nav-item m-2 p-2">
                  <Link
                    onClick={() => window.scrollTo(0, 0)}
                    className="nav-link"
                    to="/about">
                    About
                  </Link>
                </li>
                <li className="nav-item m-2 p-2">
                  <Link
                    onClick={() => window.scrollTo(0, 0)}
                    className="nav-link"
                    to="/service">
                    Services
                  </Link>
                </li>
                <li className="nav-item m-2 p-2">
                  <Link
                    onClick={() => window.scrollTo(0, 0)}
                    className="nav-link"
                    to="/contact">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
