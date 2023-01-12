import "./AboutContent.css";
import React from 'react'
import { Link } from "react-router-dom";
import {CiPaperplane} from "react-icons/ci";
import {BiMenuAltLeft} from "react-icons/bi";
import myImg from "../assets/cropped.png";

const AboutContent = () => {

  const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 5
        }}
    />
);



  return (
    <div className="about">
        <div className="left">
          <div className="myImg">
            <img src={myImg}/>
          </div>
          <div className="about_me_text">
              <h3>About me...</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos 
sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
recusandae alias error harum maxime adipisci amet laborum. Perspiciatis 
minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit </p>
          </div>
          
          
          <Link to="/Contact" className="btn btn-padding">Contact</Link>
          
          
          
          <a href="#" className="btn btn-padding">Resume</a>
          
  
        </div>

        <div className="right">
        <h3 style={{
          margin:"10px 0px",
          fontSize:"25px"
        }}>Educational Qualifications</h3>
        <div className="college">
          <h3 style={{textAlign:"left",padding:"5px",marginTop:"10px"}}>National Institute of Technology Durgapur,2020-2024
          </h3>
          <p style={{textAlign:"left",padding:"5px"}}><CiPaperplane size={20} color="black"/>  Bachelor of Technology, Electronics and Communication Engineering</p>
          <p style={{textAlign:"left",padding:"5px"}}>
          <CiPaperplane size={20} color="black"/>  Current CGPA : 8.56/10</p>
        </div>


        <div className="college">
          <h3 style={{textAlign:"left",padding:"5px",marginTop:"10px"}}>Techno India Group Public School,Prantik,2008-2020
          </h3>
          <p style={{textAlign:"left",padding:"5px"}}><CiPaperplane size={20} color="black"/>  Secondary Class X, CGPA - 9.00</p>
          <p style={{textAlign:"left",padding:"5px"}}>
          <CiPaperplane size={20} color="black"/>  Senior Secondary Class XII, Precentage - 71%</p>

        </div>


        <div className="exp">
        <h3 style={{
          margin:"10px 0px",
          fontSize:"25px",
          color:"white"
        }}>Experiences</h3>

        <h3 style={{textAlign:"left",padding:"5px",marginTop:"10px"}}>Learner and intern at Business Web Solutions(BWS),2 months</h3>
        
        <p style={{textAlign:"left",padding:"5px"}}>
          <CiPaperplane size={20} color="black"/>  Completed the tasks provided by the mentor</p>

          <p style={{textAlign:"left",padding:"5px"}}>
          <CiPaperplane size={20} color="black"/>  Submitted the projects under the deadline</p>


          <h3 style={{textAlign:"left",padding:"5px",marginTop:"10px"}}>Web Developer intern at GRIP's Foundations (Ongoing)</h3>
        
        <p style={{textAlign:"left",padding:"5px"}}>
          <CiPaperplane size={20} color="black"/>Made a Basic Banking Website</p>

          <p style={{textAlign:"left",padding:"5px"}}>
          <CiPaperplane size={20} color="black"/>Users can commit basic transactions and keep a track of them</p>

          <h3 style={{textAlign:"left",padding:"5px",marginTop:"10px"}}>Web Developer at Solar Secure Solutions</h3>
        
        <p style={{textAlign:"left",padding:"5px"}}>
          <CiPaperplane size={20} color="black"/>Completed the projects assigned by the mentor
        </p>

          <p style={{textAlign:"left",padding:"5px"}}>
          <CiPaperplane size={20} color="black"/>Learned new skills</p>


        </div>
        
        </div>


    </div>
  )
}

export default AboutContent










{/* <div className="left">
<div className="img-container">
     <img src={myImg} className="img" alt="My-Pic"></img>
 </div>
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
 
</div> */}






