import React from 'react'
import './TutionJobPart2.scss'

function TutionJobPart2({jobInfoArr}) {

    const calculateTimeElapsed = (jobCreatedTime) =>{
    const currentTime = new Date();
    const elapsedTime = currentTime - jobCreatedTime;
    const seconds = Math.floor(elapsedTime / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) {
      return `${days} day${days > 1 ? 's' : ''} ago`;
    } else if (hours > 0) {
      return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    } else if (minutes > 0) {
      return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    } else {
      return `${seconds} second${seconds !== 1 ? 's' : ''} ago`;
    }
  }

  return (
    <div className='container job-second-part'>
        <div className='title-1'>Showing <span style={{fontWeight:'600', fontSize:'16px'}}>{jobInfoArr.length}</span> Jobs</div>
        <div className='line'></div>
         

         {
            jobInfoArr.map((job , key)=>{
                return (
                    <div key={key} className='job-card'>
                        <div className='row'>
                            <div className='col-10 location-style'><i class="fa-solid fa-location-dot"></i>{job.jobDistrict}, {job.jobArea}</div>
                            <div className='col text-center'><div className='card' style={{margin:'0px 15px', padding:'5px 0px', backgroundColor:'rgb(214, 241, 253)'}}>ID:{job.jobId}</div></div>
                        </div>
                        <div className='job-tittle'>{job.tutoringGender} Tutor Needed For {job.tutorMedium}</div>
                        
                        <div className='text-center' style={{ display: 'flex' }}> 
                            <div className='info-card' style={{backgroundColor:'#9A1EB1'}}>{job.tutoringType}</div>
                            <div className='info-card' style={{backgroundColor:'#1089AD'}}>{calculateTimeElapsed(new Date(job.jobCreatedTime))}</div>
                        </div>

                        <div className='row job-details'>
                        <div className='col'>Category : {job.tutorMedium}</div>
                        <div className='col'>Class : {job.studentClass}</div>
                        <div className='col'>Subject : {job.jobSubjects}</div>
                        </div>
                        <div className='job-salary-container'>
                            <div>Salary:  </div>
                            <div className='job-salary'>  {job.tuitionFees} TK</div>
                        </div>
                        <div className='row' >
                            <div className='col-3' style={{color:'#1089AD'}}>Other Requirements : </div>
                            <div className='col-7'style={{ marginRight:'-10px'}}>  {job.otherRequirements}</div>
                            <div className='col'>
                                <button className="btn btn-1 gradient_bg text-light">
                                    View Details
                                </button>
                            </div>
                            
                        </div>
                        
                    </div>
            )
            })
         }
    </div>
  )
}

export default TutionJobPart2