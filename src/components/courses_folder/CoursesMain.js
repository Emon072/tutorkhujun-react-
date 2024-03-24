import React from 'react'
import './CoursesMain.scss'
import NavbarComponent from '../navbar_folder/NavbarComponent'

function CoursesMain(props) {
  return (
    <>
        <NavbarComponent activeLink={props.activeLink}></NavbarComponent>
        <div className='container-style-course'>
            <div className='card-view'>
              <div>নিজ দায়িত্ব কোর্স যোগ করেন।</div>
            </div>
        </div>
    </>
  )
}

export default CoursesMain
