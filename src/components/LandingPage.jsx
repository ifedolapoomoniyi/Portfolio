import React from 'react'
import {UilLinkedin, UilTwitter} from '@iconscout/react-unicons'
import Cayenneee from '../imgs/Cayenneee.webp'
import '../Styles/LandingPage.css'

const LandingPage = () => {
  return (
    <div className="LandingPage">
        <div className="details">
            <p>Hey there, Welcome</p>
            <p>I am Ifedolapo Omoniyi</p>
            <p>I develop websites for fun. I like new tech, I love cars and I have a sense of humor.</p>
            {/* <div className="socials">
                <div>Come say Hi </div>
                <UilLinkedin color='blue'/>
                <UilTwitter color='blue'/>
            </div> */}
        </div>
    </div>
  )
}

export default LandingPage