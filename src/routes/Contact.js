import React from 'react'
import Navbar from '../components/Navbar';
import Footer from "../components/Footer"
import TitleProjects from '../components/TitleProjects';
import ContactForm from '../components/ContactForm';
import BackToTopButton from "../components/BackToTopButton";


const Contact = () => {
  return (
    <div>
        <Navbar/>
        <TitleProjects heading="Contact Me" text="Leave a message for me ? :)"/>
        <ContactForm/>
        <Footer/>
        <BackToTopButton/>
    </div>
  )
}

export default Contact