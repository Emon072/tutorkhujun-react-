import React from 'react'
import './TutionJob.scss'
import  NavbarComponent from '../navbar_folder/NavbarComponent'
import TutionJobpart1 from './TutionJobpart1'

function TutionJob(props) {
  return (
    <>
      <NavbarComponent activeLink = {props.activeLink}/>
      <div className='container' style={{height:'1000px'}}>
        <div className='row' style={{margin:'0px 15px'}}>
            <div className='col-3' ><TutionJobpart1/></div>
            <div className='col-9' style={{backgroundColor:'blue' , height:'1000px'}}></div>
        </div>
      </div>
    </>
  )
}

export default TutionJob