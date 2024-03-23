import React from 'react'
import './HomePart5.scss'
import part5_1 from '../../assets/images/Kids Studying from Home-bro.3712dd49.svg'
import part5_2 from '../../assets/images/Webinar-bro.c6a6310a.svg'
import part5_3 from '../../assets/images/Teaching-pana.ea7f7f7a.svg'

function HomePart5() {
  return (
    <div div style={{backgroundColor:'#F2F6FD', padding:'50px 0px'}}>
      <div className='container-fluid text-center home-second'>
        <div className='com-1'>Tuition Types</div>
        <div className='com-2'>Find the Best Tuition Type which suits you most</div>
      </div>
      <div className='container text-center'>
        <div className='row justify-content-center'>
            <div className='col'>
              <div className='home-card-content'>
                  <img src={part5_1} alt=''></img>
                  <div className='com-1'>Home Tutoring</div>
                  <div className='com-2'>Looking for one-to-one classes?</div>
                  <div className='com-3'>It's a unique opportunity to learn in the home with your expected future in different categories everything is in favor of your need</div>
              </div>
            </div>
            <div className='col'>
              <div className='home-card-content'>
                  <img src={part5_2} alt=''></img>
                  <div className='com-1'>Online Tutoring</div>
                  <div className='com-2'>Are you left with any doubts?</div>
                  <div className='com-3'>It's a unique opportunity to learn in the home with your expected future in different categories everything is in favor of your need</div>
              </div>
            </div>
            <div className='col'>
              <div className='home-card-content'>
                  <img src={part5_3} alt=''></img>
                  <div className='com-1'>Group Tutoring</div>
                  <div className='com-2'>Need the Compititive & Effordable experience?</div>
                  <div className='com-3'>It's a unique opportunity to learn in the home with your expected future in different categories everything is in favor of your need</div>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default HomePart5