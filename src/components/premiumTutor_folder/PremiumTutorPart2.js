import React from 'react'
import './PremiumTutorPart2.scss'
import teacherInfoArr from '../../assets/mockDataset/tutorInfoGen'

function PremiumTutorPart2() {
    return (
        <div className='premium-part-2'>
            <div className='title-1'>Showing * Jobs</div>
            <div className='line'></div>

            <div className='text-center premium-tutor-slider' style={{ display: 'flex' }}>
                <div className='row'>
                    {teacherInfoArr.map((obj, i) => {
                        return (
                            <div key={i} className="col tutor-card tutor-card-view" style={{maxWidth:'263px', margin: '4px' }}>

                                <div className="text-center for-premium-style">
                                    <img
                                        className="teacher-style"
                                        src={obj.profilePicture}
                                        alt="teacher"
                                        style={{ display: "block", margin: "0 auto" }} // Centering image
                                    ></img>
                                </div>

                                <div className="teacher-name">{obj.name}</div>
                                <div className="teacher-university">
                                    {obj.university}
                                </div>
                                <div className="teacher-subject">{obj.subject}</div>
                                <div className="place-style">
                                    <div>
                                        <i
                                            class="fa-solid fa-location-dot"
                                            style={{ marginRight: "3px", color: "red" }}
                                        ></i>
                                        {obj.tutorLocation}
                                    </div>
                                </div>
                                <button className="btn btn-1 gradient_bg text-light">
                                    View Details
                                </button>
                            </div>

                        );
                    })}
                </div>
            </div>




        </div>

    )
}

export default PremiumTutorPart2
