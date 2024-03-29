import React, {useState} from 'react'
import './PremiumTutorPart1.scss'
import { DistrictInfoArr } from "../../assets/mockDataset/DistrictInfo";
import MediumInfoArr from "../../assets/mockDataset/MediumInfo";
import usePremiumTutorFilter from '../Store/PremiumTutorFilter';

function PremiumTutorPart1(props) {

    const {tutorFilterInfo, updateTutorFilterInfo} = usePremiumTutorFilter();

    const [selectedTutorType, setselectedTutorType] = useState("all");
    const [selectGender, setselectGender] = useState("all-gender")
    const [seletedArea, setseletedArea] = useState([]);
    const [selectedClasses, setselectedClasses] = useState([]);

  
    const handleTutorTypeClick = (event) => {
      if (event.target.value==="all") updateTutorFilterInfo({...tutorFilterInfo , tutorType:""});
      else updateTutorFilterInfo({...tutorFilterInfo , tutorType : event.target.value});
      setselectedTutorType(event.target.value);
    };

    const handleGenderClick = (event) =>{
        if (event.target.value === "all-gender") updateTutorFilterInfo({...tutorFilterInfo , tutorGender: ""});
        else updateTutorFilterInfo({...tutorFilterInfo , tutorGender: event.target.value});
        setselectGender(event.target.value);
        
    }
    const handleDivisionClick = (event) => {
      if (event.target.value!=='all'){
        updateTutorFilterInfo({...tutorFilterInfo , tutordistrict: DistrictInfoArr[event.target.value].district});
        setseletedArea(DistrictInfoArr[event.target.value].area);
      }
      else {
        updateTutorFilterInfo({...tutorFilterInfo , tutordistrict: ""});
      }
          
    };

    const handleAreaClick = (event) => {
      if (event.target.value!=='all'){
        updateTutorFilterInfo({...tutorFilterInfo , tutorArea: event.target.value});
      }
      else {
        updateTutorFilterInfo({...tutorFilterInfo , tutorArea: ""});
      }
    };


    const handleMediumClick = (event) => {
      if (event.target.value!=='all'){
        updateTutorFilterInfo({...tutorFilterInfo , tutorMedium: MediumInfoArr[event.target.value].medium});
        setselectedClasses(MediumInfoArr[event.target.value].classes);
      }
      else {
        updateTutorFilterInfo({...tutorFilterInfo , tutorMedium: ""});
      }
    };

    const handleClassClick = (event) => {
      if (event.target.value!=='all'){
        updateTutorFilterInfo({...tutorFilterInfo , tutorClass: event.target.value});
      }
      else {
        updateTutorFilterInfo({...tutorFilterInfo , tutorClass: ""});
      }
    };
  
    return (
      <div className="premium-part-1-style">
        <div className="title-1">Advance Filter</div>
  
        <div className="line"></div>
  
        <div className="title-2">Tutor type</div>
        <div className="row justify-content-between">
          <div className="col-8 custom-radio-button" >

            <label className="container">
              {""}
              <p>All</p>
              <input
                type="radio"
                value="all"
                name="all"
                onClick={handleTutorTypeClick}
                checked={selectedTutorType === "all"}
              />
              <span className="checkmark"></span>
            </label>
            <label className="container">
              {""}
              <p>Premium</p>
              <input
                type="radio"
                name="premium"
                value="premium"
                onClick={handleTutorTypeClick}
                checked={selectedTutorType === "premium"}
              />
              <span className="checkmark"></span>
            </label>
            
          </div>
          <div className="col">
            <i class="fa-solid fa-list"></i>
            <i class="fa-solid fa-star"></i>
          </div>
          
        </div>
  
        {/*-------------------------- this is the second part --------------------------*/}

        <div className="line"></div>
  
        <div className="title-2">Gender</div>
        <div className="row">
          <div className="col-8 custom-radio-button">
            <label className="container">
              {" "}
              <p>All</p>
              <input
                type="radio"
                value="all-gender"
                name="all-gender"
                onClick={handleGenderClick}
                checked={selectGender === "all-gender"}
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
                onClick={handleGenderClick}
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
                onClick={handleGenderClick}
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
              <option key={i} value={area}>
                {area}
              </option>
            );
          })}
        </select>
      </div>
    );
}

export default PremiumTutorPart1
