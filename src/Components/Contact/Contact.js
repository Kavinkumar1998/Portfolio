import React, { useContext, useRef, useState } from 'react'
import "./Contact.css";
import emailjs from '@emailjs/browser';
import { themeContext } from '../../Context';
import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect } from 'react';
const Contact = () => {
    const theme= useContext(themeContext);
const darkMode = theme.state.darkMode;

useEffect(() => {
    AOS.init();
  }, [])

    const form = useRef();
 const [done,setdone]=useState(false)
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_5idc3y3', 'template_usk6cbg', form.current, 'xoQocFiUQwCXbe_sh')
        .then((result) => {
            console.log(result.text);
            setdone(true);
        }, (error) => {
            console.log(error.text);
        });
    };
  return (
    <div className="Contact" id="Contact">
<div className="c-left">
    <div className="content">
        <span data-aos="fade-left"data-aos-delay="400"  style={{
      color:darkMode?"#F8FAFC":"#1E293B"
    }}>Get in Touch</span>
        <span data-aos="fade-right"data-aos-delay="400"  style={{

  color:darkMode?"#60A5FA":"#2563EB"}} >Contact Me</span>
    </div>
</div>
<div data-aos="fade-up"data-aos-delay="400" className="c-right">
    <form ref={form} onSubmit={sendEmail}>
        <input type="text" name="user_name" className="User"  style={{ border:darkMode?"2px solid #475569":"2px solid #2563EB"}} placeholder="Name"/>
        <input type="email" name="user_email" className="User"  style={{ border:darkMode?"2px solid #475569":"2px solid #2563EB"}} placeholder="Email"/>
        <textarea name="message" className="User"  style={{ border:darkMode?"2px solid #475569":"2px solid #2563EB"}} placeholder="Your Message" rows="4"/>
        <input type="submit" value="Send Message" className="button"  style={{ background:darkMode?"linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)":"linear-gradient(135deg, #2563EB 0%, #1E40AF 100%)", boxShadow:darkMode?"0px 10px 25px rgba(59, 130, 246, 0.4)": "0px 10px 25px rgba(37, 99, 235, 0.3)"}}/>
        <span style={{
          color: darkMode ? "#10B981" : "#059669",
          fontWeight: "600",
          fontSize: "1.1rem",
          marginTop: "1rem"
        }}>{done && "✓ Message sent successfully! I'll get back to you soon."}</span>
         </form>
</div>
    </div>
  )
}

export default Contact
