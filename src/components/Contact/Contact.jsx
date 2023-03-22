import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div id='contact' className='contact'>
      <p>CONTACT</p>
      <div className='contact_icons'>
        <a href="https://www.instagram.com/accounts/login/">
          <i class="fa-brands fa-instagram"></i>
        </a>
        <a href="https://www.linkedin.com/home">
          <i class="fa-brands fa-linkedin"></i>
        </a>
        <a href="https://github.com/Dhirajsingh212">
          <i class="fa-brands fa-square-github"></i>
        </a>
        <a href="mailto:dhirajsingh0229@gmail.com">
          <i class="fa-solid fa-envelope"></i>
        </a>
      </div>
    </div>
  )
}

export default Contact