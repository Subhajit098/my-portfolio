import "./Card.css";
import React from 'react'


const Card = (props) => {
  return (
    <section className="container">

      <div className="card">
        <div className="card-image card-1"></div>
        <h2>Secrets Keeper</h2>
        <p>This app allows users to share their secrets with anonymous names of their particular type and authorizes them to sign in via OAuth2.0 .</p>
        <p>Tech Stack Used</p>
        <div className="icons-container">
        Icons Used
        </div>
        <a href="#" className="btn-card">SOURCE CODE</a>
        <a href="#" className="btn-card">LIVE VIEW</a>
      </div>

      <div className="card">
        <div className="card-image card-2"></div>
        <h2>Expense Tracker</h2>
        <p>This application allows users to manage and view their expenses list while keeping a track of them.</p>
        <p>Tech Stack Used</p>
        <div className="icons-container">
          Icons Used
        </div>
        <a href="#" className="btn-card">SOURCE CODE</a>
        <a href="https://dsubhajit.in" className="btn-card">LIVE VIEW</a>
      </div>

      <div className="card">
        <div className="card-image card-3"></div>
        <h2>Todolist</h2>
        <p>Users can plan their priorities and set them in correct order to stay consistent and focussed throughout the day.</p>
        <p>Tech Stack Used</p>
        <div className="icons-container">
          Icons Used
        </div>
        <a href="#" className="btn-card">SOURCE CODE</a>
        <a href="#" className="btn-card">LIVE VIEW</a>
      </div>

      <div className="card">
        <div className="card-image card-4"></div>
        <h2>Simon Game</h2>
        <p>Users can start interacting it with the help of keystrokes and play the game until they follow the rules of the game.</p>
        <div className="icons-container">
          Icons Used
        </div>
        <a href="#" className="btn-card">SOURCE CODE</a>
        <a href="#" className="btn-card">LIVE VIEW</a>
      </div>

    </section>
  )
}

export default Card;















{/* <div className="card">
        <div className="card-body">
            <img src={props.img} className="card-img"></img>
            <h2 className="card-title">{props.title}</h2>
            <p className="card-desc">{props.desc}</p>
        </div>
        <button className="btn">Source Code</button>
    </div> */}