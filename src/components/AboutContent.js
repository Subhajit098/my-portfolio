import "./AboutContent.css";
import React from 'react'
import { Link } from "react-router-dom";
import myImg from "../assets/cropped.png";

const AboutContent = () => {
  return (
    <div className="about">
         <div className="left">
          <h1>About me...</h1>
          <p>I am a 3rd year student in <a href="https://nitdgp.ac.in/">NIT Durgapur</a> pursuing ECE.I have prior experience in the backend and frontend technologies including React, Node, MongoDB, Express, Python, Javascript, Django, MySQL, Bootstrap and sound knowledge of C++, Object Oriented Programming, Azure, Cloud Computing. I have build projects using the technologies mentioned above and currently learning more about Computer Networking, DBMS and Operating Systems. I love to build applications which can tackle real world problems.</p>
          <div>
          <Link to="/contact" className="btn contact-btn">
            Contact me
          </Link>
          </div>
          <div>
          <a href="https://mantine.dev/others/carousel/"><button className="btn btn-resume">Resume</button></a>
          </div>
        </div>

        <div className="right">
          <div className="img-container">
              <img src={myImg} className="img" alt="My-Pic"></img>
          </div>
        </div>
    </div>
  )
}

export default AboutContent






