import React from 'react'
import './TutionJob.scss'
import  NavbarComponent from '../navbar_folder/NavbarComponent'

function TutionJob(props) {
  return (
    <>
      <NavbarComponent activeLink = {props.activeLink}/>
      <div>This is for tution job</div>
    </>
  )
}

export default TutionJob