import React, { useState } from "react";
import NavbarComponent from "../navbar_folder/NavbarComponent";
import "./LoginComponent.scss";
import loginSvg from "../../assets/images/Computer login-amico.58fc4aa2.svg";
import { Link } from "react-router-dom";

function LoginComponent(props) {
  const [setLoginType, setsetLoginType] = useState("student");
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
            <img src={loginSvg} alt="login"></img>
          </div>
          <div className="col">
            <div className="card-view-container">
              <div className="card-view">
                <div className="login-title">Login</div>
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

                <div className="input-style-login" style={{textAlign: 'start'}}>
                  <div class="form-group">
                      <label htmlFor="exampleInputEmail1">Phone Number<span style={{color:'red'}}> *</span></label>
                      <input type="number" class="form-control" id="exampleInputPhone" aria-describedby="numberHelp" placeholder="Enter phone number"/>
                  </div>
                  <div class="form-group">
                      <label htmlFor="exampleInputEmail1">Password<span style={{color:'red'}}> *</span></label>
                      <input type="password" class="form-control" id="exampleInputpassword" aria-describedby="passwordHelp" placeholder="Enter password"/>
                  </div>
                </div>

                <button className="btn btn-1 gradient_bg text-light">Login</button>
                <div className="go-to-register-style"><Link to={'/register'}>Click here to Register</Link></div>
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginComponent;
