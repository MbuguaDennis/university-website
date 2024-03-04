import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'

const Navbar = () => {
  return (
    <nav className='container'>
        <img src={logo} alt="" className='logo' />
        <ul >
            <li>Home</li>
            <li>Programs</li>
            <li>About us</li>
            <li>campus</li>
            <li>testimonials</li>
            <li> <button className="btn"> contact us</button></li>
        </ul>
    </nav>
  


 
  )
}

export default Navbar