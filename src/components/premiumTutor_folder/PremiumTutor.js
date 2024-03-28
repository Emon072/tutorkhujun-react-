import React, { useEffect, useState } from 'react'
import './PremiumTutor.scss'
import NavbarComponent from '../navbar_folder/NavbarComponent'
import PremiumTutorPart1 from './PremiumTutorPart1'
import PremiumTutorPart2 from './PremiumTutorPart2'
import { getAllTutorPrimaryInfo } from '../../api/tutor_api/registerTutorApi'

function PremiumTutor(props) {

  const [allTutorInfo, setallTutorInfo] = useState([]);

  const getTutorInfomation = async()=>{
    const res = await getAllTutorPrimaryInfo();
    setallTutorInfo(res);
    // console.log(allTutorInfo);
  }

  useEffect(() => {
    getTutorInfomation();
  }, [])
  

  return (
    <>
      <NavbarComponent activeLink={props.activeLink}></NavbarComponent>
      <div className='container-xl' style={{marginBottom:'100px'}}>
        <div className='row' style={{margin:'0px 15px'}}>
            <div className='col-3' ><PremiumTutorPart1 allTutorInfo = {allTutorInfo} setallTutorInfo = {setallTutorInfo}/></div>
            <div className='col-9' ><PremiumTutorPart2 allTutorInfo = {allTutorInfo} /></div>
        </div>
      </div>
    </>
  )
}

export default PremiumTutor