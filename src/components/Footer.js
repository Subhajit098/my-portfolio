import "./Footer.css";
import React from 'react'
import { FcHome } from "react-icons/fc";
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephoneFill } from "react-icons/bs";

const Footer = () => {
    return (
        <div className="footer">

            <div className="footer-container">

                <div className="left">
                    <h4>Lets talk About Projects and Technologies🙂</h4>
                    <p>
                        What are you views on the upcoming technologies and their applications ? I am thrilled to and bamboozled at the same time to see the power of AI and Machine Learning softwares. So,lets connect and build some exciting projects together and share innovative ideas. 
                    </p>
                </div>


                <div className="right">
                    <div className="location">
                        <h4><FcHome size={25} style={{ marginRight: "2rem" }} /></h4>
                        <p>Bolpur,731204,</p>
                        
                        <p>West-Bengal</p>
                    </div>
                    <div className="email">
                        <h4><AiOutlineMail size={20} style={{ color: "white", marginRight: "2rem" }} />dsubhajit.in@gmail.com</h4>
                    </div>
                    <div className="phone">
                        <h4><BsTelephoneFill size={20} style={{ color: "white", marginRight: "2rem" }} />+91-7797930492</h4>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Footer;