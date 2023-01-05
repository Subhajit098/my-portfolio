import "./TitleProjects.css";
import React from 'react'
import {Link} from "react-router-dom";

const TitleProjects = (props) => {
  return (
    <div className="hero-img">
        <div className="heading">
            <h1>{props.heading}</h1>
            <p>{props.text}</p>
            <Link to="/" className="btn btn-margin">Go to Home</Link>
        </div>
    </div>
  )
}

export default TitleProjects