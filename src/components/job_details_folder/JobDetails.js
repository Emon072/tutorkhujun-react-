import React, { useEffect, useState } from 'react'
import './JobDetails.scss'
import NavbarComponent from "../navbar_folder/NavbarComponent"
import { useParams } from 'react-router-dom'
import { getAllJobInfo, getSingleJobInfo } from '../../api/student_api/RegisterStudentApi';

function JobDetails() {
    let {id} = useParams();
    const [currentJobInfo, setcurrentJobInfo] = useState({});

    const getTheCurrentJobInfo = async () =>{
        const res = await getSingleJobInfo(id);
        setcurrentJobInfo(res);
    }

    useEffect(() => {
      getTheCurrentJobInfo();
    }, [id])
    
  return (
    <>
        <NavbarComponent></NavbarComponent>
        <div className='container text-center'>
            <div className='card-details'>
                <div className='title-1'>{currentJobInfo.tutoringGender} Tutor Needed For {currentJobInfo.tutorMedium}</div>
                <div className='title-2'>
                    Job ID# : {currentJobInfo.jobId} Created Date : {new Date(currentJobInfo.jobCreatedTime).toLocaleDateString()}
                </div>
                <i class="fas fa-map-marker-alt"></i>
                <div className='location'>{currentJobInfo.jobDistrict}, {currentJobInfo.jobArea}</div>
                <div className='row'>
                    <div className='col'>Class : <b>{currentJobInfo.studentClass}</b></div>
                    <div className='col'>Category : <b>{currentJobInfo.tutorMedium}</b> </div>
                    <div className='col'>Subject : <b>{currentJobInfo.jobSubjects}</b></div>
                </div>
                <div className='row'>
                    <div className='col'>Student Gender : <b>{currentJobInfo.studentGender}</b></div>
                    <div className='col'>Preferred Tutor : <b>{currentJobInfo.tutoringType }</b> </div>
                    <div className='col'>Tutoring Time : <b>{currentJobInfo.tutoringTime}</b></div>
                </div>
                <div className='row'>
                    <div className='col'>Tutoring Days : <b>{currentJobInfo.tutoringDays}</b></div>
                    <div className='col'>No of Student : <b>{currentJobInfo.noOfStudents}</b></div>
                    <div className='col'>Tuition Fee : <b>{currentJobInfo.tuitionFees}</b> tk</div>
                </div>
                <div className='row other'>
                    <div className='col-10 '>Other Requirements : <b>{currentJobInfo.otherRequirements}</b>  </div>
                    <div className='col'><button className="btn btn-1 gradient_bg text-light">
                                    Apply
                                </button></div>
                </div>
                
            </div>
        </div>
    </>
  )
}

export default JobDetails
