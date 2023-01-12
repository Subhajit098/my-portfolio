import "./ContactForm.css";
import React from 'react'
import styled from "styled-components";
const LazyMap = React.lazy(()=> import("./Location"));


const ContactForm = () => {

    const Wrapper=styled.section``;

  return (
    <Wrapper className="section">
        <h2 className="contact-heading">Connect with me</h2>


        <React.Suspense fallback={<h1 style={{color:"white"}}>Loading...</h1>}>
              <LazyMap/>
        </React.Suspense>

        <div className="container">

              <div className="container-flex form-container-flex">

<form action="https://formspree.io/f/mknanowg" method="POST" className="container-form">
<div className="center-element"> 
    <input type="text" name="username" placeholder="name" autoComplete="on" required></input>
</div>

    <div className="center-element">
    <input type="email" name="Email" placeholder="Email" autoComplete="on" required></input>
    </div>

   <div className="center-element">
   <textarea name="message" cols="30" row="6" autoComplete="on" placeholder="Enter your message" required >
    </textarea>
   </div>

    <div><input type="submit" value="send" className="btn"></input></div>

</form>
</div>
<div className="container-flex">
<h2>Ask me about</h2>
  <ul>
    <li>Projects</li>
    <li>Technologies</li>
    <li>Analytical and complex Problems</li>
    <li>Open Source</li>
    <li>Machine Learning</li>
    <li>Blockchain Technology</li>
    <li>Cloud Computing</li>
  </ul>
</div>

        </div>
    </Wrapper>
  )
}

export default ContactForm;




