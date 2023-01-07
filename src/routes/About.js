import React from 'react'
import Navbar from '../components/Navbar';
import Footer from "../components/Footer"
import TitleProjects from '../components/TitleProjects';
import AboutContent from '../components/AboutContent';
import BackToTopButton from "../components/BackToTopButton";


const About = () => {
  return (
    <div>
        <Navbar/>
        <TitleProjects heading="About" text="An Aspiring Software Developer"/>
        <AboutContent/>
        <Footer/>
        <BackToTopButton/>
    </div>
  )
}

export default About