import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
        <h3>Dhiraj.S</h3>
        <div className='navbar_info'>
            <a href="#skills">
              <p>Skills</p>
            </a>
            <a href="#work">
              <p>Work</p>
            </a>
            <a href="#photo">
              <p>Photography</p>
            </a>
            <a href="#contact">
              <p className='navbar_info_contact'>contact</p>
            </a>
        </div>
    </div>
  )
}

export default Navbar