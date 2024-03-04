import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'

const Navbar = () => {
  return (
    <nav>
        <img src={logo} alt="" />
        <ul>
            <li>Home</li>
            <li>Programs</li>
            <li>About us</li>
            <li>campus</li>
            <li>testimonials</li>
            <li>contact us</li>
        </ul>
    </nav>
  


 
  )
}

export default Navbar