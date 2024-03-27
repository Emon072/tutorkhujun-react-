import React from 'react'
import './TutorUpdateProfileEducation.scss'

function TutorUpdateProfileEducation() {
  return (
    <div className='container-fluid education'>
      <div className='title-1'> Educational Info</div>
      <div className='line'></div>
      <div className='title-2'>Update your profile</div>
      <div className='card text-center'>
        <div className='title-1'>Secondary / SSC / O-level / Dakhil</div>
        <div className='row input-field-style' >
            <div className='col-3'>Institute</div>
            <div className='col-9'>
            <input id="email-input" type="email" name="email-inputted" placeholder="placeholder-text"/>
            </div>
        </div>
        <div className='row input-field-style' >
            <div className='col-3'>Institute</div>
            <div className='col-9'>
            <input id="email-input" type="email" name="email-inputted" placeholder="placeholder-text"/>
            </div>
        </div>
        <div className='row input-field-style' >
            <div className='col-3'>Institute</div>
            <div className='col-9'>
            <input id="email-input" type="email" name="email-inputted" placeholder="placeholder-text"/>
            </div>
        </div>
        <div className='row input-field-style' >
            <div className='col-3'>Institute</div>
            <div className='col-9'>
            <input id="email-input" type="email" name="email-inputted" placeholder="placeholder-text"/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default TutorUpdateProfileEducation
