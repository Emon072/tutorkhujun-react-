import React from "react";
import TeacherImage from "../../assets/images/Teacher-rafiki.81362516.svg"; 
import "./HomePart1.scss";

function HomePart1() {
  return (
    <>
      <div className="container-fluid home-style">
        <div className="container">
          <div className="row" style={{paddingTop:'25px'}}>
            <div className="col-8">
                <p className="top-heading">Best <span style={{color:'#3C65F5'}}>Tutoring Platform</span> <br></br>for Home & Online Tutions</p>
                <div className="font-lg second-heading"> <i className="fa-solid fa-location-dot" style={{marginRight:'10px'}}></i>Find the Right Tutor in Your Area</div>
                <div className="wrap">
                  <button className="button2">
                    Find a Tutor
                  </button>
                </div>
            </div>
         
            <div className="col teacher-image">
              <img src={TeacherImage} alt="Teacher" className="animated-image"/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePart1;
