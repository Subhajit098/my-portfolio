import React from 'react'
import Navbar from '../components/Navbar';
import Footer from "../components/Footer"
import TitleProjects from '../components/TitleProjects';
import RenderProjects from '../components/RenderProjects';
import BackToTopButton from "../components/BackToTopButton";
import Design from "../components/Design"



const Project = () => {
  return (
    <div style={{position:"relative"}}>
       {/* <div> */}
       <Navbar/>
        <TitleProjects heading="My Recent Projects" text=""/>
        <RenderProjects/>
        <Footer/>
        <BackToTopButton/>
       {/* </div> */}
        <div style={{position:"absolute",width:"100%",height:"0.5%",zIndex:"-1"}}>
          <Design/>
        </div>
    </div>
  )
}

export default Project