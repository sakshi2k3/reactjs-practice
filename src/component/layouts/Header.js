import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
function Header(props) {
  return (
    <>
      <nav className="navbar navbar-expand-md bg-dark navbar-dark  fixed-top">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            <img
              src="https://www.firstfiddle.in/assets/images/ff-logo-02.png"
              alt=""
              className="weblogo"
            />
            <img
              src="https://www.firstfiddle.in/assets/images/logo-for-mobile.png"
              alt=""
              className="moblogo"
            />
          </Link>
          <button
            className="navbar-toggler"
            data-bs-target="#ab"
            data-bs-toggle="collapse"
          >
            <i className="navbar-toggler-icon"></i>
          </button>
          <div className="navbar-collapse collapse" id="ab">
            <ul className="navbar-nav ms-auto text-center">
              <li>
                <Link to="/" className="nav-link">
                  HOME
                </Link>
              </li>
              <li>
                <Link to="/about" className="nav-link">
                  {props.Abouttitle}
                </Link>
              </li>
              <li>
                <Link to="/brand" className="nav-link">
                  BRANDS
                </Link>
              </li>
              <li>
                <Link  to="/ourteam" className="nav-link">
                  OUR TEAM
                </Link>
              </li>
                           
              <li>
                <Link to="/contact" className="nav-link">
                  CONTACT
                </Link>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Header;
