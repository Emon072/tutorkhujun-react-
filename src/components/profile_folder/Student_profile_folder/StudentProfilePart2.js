import React, {useState} from 'react'
import './StudentProfilePart2.scss'
import { DistrictInfoArr } from '../../../assets/mockDataset/DistrictInfo';
import MediumInfoArr from '../../../assets/mockDataset/MediumInfo';

function StudentProfilePart2() {

    const [seletedArea, setseletedArea] = useState([]);
    const [selectedClasses, setselectedClasses] = useState([]);

    const handleDivisionClick = (event) => {
        if (event.target.value!=='all')
            setseletedArea(DistrictInfoArr[event.target.value].area);
      };
    const handleAreaClick = (event) => {};
    const handleMediumClick = (event) => {
        if (event.target.value!=='all')
         setselectedClasses(MediumInfoArr[event.target.value].classes);
      };
    const handleClassClick = (event) => {};

  return (
    <div className='container request-part'>
            <div className='row'>
                <div className='col part-1'>
                    <div className='title-1'>আপনি কি টিউটর খুঁজছেন?</div>
                   
                    <div className='container'>
                        <div className='row'>
                            <div className='col input-style'>

                                <div class="form-group">
                                    <label htmlFor="exampleInputEmail1">Email address</label>
                                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                                </div>
                                
                                <label htmlFor='selectDivision'>Select Division</label>
                                <select class="form-select" id="selectDivision" onChange={handleDivisionClick}>
                                <option selected value={"all"}>
                                    All
                                    </option>
                                    {
                                    // console.log(DistrictInfoArr)
                                    DistrictInfoArr.map((district, i) => {
                                        return (
                                        <option key={i} value={i}>
                                            {district.district}
                                        </option>
                                        );
                                    })
                                    }
                                </select>
                                
                                <label htmlFor='selectMedium'>Select Medium</label>
                                <select className="form-select" id='selectMedium' onChange={handleMediumClick}>
                                    <option selected value={"all"}>
                                    All
                                    </option>
                                    {MediumInfoArr.map((medium, i) => {
                                    return (
                                        <option key={i} value={i}>
                                        {medium.medium}
                                        </option>
                                    );
                                    })}
                                </select>



                            </div>

                            <div className='col input-style'>
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Email address</label>
                                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                                </div>
                                
                                <label htmlFor='selectArea'>Select Area</label>
                                <select className="form-select" id='selectArea' onChange={handleAreaClick}>
                                    <option selected value={"all"}>
                                    All
                                    </option>
                                    {seletedArea.map((area, i) => {
                                    return (
                                        <option key={i} value={i}>
                                        {area}
                                        </option>
                                    );
                                    })}
                                </select>
                                
                                <label htmlFor='selectClass'>Select Class</label>
                                <select className="form-select" id = "selectClass" onChange={handleClassClick}>
                                    <option selected value={"all"}>
                                    All
                                    </option>
                                    {selectedClasses.map((area, i) => {
                                    return (
                                        <option key={i} value={i}>
                                        {area}
                                        </option>
                                    );
                                    })}
                                </select>

                            </div>
                            <div className='submit-button-request'><button className='btn btn-1 gradient_bg text-light'>Submit</button></div>
                        </div>
                    </div>
                </div>
              
            </div>
      </div>
  )
}

export default StudentProfilePart2
