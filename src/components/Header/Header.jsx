import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <>
    <div id='header' className='header'>
        <img src="https://www.ekascloud.com/public/uploads/img/product/img5571e361a96c3b8339398ec0f99b2a92.png" alt="" />
        <div className='header_info'>
            <h2>I'm Dhiraj Singh.</h2>
            <h2>A MERN Stack Developer</h2>
            <p>I'm probably the most passionate developer you will ever get to work with.If you have a great project that needs amazing skills,I'm the guy.</p>
        </div>
    </div>
    <div id='header' className='header_responsive'>
      <img src="https://www.ekascloud.com/public/uploads/img/product/img5571e361a96c3b8339398ec0f99b2a92.png" alt="" />
    </div>
    </>
  )
}

export default Header


//"https://img.freepik.com/premium-vector/modern-background-abstract-elegant-arrow-metallic-purple-with-glowing-effect_492708-402.jpg"