import React from 'react';
import Navbar from '../components/Navbar';
import Title from '../components/Title';
import Footer from "../components/Footer"
import BackToTopButton from "../components/BackToTopButton";
import RenderProjects from "../components/RenderProjects"
import Design from "../components/Design"
import Skills from "../components/Skills";
import ScrollAnimation from 'react-animate-on-scroll';


const Home = () => {
  return (
    <div>
      <Navbar/>
      <Title/>
      <h2 style={{
        color:"white",
        textAlign:"center",
        marginTop:"10px",
        padding:"5px 0",
        width:"100%",
        display:"block",
        textDecoration:"underline",
        borderRadius:"50px",
        margin:"15px auto 30px"
      }}>My Projects</h2>
      
      <ScrollAnimation animateIn="bounceInRight" 
  animateOnce={true}>
      <RenderProjects/>    
      </ScrollAnimation>

      <ScrollAnimation animateIn='bounceInLeft' 
  animateOnce={true}>
      <Skills/>
      </ScrollAnimation>

      
      <Footer/>
     

      <BackToTopButton/>
      <div style={{position:"absolute",width:"100%",height:"0.5%",zIndex:"-1"}}>
          <Design/>
        </div>
    </div>
  )
}

export default Home