import React, {useState} from 'react'
import './RegisterComponent.scss'
import NavbarComponent from '../navbar_folder/NavbarComponent'
import registerSvg from "../../assets/images/Mobile register-bro.f79ed0f8.svg";
import { Link } from "react-router-dom";
import RegisterComponentStudent from './RegisterComponentStudent';
import RegisterComponentTutor from './RegisterComponentTutor';

function RegisterComponent(props) {
  const [setLoginType, setsetLoginType] = useState("tutor");
  const handleLoginType = (event) => {
    setsetLoginType(event.target.value);
    // console.log(event.type.value);
  };

  return (
    <div>
      <NavbarComponent activeLink={5}></NavbarComponent>
      <div className="container login-style">
        <div className="row">
          <div className="col">
            <img src={registerSvg} alt="Register"></img>
          </div>
          <div className="col">
            <div className="card-view-container">
              <div className="card-view">
                <div className="login-title">Register</div>
                <div className="line"></div>

                <div className="row option-select">
                  <div className="col custom-radio-button">
                    <label className="container">
                      {" "}
                      <p>Student</p>
                      <input
                        type="radio"
                        value="student"
                        name="student"
                        onClick={handleLoginType}
                        checked={setLoginType === "student"}
                      />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                  <div className="col custom-radio-button">
                    <label className="container">
                      {" "}
                      <p style={{ marginLeft: "-25px" }}>Tutor</p>
                      <input
                        type="radio"
                        value="tutor"
                        name="tutor"
                        onClick={handleLoginType}
                        checked={setLoginType === "tutor"}
                      />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                </div>

                {setLoginType==="student"? <RegisterComponentStudent/> : <RegisterComponentTutor/>}

                
                

                
                <div style={{marginBottom:'10px'}}>Already have an account? <span className="go-to-register-style"><Link to={'/login'}>Sign In</Link></span> </div>
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterComponent
