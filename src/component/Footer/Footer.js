import React from 'react'
import "./Footer.css"
import{FaMapMarkerAlt,FaPhoneAlt,FaFax,FaEnvelope,FaGlobe} from "react-icons/fa";
import logo from "../../assets/logo.png";
const Footer = () => {
    return (
        < footer id="footer" >
           <div className='container footer'>
               <div className='footer-box'>
                   <h2>User Links</h2>
                   <div className='footer-links'>
                        <a href='#'>&bull; Support</a>
                        <a href='#'>&bull; About</a>
                        <a href='#'>&bull; Learn</a>
                        <a href='#'>&bull; Hosting</a>
                        <a href='#'>&bull; Mesenger</a>
                   </div>
               </div>
               <div className='footer-box'>
                   <h2>Support</h2>
                   <div className='footer-links'>
                        <a href='#'>&bull; Support</a>
                        <a href='#'>&bull; About</a>
                        <a href='#'>&bull; Learn</a>
                        <a href='#'>&bull; Hosting</a>
                        <a href='#'>&bull; Mesenger</a>
                   </div>
               </div>
               <div className='footer-box'>
               <h2>Contact US</h2>
               <div className='footer-contact'>
                   <p>
                       <FaMapMarkerAlt /> &nbsp; Address:United states.
                   </p>
                   <p>
                       <FaPhoneAlt /> &nbsp; Phone:+1238 123.
                   </p>
                   <p>
                       <FaFax /> &nbsp; FAx:+12345678.
                   </p>
                   <p>
                       <FaEnvelope /> &nbsp; Email:info@info.com.
                   </p>
                   <p>
                       <FaGlobe /> &nbsp; website:iwww.socialxcom.
                   </p>
               </div>
               </div>
               <div className='footer-box'>
                   <img src={logo} alt='logo' />
                   <p className='u-small-text'>
                       &copy; Copyright 2021, SocialX.com
                   </p>
               </div>
            </div>
        </footer>
    )
}

export default Footer