import React from 'react'
import './RegisterComponentStudent.scss'

function RegisterComponentStudent() {
  return (
    <>
      <div className='container register-input-style'>
        <div className='row'style={{textAlign:'start'}}>
          <div class="col form-group" >
            <label htmlFor="exampleInputName" >Name<span style={{color:'red'}}> *</span></label>
            <input type="text" class="form-control" id="exampleInputName" aria-describedby="numberHelp" placeholder="Name...." />
          </div>
          <div class="col form-group">
            <label htmlFor="exampleInputNumber">Phone<span style={{color:'red'}}> *</span></label>
            <input type="number" class="form-control" id="exampleInputNumber" aria-describedby="passwordHelp" placeholder="ex: 01......" />
          </div>
        </div>
        <div className='row'style={{textAlign:'start'}}>
          <div class="col form-group" >
            <label htmlFor="exampleInputPassword" >Password<span style={{color:'red'}}> *</span></label>
            <input type="password" class="form-control" id="exampleInputPassword" aria-describedby="numberHelp" placeholder="Password" />
          </div>
          <div class="col form-group">
            <label htmlFor="exampleInputPassword2">Re-Password<span style={{color:'red'}}> *</span></label>
            <input type="password" class="form-control" id="exampleInputPassword2" aria-describedby="passwordHelp" placeholder="Re-enter Password" />
          </div>
        </div>
      </div>


      <button className="btn btn-1 gradient_bg text-light">Register as Student</button>
    </>
  )
}

export default RegisterComponentStudent
