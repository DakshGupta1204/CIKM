import '/Users/dakshgupta/Desktop/cikm-2024/src/components/Navbar.css'
import React from 'react'
import {FaBars,FaTimes} from 'react-icons/fa';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
function Navbar() {
    const navRef= useRef();
    const showNavbar = () =>{
        navRef.current.classList.toggle('responsive_nav');

    }
  return (
    <header>
        <nav className='navbar' ref={navRef}>
            <Link to='/' onClick={showNavbar}>CIKM 2024</Link>
            <Link to='/' onClick={showNavbar}>HOME</Link>
            <Link to='/accepted' onClick={showNavbar}>ACCEPTED PAPERS</Link>
            <Link to='/call' onClick={showNavbar}>CALL FOR PAPERS</Link>
            <Link to='/organizers' onClick={showNavbar}>ORGANIZERS</Link>
            <button className='nav-btn nav-close-btn' onClick={showNavbar}>
                <FaTimes/>
            </button>
        </nav>
        <button onClick={showNavbar} className='nav-btn'>
            <FaBars/>
        </button>
    </header>
  )
}

export default Navbar
