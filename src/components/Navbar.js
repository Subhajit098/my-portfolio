import "./NavbarStyles.css";
import React ,{ useState } from 'react'
import { Link } from "react-router-dom";
import {FaBars,FaTimes} from "react-icons/fa";
import SLogo from "../assets/S-logo.png"

const Navbar = () => {

  const [clicked,setClicked]=useState(false);

  const handleClick=()=>
  {
    setClicked(!clicked);
  }

  const [color,setColor]=useState(false);
  const changeColor=()=>
  {
    if(window.scrollY>=1)
    {
      setColor(true);
    }
    else{
      setColor(false);
    }
  }

  window.addEventListener("scroll",changeColor);

  return (
    <div className={color ? "header header-bg" : "header"}>
        <Link to="/">
          <h1>
          <img className={clicked===true ? "zindex" : ""} src={SLogo}></img>
          </h1>
        </Link>
        <ul className={clicked===true ? "nav-menu active" : "nav-menu"}>
          <li >
            <Link to="/" >Home</Link>
          </li>
          <li >
            <Link to="/Project" >Project</Link>
          </li>
          <li >
            <Link to="/About" >About</Link>
          </li>
          <li >
            <Link to="/Contact" >Contact</Link>
          </li>
        </ul>
        <div className="hamburger" onClick={handleClick}>
             {clicked===true && <FaTimes size={20} style={{color:"white"}}/>}
             {clicked===false && <FaBars size={20} style={{color:"white"}}/>}
             
        </div>
    </div>
  )
}

export default Navbar