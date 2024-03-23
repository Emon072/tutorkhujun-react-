import React from 'react'
import TutorSlickSlider from './TutorSlickSlider'

function HomePart3() {
  return (
    <div style={{backgroundColor:'#F2F6FD', padding:'50px 0px'}}>
      <div className='container-fluid text-center home-second'>
          <div className='com-1'>Our Popular Tutors</div>
          <div className='com-2'>Here are few of the Verified Teachers</div>
      </div>
      
      <TutorSlickSlider></TutorSlickSlider>
    </div>
  )
}

export default HomePart3