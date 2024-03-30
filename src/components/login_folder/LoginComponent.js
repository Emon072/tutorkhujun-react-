import React, { useState } from "react";
import NavbarComponent from "../navbar_folder/NavbarComponent";
import "./LoginComponent.scss";
import loginSvg from "../../assets/images/Computer login-amico.58fc4aa2.svg";
import { Link, useNavigate } from "react-router-dom";
import { tutorLogin } from "../../api/tutor_api/registerTutorApi";
import Swal from 'sweetalert2'
import { logInStudent } from "../../api/student_api/RegisterStudentApi";

function LoginComponent(props) {
  const [setLoginType, setsetLoginType] = useState("student");
  const [phoneNumber, setphoneNumber] = useState();
  const [password, setpassword] = useState("");
  const navigate = useNavigate();

  const handleLoginType = (event) => {
    setsetLoginType(event.target.value);
    // console.log(event.type.value);
  };

  // --------------------------- this section is for sign in a tutor ----------------------------------------
  const tutorLoginControl = async (phoneNumber , password) =>{
    try {
      const response = await tutorLogin(phoneNumber , password);
      console.log(response.token);
      localStorage.setItem("token" , response.token);
      Swal.fire({
        title: "Login successfully",
        icon: "success"
      });
      navigate('/t-profile/update');
    } catch (error) {
      Swal.fire({
        title: "Operation Unsuccessful",
        text: "Can not added because of " + error,
        icon: "error"
      });
    }
  }

  const studentLoginControl = async (phoneNumber , password) => {
    try{
      const response = await logInStudent(phoneNumber , password);
      localStorage.setItem("token" , response.token);
      localStorage.setItem("student" , 1);
      Swal.fire({
        title: "Login successfully",
        icon: "success"
      });
      navigate('/s-profile');
    } catch (error) {
      Swal.fire({
        title: "Operation Unsuccessful",
        text: "Can not added because of " + error,
        icon: "error"
      });
    }
  }

  const handleLogin = ()=>{
    if (setLoginType==="tutor"){
      tutorLoginControl(phoneNumber , password);
    }
    else{
      studentLoginControl(phoneNumber , password);
    }
  }

  const handleOnClick =(e) =>{
    switch (e.target.name) {
      case "phone":
        setphoneNumber(e.target.value);
        break;
      case "password":
        setpassword(e.target.value);
        break;
      default:
        break;
    }
  }

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
                      <p style={{marginLeft:""}}>Student</p>
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
                      <p style={{ marginLeft: "-20px" }}>Tutor</p>
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
                      <label htmlFor="exampleInputPhone">Phone Number<span style={{color:'red'}}> *</span></label>
                      <input onChange={handleOnClick} name="phone" value={phoneNumber} type="number" class="form-control" id="exampleInputPhone" aria-describedby="numberHelp" placeholder="Enter phone number"/>
                  </div>
                  <div class="form-group">
                      <label htmlFor="exampleInputPassword">Password<span style={{color:'red'}}> *</span></label>
                      <input onChange={handleOnClick} name="password" value={password} type="password" class="form-control" id="exampleInputpassword" aria-describedby="passwordHelp" placeholder="Enter password"/>
                  </div>
                </div>

                <button className="btn btn-1 gradient_bg text-light" onClick={handleLogin}>Login</button>
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
