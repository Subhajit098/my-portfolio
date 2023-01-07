import React from 'react';
import Navbar from '../components/Navbar';
import Title from '../components/Title';
import Footer from "../components/Footer"
import BackToTopButton from "../components/BackToTopButton";
import RenderProjects from "../components/RenderProjects"


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
        textDecoration:"underline"
      }}>My Projects</h2>
      <RenderProjects/>
      <Footer/>
      <BackToTopButton/>
    </div>
  )
}

export default Home