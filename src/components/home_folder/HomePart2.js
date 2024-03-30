import React from 'react'
import './HomePart2.scss'

import MySVG from "../../assets/images/Online learning-pana.2d5c3bbb.svg"
import { useNavigate } from 'react-router-dom'

function HomePart2() {
  const navigate = useNavigate();
  const goToJobPage = ()=>{
    navigate('/tution-job');
  }
  return (
    <>
    <div className='container-fluid text-center home-second'>
        <div className='com-1'>SEARCH TUTORING JOBS</div>
        <div className='com-2'>Find Your Tution Jobs, in your area</div>
    </div>
    <div className='container'>
        <div className='row text-center second-part-2'>
            <div className='col'>
               <img src={MySVG} alt='img' className='second-animated-img'></img>
            </div>
            <div className='col'>
              <div className='com-1'>Looking for interesting tuition jobs to excel your teaching experience?</div>
              <div className='com-2'>If teaching jobs interests you, then you are on the right place. tutorsheba.com, we often have 500+ open home tuition jobs that are genuine and 100% verified. Whether you are starting your career as a tuition teacher or an expert in your field, we can help you find your next big tuition job. You can search and apply to the tuition jobs that best fit your skills, favorable location, class and subjects.</div>
              <button className='com-button' onClick={()=>goToJobPage()}>SEARCH TUTION</button>
            </div>
        </div>
    </div>
    </>
    
  )
}

export default HomePart2