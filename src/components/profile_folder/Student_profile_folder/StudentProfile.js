import React from 'react'
import StudentProfilePart1 from './StudentProfilePart1'
import StudentProfilePart2 from './StudentProfilePart2'
import NavbarComponent from "../../navbar_folder/NavbarComponent.js"

function StudentProfile() {
  return (
    <>
      <NavbarComponent></NavbarComponent>
      <div style={{marginLeft:'20px'}}>
          <StudentProfilePart1></StudentProfilePart1>
          <StudentProfilePart2></StudentProfilePart2>
      </div>
    </>
    
  )
}

export default StudentProfile
