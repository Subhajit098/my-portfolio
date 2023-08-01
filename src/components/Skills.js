import React from "react";
import './Skills.css';

function Skills () {
   return (
       <div className="skills-container">
           <h1 className="title-text">My Skills</h1>

        <div className="grid-container">
           <div className="skill-box">
               <span className="title">HTML</span>
               <div className="skill-bar">
                   <span className="skill-per html">
                       <span className="tooltip">95%</span>
                   </span>
               </div>
           </div>
           
           
           
           <div className="skill-box ">
               <span className="title">CSS</span>
               <div className="skill-bar">
                   <span className="skill-per css">
                       <span className="tooltip">60%</span>
                   </span>
               </div>
           </div>
          

           
           <div className="skill-box ">
               <span className="title">JS</span>
               <div className="skill-bar">
                   <span className="skill-per javascript">
                       <span className="tooltip">75%</span>
                   </span>
               </div>
           </div>

           {/* <div className="skill-box ">
               <span className="title">Bootstrap</span>
               <div className="skill-bar">
                   <span className="skill-per bootstrap">
                       <span className="tooltip">70%</span>
                   </span>
               </div>
           </div> */}

           <div className="skill-box ">
               <span className="title">Git and Github</span>
               <div className="skill-bar">
                   <span className="skill-per gitandgithub">
                       <span className="tooltip">70%</span>
                   </span>
               </div>
           </div>

           <div className="skill-box ">
               <span className="title">SQL</span>
               <div className="skill-bar">
                   <span className="skill-per sql">
                       <span className="tooltip">75%</span>
                   </span>
               </div>
           </div>

           <div className="skill-box ">
               <span className="title">C++</span>
               <div className="skill-bar">
                   <span className="skill-per c">
                       <span className="tooltip">75%</span>
                   </span>
               </div>
           </div>

           <div className="skill-box ">
               <span className="title">MongoDB</span>
               <div className="skill-bar">
                   <span className="skill-per mongodb">
                       <span className="tooltip">70%</span>
                   </span>
               </div>
           </div>

           <div className="skill-box ">
               <span className="title">Python</span>
               <div className="skill-bar">
                   <span className="skill-per python">
                       <span className="tooltip">70%</span>
                   </span>
               </div>
           </div>
            
           <div className="skill-box">
               <span className="title">Node</span>
               <div className="skill-bar">
                   <span className="skill-per nodejs">
                       <span className="tooltip">70%</span>
                   </span>
               </div>
           </div>
           <div className="skill-box">
               <span className="title">React</span>
               <div className="skill-bar">
                   <span className="skill-per reactjs">
                       <span className="tooltip">70%</span>
                   </span>
               </div>
           </div>
           <div className="skill-box">
               <span className="title">Express</span>
               <div className="skill-bar">
                   <span className="skill-per expressjs">
                       <span className="tooltip">75%</span>
                   </span>
               </div>
           </div>
       </div>
       </div>
   )
}

export default Skills;