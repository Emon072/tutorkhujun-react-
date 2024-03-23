import React from "react";
import TeacherImage from "../../assets/images/Teacher-rafiki.81362516.svg"; 
import "./HomePart1.scss";
import DivisionSlickSlider from "./DivisionSlickSlider";

function HomePart1() {
  return (
    <>
      <div className="container-fluid home-style">
        <div className="container">
          <div className="row responsive-component" style={{paddingTop:'25px'}}>
            <div  className="col-8">
                <p className="top-heading">Best <span style={{color:'#3C65F5'}}>Tutoring Platform</span> <br></br>for Home & Online Tutions</p>
                <div className="font-lg second-heading"> <i className="fa-solid fa-location-dot" style={{marginRight:'10px'}}></i>Find the Right Tutor in Your Area</div>
                <div style={{cursor:'pointer'}} className="wrap">
                  <button style={{cursor:'pointer'}} className="button2">
                    Find a Tutor
                  </button>
                </div>
                <div style={{marginTop:'50px', marginRight:'0px'}}>
                  <p style={{color:'grey' , fontSize:'14px'}}>Division Tutors:</p>
                  <DivisionSlickSlider></DivisionSlickSlider>
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
