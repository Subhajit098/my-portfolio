import "./ContactForm.css";
import React from 'react'
import styled from "styled-components";

const ContactForm = () => {

    const Wrapper=styled.section``;

  return (
    <Wrapper className="section">
        <h2 className="contact-heading">Connect with me</h2>

        <iframe title="location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.775541021324!2d87.69668821490264!3d23.64820818463983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f9c4aae0409665%3A0xa90b8a0471d1eecb!2sKashimbazar%20Durga%20Mandir!5e0!3m2!1sen!2sin!4v1672685459680!5m2!1sen!2sin" width="100%" height="300" style={{border:0}} allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

        <div className="container">

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


    </Wrapper>
  )
}

export default ContactForm;