import React, { useContext, useRef, useState } from 'react'
import "./Contact.css";
import emailjs from '@emailjs/browser';
import { themeContext } from '../../Context';
const Contact = () => {
    const theme= useContext(themeContext);
const darkMode = theme.state.darkMode;


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
        <span style={{
      background:darkMode?"purple":"",
      color:darkMode?"white":""
    }}>Get in Touch</span>
        <span>Contact Me</span>
    </div>
</div>
<div className="c-right">
    <form ref={form} onSubmit={sendEmail}>
        <input type="text" name="user_name" className="User" placeholder="Name"/>
        <input type="email" name="user_email" className="User" placeholder="Email"/>
        <input type="message" name="message" className="User" placeholder="Message"/>
        <input type="submit" value="Send" className="button"/>
        <span>{done && "Thanks for Contacting Me"}</span>
         </form>
</div>
    </div>
  )
}

export default Contact
