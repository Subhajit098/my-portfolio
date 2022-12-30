import "./NavbarStyles.css";
import React ,{ useState } from 'react'
import { Link } from "react-router-dom";
import {FaBars,FaTimes} from "react-icons/fa";

const Navbar = () => {

  const [clicked,setClicked]=useState(false);

  const handleClick=()=>
  {
    setClicked(!clicked);
  }

  return (
    <div className="header">
        <Link to="/">
          <h1>Portfolio</h1>
        </Link>
        <ul className={clicked===true ? "nav-menu active" : "nav-menu"}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Project">Project</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
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