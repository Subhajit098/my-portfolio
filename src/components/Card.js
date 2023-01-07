import "./Card.css";
import React from 'react'


const Card = (props) => {
  return (
    <section className="container">

      <div className="card">
        <div className="card-image card-1"></div>
        <h2>Title</h2>
        <p>Lorem ipsum ifda ghgapogia esetermapo las pogelas konichivo ese mundro salacia</p>
        <p>Tech Stack Used</p>
        <div className="icons-container">
        Icons Used
        </div>
        <a href="#" className="btn-card">SOURCE CODE</a>
        <a href="#" className="btn-card">LIVE VIEW</a>
      </div>

      <div className="card">
        <div className="card-image card-2"></div>
        <h2>Title</h2>
        <p>Lorem ipsum ifda ghgapogia esetermapo las pogelas konichivo ese mundro salacia</p>
        <p>Tech Stack Used</p>
        <div className="icons-container">
          Icons Used
        </div>
        <a href="#" className="btn-card">SOURCE CODE</a>
        <a href="#" className="btn-card">LIVE VIEW</a>
      </div>

      <div className="card">
        <div className="card-image card-3"></div>
        <h2>Title</h2>
        <p>Lorem ipsum ifda ghgapogia esetermapo las pogelas konichivo ese mundro salacia</p>
        <p>Tech Stack Used</p>
        <div className="icons-container">
          Icons Used
        </div>
        <a href="#" className="btn-card">SOURCE CODE</a>
        <a href="#" className="btn-card">LIVE VIEW</a>
      </div>

      <div className="card">
        <div className="card-image card-3"></div>
        <h2>Title</h2>
        <p>Lorem ipsum ifda ghgapogia esetermapo las pogelas konichivo ese mundro salacia</p>
        <p>Tech Stack Used</p>
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