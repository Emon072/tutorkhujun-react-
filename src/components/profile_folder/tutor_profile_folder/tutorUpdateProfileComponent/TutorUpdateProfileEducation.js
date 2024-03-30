import React, { useState, useEffect } from 'react'
import './TutorUpdateProfileEducation.scss'
import { GetTutorEducationInfo, PostTutorEducationInfo, PutTutorEducationInfo } from '../../../../api/tutor_api/TutorEducationInfo';
import { getTutorPrimaryInfo, updateNewTutorPrimaryInfo } from '../../../../api/tutor_api/registerTutorApi';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import useTutorPrimaryProfile from '../../../Store/TutorPrimaryProfileStore';
import { write_database } from '../../../../mock_database_folder/WriteDatabase';

function TutorUpdateProfileEducation() {

  const [years, setyears] = useState([]);
  const navigate = useNavigate();

  const { tutorPrimaryInfoStore, setTutorPrimaryInfoStore } = useTutorPrimaryProfile();

  const generateYears = () => {
    const currentYear = new Date().getFullYear();
    const years = [];
    for (let year = currentYear; year >= currentYear - 30; year--) {
      years.push(year);
    }
    return years;
  };



  // ---------------------------- this part is for backend ---------------------------------------------
  const [tutorEducationInfo, settutorEducationInfo] = useState(
    {
      id : "",
      sscInstitute : "",
      sscCurriculum : "",
      sscGroup : "",
      sscPassingYear : "",
      sscResult : "",
      hscInstitute : "",
      hscCurriculum : "",
      hscGroup : "",
      hscPassingYear :"",
      hscResult : "",
      varsityInstituteType: "",
      varsityInstitute : "",
      varsityDepartMent : "",
      varsityPassingYear : "",
      varsityResult : ""
    
  });


  const callGetTutorEducationInfo = async() => {
    const res = await GetTutorEducationInfo();

    if (res){
      settutorEducationInfo(res);
    }
  }

  // 


  const callGetTutorPrimaryInfo = async() =>{
    try{
      const res = await getTutorPrimaryInfo();
      write_database("tem-primary-info" , res);

      setTutorPrimaryInfoStore(res);

      callGetTutorEducationInfo();
     } catch(error){
      Swal.fire({
        title: "Authorization Failed",
        text: "Please Login again",
        icon: "error"
      });
      navigate('/login');
     }
  }


  useEffect(() => {
    setyears(generateYears());
    callGetTutorPrimaryInfo();
  }, [])
  

  // ----------------------------------- now for getting all the input from the input field ------------------
  const handleOnChange = (event) =>{
    const name = event.target.name;
    switch (name) {
      case "ssc-institute":
        settutorEducationInfo({...tutorEducationInfo , sscInstitute : event.target.value});
        break;
      case "ssc-curriculum":
        settutorEducationInfo({...tutorEducationInfo , sscCurriculum : event.target.value});
        break;
      case "ssc-group":
        settutorEducationInfo({...tutorEducationInfo , sscGroup : event.target.value});
        break;
      case "ssc-passing":
        settutorEducationInfo({...tutorEducationInfo , sscPassingYear : event.target.value});
        break;
      case "ssc-result":
        settutorEducationInfo({...tutorEducationInfo , sscResult : event.target.value});
        break;
      case "hsc-institute":
        settutorEducationInfo({...tutorEducationInfo , hscInstitute : event.target.value});
        break;
      case "hsc-curriculum":
        settutorEducationInfo({...tutorEducationInfo , hscCurriculum : event.target.value});
        break;
      case "hsc-group":
        settutorEducationInfo({...tutorEducationInfo , hscGroup : event.target.value});
        break;
      case "hsc-passing":
        settutorEducationInfo({...tutorEducationInfo , hscPassingYear : event.target.value});
        break;
      case "hsc-result":
        settutorEducationInfo({...tutorEducationInfo , hscResult : event.target.value});
        break;
      case "varsity-institute-type":
        settutorEducationInfo({...tutorEducationInfo , varsityInstituteType : event.target.value});
        break;
      case "varsity-institute":
        settutorEducationInfo({...tutorEducationInfo , varsityInstitute : event.target.value});
        break;
      case "varsity-department":
        settutorEducationInfo({...tutorEducationInfo , varsityDepartMent : event.target.value});
        break;
      case "varsity-passing":
        settutorEducationInfo({...tutorEducationInfo , varsityPassingYear : event.target.value});
        break;
      case "varsity-result":
        settutorEducationInfo({...tutorEducationInfo , varsityResult : event.target.value});
        break;
      default:
        break;
    }
  }



  // --------------------------------------- for updating the databse ------------------------------------------
  const updateEduactionInfo = async ()=>{
    // console.log(tutorEducationInfo);
    if (tutorEducationInfo.id===""){
      settutorEducationInfo({...tutorEducationInfo, id: tutorPrimaryInfoStore.id});
      try{
        await PostTutorEducationInfo({...tutorEducationInfo, id: tutorPrimaryInfoStore.id});  
        Swal.fire({
          title: "Profile Updated Successfully",
          text: "Your Profile is now Updated",
          icon: "success"
        });

        const tmpPrimaryTutorInfo = {...tutorPrimaryInfoStore, varsity: tutorEducationInfo.varsityInstitute , subject: tutorEducationInfo.varsityDepartMent};
        
        try{
          // console.log(tutorEducationInfo);
          await updateNewTutorPrimaryInfo(tmpPrimaryTutorInfo);
          // console.log(res);
        }catch(error){}

      } catch (error){
        Swal.fire({
          title: "Update Unsuccessful",
          text: "Error is " + error,
          icon: "error"
        });
      }
      
    }
    else{
      try{
        await PutTutorEducationInfo(tutorEducationInfo);
        Swal.fire({
          title: "Profile Updated Successfully",
          text: "Your Profile is now Updated",
          icon: "success"
        });
        const tmpPrimaryTutorInfo = {...tutorPrimaryInfoStore, varsity: tutorEducationInfo.varsityInstitute , subject: tutorEducationInfo.varsityDepartMent};
        
        try{
          // console.log(tutorEducationInfo);
          await updateNewTutorPrimaryInfo(tmpPrimaryTutorInfo);
          // console.log(res);
        }catch(error){}

      } catch (error){
        Swal.fire({
          title: "Update Unsuccessful",
          text: "Error is " + error,
          icon: "error"
        });
      }
      
    }
    
  }

  // --------------------------------------- this is the designing part------------------------------

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
            <input id="institute" value={tutorEducationInfo.sscInstitute} type="text" name="ssc-institute" placeholder="Enter Institute Name.."  onChange={handleOnChange}/>
          </div>
        </div>
        <div className='row input-field-style' >

          <div className='col-3'>Curriculum</div>
          <div className='col-9'>
            <select class="form-select" value={tutorEducationInfo.sscCurriculum} onChange={handleOnChange} name="ssc-curriculum">
              <option selected value={""}>Select One</option>
              <option value={"bangla"}>Bangla</option>
              <option value={"english"}>English</option>
              <option value={"madrasha"}>Madrasha</option>
              <option value={"vocational"}>Vocational</option>
              <option value={"other"}>Other</option>
            </select>
          </div>
        </div>
        <div className='row input-field-style' >
          <div className='col-3'>Group</div>
          <div className='col-9'>
            <select class="form-select" value={tutorEducationInfo.sscGroup} name='ssc-group' onChange={handleOnChange}>
              <option selected value={""}>Select One</option>
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
              name="ssc-passing"
              onChange={handleOnChange}
              value={tutorEducationInfo.sscPassingYear}
            >
              <option value="">Select One</option>
              {years.map((year, index) => (
                <option key={index} value={year}>{year}</option>
              ))}
            </select>
          </div>
        </div>
        <div className='row input-field-style' >
            <div className='col-3'>Result</div>
            <div className='col-9'>
            <input id="ssc-result" type="text" value={tutorEducationInfo.sscResult} name="ssc-result" placeholder="Enter Institute Name.." onChange={handleOnChange}/>
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
            <input id="hsc-institute" value={tutorEducationInfo.hscInstitute} onChange={handleOnChange} type="text" name="hsc-institute" placeholder="Enter Institute Name.." />
          </div>
        </div>
        <div className='row input-field-style' >

          <div className='col-3'>Curriculum</div>
          <div className='col-9'>
            <select class="form-select" name="hsc-curriculum" value={tutorEducationInfo.hscCurriculum} onChange={handleOnChange}>
              <option selected value={""}>Select One</option>
              <option value={"bangla"}>Bangla</option>
              <option value={"english"}>English</option>
              <option value={"madrasha"}>Madrasha</option>
              <option value={"vocational"}>Vocational</option>
              <option value={"other"}>Other</option>
            </select>
          </div>
        </div>
        <div className='row input-field-style' >
          <div className='col-3'>Group</div>
          <div className='col-9'>
            <select class="form-select" name="hsc-group" value={tutorEducationInfo.hscGroup} onChange={handleOnChange}>
              <option selected value={""}>Select One</option>
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
              name="hsc-passing"
              onChange={handleOnChange}
              value={tutorEducationInfo.hscPassingYear}
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
            <input id="hsc-result" type="text" name="hsc-result" onChange={handleOnChange} value={tutorEducationInfo.hscResult} placeholder="Enter Institute Name.."/>
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
            <select class="form-select" name="varsity-institute-type" value={tutorEducationInfo.varsityInstituteType} onChange={handleOnChange}>
              <option selected value={""}>Select One</option>
              <option value={"public"}>Public</option>
              <option value={"private"}>Private</option>
              <option value={"national"}>National</option>
            </select>
          </div>
        </div>
        <div className='row input-field-style' >
          <div className='col-3'>Institute</div>
          <div className='col-9'>
            <select class="form-select" onChange={handleOnChange} name="varsity-institute" value={tutorEducationInfo.varsityInstitute}>
              <option selected value={""}>Select One</option>
              <option value={"Bangladesh University of Engineering and Technology (BUET)"}>Bangladesh University of Engineering and Technology (BUET)</option>
              <option value={"Khulna University of Engineering and Technology (KUET)"}>Khulna University of Engineering and Technology (KUET)</option>
              <option value={"Rajshahi University of Engineering and Technology (RUET)"}>Rajshahi University of Engineering and Technology (RUET)</option>
              <option value={"Chittagong University of Engineering and Technology (CUET)"}>Chittagong University of Engineering and Technology (CUET)</option>
              <option value={"Dhaka University ( DU )"}> Dhaka University ( DU )</option>
              <option value={"Shahjalal University of Science and Technology (SUST)"}> Shahjalal University of Science and Technology (SUST)</option>
            </select>
          </div>
        </div>
        <div className='row input-field-style' >
          <div className='col-3'>Department</div>
          <div className='col-9'>
            <select class="form-select" onChange={handleOnChange} name="varsity-department" value={tutorEducationInfo.varsityDepartMent}>
              <option selected value={"all"}>Select One</option>
              <option value={"Computer Science and Technology (CSE)"}>Computer Science and Technology (CSE)</option>
              <option value={"Mechanical Engineering (ME)"}>Mechanical Engineering (ME)</option>
              <option value={"Electrical and Electronics Engineering (EEE)"}>Electrical and Electronics Engineering (EEE)</option>
              <option value={"Chemical Engineering (ChE)"}>Chemical Engineering (ChE)</option>
            </select>
          </div>
        </div>
        <div className='row input-field-style' >
          <div className='col-3'>Passing Year</div>
          <div className='col-9'>
            <select
              className="form-select"
              onChange={handleOnChange}
              name="varsity-passing"
              value={tutorEducationInfo.varsityPassingYear}
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
            <input id="varsity-result" type="text" name="varsity-result" value={tutorEducationInfo.varsityResult} onChange={handleOnChange} placeholder="Enter Institute Name.."/>
            </div>
        </div>

      </div>
      
      {/* ------------------------------------------- End of the university section ------------------------------- */}
      <div className='text-center' style={{margin: '30px 0px'}}>
       <button className="btn btn-1 gradient_bg text-light" onClick={updateEduactionInfo}>Update</button>
      </div>
      
    </div>
  )
}

export default TutorUpdateProfileEducation
