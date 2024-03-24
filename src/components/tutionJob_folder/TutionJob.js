import React from 'react'
import './TutionJob.scss'
import  NavbarComponent from '../navbar_folder/NavbarComponent'
import TutionJobpart1 from './TutionJobpart1'
import TutionJobPart2 from './TutionJobPart2'

function TutionJob(props) {
  return (
    <>
      <NavbarComponent activeLink = {props.activeLink}/>
      <div className='container' style={{marginBottom:'100px'}}>
        <div className='row' style={{margin:'0px 15px'}}>
            <div className='col-3' ><TutionJobpart1/></div>
            <div className='col-9' ><TutionJobPart2/></div>
        </div>
      </div>
    </>
  )
}

export default TutionJob