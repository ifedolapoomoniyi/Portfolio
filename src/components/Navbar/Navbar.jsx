import React from 'react'
import '../../Styles/Navbar.css'

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="navbar-name">
            <a href="#" className="navbarlink">
                Ifedolapo Omoniyi
            </a>
        </div>
        <div className="navbar-routes">
            <a href="#" className="navbar-link">About me</a>
            <a href="#" className="navbar-link">Services</a>
            <a href="#" className="navbar-link">Projects</a>
            <a href="#" className="navbar-link">Contact Me</a>
        </div>
    </div>
  )
}

export default Navbar