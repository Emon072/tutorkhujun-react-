import React, { useState } from 'react'
import './RegisterComponentTutor.scss'
import { DistrictInfoArr } from "../../assets/mockDataset/DistrictInfo";

function RegisterComponentTutor() {

  const [seletedArea, setseletedArea] = useState([]);
  const handleDivisionClick = (event) => {
    if (event.target.value !== "")
      setseletedArea(DistrictInfoArr[event.target.value].area);
  };
  const handleAreaClick = (event) => { };
  return (
    <>
      <div className='container register-input-style'>
        <div className='row' style={{ textAlign: 'start' }}>
          <div class="col form-group" >
            <label htmlFor="exampleInputName" >Name<span style={{ color: 'red' }}> *</span></label>
            <input type="text" class="form-control" id="exampleInputName" aria-describedby="numberHelp" placeholder="Name..." />
          </div>
          <div className='col'>
            <label htmlFor="exampleInputGender" >Gender<span style={{ color: 'red' }}> *</span></label>
            <select class="form-select" id='exampleInputGender'>
              <option selected value={""}>Choose Gender</option>
              <option value={"Male"}>Male</option>
              <option value={"Female"}>Female</option>
            </select>
          </div>

        </div>
        <div className='row' style={{ textAlign: 'start' }}>
          <div class="col form-group" >
            <label htmlFor="exampleInputEmail1" >Email<span style={{ color: 'red' }}> *</span></label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="ex: user@gmail.com" />
          </div>
          <div class="col form-group">
            <label htmlFor="exampleInputPhone">Phone<span style={{ color: 'red' }}> *</span></label>
            <input type="number" class="form-control" id="exampleInputPhone" aria-describedby="numberHelp" placeholder="ex: 01......" />
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
            <input type="password" class="form-control" id="exampleInputPassword1" aria-describedby="numberHelp" placeholder="Password" />
          </div>
          <div class="col form-group">
            <label htmlFor="exampleInputPassword2">Re-Password<span style={{ color: 'red' }}> *</span></label>
            <input type="password" class="form-control" id="exampleInputPassword2" aria-describedby="passwordHelp" placeholder="Re-enter Password" />
          </div>
        </div>

      </div>



      <button className="btn btn-1 gradient_bg text-light">Register as Teacher</button>
    </>

  )
}

export default RegisterComponentTutor
