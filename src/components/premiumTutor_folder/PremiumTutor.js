import React from 'react'
import './PremiumTutor.scss'
import NavbarComponent from '../navbar_folder/NavbarComponent'
import TutionJobpart1 from '../tutionJob_folder/TutionJobpart1'

function PremiumTutor(props) {
  return (
    <>
      <NavbarComponent activeLink={props.activeLink}></NavbarComponent>
      <div className='container' style={{marginBottom:'100px'}}>
        <div className='row' style={{margin:'0px 15px'}}>
            <div className='col-3' ><TutionJobpart1/></div>
            {/* <div className='col-9' ><TutionJobPart2/></div> */}
        </div>
      </div>
    </>
  )
}

export default PremiumTutor