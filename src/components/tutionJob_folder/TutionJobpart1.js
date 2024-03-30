import React, { useState } from "react";
import "./TutionJobPart1.scss";
import { DistrictInfoArr } from "../../assets/mockDataset/DistrictInfo";
import MediumInfoArr from "../../assets/mockDataset/MediumInfo";
import useJobFilter from "../Store/student/JobFilter";

function TutionJobpart1() {

  const {jobFilterInfo, updateJobFilterInfo} = useJobFilter();

  const [seletecTutorType, setseletecTutorType] = useState("");
  const [selectGender, setselectGender] = useState("")
  const [seletedArea, setseletedArea] = useState([]);
  const [selectedClasses, setselectedClasses] = useState([]);

  

  const handleTutionType = (event) => {
    updateJobFilterInfo({...jobFilterInfo , TutionType: event.target.value});
    setseletecTutorType(event.target.value);
  };
  const handleGenderSelect = (event) =>{
    updateJobFilterInfo({...jobFilterInfo , tutorGender: event.target.value});
    setselectGender(event.target.value);
  }
  const handleDivisionClick = (event) => {
    if (event.target.value!==''){
      setseletedArea(DistrictInfoArr[event.target.value].area);
      updateJobFilterInfo({...jobFilterInfo , tutordistrict: DistrictInfoArr[event.target.value].district});
    }
    else{
      updateJobFilterInfo({...jobFilterInfo , tutordistrict : ""});
    }
  };

  const handleAreaClick = (event) => {
    updateJobFilterInfo({...jobFilterInfo , tutorArea: event.target.value});
  };
  const handleMediumClick = (event) => {
    if (event.target.value!==''){
      updateJobFilterInfo({...jobFilterInfo , tutorMedium: MediumInfoArr[event.target.value].medium})
      setselectedClasses(MediumInfoArr[event.target.value].classes);
    }
    else{
      updateJobFilterInfo({...jobFilterInfo , tutorMedium : ""});
    }
  };
  const handleClassClick = (event) => {
    updateJobFilterInfo({...jobFilterInfo , tutorClass: event.target.value});
  };

  return (
    <div className="part-1-style">
      <div className="title-1">Advance Filter</div>

      <div className="line"></div>

      <div className="title-2">Tution type</div>
      <div className="row">
        <div className="col-9 custom-radio-button">
          <label className="container">
            {" "}
            <p>All Tution</p>
            <input
              type="radio"
              value=""
              name=""
              onClick={handleTutionType}
              checked={seletecTutorType === ""}
            />
            <span className="checkmark"></span>
          </label>
          <label className="container">
            {" "}
            <p>Home Tution</p>
            <input
              type="radio"
              name="Home Tutoring"
              value="Home Tutoring"
              onClick={handleTutionType}
              checked={seletecTutorType === "Home Tutoring"}
            />
            <span className="checkmark"></span>
          </label>
          <label className="container">
            {" "}
            <p>Online Tution</p>
            <input
              type="radio"
              name="Online Tutoring"
              value="Online Tutoring"
              onClick={handleTutionType}
              checked={seletecTutorType === "Online Tutoring"}
            />
            <span className="checkmark"></span>
          </label>
        </div>
        <div className="col">
          <i class="fa-solid fa-house-laptop"></i>
          <i class="fa-solid fa-house-user"></i>
          <i class="fa-solid fa-laptop-code"></i>
        </div>
      </div>

      {/*-------------------------- this is the second part --------------------------*/}
      <div className="line"></div>

      <div className="title-2">Tutor Preferance</div>
      <div className="row">
        <div className="col-9 custom-radio-button">
          <label className="container">
            {" "}
            <p>All</p>
            <input
              type="radio"
              value=""
              name=""
              onClick={handleGenderSelect}
              checked={selectGender === ""}
            />
            <span className="checkmark"></span>
          </label>
          <label className="container">
            {" "}
            <p>Male</p>
            <input
              type="radio"
              name="Male"
              value="Male"
              onClick={handleGenderSelect}
              checked={selectGender === "Male"}
            />
            <span className="checkmark"></span>
          </label>
          <label className="container">
            {" "}
            <p>Female</p>
            <input
              type="radio"
              name="Female"
              value="Female"
              onClick={handleGenderSelect}
              checked={selectGender === "Female"}
            />
            <span className="checkmark"></span>
          </label>
        </div>
        <div className="col">
          <i class="fa-solid fa-venus-mars"></i>
          <i class="fa-solid fa-mars"></i>
          <i class="fa-solid fa-venus"></i>
        </div>
      </div>

      {/* -------------------------------- this is the third part ------------------------------ */}
      <div className="line"></div>
      <div className="title-2">Select District</div>

      <select class="form-select" onChange={handleDivisionClick}>
        <option selected value={""}>
          All
        </option>
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

      {/* --------------------------------- this is the third part ----------------------------------- */}
      {/* <div style={{ marginTop: "30px" }} className="line"></div> */}
      <div className="title-2">Select Area</div>

      <select className="form-select" onChange={handleAreaClick}>
        <option selected value={""}>
          All
        </option>
        {seletedArea.map((area, i) => {
          return (
            <option key={i} value={area}>
              {area}
            </option>
          );
        })}
      </select>

      {/* ---------------------------------- this is for the forth part --------------------------------- */}
      {/* <div style={{ marginTop: "30px" }} className="line"></div> */}
      <div className="title-2">Select Medium</div>

      <select className="form-select" onChange={handleMediumClick}>
        <option selected value={""}>
          All
        </option>
        {MediumInfoArr.map((medium, i) => {
          return (
            <option key={i} value={i}>
              {medium.medium}
            </option>
          );
        })}
      </select>

      {/* --------------------------------- this is the fifth part ----------------------------------- */}
      {/* <div style={{ marginTop: "30px" }} className="line"></div> */}
      <div className="title-2">Select Class</div>

      <select className="form-select" onChange={handleClassClick}>
        <option selected value={""}>
          All
        </option>
        {selectedClasses.map((classes, i) => {
          return (
            <option key={i} value={classes}>
              {classes}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default TutionJobpart1;
