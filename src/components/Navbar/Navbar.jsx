import React from 'react'
import './Navbar.css'
import {useEffect, useState} from 'react'

const Navbar = () => {

    const [flag, setFlag] = useState(false);

    useEffect(() => {
        if (flag === true) {
            document.getElementsByClassName("navbar_ul_responsive")[0].style.display = "flex";
        }
        if (flag === false) {
            document.getElementsByClassName("navbar_ul_responsive")[0].style.display = "none";
        }
    }, [flag]);

    return (
        <>
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
                        <p>Certification</p>
                    </a>
                    <a href="#contact">
                        <p className='navbar_info_contact'>contact</p>
                    </a>
                </div>
                <div className='navbar_button'>
                    <button onClick={
                        () => {
                            setFlag(!flag)
                        }
                    }>
                        <i class="fa-solid fa-bars"></i>
                    </button>
                </div>
            </div>
            <div className='navbar_ul_responsive'>
                <a href="#skills">
                    Skills
                </a>
                <a href="#work">
                    Work
                </a>
                <a href="#photo">
                    Certification
                </a>
                <a href="#contact">
                    Contact
                </a>
            </div>
        </>
    )
}

export default Navbar
