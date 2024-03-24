import React, { useState } from "react";
import "./TutionJobPart1.scss";
import { DistrictInfoArr } from "../../assets/mockDataset/DistrictInfo";
import MediumInfoArr from "../../assets/mockDataset/MediumInfo";

function TutionJobpart1() {
  const [selectedLocation, setSelectedLocation] = useState("all");
  const [selectGender, setselectGender] = useState("all-gender")
  const [seletedArea, setseletedArea] = useState([]);
  const [selectedClasses, setselectedClasses] = useState([]);

  const handleLocationClick = (event) => {
    setSelectedLocation(event.target.value);
  };
  const handleGenderSelect = (event) =>{
    setselectGender(event.target.value);
  }
  const handleDivisionClick = (event) => {
    if (event.target.value!=='all')
        setseletedArea(DistrictInfoArr[event.target.value].area);
  };
  const handleAreaClick = (event) => {};
  const handleMediumClick = (event) => {
    if (event.target.value!=='all')
     setselectedClasses(MediumInfoArr[event.target.value].classes);
  };
  const handleClassClick = (event) => {};

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
              value="all"
              name="all"
              onClick={handleLocationClick}
              checked={selectedLocation === "all"}
            />
            <span className="checkmark"></span>
          </label>
          <label className="container">
            {" "}
            <p>Home Tution</p>
            <input
              type="radio"
              name="home"
              value="home"
              onClick={handleLocationClick}
              checked={selectedLocation === "home"}
            />
            <span className="checkmark"></span>
          </label>
          <label className="container">
            {" "}
            <p>Online Tution</p>
            <input
              type="radio"
              name="online"
              value="online"
              onClick={handleLocationClick}
              checked={selectedLocation === "online"}
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
              value="all-gender"
              name="all-gender"
              onClick={handleGenderSelect}
              checked={selectGender === "all-gender"}
            />
            <span className="checkmark"></span>
          </label>
          <label className="container">
            {" "}
            <p>Male</p>
            <input
              type="radio"
              name="male"
              value="male"
              onClick={handleGenderSelect}
              checked={selectGender === "male"}
            />
            <span className="checkmark"></span>
          </label>
          <label className="container">
            {" "}
            <p>Female</p>
            <input
              type="radio"
              name="female"
              value="female"
              onClick={handleGenderSelect}
              checked={selectGender === "female"}
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
        <option selected value={"all"}>
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

      {/* ---------------------------------- this is for the forth part --------------------------------- */}
      {/* <div style={{ marginTop: "30px" }} className="line"></div> */}
      <div className="title-2">Select Medium</div>

      <select className="form-select" onChange={handleMediumClick}>
        <option selected value={"all"}>
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
        <option selected value={"all"}>
          All
        </option>
        {selectedClasses.map((area, i) => {
          return (
            <option key={i} value={i}>
              {area}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default TutionJobpart1;
