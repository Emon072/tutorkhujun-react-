import React, { useState , useEffect} from "react";
import "./NavbarComponent.scss";
import { Link } from "react-router-dom";
import useTutorPrimaryProfile from "../Store/TutorPrimaryProfileStore";
import { useNavigate } from 'react-router-dom';
import { read_database } from "../../mock_database_folder/ReadDatabase";


function NavbarComponent({activeLink}) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();


  const [showDropMenu, setshowDropMenu] = useState(false);

  const toggleDropMenu = ()=>{
    if (showDropMenu) setshowDropMenu(false);
    else setshowDropMenu(true);
  }

  const gotToProfilePage = () =>{
    navigate('/t-profile/update');
  }
  const pleaseLogOut = () =>{
    localStorage.setItem("token", "");
    localStorage.setItem("tem-primary-info" , "");
    navigate('/login');
    setTutorPrimaryInfoToDefaultStore();
    // setTutorPrimaryInfoStore
  }

  
  

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const {tutorPrimaryInfoStore,setTutorPrimaryInfoToDefaultStore, setTutorPrimaryInfoStore} = useTutorPrimaryProfile();

  useEffect(() => {
    const tmpPrimaryTutorInfo  = read_database("tem-primary-info");
    
    if (!tmpPrimaryTutorInfo!==""){
      // console.log(tmpPrimaryTutorInfo);
      setTutorPrimaryInfoStore(tmpPrimaryTutorInfo);
      // console.log(tutorPrimaryInfoStore);
    }
    
  }, [])

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
              <Link className="col" to={'/tution-job'}> <div className={`col ${activeLink === 0 ? "active" : ""}`} > TUTION JOBS</div></Link>
              <Link className="col" to={'/tutor-list'}><div className={`col ${activeLink === 1 ? "active" : ""}`} > PREMIUM TUTORS</div></Link>
              <Link className="col" to={'/tutor-request'}><div className={`col ${activeLink === 2 ? "active" : ""}`} > TUTOR REQUEST</div></Link>
              <Link className="col" to={'/courses'}> <div className={`col ${activeLink === 3 ? "active" : ""}`} > COURSES</div></Link> 
              </div>
            </div>
          </div>

          {
            !tutorPrimaryInfoStore.profilePicture?<div className={`col responsive-button-style-nav ${isOpen ? "d-none" : ""}`}>
            <Link to={'/login'}>
              <button className="btn btn-primary">
                <i className="fa fa-sign-in fa-lg" style={{ marginRight: "5px" }}></i>
                Sign in
              </button>
            </Link>
            <Link to={'/register'}>
                <button className="btn btn-primary">
                  <i className="fa fa-sign-in fa-lg" style={{ marginRight: "4px" }}></i>{" "}
                  Sign up
                </button>
            </Link>
            </div>: <div className="col after-login d-flex justify-content-center align-items-center"> 
                <img style={{marginRight:'10px'}} src={tutorPrimaryInfoStore.profilePicture} alt="" onClick={toggleDropMenu}></img>
                <div>{tutorPrimaryInfoStore.tutorName}</div>
                
                { showDropMenu && <div className="drop-down-menu">
                      <p onClick={gotToProfilePage}><i class="fas fa-user"></i> Profile</p>
                      <p onClick={pleaseLogOut}><i class="fas fa-sign-out-alt"></i> Logout</p>
                  </div>
                }
            </div>
          }

          

          

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
