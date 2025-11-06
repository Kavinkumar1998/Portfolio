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
    "https://drive.google.com/file/d/1NAJHMFCrhvsF8YNpb_FwoNOCuIuzRt0v/view?usp=sharing"
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

      color:darkMode?"#F8FAFC":"#1E293B"
    }}>Hi! I Am</span>
            <span data-aos="fade-right"data-aos-delay="500" 
            style={{

              color:darkMode?"#60A5FA":"#2563EB"}}
            >Kavin Kumar</span>
            <span data-aos="fade-left "data-aos-delay="1000" style={{
      color:darkMode?"#F8FAFC":"#1E293B"
    }}>Full Stack Developer</span>
            <span data-aos="fade-up"data-aos-delay="1200" style={{
      color:darkMode?"#CBD5E1":"#64748B",
      fontSize: "1.5rem",
      marginTop: "1rem",
      fontWeight: "400"
    }}>Building scalable web applications with modern technologies</span>
        <div data-aos="fade-up"data-aos-delay="600" className="h-icons">
            <a href="https://github.com/Kavinkumar1998" target='blank'><img src={gitIcon} alt="GitHub" /></a>
          <a href="https://www.linkedin.com/in/kavinkumar-mern-dev/" target='blank'>
          <img src={LinkedIn } alt="LinkedIn"/>
          </a>
        </div>
        <button data-aos="fade-up"data-aos-delay="600" className='button resume-download'   style={{ background:darkMode?"linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)":"linear-gradient(135deg, #2563EB 0%, #1E40AF 100%)", boxShadow:darkMode?"0px 10px 25px rgba(59, 130, 246, 0.4)": "0px 10px 25px rgba(37, 99, 235, 0.3)"}} onClick={redirect}>RESUME</button>
        </div>
      
      </div>  
    </div>
  )
}

export default Home
