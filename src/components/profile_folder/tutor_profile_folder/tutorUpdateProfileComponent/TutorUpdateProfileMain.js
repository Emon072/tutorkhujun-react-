import React , {useState} from 'react'
import './TutorUpdateProfileMain.scss';
import TutorUpdateProfileEducation from './TutorUpdateProfileEducation';

function TutorUpdateProfileMain() {

    const [currentActive, setcurrentActive] = useState(0);
    const moveHandle = (event)=>{
        
        const clickedElementName = event.currentTarget.getAttribute('name');
        
        switch (clickedElementName) {
            case "education":
                setcurrentActive(0);
                break;
            case "tution":
                setcurrentActive(1);
                break;
            case "personal":
                setcurrentActive(2);
                break;
            case "document":
                setcurrentActive(3);
                break;
            default:
                break;
        }
    }

    return (
        <div className='container-fluid'>
            <div className='row text-center update-main' style={{height: '110px', marginTop: '30px'}}>
                <div className={currentActive===0 ? 'col main-card active': 'col main-card'} onClick={moveHandle} name ="education">
                    <img src='https://www.tutorsheba.com/_next/static/media/education.34baf163.svg' alt='Educational Info Icon' />
                    <p>Educational-info</p>
                </div>
                <div className={currentActive===1 ? 'col main-card active': 'col main-card'} onClick={moveHandle} name="tution">
                    <img src='https://www.tutorsheba.com/_next/static/media/teacher.c2611941.svg' alt='Tuition Info Icon' />
                    <p>Tuition-info</p>
                </div>
                <div className={currentActive===2 ? 'col main-card active': 'col main-card'} onClick={moveHandle} name="personal">
                    <img src='https://www.tutorsheba.com/_next/static/media/user.53603a0a.svg' alt='Personal Info Icon' />
                    <p>Personal-info</p>
                </div>
                <div className={currentActive===3 ? 'col main-card active': 'col main-card'} onClick={moveHandle} name="document">
                    <img src='https://www.tutorsheba.com/_next/static/media/documents.edd73d3c.svg' alt='Documents Info Icon' />
                    <p>Documents-info</p>
                </div>
            </div>
            <div className='row'>
                {currentActive===0 && <TutorUpdateProfileEducation></TutorUpdateProfileEducation>}
            </div>
        </div>

    )
}

export default TutorUpdateProfileMain
