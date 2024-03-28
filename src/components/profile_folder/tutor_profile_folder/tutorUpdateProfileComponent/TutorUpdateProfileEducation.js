import React, { useState } from 'react'
import './TutorUpdateProfileEducation.scss'

function TutorUpdateProfileEducation() {
  const [sscSelectedYear, setSSCSelectedYear] = useState("all");

  const generateYears = () => {
    const currentYear = new Date().getFullYear();
    const years = [];
    for (let year = currentYear; year >= currentYear - 30; year--) {
      years.push(year);
    }
    return years;
  };

  const handleSSCSelectChange = (e) => {
    setSSCSelectedYear(e.target.value);
  };

  const years = generateYears();

  return (
    <div className='container-fluid education'>
      <div className='title-1'> Educational Info</div>
      <div className='line'></div>
      <div className='title-2'>Update your profile</div>

      {/* -----------------this part is for ssc information  ----------------------*/}

      <div className='card text-center'>
        <div className='title-1'>Secondary / SSC / O-level / Dakhil</div>
        <div className='row input-field-style' >
          <div className='col-3'>Institute</div>
          <div className='col-9'>
            <input id="email-input" type="email" name="email-inputted" placeholder="Enter Institute Name.." />
          </div>
        </div>
        <div className='row input-field-style' >

          <div className='col-3'>Curriculum</div>
          <div className='col-9'>
            <select class="form-select" onChange={() => { }}>
              <option selected value={"all"}>Select One</option>
              <option value={"bangla"}>Bangla</option>
              <option value={"english"}>English</option>
              <option value={"madrasha"}>Madrasha</option>
              <option value={"vocational"}>Vocational</option>
              <option value={"other"}>Other</option>
            </select>
          </div>
        </div>
        <div className='row input-field-style' >
          <div className='col-3'>Institute</div>
          <div className='col-9'>
            <select class="form-select" onChange={() => { }}>
              <option selected value={"all"}>Select One</option>
              <option value={"science"}>Science</option>
              <option value={"arts"}>Arts</option>
              <option value={"commerce"}>Commerce</option>
            </select>
          </div>
        </div>
        <div className='row input-field-style' >
          <div className='col-3'>Passing Year</div>
          <div className='col-9'>
            <select
              className="form-select"
              onChange={handleSSCSelectChange}
              value={sscSelectedYear}
            >
              <option value="all">Select One</option>
              {years.map((year, index) => (
                <option key={index} value={year}>{year}</option>
              ))}
            </select>
          </div>
        </div>
        <div className='row input-field-style' >
            <div className='col-3'>Result</div>
            <div className='col-9'>
            <input id="email-input" type="email" name="email-inputted" placeholder="Enter Institute Name.."/>
            </div>
        </div>

      </div>

      {/* --------------------------- End of the ssc section ---------------------------------------- */}

      {/* -------------------------------- start of the hsc section --------------------------------------- */}
      
      <div className='card text-center'>
        <div className='title-1'>Higher Secondary / HSC / A level / Alim</div>
        <div className='row input-field-style' >
          <div className='col-3'>Institute</div>
          <div className='col-9'>
            <input id="email-input" type="email" name="email-inputted" placeholder="Enter Institute Name.." />
          </div>
        </div>
        <div className='row input-field-style' >

          <div className='col-3'>Curriculum</div>
          <div className='col-9'>
            <select class="form-select" onChange={() => { }}>
              <option selected value={"all"}>Select One</option>
              <option value={"bangla"}>Bangla</option>
              <option value={"english"}>English</option>
              <option value={"madrasha"}>Madrasha</option>
              <option value={"vocational"}>Vocational</option>
              <option value={"other"}>Other</option>
            </select>
          </div>
        </div>
        <div className='row input-field-style' >
          <div className='col-3'>Institute</div>
          <div className='col-9'>
            <select class="form-select" onChange={() => { }}>
              <option selected value={"all"}>Select One</option>
              <option value={"science"}>Science</option>
              <option value={"arts"}>Arts</option>
              <option value={"commerce"}>Commerce</option>
            </select>
          </div>
        </div>
        <div className='row input-field-style' >
          <div className='col-3'>Passing Year</div>
          <div className='col-9'>
            <select
              className="form-select"
              onChange={handleSSCSelectChange}
              value={sscSelectedYear}
            >
              <option value="all">Select One</option>
              {years.map((year, index) => (
                <option key={index} value={year}>{year}</option>
              ))}
            </select>
          </div>
        </div>
        <div className='row input-field-style' >
            <div className='col-3'>Result</div>
            <div className='col-9'>
            <input id="email-input" type="email" name="email-inputted" placeholder="Enter Institute Name.."/>
            </div>
        </div>

      </div>

      {/* -------------------------------------- End of the HSC section --------------------------------------- */}
      {/* --------------------------------------------- this part is for university -----------------------------*/}
      
      <div className='card text-center'>
        <div className='title-1'>Graduation / Bachelor / Diploma</div>

        <div className='row input-field-style' >
          <div className='col-3'>Institute Type</div>
          <div className='col-9'>
            <select class="form-select" onChange={() => { }}>
              <option selected value={"all"}>Select One</option>
              <option value={"public"}>Public</option>
              <option value={"private"}>Private</option>
              <option value={"national"}>National</option>
            </select>
          </div>
        </div>
        <div className='row input-field-style' >
          <div className='col-3'>Institute</div>
          <div className='col-9'>
            <select class="form-select" onChange={() => { }}>
              <option selected value={"all"}>Select One</option>
              <option value={"buet"}>Bangladesh University of Engineering and Technology (BUET)</option>
              <option value={"kuet"}>Khulna University of Engineering and Technology (KUET)</option>
              <option value={"ruet"}>Rajshahi University of Engineering and Technology (RUET)</option>
              <option value={"cuet"}>Chittagong University of Engineering and Technology (CUET)</option>
              <option value={"du"}> Dhaka University ( DU )</option>
              <option value={"sust"}> Shahjalal University of Science and Technology (SUST)</option>
            </select>
          </div>
        </div>
        <div className='row input-field-style' >
          <div className='col-3'>Department</div>
          <div className='col-9'>
            <select class="form-select" onChange={() => { }}>
              <option selected value={"all"}>Select One</option>
              <option value={"CSE"}>Computer Science and Technology (CSE)</option>
              <option value={"ME"}>Mechanical Engineering (ME)</option>
              <option value={"EEE"}>Electrical and Electronics Engineering (EEE)</option>
              <option value={"ChE"}>Chemical Engineering (ChE)</option>
            </select>
          </div>
        </div>
        <div className='row input-field-style' >
          <div className='col-3'>Passing Year</div>
          <div className='col-9'>
            <select
              className="form-select"
              onChange={handleSSCSelectChange}
              value={sscSelectedYear}
            >
              <option value="all">Select One</option>
              {years.map((year, index) => (
                <option key={index} value={year}>{year}</option>
              ))}
            </select>
          </div>
        </div>
        <div className='row input-field-style' >
            <div className='col-3'>CGPA / Current CGPA</div>
            <div className='col-9'>
            <input id="email-input" type="email" name="email-inputted" placeholder="Enter Institute Name.."/>
            </div>
        </div>

      </div>
      
      {/* ------------------------------------------- End of the university section ------------------------------- */}
      <div className='text-center' style={{margin: '30px 0px'}}>
       <button className="btn btn-1 gradient_bg text-light">Next</button>
      </div>
      
    </div>
  )
}

export default TutorUpdateProfileEducation
