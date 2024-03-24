import React, { useState } from "react";
import "./NavbarComponent.scss";
import { Link } from "react-router-dom";

function NavbarComponent({activeLink}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="container-fluid navbar-style">
      <div className="container text-center">
        <div
          className="row navbar-responsive-control"
          style={{ alignItems: "center" }}
        >
          <div className="col" style={{cursor:'pointer'}}>
            <Link to={'/'}>
              <img
                style={{ height: "58px" }}
                src={require("../../assets/images/logo.webp")}
                alt="Logo"
              ></img>
            </Link>
          </div>
          <div className={`col-7 ${isOpen ? "d-none" : ""}`}>
            <div className="container-sm">
              <div className="row navbar-responsive-control hover-effect">
                <div className={`col ${activeLink === 0 ? "active" : ""}`} > <Link to={'/tution-job'}>TUTION JOBS</Link></div>
                <div className={`col ${activeLink === 1 ? "active" : ""}`} > <Link to={'/tutor-list'}>PREMIUM TUTORS</Link></div>
                <div className={`col ${activeLink === 2 ? "active" : ""}`} > <Link to={'/tutor-request'}>TUTOR REQUEST</Link></div>
                <div className={`col ${activeLink === 3 ? "active" : ""}`} > <Link to={'/tutor-list'}>COURSES</Link> </div>
              </div>
            </div>
          </div>
          <div className={`col responsive-button-style-nav ${isOpen ? "d-none" : ""}`}>
            <button className="btn btn-primary">
              <i className="fa fa-sign-in fa-lg" style={{ marginRight: "5px" }}></i>
              Sign in
            </button>
            <button className="btn btn-primary">
              <i className="fa fa-sign-in fa-lg" style={{ marginRight: "4px" }}></i>{" "}
              Sign up
            </button>
          </div>
        </div>

        <div className="hamburger col" onClick={toggleMenu}>
          <div className={`hamburger__line hamburger__line-1 ${!isOpen ? "open" : ""}`}></div>
          <div className={`hamburger__line hamburger__line-2 ${!isOpen ? "open" : ""}`}></div>
          <div className={`hamburger__line hamburger__line-3 ${!isOpen ? "open" : ""}`}></div>
        </div>
      </div>
    </div>
  );
}

export default NavbarComponent;
