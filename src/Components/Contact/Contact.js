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
      color:darkMode?"white":""
    }}>Get in Touch</span>
        <span data-aos="fade-right"data-aos-delay="400"  style={{
  
  color:darkMode?"":"#0A6EBD"}} >Contact Me</span>
    </div>
</div>
<div data-aos="fade-up"data-aos-delay="400" className="c-right">
    <form ref={form} onSubmit={sendEmail}>
        <input type="text" name="user_name" className="User"  style={{ border:darkMode?"":"2px solid #0A6EBD"}} placeholder="Name"/>
        <input type="email" name="user_email" className="User"  style={{ border:darkMode?"":"2px solid #0A6EBD"}} placeholder="Email"/>
        <input type="message" name="message" className="User"  style={{ border:darkMode?"":"2px solid #0A6EBD"}} placeholder="Message"/>
        <input type="submit" value="Send" className="button"  style={{ background:darkMode?"":"#0A6EBD", boxShadow:darkMode?"": "0px 20px 24px 3px rgba(37, 169, 245, 0.42)"}}/>
        <span>{done && "Thanks for Contacting Me"}</span>
         </form>
</div>
    </div>
  )
}

export default Contact
