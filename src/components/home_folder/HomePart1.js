import React from "react";
import TeacherImage from "../../assets/images/Teacher-rafiki.81362516.svg"; 
import "./HomePart1.scss";

function HomePart1() {
  return (
    <>
      <div className="container-fluid home-style">
        <div className="container">
          <div className="row">
            <div className="col-8" style={{ height: '50vh'}}>
                <p className="top-heading">Best <span style={{color:'#3C65F5'}}>Tutoring Platform</span> <br></br>for Home & Online Tutions</p>
                <p>Find the Right Tutor in Your Area</p>
                <button className="btn btn-primary">Find a TUTOR</button>
            </div>
         
            <div className="col">
              {/* Use the imported image */}
              <img src={TeacherImage} alt="Teacher" className="animated-image"/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePart1;
