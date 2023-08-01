import React from 'react'
import "./Title.css";
import { Typewriter } from 'react-simple-typewriter'
import { BsLinkedin } from "react-icons/bs";
import { FaQuora, FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { HashLink } from "react-router-hash-link";
import IntroImg from "../assets/main_bg.jpg";



const Title = () => {
  return (
    <div className='hero'>
      <div className='mask'>
        {/* <img className='intro-img' src={IntroImg} alt="IntroImg"></img> */}
      </div>
      <div className='content'>
        <p className="heading_para">HI, I'M SUBHAJIT</p>


        <div className='heading__content'>
          <h1>a {""}

            <span style={{ color: 'hsl(351deg 56% 97%)', fontWeight: 'bold' }}>
              {/* Style will be inherited from the parent element */}
              <Typewriter
                words={['Developer', 'Techie', 'Believer']}
                loop={0 | false}
                cursor
                cursorStyle='_'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h1>
        </div>


        <div className='icons-buttons'>
          <a href="https://www.linkedin.com/in/subhajit-dey-75b8711ba/" ><BsLinkedin size={30} className="social-icons" /></a>

          <a href="https://github.com/Subhajit098" ><FaGithub size={30} className="social-icons" /></a>

          <a href="https://www.quora.com/profile/Subhajit-Dey-198" ><FaQuora size={30} className="social-icons" /></a>

        </div>



        <button className='btn btn-projects'><HashLink to="#projects" smooth>Projects</HashLink></button>


        <button className='btn btn-projects'><Link to="/Contact">Contact</Link></button>

      </div>
    </div>
  )
}

export default Title