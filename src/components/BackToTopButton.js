import "./BackToTopButton.css";
import React from 'react';
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
          <button className="float-btn" onClick={scrollUp}><BsArrowUp size={40}/></button>
        )}
    </div>
  )
}

export default BackToToButton;