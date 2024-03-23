import React from 'react'
import './PremiumTutor.scss'
import NavbarComponent from '../navbar_folder/NavbarComponent'

function PremiumTutor(props) {
  return (
    <NavbarComponent activeLink={props.activeLink}></NavbarComponent>
  )
}

export default PremiumTutor