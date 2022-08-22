import React, { useEffect } from 'react'
import '../../Styles/Navbar.css'

const Navbar = () => {
  useEffect(()=> {
    const hamburger = document.querySelector('.hamburger');
    const navbarRoutes = document.querySelector('.navbar-routes');

    hamburger.addEventListener('click', mobileMenu);

    function mobileMenu() {
      hamburger.classList.toggle('active');
      navbarRoutes.classList.toggle('active');
    }

    const navbarLink =  document.querySelectorAll('.navbar-link');

    navbarLink.forEach((n)=> n.addEventListener('click', closeMenu));

    function closeMenu() {
      hamburger.classList.toggle("active");
      navbarRoutes.classList.toggle("active");     
    }
  }, []);

  return (
    <div className="navbar">
        <div className="navbar-name">
            <a href="#" className="navbarlink">
                Ifedolapo Omoniyi
            </a>
        </div>
        <div className="navbar-routes">
            <a href="#about" className="navbar-link">About me</a>
            <a href="#skills" className="navbar-link">Services</a>
            <a href="#" className="navbar-link">Projects</a>
            <a href="#contact"  className="navbar-link">Contact Me</a>
        </div>
        <div className="hamburger">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
    </div>
  )
}

export default Navbar