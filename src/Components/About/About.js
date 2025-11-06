import React, { useContext } from 'react'
import "./About.css";
import wb1 from "./About-images/wb 1.png";
import wb2 from "./About-images/wb 2.png";
import wb3 from "./About-images/wb 3.png";
import wb4 from "./About-images/wb 4.png";
import wb5 from "./About-images/wb 5.png";
import wb6 from "./About-images/wb 6.png";
import { useEffect } from 'react';
import AOS from "aos";
import 'aos/dist/aos.css';
import { themeContext } from '../../Context';

const About = () => {
  const theme=useContext(themeContext);
  const darkMode=theme.state.darkMode;

  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className="About" id="About">
       <div data-aos="fade-down"data-aos-delay="500"  className="a-left">
      <h1 data-aos="fade-up"data-aos-delay="500" className="About-me"   style={{

  color:darkMode?"#60A5FA":"#2563EB"}}>
          About Me
        </h1>
        <h2 style={{
          color:darkMode?"#CBD5E1":"#475569",
          lineHeight:"1.8",
          fontSize:"1.1rem",
          textAlign: "justify",
          maxWidth: "90%"
        }}>
        I'm a passionate Full Stack Developer with expertise in HTML, CSS, and Advanced JavaScript. 
        I specialize in building scalable web applications using modern technologies like React, Node.js, and MongoDB. 
        With a strong foundation in both frontend and backend development, I excel at creating seamless user experiences 
        and robust server-side solutions.
        <br/><br/>
        As a collaborative team player, I thrive in dynamic environments and am always eager to learn and grow. 
        I'm committed to staying current with industry best practices and emerging technologies, ensuring that 
        I deliver high-quality, maintainable code that drives business success.
        </h2>
         </div>
      <div data-aos="fade-left"data-aos-delay="700"  className="a-right"> 
    <div className="About-images">
    <img src={wb1} alt="webdevelopment"/>
    <img src={wb2} alt="webdevelopment"/>
    <img src={wb3} alt="webdevelopment"/>
    <img src={wb4} alt="webdevelopment"/>
    <img src={wb5} alt="webdevelopment"/>
    <img src={wb6} alt="webdevelopment"/>
    </div>
        </div>
    </div>
  )
}

export default About
