import React from 'react'
import '../Styles/GetInTouch.css'
import {UilEnvelope, UilTwitter, UilLinkedin, UilWhatsappAlt, UilPhone} from '@iconscout/react-unicons'



const GetInTouch = () => {
  return (
    <div className="GetInTouch">
        <div className="Contact-header">
            <h1>Get In Touch</h1>
            <p>Come Network with me on social media... Or you can send me an email if you're old fashioned like that</p>
        </div>
        <div className="contact-body">
            <a href="https://www.linkedin.com/in/ifedolapo-omoniyi-a80004205"><div className="contact-socials">
                <UilLinkedin color='#0A66C2'/>
                <span> Ifedolapo Omoniyi</span>
            </div>
            </a>
            <a href="https://twitter.com/ife_ifedolapo"><div className="contact-socials">
                <UilTwitter color='#1DA1F2'/>
                <span> @ife_ifedolapo </span>
            </div>
            </a>
            <a href="mailto:dev.strange.official@gmail.com"><div className="contact-socials">
                <UilEnvelope/>
                <span> dev.strange.official@gmail.com</span>
            </div>
            </a>
            <a href="https://wa.link/8wsbwr"><div className="contact-socials">
                <UilWhatsappAlt size={28} style={{color: 'green'}}/>
                <span> +234 701 223 3884</span>
            </div>
            </a>
            <a href="tele:08132404504"><div className="contact-socials">
                <UilPhone/> 
                <span> Call +234 8132404504( If urgent)</span>
            </div>
            </a>
        </div>
    </div>
  )
}

export default GetInTouch