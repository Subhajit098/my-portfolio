import "./ContactForm.css";
import React from 'react'
import styled from "styled-components";
import { useForm, ValidationError } from '@formspree/react';
const LazyMap = React.lazy(() => import("./Location"));


const ContactForm = () => {


  // const [state, handleSubmit] = useForm(process.env.REACT_APP_ID);

  // if (state.succeeded) {
  //   return (<div style={{width:"100%",height:"20vh",color:"black"}}>
  //       <h1 style={{color:"white"}}>Thank you for Submitting the form!</h1>
  //   </div>);
  // }

  const Wrapper = styled.section``;

  return (
    <Wrapper className="section">
      <h2 className="contact-heading">Lets connect</h2>
      <React.Suspense fallback={<h1 style={{ color: "white" }}>Loading...</h1>}>
        <LazyMap />
      </React.Suspense>

      <div className="container__form">

        {/* Left component */}

        <div className="left-contact">
          <form action="https://formspree.io/f/mknanowg" method="POST" className="container-form">
            <div className="center-element">
              <input type="text" name="username" placeholder="name" autoComplete="on" required></input>
            </div>

            <div className="center-element">
              <input type="email" name="Email" placeholder="Email" autoComplete="on" required></input>
            </div>

            <div className="center-element">
              <textarea name="message" cols="30" row="6" autoComplete="on" placeholder="Enter your message" required>
              </textarea>
            </div>

            <div>
            <input type="submit" value="send" className="btn"></input>
            </div>

          </form>
        </div>


        {/* Right Component */}
        <div className="right-contact">

        <div className="container-flex">
        <h2>My Interests</h2>
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
      </div>
    </Wrapper>
  )
}

export default ContactForm;











