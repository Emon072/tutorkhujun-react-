import React from 'react'
import './TutorProfilePart1.scss'
import useTutorPrimaryProfile from '../../Store/TutorPrimaryProfileStore'

function TutorProfilePart1({ dashboard }) {

    const {tutorPrimaryInfoStore} = useTutorPrimaryProfile();

    return (
        <div className='tutor-profile-part1 fixed-left' style={{ flexFlow: 'column' }}>
            <div className='text-center dashboard-container'>
                <img src= {tutorPrimaryInfoStore.profilePicture==="" ? 'https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png' : tutorPrimaryInfoStore.profilePicture}  alt=''></img>
            </div>
            <div className='text-center title-1'>
                <p style={{fontSize:'24px'}}>{tutorPrimaryInfoStore.tutorName}</p>
                <p>{tutorPrimaryInfoStore.id}</p>
            </div>
            <div class='elements'>
                <div className={dashboard === 0 ? 'active' : ''}><i class="fas fa-tachometer-alt"></i> Dashboard</div>
                <div className={dashboard === 1 ? 'active' : ''}><i class="fas fa-briefcase"></i> Job Board</div>
                <div className={dashboard === 2 ? 'active' : ''}><i class="fas fa-bell"></i> Notification</div>
                <div className={dashboard === 3 ? 'active' : ''}><i class="fas fa-user-edit"></i> Update Profile</div>
                <div className={dashboard === 4 ? 'active' : ''}><i class="fas fa-credit-card"></i> Payment Section</div>
                <div className={dashboard === 5 ? 'active' : ''}><i class="fas fa-file-alt"></i> My Apply Status</div>
                <div className={dashboard === 6 ? 'active' : ''}><i class="fas fa-user-check"></i> Profile Verification Request</div>
                <div className={dashboard === 7 ? 'active' : ''}><i class="fas fa-shield-alt"></i> Security</div>
                <div className={dashboard === 8 ? 'active' : ''}><i class="fas fa-sign-out-alt"></i> Logout</div>
            </div>

        </div>
    )
}

export default TutorProfilePart1
