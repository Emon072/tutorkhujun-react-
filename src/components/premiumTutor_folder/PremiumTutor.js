import React, { useEffect, useState } from 'react'
import './PremiumTutor.scss'
import NavbarComponent from '../navbar_folder/NavbarComponent'
import PremiumTutorPart1 from './PremiumTutorPart1'
import PremiumTutorPart2 from './PremiumTutorPart2'
import { getAllTutorPrimaryInfo } from '../../api/tutor_api/registerTutorApi'
import usePremiumTutorFilter from '../Store/PremiumTutorFilter'


function PremiumTutor(props) {

  const [allTutorInfo, setAllTutorInfo] = useState([]);
  const [filteredTutorInfoArr, setFilteredTutorInfoArr] = useState([]);

  const {tutorFilterInfo} = usePremiumTutorFilter();

  // --------------------------- this is for filtering purpose -------------------------------------

  const filterTutorInfoAfterEffect = () => {
      let filteredTutors = [...allTutorInfo];

      if (tutorFilterInfo.tutorType !== "") {
          filteredTutors = filteredTutors.filter(tutor => tutor.isPremium);
      }

      if (tutorFilterInfo.tutorGender !== "") {
          filteredTutors = filteredTutors.filter(tutor => tutor.gender === tutorFilterInfo.tutorGender);
      }

      if (tutorFilterInfo.tutordistrict !== "") {
          filteredTutors = filteredTutors.filter(tutor => tutor.tutionDistrict === tutorFilterInfo.tutordistrict);
      }

      if (tutorFilterInfo.tutorArea !== "") {
        filteredTutors = filteredTutors.filter(tutor => tutor.tutionLocation.includes(tutorFilterInfo.tutorArea));
      }
      
      if (tutorFilterInfo.tutorMedium !== ""){
        filteredTutors = filteredTutors.filter(tutor => tutor.Medium.includes(tutorFilterInfo.tutorMedium));
      }

      if (tutorFilterInfo.tutorClass !== ""){
        filteredTutors = filteredTutors.filter(tutor => tutor.classes.includes(tutorFilterInfo.tutorClass));
      }

      setFilteredTutorInfoArr(filteredTutors);
  }

  useEffect(() => {
      if (tutorFilterInfo) {
          filterTutorInfoAfterEffect();
      }
  }, [tutorFilterInfo , allTutorInfo]);



  const getTutorInfomation = async()=>{
    const res = await getAllTutorPrimaryInfo();
    setAllTutorInfo(res);
  }

  useEffect(() => {
    getTutorInfomation();
  }, [])
  
  

  return (
    <>
      <NavbarComponent activeLink={props.activeLink}></NavbarComponent>
      <div className='container-xl' style={{marginBottom:'100px'}}>
        <div className='row' style={{margin:'0px 15px'}}>
            <div className='col-3' ><PremiumTutorPart1 /></div>
            <div className='col-9' ><PremiumTutorPart2 allTutorInfo = {filteredTutorInfoArr} /></div>
        </div>
      </div>
    </>
  )
}

export default PremiumTutor