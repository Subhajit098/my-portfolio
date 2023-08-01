import React from 'react'
import Navbar from '../components/Navbar';
import Footer from "../components/Footer"
import TitleProjects from '../components/TitleProjects';
import AboutContent from '../components/AboutContent';
import BackToTopButton from "../components/BackToTopButton";
import Design from "../components/Design"
import Certificate from '../components/Certificate';
import ScrollAnimation from 'react-animate-on-scroll';


const About = () => {
  return (
    <div style={{position:"relative"}}>
        <Navbar/>
        <TitleProjects heading="About" text="An Aspiring Software Developer"/>

        <ScrollAnimation animateIn='flipInY'
  animateOut='flipOutX' animateOnce={true}>
        <AboutContent/>
        </ScrollAnimation>
        <ScrollAnimation animateIn='bounce' 
  animateOnce={true}>
        <Certificate/>
        </ScrollAnimation>
        <Footer/>
        <BackToTopButton/>
        <div style={{position:"absolute",width:"100%",height:"0.5%",zIndex:"-1"}}>
          <Design/>
        </div>
    </div>
  )
}

export default About