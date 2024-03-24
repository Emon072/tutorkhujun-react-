import React from 'react'
import './TutionJobPart2.scss'

function TutionJobPart2() {
  return (
    <div className='container job-second-part'>
        <div className='title-1'>Showing * Jobs</div>
        <div className='line'></div>
         
         {/* -------------------------------------- this is job post one ---------------------------- */}

        <div className='job-card'>
            <div className='row'>
                <div className='col-10 location-style'><i class="fa-solid fa-location-dot"></i>Temporary Location</div>
                <div className='col text-center'><div className='card' style={{margin:'0px 15px', padding:'5px 0px', backgroundColor:'rgb(214, 241, 253)'}}>ID:****</div></div>
            </div>
            <div className='job-tittle'>Male Tutor Needed For Bangla Medium</div>
            
            <div className='text-center' style={{ display: 'flex' }}> 
                <div className='info-card' style={{backgroundColor:'#9A1EB1'}}>Online Tutoring</div>
                <div className='info-card' style={{backgroundColor:'#1089AD'}}>10 days ago</div>
            </div>

            <div className='row job-details'>
               <div className='col'>Category : Bangla Medium</div>
               <div className='col'>Class : Class 3</div>
               <div className='col'>Subject : General Math</div>
            </div>
            <div className='job-salary-container'>
                <div>Salary: </div>
                <div className='job-salary'> 4,000 TK</div>
            </div>
            <div className='row' >
                <div className='col-3' style={{color:'#1089AD'}}>Other Requirements : </div>
                <div className='col-7'style={{ marginRight:'-10px'}}>  DMC/ShSMC/SSMC medical Experienced (Minimum 1 year) tutors are requested to apply.</div>
                <div className='col'>
                    <button className="btn btn-1 gradient_bg text-light">
                        View Details
                    </button>
                </div>
                
            </div>
            
        </div>

        {/* -------------------------------------- job post end -------------------------------------------- */}
        <div className='job-card'>
            <div className='row'>
                <div className='col-10 location-style'><i class="fa-solid fa-location-dot"></i>Temporary Location</div>
                <div className='col text-center'><div className='card' style={{margin:'0px 15px', padding:'5px 0px', backgroundColor:'rgb(214, 241, 253)'}}>ID:****</div></div>
            </div>
            <div className='job-tittle'>Male Tutor Needed For Bangla Medium</div>
            
            <div className='text-center' style={{ display: 'flex' }}> 
                <div className='info-card' style={{backgroundColor:'#9A1EB1'}}>Online Tutoring</div>
                <div className='info-card' style={{backgroundColor:'#1089AD'}}>10 days ago</div>
            </div>

            <div className='row job-details'>
               <div className='col'>Category : Bangla Medium</div>
               <div className='col'>Class : Class 3</div>
               <div className='col'>Subject : General Math</div>
            </div>
            <div className='job-salary-container'>
                <div>Salary: </div>
                <div className='job-salary'> 4,000 TK</div>
            </div>
            <div className='row' >
                <div className='col-3' style={{color:'#1089AD'}}>Other Requirements : </div>
                <div className='col-7'style={{ marginRight:'-10px'}}>  Engineer Experienced (Minimum 1 year) tutors are requested to apply.</div>
                <div className='col'>
                    <button className="btn btn-1 gradient_bg text-light">
                        View Details
                    </button>
                </div>
                
            </div>
            
        </div>
        
        {/* ---------------------------------------- job post end ------------------------------------------- */}
    </div>
  )
}

export default TutionJobPart2