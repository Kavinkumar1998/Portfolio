import React, { useContext } from 'react'
import "./Home.css";
import gitIcon from "../Image/gitIcon.png";
import LinkedIn from "../Image/linkedinIcon.png";
import AOS from "aos";
import 'aos/dist/aos.css';
import { themeContext } from '../../Context';
import { useEffect } from 'react';


function redirect(){
  window.open(
    "https://drive.google.com/file/d/12vXcoRrL-8g6r7WekdwJ0vH6XIibr2y2/view?usp=sharing"
  );
}
const Home = () => {
  
  useEffect(() => {
    AOS.init();
  }, [])
  
const theme=useContext(themeContext);
const darkMode=theme.state.darkMode;

  return (
    <div className='Home' id="Home">
      <div className='h-left'>
        <div className='h-name'>
            <span data-aos="fade-down"data-aos-delay="300" style={{
  
      color:darkMode?"white":""
    }}>Hi! I Am</span>
            <span data-aos="fade-right"data-aos-delay="500" 
            style={{
  
              color:darkMode?"":"#0A6EBD"}}
            >Kavin Kumar</span>
            <span data-aos="fade-left "data-aos-delay="1000" style={{
      color:darkMode?"white":""
    }}>FullStack Developer</span>
        <div data-aos="fade-up"data-aos-delay="600" className="h-icons">
            <a href="https://github.com/Kavinkumar1998" target='blank'><img src={gitIcon} alt="GitHub" /></a>
          <a href="https://www.linkedin.com/in/kavinkumar-mern-dev/" target='blank'>
          <img src={LinkedIn } alt="LinkedIn"/>
          </a>
        </div>
        <button data-aos="fade-up"data-aos-delay="600" className='button resume-download'   style={{ background:darkMode?"":"#0A6EBD", boxShadow:darkMode?"": "0px 20px 24px 3px rgba(37, 169, 245, 0.42)"}} onClick={redirect}>RESUME</button>
        </div>
      
      </div>  
    </div>
  )
}

export default Home
