import React, {useState} from 'react'
import './TutorUpdateProfileTutorInfo.scss';
import { DistrictInfoArr } from '../../../../assets/mockDataset/DistrictInfo';
import Multiselect from 'multiselect-react-dropdown';
import MediumInfoArr from '../../../../assets/mockDataset/MediumInfo';
import subjectInfoArr from '../../../../assets/mockDataset/SubjectsInfo';
import timingShiftArr from '../../../../assets/mockDataset/TimingShiftArr';
import PrefferedTutoringStyleArr from '../../../../assets/mockDataset/PrefferedTutoringStyle';

function TutorUpdateProfileTutorInfo() {
    const [seletedArea, setseletedArea] = useState([]);
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [selectedClasses, setselectedClasses] = useState([]);
    const [selectedClassesOptions, setselectedClassesOptions] = useState([])
    const [selectMediumClickOption, setselectMediumClickOption] = useState([])
    const [selectedSubjectOption, setselectedSubjectOption] = useState([])
    const [selectShiftOption, setselectShiftOption] = useState([])
    const [selectPrefferedTutoringStyle, setselectPrefferedTutoringStyle] = useState([])
    



  // ------------------------ this part is for district select ------------------------------
  const handleDivisionClick = (event) => {
    if (event.target.value!=='all')
        setseletedArea(DistrictInfoArr[event.target.value].area);
  };
  

  const handleAreaClick = (selectedList, selectedItem) => {
    // Handle selection changes
    setSelectedOptions(selectedList);
  };

  //---------------------------- this part is for medium select --------------------------
  const handleMediumClick = (selectedList , selectedItem) => {
    setselectMediumClickOption(selectedList);
    // console.log(selectedItem);
    setselectedClasses([...selectedClasses, ...selectedItem.classes]);

  };
  const handleClassClick = (selectedList , selectedItem) => {
    setselectedClassesOptions(selectedList);
  };

  // ----------------------------- this is for subject select ------------------------------
  const handleSubjectClick = (selectedList , selectedItem) => {
    setselectedSubjectOption(selectedList);
  }

  // --------------------------- this is for selecting shift -------------------------------
  const handleShiftSelect = (selectedList , selectedItem) =>{
    setselectShiftOption(selectedList);
  }

  // -------------------------------- this is for selecting preffered Tutoring Style --------------
  const handleTutoringStyle = (selectedList , selectedItem) =>{
    setselectPrefferedTutoringStyle(selectedList);
  }

  return (
    <div className='container-fluid education'>
      <div className='title-1'> Tution Info</div>
      <div className='line'></div>
      <div className='title-2'>Update your profile</div>

      {/* --------------- start of the tution info part ------------------------------------ */}

      <div className='card text-center'>

        <div className='row align-items-center input-field-style' >
          <div className='col-3'>Select provide tuition district: <span style={{color:'red'}}>*</span></div>
          <div className='col-9'>
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
          </div>
        </div>

        <div className='row align-items-center  input-field-style' >
          <div className='col-3'>Referred Area for tuition:  </div>
          <div className='col-9 multi-select'>
            <Multiselect
              options={seletedArea} // Options array
              selectedValues={selectedOptions} // Preselected value to persist in dropdown
              onSelect={handleAreaClick} // Function will trigger on select event
              onRemove={handleAreaClick} // Function will trigger on remove event
              displayValue="area" // Property name to display in the dropdown options
              isObject={false}
            />
          </div>
        </div>
        
        {/* ------------------------------ this part is for the medium select =------------------- */}

        <div className='row align-items-center  input-field-style' >
          <div className='col-3'>Preferred Medium:</div>
          <div className='col-9 multi-select'>

            <Multiselect
              options={MediumInfoArr} // Options array
              selectedValues={selectMediumClickOption} // Preselected value to persist in dropdown
              onSelect={handleMediumClick} // Function will trigger on select event
              onRemove={handleMediumClick} // Function will trigger on remove event
              displayValue="medium" // Property name to display in the dropdown options
              // isObject={false}
            />


          </div>
        </div>

        <div className='row align-items-center  input-field-style' >
          <div className='col-3'>Preferred Classes:  </div>
          <div className='col-9 multi-select'>
            <Multiselect
              options={selectedClasses} // Options array
              selectedValues={selectedClassesOptions} // Preselected value to persist in dropdown
              onSelect={handleClassClick} // Function will trigger on select event
              onRemove={handleClassClick} // Function will trigger on remove event
              displayValue="classes" // Property name to display in the dropdown options
              isObject={false}
            />
          </div>
        </div>

        {/* ------------------------ this part is for selecting subjects -------------------------- */}


        <div className='row align-items-center  input-field-style' >
          <div className='col-3'>Preferred Subjects (1st one will be Major Sub):  </div>
          <div className='col-9 multi-select'>
            <Multiselect
              // placeholder='Select'
              options={subjectInfoArr} // Options array
              selectedValues={selectedSubjectOption} // Preselected value to persist in dropdown
              onSelect={handleSubjectClick} // Function will trigger on select event
              onRemove={handleSubjectClick} // Function will trigger on remove event
              displayValue="classes" // Property name to display in the dropdown options
              isObject={false}
            />
          </div>
        </div>


        {/* ------------------------------- select days per week ---------------------------------------- */}
        <div className='row align-items-center  input-field-style' >
          <div className='col-3'>Days Per Week:</div>
          <div className='col-9'>
            <select className="form-select">
              <option selected value={"all"}>Select One</option>
              {Array(7).keys().map((day) => (
                <option key={day + 1} value={day + 1}>
                  {day + 1} {day === 0 ? 'day' : 'days'}
                </option>
              ))}
            </select>

          </div>
        </div>
        
        {/* ------------------------------------ Timing Shift ----------------------------------------------- */}
        <div className='row align-items-center  input-field-style' >
          <div className='col-3'>Timing Shift:</div>
          <div className='col-9 multi-select'>
            <Multiselect
              // placeholder='Select'
              options={timingShiftArr} // Options array
              selectedValues={selectShiftOption} // Preselected value to persist in dropdown
              onSelect={handleShiftSelect} // Function will trigger on select event
              onRemove={handleShiftSelect} // Function will trigger on remove event
              displayValue="classes" // Property name to display in the dropdown options
              isObject={false}
            />

          </div>
        </div>


        {/* --------------------------------- this is for expected salary ----------------------------------- */}
        <div className='row align-items-center  input-field-style' >
          <div className='col-3'>Expected Salary:</div>
          <div className='col-9'>
          <select className="form-select">
            <option selected value={"all"}>Select One</option>
            {[...Array(15).keys()].map((_, index) => (
              <option key={index + 1} value={(index + 1) * 500}>
                {(index + 1) * 500} Tk/Month
              </option>
            ))}
          </select>

          </div>
        </div>


        {/* ------------------------------------------- this is for preffered tutoring style -------------------------- */}
        <div className='row align-items-center  input-field-style' >
          <div className='col-3'>Preffered Tutoring Style: <span style={{color:'red'}}>*</span></div>
          <div className='col-9 multi-select'>
            <Multiselect
              // placeholder='Select'
              options={PrefferedTutoringStyleArr} // Options array
              selectedValues={selectPrefferedTutoringStyle} // Preselected value to persist in dropdown
              onSelect={handleTutoringStyle} // Function will trigger on select event
              onRemove={handleTutoringStyle} // Function will trigger on remove event
              displayValue="classes" // Property name to display in the dropdown options
              isObject={false}
            />

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

export default TutorUpdateProfileTutorInfo
