import React, { useState  } from 'react'
import './RegisterComponentTutor.scss'
import { DistrictInfoArr } from "../../assets/mockDataset/DistrictInfo";
import Swal from 'sweetalert2'
import { registerNewTutorLogin, registerNewTutorPrimaryInfo } from '../../api/tutor_api/registerTutorApi';
import { useNavigate } from 'react-router-dom';
import randomImageUrl from '../../assets/mockDataset/RandomImage';

function RegisterComponentTutor() {

  const [seletedArea, setseletedArea] = useState([]);
  const [rePassword, setrePassword] = useState("");
  const navigate = useNavigate();
  const handleDivisionClick = (event) => {
    if (event.target.value !== ""){
      setseletedArea(DistrictInfoArr[event.target.value].area);
      settutorPrimaryInfo({...tutorPrimaryInfo , tutionDistrict : DistrictInfoArr[event.target.value].district});
    }
      
  };
  const handleAreaClick = (event) => {
    if (event.target.value!=="")
      settutorPrimaryInfo({...tutorPrimaryInfo , tutionLocation: seletedArea[event.target.value]});
  };

  // ------------------------------------ this section is for registering a new tutor in the database -------------------------------
  const [tutorLoginInfo, settutorLoginInfo] = useState({
    id : "",
    phone : "",
    password : ""
  });
  const [tutorPrimaryInfo, settutorPrimaryInfo] = useState({
    id : "",
    tutorName : "",
    gender : "",
    email : "",
    phone : "",
    tutionDistrict : "",
    tutionLocation : "",
    profilePicture : "",
    varsity : "",
    subject : "",
    Medium : "",
    classes : [],
    tutionType : "",
    isPremium : ""
 })
  

  const onChangeHandler = (e) =>{
    switch (e.target.name) {
      case "name":
        settutorPrimaryInfo({...tutorPrimaryInfo, tutorName : e.target.value});
        break;
      case "genderSelect":
        settutorPrimaryInfo({...tutorPrimaryInfo, gender: e.target.value});
        break;
      case "emailInput":
        // alert('i am clicked')
        settutorPrimaryInfo({...tutorPrimaryInfo , email: e.target.value});
        break;
      case "phone":
        settutorPrimaryInfo({...tutorPrimaryInfo , phone: e.target.value});
        settutorLoginInfo({...tutorLoginInfo , phone: e.target.value});
        break;
      case "password":
        settutorLoginInfo({...tutorLoginInfo, password: e.target.value});
        break;
      case "re-password":
        setrePassword(e.target.value);
        break;
      default:
        break;
    }
  }

  const registerTutorPrimaryInfo = async(tutorInfo) =>{
    try{
      await registerNewTutorPrimaryInfo(tutorInfo);
    
      Swal.fire({
        title: "Registration successfull",
        icon: "success"
      });
      navigate('/t-profile');
    } catch(error){
      Swal.fire({
        title: "Operation Unsuccessful",
        text: "Can not added because of " + error,
        icon: "error"
      });
    }
  }
  
  const registerTutorHere = async () =>{
    try{
      // localStorage.clear();
      const tutor = await registerNewTutorLogin(tutorLoginInfo);
      localStorage.setItem("token", tutor.token);
      const randomImgLink =  randomImageUrl;
      settutorPrimaryInfo({...tutorPrimaryInfo , id : tutor.id, profilePicture : randomImgLink});
      registerTutorPrimaryInfo({...tutorPrimaryInfo , id : tutor.id, profilePicture : randomImgLink});
    }catch(error){
      Swal.fire({
        title: "Operation Unsuccessful",
        text: "Can not added because of " + error,
        icon: "error"
      });
    };
  }

  const NewTutor = (event)=>{
    event.preventDefault();
    if (tutorLoginInfo.password!==rePassword){
      Swal.fire({
        title: "Password Does not matches",
        text: "You enter the wrong password",
        icon: "error"
      });
      return;
    }
    // --------------------- now checking the user phone number is valid if valid then create new user ------------------------------------
    registerTutorHere();
  }


  return (
    <>
      <div className='container register-input-style'>
        <div className='row' style={{ textAlign: 'start' }}>
          <div class="col form-group" >
            <label htmlFor="exampleInputName" >Name<span style={{ color: 'red' }}> *</span></label>
            <input name="name" value={tutorLoginInfo.name} onChange={onChangeHandler} type="text" class="form-control" id="exampleInputName" aria-describedby="numberHelp" placeholder="Name..." />
          </div>
          <div className='col'>
            <label htmlFor="exampleInputGender" >Gender<span style={{ color: 'red' }}> *</span></label>
            <select class="form-select" onChange={onChangeHandler} name="genderSelect" id='exampleInputGender'>
              <option selected value={""}>Choose Gender</option>
              <option value={"Male"}>Male</option>
              <option value={"Female"}>Female</option>
            </select>
          </div>

        </div>
        <div className='row' style={{ textAlign: 'start' }}>
          <div class="col form-group" >
            <label htmlFor="exampleInputEmail1" >Email<span style={{ color: 'red' }}> *</span></label>
            <input name="emailInput" value={tutorPrimaryInfo.email} onChange={onChangeHandler} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="ex: user@gmail.com" />
          </div>
          <div class="col form-group">
            <label htmlFor="exampleInputPhone">Phone<span style={{ color: 'red' }}> *</span></label>
            <input name="phone" value={tutorPrimaryInfo.phone} onChange={onChangeHandler} type="number" class="form-control" id="exampleInputPhone" aria-describedby="numberHelp" placeholder="ex: 01......" />
          </div>
        </div>
        <div className='row' style={{ textAlign: 'start' }}>

          <div class="col" >
            <label htmlFor="exampleInputDistrict" >Tution District<span style={{ color: 'red' }}> *</span></label>
            <select class="form-select" onChange={handleDivisionClick} id='exampleInputDistrict'>
              <option selected value={""}>Select District</option>
              {
                // console.log(DistrictInfoArr)
                DistrictInfoArr.map((district, i) => {
                  return (
                    <option key={i} value={i}>
                      {district.district}
                    </option>
                  );
                })
              }
            </select>
          </div>
          <div class="col">
            <label htmlFor="exampleInputLocation">Your Location<span style={{ color: 'red' }}> *</span></label>
            <select className="form-select" onChange={handleAreaClick} id='exampleInputLocation'>
              <option selected value={"all"}>
                All
              </option>
              {seletedArea.map((area, i) => {
                return (
                  <option key={i} value={i}>
                    {area}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        <div className='row' style={{ textAlign: 'start' }}>
          <div class="col form-group" >
            <label htmlFor="exampleInputPassword1" >Password<span style={{ color: 'red' }}> *</span></label>
            <input name="password" value={tutorLoginInfo.password} onChange={onChangeHandler} type="password" class="form-control" id="exampleInputPassword1" aria-describedby="numberHelp" placeholder="Password" />
          </div>
          <div class="col form-group">
            <label htmlFor="exampleInputPassword2">Re-Password<span style={{ color: 'red' }}> *</span></label>
            <input name="re-password" value={rePassword} type="password" onChange={onChangeHandler} class="form-control" id="exampleInputPassword2" aria-describedby="passwordHelp" placeholder="Re-enter Password" />
          </div>
        </div>

      </div>



      <button className="btn btn-1 gradient_bg text-light" onClick={NewTutor}>Register as Teacher</button>
    </>

  )
}

export default RegisterComponentTutor
