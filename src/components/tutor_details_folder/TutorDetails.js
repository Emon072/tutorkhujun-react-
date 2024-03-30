import React, { useEffect, useState } from 'react'
import './TutorDetails.scss'
import NavbarComponent from '../navbar_folder/NavbarComponent.js'
import { useParams } from 'react-router-dom'
import { getSingleTutorPrimaryInfo } from '../../api/tutor_api/registerTutorApi.js';

function TutorDetails() {

    const [currentTutorPrimaryInfo, setcurrentTutorPrimaryInfo] = useState({})

    let {id} = useParams();

    const informationOfCurrenttutor = async ()=>{
        const res = await getSingleTutorPrimaryInfo(id);
        // console.log(res);
        setcurrentTutorPrimaryInfo(res);
    }

    useEffect(() => {
        informationOfCurrenttutor();
    }, [id])
    

  return (
    <div>
      <NavbarComponent></NavbarComponent>
      <div className='container tutor-details'>
        <div className='row'>
            <div className='col-10'>
                <div className='title-1'>TUTOR PROFILE</div>
                <div className='line'></div>
                <div className='tutor-card'>
                    <div className='row'>
                        <div className='col-4 '>
                            <img src={currentTutorPrimaryInfo.profilePicture} alt='tutor-img'></img>
                        </div>
                        <div className='col side-text'>
                            <div className='row'>
                               <div className='col-3'>Name : </div>
                               <div className='col'>{currentTutorPrimaryInfo.tutorName}</div>
                            </div>
                            <div className='row'>
                               <div className='col-3'>University : </div>
                               <div className='col'>{currentTutorPrimaryInfo.varsity}</div>
                            </div>
                            <div className='row'>
                               <div className='col-3'>ID# : </div>
                               <div className='col'>{currentTutorPrimaryInfo.id}</div>
                            </div>
                            <div className='row'>
                               <div className='col-3'>Gender: </div>
                               <div className='col'>{currentTutorPrimaryInfo.gender}</div>
                            </div>
                            <div className='row'>
                               <div className='col-3'>District</div>
                               <div className='col'> {currentTutorPrimaryInfo.tutionDistrict} </div>
                            </div>
                            <div className='row'>
                               <div className='col-3'>Area</div>
                               <div className='col'> {currentTutorPrimaryInfo.tutionLocation} </div>
                            </div>
                            
                        </div>
                    </div>
                    <div className='second-part'>
                        <div className='partition'>Tutor Info</div>

                        <div className='row'>
                            <div className='col-3'><b>Expected Minimum Salary</b></div>
                            <div className='col-8'>4,000 TK/Month</div>
                        </div>
                        <div className='divider'></div>
                        <div className='row'>
                            <div className='col-3'>Current Status for Tuition</div>
                            <div className='col'>Available</div>
                        </div>
                        <div className='divider'></div>
                        <div className='row'>
                            <div className='col-3'>Days Per Week</div>
                            <div className='col'>4 Day/Week, 3 Day/Week</div>
                        </div>
                        <div className='divider'></div>
                        <div className='row'>
                            <div className='col-3'>Preffered Tution Style</div>
                            <div className='col'>{currentTutorPrimaryInfo.tutionType}</div>
                        </div>
                        <div className='divider'></div>
                        <div className='row'>
                            <div className='col-3'>Place of Learning</div>
                            <div className='col'>Home Visit</div>
                        </div>
                        <div className='divider'></div>

                        <div className='row'>
                            <div className='col-3'>Preffered Medium of Version</div>
                            <div className='col'>{currentTutorPrimaryInfo.Medium}</div>
                        </div>
                        <div className='divider'></div>

                        <div className='row'>
                            <div className='col-3'>Preffered Class</div>
                            <div className='col'>Class 1 (Bangla Medium), Class 10 (Bangla Medium), Class 2 (Bangla Medium), Class 3 (Bangla Medium), Class 6 (Bangla Medium), Class 4 (Bangla Medium), Class 5 (Bangla Medium), Class 7 (Bangla Medium), Class 8 (Bangla Medium), Class 9 (Bangla Medium), Class 1 (English Version), Class 2 (English Version), Class 3 (English Version), Class 4 (English Version), Class 5 (English Version), Class 10 (English Version), Class 6 (English Version), Class 8 (English Version), Class 7 (English Version), Class 9 (English Version), KG (English Version), KG (Bangla Medium), KG (English Medium), Nursery (Bangla Medium), Nursery (English Medium), Nursery (English Version), Play (English Version), Play (Bangla Medium), Play (English Medium), Pre- Schooling (English Version), Pre- Schooling (English Medium), Standard 1 (English Medium), Standard 2 (English Medium), Standard 3 (English Medium), Standard 4 (English Medium), Standard 5 (English Medium)</div>
                        </div>
                        <div className='divider'></div>

                        <div className='row'>
                            <div className='col-3'>Preffered Subjects</div>
                            <div className='col'>All Subjects (Play), All (Class 8), Bangla (Class 7), Biology (Class 9), Chemistry (Class 9), English (Play), General Science (Class 9), Maths (Nursery), Genaral Math (Class 10), General Math (Play), Science (Standard 4), Others (Class 5), General Maths (Class 4), Math (Class 2), Islamic Studies (Class 10)</div>
                        </div>
                        <div className='divider'></div>

                        <div className='row'>
                            <div className='col-3'>Preferred Time</div>
                            <div className='col'>Morning, Afternoon, Night</div>
                        </div>
                        <div className='divider'></div>

                        <div className='row'>
                            <div className='col-3'>Preffered Area to Teach</div>
                            <div className='col'>Dhaka ,siddeshwari</div>
                        </div>
                        
                    </div>
                    <div className='title-last'>Educational Qualification</div>
                    <table className='text-center' border="1">
                        <thead>
                            <tr className="table-heading-style">
                                <th >Exam Name</th>
                                <th >Year</th>
                                <th >Institute</th>
                                <th >Group/Subject</th>
                                <th>Result</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>SSC / O-level / Dakhil</th>
                                <td>2019</td>
                                <td>Louhajong Girls Pilot High School</td>
                                <td>Science</td>
                                <td>4.61</td>
                            </tr>
                            <tr>
                                <th>HSC / A level / Alim</th>
                                <td>2021</td>
                                <td>Govt Louhajong College</td>
                                <td>Science</td>
                                <td>5.00</td>
                            </tr>
                            <tr>
                                <th>Graduation / Bachelor / Diploma</th>
                                <td>Second Year</td>
                                <td>Stamford University Bangladesh</td>
                                <td>Computer Science and Engineering (CSE)</td>
                                <td>3.56</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            {/* <div className='col text-center'> Contact Form  </div> */}
        </div>
      </div>
    </div>
  )
}

export default TutorDetails
