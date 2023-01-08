import "./Card.css";
import React from 'react';
import {GrNode} from "react-icons/gr";
import {SiExpress} from "react-icons/si";
import {SiMongodb} from "react-icons/si";
import {FaReact} from "react-icons/fa";
import {AiFillHtml5} from "react-icons/ai";



const Card = (props) => {
  return (
    <section className="container">

      <div className="card">
        <div className="card-image card-1"></div>
        <h2>Secrets Keeper</h2>
        <p>This app allows users to share their secrets with anonymous names of their particular type and authorizes them to sign in via OAuth2.0 .</p>
        <p>Tech Stack Used</p>
        <div className="icons-container">
        <GrNode size={30} style={{color:"white"}}/>
        <SiExpress size={30} style={{color:"white"}}/>
        <SiMongodb size={30} style={{color:"white"}}/>
        </div>
        <div className="active-buttons">
        <a href="#" className="btn-card">SOURCE CODE</a>
        <a className="btn-card disabled">DEMO</a>
        </div>
      </div>

      <div className="card">
        <div className="card-image card-2"></div>
        <h2>Expense Tracker</h2>
        <p>This application allows users to manage and view their expenses list while keeping a track of them. I represents them in the bar chart form</p>
        <p>Tech Stack Used</p>
        <div className="icons-container">
        <GrNode size={30} style={{color:"white"}}/>
        <FaReact size={30} style={{color:"white"}}/>
        </div>
        <div className="active-buttons">
        <a href="#" className="btn-card">SOURCE CODE</a>
        <a href="https://dsubhajit.in" className="btn-card">DEMO</a>
        </div>
      </div>

      <div className="card">
        <div className="card-image card-3"></div>
        <h2>Todolist</h2>
        <p>Users can plan their priorities and set them in correct order to stay consistent and focussed throughout the day avoiding distractions.</p>
        <p>Tech Stack Used</p>
        <div className="icons-container">
        <GrNode size={30} style={{color:"white"}}/>
        <SiExpress size={30} style={{color:"white"}}/>
        <SiMongodb size={30} style={{color:"white"}}/>
        </div>
        <div className="active-buttons">
        <a href="#" className="btn-card">SOURCE CODE</a>
        <a href="#" className="btn-card">DEMO</a>
        </div>
      </div>

      <div className="card">
        <div className="card-image card-4"></div>
        <h2>Simon Game</h2>
        <p>Users can start interacting it with the help of keystrokes and play the game until they follow the rules of the game. Each time a sound is played while a button is pressed.</p>
        <div className="icons-container">
        <AiFillHtml5 size={30} style={{color:"white"}}/>
        </div>
        <div className="active-buttons">
        <a href="#" className="btn-card">SOURCE CODE</a>
        <a href="#" className="btn-card">DEMO</a>
        </div>
      </div>

    </section>
  )
}

export default Card;












// making a active-button class in card.css to render the buttons at the position bottom of the card