import React from 'react'
import './PremiumTutor.scss'
import NavbarComponent from '../navbar_folder/NavbarComponent'
import PremiumTutorPart1 from './PremiumTutorPart1'
import PremiumTutorPart2 from './PremiumTutorPart2'

function PremiumTutor(props) {
  return (
    <>
      <NavbarComponent activeLink={props.activeLink}></NavbarComponent>
      <div className='container' style={{marginBottom:'100px'}}>
        <div className='row' style={{margin:'0px 15px'}}>
            <div className='col-3' ><PremiumTutorPart1/></div>
            <div className='col-9' ><PremiumTutorPart2/></div>
        </div>
      </div>
    </>
  )
}

export default PremiumTutor