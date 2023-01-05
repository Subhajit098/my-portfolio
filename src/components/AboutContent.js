import "./AboutContent.css";
import React from 'react'
import { Link } from "react-router-dom";
import myImg from "../assets/cropped.png";

const AboutContent = () => {
  return (
    <div className="about">
         <div className="left">
          <h1>About me...</h1>
          <p>I am a 3rd year student in NIT Durgapur pursuing ECE. I have prior experience in the backend and frontend technologies including React, Node, MongoDB, Express, Python, Javascript, Django, MySQL, Bootstrap and sound knowledge of C++, Object Oriented Programming.</p>
          <Link to="/contact">
            <button className="btn">Contact me</button>
          </Link>
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






