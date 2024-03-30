import React, { useState } from 'react'
import './RegisterComponentStudent.scss'
import Swal from 'sweetalert2';
import { registerNewStudent } from '../../api/student_api/RegisterStudentApi';
import { useNavigate } from 'react-router-dom';

function RegisterComponentStudent() {
  const [rePassword, setrePassword] = useState("");
  const navigate = useNavigate();
  const [studentInfo, setstudentInfo] = useState({
    stId : "",
    name : "",
    phone : "",
    password : ""
  });

  const handleOnChange = (event) =>{
    switch (event.target.name) {
      case "name":
        setstudentInfo({...studentInfo , name : event.target.value});
        break;
      case "phone":
        // alert("hi")
        setstudentInfo({...studentInfo , phone : event.target.value});
        break;
      case "password":
        setstudentInfo({...studentInfo , password : event.target.value});
        break;
      case "re-password":
        setrePassword(event.target.value);
        break;
      default:
        break;
    }
  }

  const registerTheStudent = async (event) => {
    event.preventDefault();
    if (studentInfo.password !== rePassword){
      Swal.fire({
        title: "Password Does not matches",
        text: "You enter the wrong password",
        icon: "error"
      });
      return;
    }

    try{
      const res = await registerNewStudent(studentInfo);
      // console.log(res.token);
      localStorage.setItem("token", res.token);
      navigate('/s-profile');

    }catch(error){
      Swal.fire({
        title: "Registration Unsuccessfull",
        text: "Error is " + error,
        icon: "error"
      });
      return;
    }
  }

  return (
    <>
      <div className='container register-input-style'>
        <div className='row'style={{textAlign:'start'}}>
          <div class="col form-group" >
            <label htmlFor="exampleInputName" >Name<span style={{color:'red'}}> *</span></label>
            <input name='name' value={studentInfo.name} onChange={handleOnChange} type="text" class="form-control" id="exampleInputName" aria-describedby="numberHelp" placeholder="Name...." />
          </div>
          <div class="col form-group">
            <label htmlFor="exampleInputNumber">Phone<span style={{color:'red'}}> *</span></label>
            <input name="phone" type="number" value={studentInfo.phone} onChange={handleOnChange} class="form-control" id="exampleInputNumber" aria-describedby="passwordHelp" placeholder="ex: 01......" />
          </div>
        </div>
        <div className='row'style={{textAlign:'start'}}>
          <div class="col form-group" >
            <label htmlFor="exampleInputPassword" >Password<span style={{color:'red'}}> *</span></label>
            <input type="password" name='password' value={studentInfo.password} onChange={handleOnChange} class="form-control" id="exampleInputPassword" aria-describedby="numberHelp" placeholder="Password" />
          </div>
          <div class="col form-group">
            <label htmlFor="exampleInputPassword2">Re-Password<span style={{color:'red'}}> *</span></label>
            <input name='re-password' value={rePassword} onChange={handleOnChange} type="password" class="form-control" id="exampleInputPassword2" aria-describedby="passwordHelp" placeholder="Re-enter Password" />
          </div>
        </div>
      </div>


      <button className="btn btn-1 gradient_bg text-light" onClick={registerTheStudent}>Register as Student</button>
    </>
  )
}

export default RegisterComponentStudent
