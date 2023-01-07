import React from 'react'
import Navbar from '../components/Navbar';
import Footer from "../components/Footer"
import TitleProjects from '../components/TitleProjects';
import RenderProjects from '../components/RenderProjects';
import BackToTopButton from "../components/BackToTopButton";

const Project = () => {
  return (
    <div>
        <Navbar/>
        <TitleProjects heading="My Recent Projects" text=""/>
        <RenderProjects/>
        <Footer/>
        <BackToTopButton/>
    </div>
  )
}

export default Project