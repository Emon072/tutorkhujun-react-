import React from 'react'
import TutorProfilePart1 from '../TutorProfilePart1'
import TutorUpdateProfileMain from './TutorUpdateProfileMain'
import NavbarComponent from '../../../navbar_folder/NavbarComponent'

function TutorUpdateProfile({ dashboard }) {
    return (
        <>
            <NavbarComponent></NavbarComponent>
            <div className='container-fluid' >
                <div className='row'>
                    <div className='col-2' style={{ position: 'relative', marginRight: '10px' }}>
                        <TutorProfilePart1 dashboard={dashboard}></TutorProfilePart1>
                    </div>
                    <div className='col'>
                        <TutorUpdateProfileMain></TutorUpdateProfileMain>
                    </div>
                </div>
            </div>
        </>

    )
}

export default TutorUpdateProfile
