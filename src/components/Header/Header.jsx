import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div id='header' className='header'>
        <img src="https://img.freepik.com/premium-vector/modern-background-abstract-elegant-arrow-metallic-purple-with-glowing-effect_492708-402.jpg" alt="" />
        <div className='header_info'>
            <h2>I'm Dhiraj Singh.</h2>
            <h2>A MERN Stack Developer</h2>
            <p>I'm probably the most passionate developer you will ever get to work with.If you have a great project that needs amazing skills,I'm the guy.</p>
        </div>
    </div>
  )
}

export default Header