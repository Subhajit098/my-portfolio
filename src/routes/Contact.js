import React from 'react'
import Navbar from '../components/Navbar';
import Footer from "../components/Footer"
import TitleProjects from '../components/TitleProjects';
import ContactForm from '../components/ContactForm';
import BackToTopButton from "../components/BackToTopButton";
import Design from "../components/Design"
import ScrollAnimation from 'react-animate-on-scroll';


const Contact = () => {
  return (
    <div style={{position:"relative"}}>
        <Navbar/>
        <TitleProjects heading="Contact Me" text="Leave a message for me ? :)"/>
        <ScrollAnimation animateIn='flipInY'
  animateOut='flipOutY' animateOnce={true}>
        <ContactForm/>
        </ScrollAnimation>
        <Footer/>
        <BackToTopButton/>
        <div style={{position:"absolute",width:"100%",height:"0.5%",zIndex:"-1"}}>
          <Design/>
        </div>
    </div>
  )
}

export default Contact