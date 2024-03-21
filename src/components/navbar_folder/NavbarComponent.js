import React, { useState } from "react";
import "./NavbarComponent.scss";

function NavbarComponent() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeColumn, setActiveColumn] = useState(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleColumnClick = (index) => {
    setActiveColumn(index === activeColumn ? null : index);
  };

  return (
    <div className="container-fluid navbar-style">
      <div className="container text-center">
        <div
          className="row navbar-responsive-control"
          style={{ alignItems: "center" }}
        >
          <div className="col">
            <img
              style={{ height: "6vh" }}
              src={require("../../assets/images/logo.webp")}
              alt="Logo"
            ></img>
          </div>
          <div className={`col-7 ${isOpen ? "d-none d-md-block" : ""}`}>
            <div className="container-sm">
              <div className="row navbar-responsive-control hover-effect">
                <div className={`col ${activeColumn === 0 ? "active" : ""}`} onClick={() => handleColumnClick(0)}>TUTION JOBS</div>
                <div className={`col ${activeColumn === 1 ? "active" : ""}`} onClick={() => handleColumnClick(1)}>PREMIUM TUTORS</div>
                <div className={`col ${activeColumn === 2 ? "active" : ""}`} onClick={() => handleColumnClick(2)}>TUTOR REQUEST</div>
                <div className={`col ${activeColumn === 3 ? "active" : ""}`} onClick={() => handleColumnClick(3)}>COURSES</div>
              </div>
            </div>
          </div>
          <div className={`col responsive-button-style-nav ${isOpen ? "d-none d-md-block" : ""}`}>
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
