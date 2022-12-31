import React from 'react'
import "./Title.css";
import { BsLinkedin} from "react-icons/bs";
import { FaQuora,FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom';
import IntroImg from "../assets/main_bg.jpg";



const Title = () => {
  return (
    <div className='hero'>
        <div className='mask'>
             <img className='intro-img' src={IntroImg} alt="IntroImg"></img> 
        </div>
         <div className='content'>
          <p>HI, I'M SUBHAJIT</p>
          <h1>Tech Enthussiast</h1>

          <div className='icons-buttons'>
          <a href="https://www.linkedin.com/in/subhajit-dey-75b8711ba/" ><BsLinkedin size={30} style={{color:"white"}}/></a>

          <a href="https://github.com/Subhajit098" ><FaGithub size={30} style={{color:"white"}}/></a>

          <a href="https://www.quora.com/profile/Subhajit-Dey-198" ><FaQuora size={30} style={{color:"white"}}/></a>

          </div>
         </div>
    </div>
  )
}

export default Title