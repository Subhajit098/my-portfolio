import "./AboutContent.css";
import React from 'react'
import { Link } from "react-router-dom";
import { CiPaperplane } from "react-icons/ci";
import myImg from "../assets/cropped.png";

const AboutContent = () => {


  return (
    <div className="about">
      <div className="left">
        <div className="myImg">
          <img src={myImg} alt="MyImage"/>
        </div>
        <div className="about_me_text">
          <h3 style={{
            fontSize:"25px"
          }}>About me...</h3>

            
         <p style={{
            padding: "4px",
            margin: "16px 0"
          }}>I am Subhajit Dey,an aspiring Software Developer and Enginner who loves to learn and code new technologies .
            I have prior experience in the backend and frontend technologies including React, Node, MongoDB, Express, Python, Javascript, Django, Bootstrap and sound knowledge of C++, Object Oriented Programming. My objective is to use my skills and abilities for a company which is innovative and that provides me job satisfaction and self-development so that I would be able to help myself and the company achieve its goal. For the future, I hope I could work in an organization which is leading on this . I always want to push myself more and keep getting better . Having interested in internships, full time job opportunities and projects in Software Development , feel free to connect with me.</p>
        </div>

        <Link to="/Contact" className="btn btn-padding">Contact</Link>
        <a href="https://drive.google.com/file/d/1IKlL79BnF-8HD0yz_qOOtC6wWB1PjqfU/view?usp=sharing" className="btn btn-padding">Resume</a>

      </div>



      <hr style={{ borderWidth: "4px", borderRadius: "15px", color: "red" }} />

      <div className="right">

        <h3 style={{
          margin: "10px 0px",
          fontSize: "25px",
          textDecoration: "underline"
        }}>Educational Qualifications</h3>

        <div className="college">
          <h3 style={{ textAlign: "left", padding: "5px", marginTop: "10px" }}><a href="https://nitdgp.ac.in/" style={{ color: "white", textDecoration: "underline" }}>National Institute of Technology Durgapur</a>,2020-2024
          </h3>
          <p style={{ textAlign: "left", padding: "5px" }}><CiPaperplane size={20} color="white" />  Bachelor of Technology, Electronics and Communication Engineering</p>
          <p style={{ textAlign: "left", padding: "5px" }}>
            <CiPaperplane size={20} color="white" />  Current CGPA : 8.56/10</p>
        </div>


        <div className="college">
          <h3 style={{ textAlign: "left", padding: "5px", marginTop: "10px" }}><a href="https://bolpur.tigps.in/" style={{ color: "white", textDecoration: "underline" }}>Techno India Group Public School,Prantik</a>,2008-2020
          </h3>
          <p style={{ textAlign: "left", padding: "5px" }}><CiPaperplane size={20} color="white" />  Secondary Class X, CGPA - 9.00</p>
          <p style={{ textAlign: "left", padding: "5px" }}>
            <CiPaperplane size={20} color="white" />  Senior Secondary Class XII, Precentage - 71%</p>

        </div>



        <div className="exp">
          <h3 style={{
            margin: "25px 0px",
            fontSize: "25px",
            color: "white",
            textDecoration: "underline"
          }}>Experiences</h3>

          <h3 style={{ textAlign: "left", padding: "5px", marginTop: "10px" }}>Learner and intern at Business Web Solutions(BWS),2 months</h3>

          <p style={{ textAlign: "left", padding: "5px" }}>
            <CiPaperplane size={20} color="white" />  Completed the tasks provided by the mentor</p>

          <p style={{ textAlign: "left", padding: "5px" }}>
            <CiPaperplane size={20} color="white" />  Submitted the projects under the deadline</p>


          <h3 style={{ textAlign: "left", padding: "5px", marginTop: "10px" }}>Web Developer intern at GRIP's Foundations (Ongoing),2months</h3>

          <p style={{ textAlign: "left", padding: "5px" }}>
            <CiPaperplane size={20} color="white" />Made a Basic Banking Website</p>

          <p style={{ textAlign: "left", padding: "5px" }}>
            <CiPaperplane size={20} color="white" />Users can commit basic transactions and keep a track of them</p>

          <h3 style={{ textAlign: "left", padding: "5px", marginTop: "10px" }}>Web Developer at Solar Secure Solutions (Ongoing),1 months</h3>

          <p style={{ textAlign: "left", padding: "5px" }}>
            <CiPaperplane size={20} color="white" />Completed the projects assigned by the mentor
          </p>

          <p style={{ textAlign: "left", padding: "5px" }}>
            <CiPaperplane size={20} color="white" />Learned new skills</p>


        </div>

      </div>


    </div>
  )
}

export default AboutContent

