import React, {useState , useEffect} from 'react'
import './TutorUpdateProfileTutorInfo.scss';
import { DistrictInfoArr } from '../../../../assets/mockDataset/DistrictInfo';
import Multiselect from 'multiselect-react-dropdown';
import MediumInfoArr from '../../../../assets/mockDataset/MediumInfo';
import subjectInfoArr from '../../../../assets/mockDataset/SubjectsInfo';
import timingShiftArr from '../../../../assets/mockDataset/TimingShiftArr';
import PrefferedTutoringStyleArr from '../../../../assets/mockDataset/PrefferedTutoringStyle';
import { PostTutorTutionInfo, PutTutorTutionInfo, getTutorTutionInfo } from '../../../../api/tutor_api/TutorTutionInfo';
import Swal from 'sweetalert2';
import useTutorPrimaryProfile from '../../../Store/TutorPrimaryProfileStore';
import { updateNewTutorPrimaryInfo } from '../../../../api/tutor_api/registerTutorApi';

function TutorUpdateProfileTutorInfo() {
    const [districtNumber, setdistrict] = useState("")
    const [seletedArea, setseletedArea] = useState([]);
    const [selectedClasses, setselectedClasses] = useState([]);

    const MediumOptions = ['Bangla Medium','English Medium','English Version', 'Religious Studies'];

    const [tutorTutionInfo, settutorTutionInfo] = useState({
      id : "",
      tutionDistrict : "",
      tutorReferredAreas : [],
      tutorReferredMedium : [],
      tutorPreferredClasses : [],
      tutorPreferredSubjects : [],
      daysPerWeek : "",
      timingShift : [],
      expectedSalary : "",
      preferredTutionType : []
    });
    


  // ------------------------ this part is for district select ------------------------------
  const handleDivisionClick = (event) => {
    if (event.target.value!=='all'){
      setdistrict(event.target.value);
      setseletedArea(DistrictInfoArr[event.target.value].area);
      settutorTutionInfo({...tutorTutionInfo , tutionDistrict : DistrictInfoArr[event.target.value].district});
    }
      
  };
  

  const handleAreaClick = (selectedList, selectedItem) => {
    settutorTutionInfo({...tutorTutionInfo , tutorReferredAreas : selectedList});
  };

  //---------------------------- this part is for medium select --------------------------
  const handleMediumClick = (selectedList , selectedItem) => {
    const tmpClassList = MediumInfoArr.find(m => m.medium === selectedItem);
    
    setselectedClasses([...selectedClasses , ...tmpClassList.classes]);
    settutorTutionInfo({...tutorTutionInfo , tutorReferredMedium : selectedList});
  };

  const handleClassClick = (selectedList , selectedItem) => {
    settutorTutionInfo({...tutorTutionInfo , tutorPreferredClasses : selectedList});
  };

  // ----------------------------- this is for subject select ------------------------------
  const handleSubjectClick = (selectedList , selectedItem) => {
    settutorTutionInfo({...tutorTutionInfo , tutorPreferredSubjects : selectedList});
  }

  // --------------------------- this is for selecting shift -------------------------------
  const handleShiftSelect = (selectedList , selectedItem) =>{
    settutorTutionInfo({...tutorTutionInfo , timingShift : selectedList});
  }

  // -------------------------------- this is for selecting preffered Tutoring Style --------------
  const handleTutoringStyle = (selectedList , selectedItem) =>{
    settutorTutionInfo({...tutorTutionInfo , preferredTutionType : selectedList});
  }

  const selectDays = (event)=>{
    settutorTutionInfo({...tutorTutionInfo , daysPerWeek : event.target.value});
  }
  const selectSalary = (event) =>{
    settutorTutionInfo({...tutorTutionInfo , expectedSalary : event.target.value});
  }

  // ----------------------------------------- this part is for backed-------------------

  // const [tutorPrimaryInfo, settutorPrimaryInfo] = useState({});
  const {tutorPrimaryInfoStore} = useTutorPrimaryProfile();

  const callGetTutorTutionInfo =  async() =>{
    const res = await getTutorTutionInfo();
    if (res){
      settutorTutionInfo(res);
      
      for (let i = 0; i< DistrictInfoArr.length; i++){
        if (DistrictInfoArr[i].district===res.tutionDistrict){
          setdistrict(i);
        }
      }
    }
  }


  useEffect(() => {
    callGetTutorTutionInfo();
  }, [])
  

  const handleUpdateToDatabase = async () =>{
    if (tutorTutionInfo.id===""){
      settutorTutionInfo({...tutorTutionInfo, id : tutorPrimaryInfoStore.id});
      try{

        await PostTutorTutionInfo({...tutorTutionInfo, id : tutorPrimaryInfoStore.id});
        Swal.fire({
          title: "Updated Successfully",
          text: "Now Your Profile will Show to the public",
          icon: "success"
        });
        const tmpPrimaryTutorInfo = {...tutorPrimaryInfoStore, tutionDistrict: tutorTutionInfo.tutionDistrict, tutionLocation: tutorTutionInfo.tutorReferredAreas, Medium: tutorTutionInfo.tutorReferredMedium, classes: tutorTutionInfo.tutorPreferredClasses, tutionType: tutorTutionInfo.preferredTutionType};
        
        try{
          // console.log(tutorEducationInfo);
          await updateNewTutorPrimaryInfo(tmpPrimaryTutorInfo);
          // console.log(res);
        }catch(error){}

      } catch(error) {
        Swal.fire({
          title: "Update Unsuccessfull",
          text: "Error is : "+error ,
          icon: "error"
        });
      }
    }
    else{
      
      try{
        await PutTutorTutionInfo(tutorTutionInfo);
        Swal.fire({
          title: "Updated Successfully",
          text: "Now Your Profile will Show to the public",
          icon: "success"
        });

        const tmpPrimaryTutorInfo = {...tutorPrimaryInfoStore, tutionDistrict: tutorTutionInfo.tutionDistrict, tutionLocation: tutorTutionInfo.tutorReferredAreas, Medium: tutorTutionInfo.tutorReferredMedium, classes: tutorTutionInfo.tutorPreferredClasses, tutionType: tutorTutionInfo.preferredTutionType};
        
        try{
          // console.log(tutorEducationInfo);
          await updateNewTutorPrimaryInfo(tmpPrimaryTutorInfo);
          // console.log(res);
        }catch(error){}

      } catch(error) {
        Swal.fire({
          title: "Update Unsuccessfull",
          text: "Error is : "+error ,
          icon: "error"
        });
      }
    }
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
            <select class="form-select" value={districtNumber} onChange={handleDivisionClick}>
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
              selectedValues={tutorTutionInfo.tutorReferredAreas} // Preselected value to persist in dropdown
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
              options={MediumOptions} // Options array
              selectedValues={tutorTutionInfo.tutorReferredMedium} // Preselected value to persist in dropdown
              onSelect={handleMediumClick} // Function will trigger on select event
              onRemove={handleMediumClick} // Function will trigger on remove event
              displayValue="medium" // Property name to display in the dropdown options
              isObject={false}
            />


          </div>
        </div>

        <div className='row align-items-center  input-field-style' >
          <div className='col-3'>Preferred Classes:  </div>
          <div className='col-9 multi-select'>
            <Multiselect
              options={selectedClasses} // Options array
              selectedValues={tutorTutionInfo.tutorPreferredClasses} // Preselected value to persist in dropdown
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
              selectedValues={tutorTutionInfo.tutorPreferredSubjects} // Preselected value to persist in dropdown
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
          <select className="form-select" onChange={selectDays} value={tutorTutionInfo.daysPerWeek}>
            <option value={""}>Select One</option>
              {[...Array(7)].map((_, index) => (
                <option key={index + 1} value={index + 1}>
                  {index + 1} {index === 0 ? 'day' : 'days'}
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
              selectedValues={tutorTutionInfo.timingShift} // Preselected value to persist in dropdown
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
          <select className="form-select" onChange={selectSalary} value={tutorTutionInfo.expectedSalary}>
            <option selected value={""}>Select One</option>
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
              selectedValues={tutorTutionInfo.preferredTutionType} // Preselected value to persist in dropdown
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
       <button className="btn btn-1 gradient_bg text-light" onClick={handleUpdateToDatabase} >Update</button>
      </div>
    </div>
  )
}

export default TutorUpdateProfileTutorInfo
