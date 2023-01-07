import React from 'react'
import { useState,useEffect } from "react";
import { BsArrowUp } from "react-icons/bs";

const BackToToButton = () => {

  const [backToTopButton,setbackToTopButton]=useState(false); 

  useEffect(()=>{
      window.addEventListener("scroll",()=>{
        if(window.scrollY>100){
          setbackToTopButton(true);
        }
        else{
          setbackToTopButton(false);
        }
      })
  },[])

  const scrollUp=()=>{
    window.scrollTo({
      top:0,
      behavior:"smooth"
    })
  }

  return (
    <div>
        {backToTopButton && (
          <button style={{
            position:"fixed",
            bottom:"40px",
            right:"50px",
            height:"60px",
            width:"60px",
            fontSize:"50px",
            cursor:"pointer",
            textAlign:"center",
            boxShadow:"2px 2px 3px #999",
            borderRadius:"50px",
            color:"rgb(235,35,75)",
            backgroundColor:"rgb(246,223,228)"
          }} onClick={scrollUp}><BsArrowUp size={40}/></button>
        )}
    </div>
  )
}

export default BackToToButton;