import "./Skills.css";
import React from 'react'
import aws from "../Image/amazonSkills.png";
import bootstrap from "../Image/BootStrapSkills.png";
import Css from "../Image/CSSAbout.png";
import Github from "../Image/GithubSkills.png";
import Git from "../Image/GitSkills.png";
import Html from "../Image/HtmlSkills.png";
import js from "../Image/JavaScriptSkills.png";
import Mongo from "../Image/MongoSkills.png";
import Node from "../Image/NodeSkills.png";
import ReactSkill from "../Image/ReactSkills.png";
import Redux from "../Image/RedusSkills.png";
import mui from "../Image/muiSkills.png";
import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { themeContext } from '../../Context';
import { useContext } from "react";
const Skills = () => {
    const theme=useContext(themeContext);
  const darkMode=theme.state.darkMode;

    useEffect(() => {
        AOS.init();
      }, [])
    
  return (
    <div className="Skills" id="Skills">
       <h1 data-aos="fade-down"data-aos-delay="300" className="Skills-me"  style={{
  
  color:darkMode?"":"#0A6EBD"}}>
        Skills And Tools
        </h1>
        <div className="Techs">
        <img data-aos="flip-up"data-aos-delay="600" src={js} alt="javascript" />
         <img data-aos="flip-up"data-aos-delay="600" src={Html} alt="Html" />
         <img data-aos="flip-up"data-aos-delay="600" src={Css} alt="Css" />
         <img data-aos="flip-up"data-aos-delay="600" src={ReactSkill} alt="react" />
         <img data-aos="flip-up"data-aos-delay="600" src={Redux} alt="Redux" />
         <img data-aos="flip-up"data-aos-delay="600" src={mui} alt="Mui" />
         <img data-aos="flip-down"data-aos-delay="600" src={bootstrap} alt="bootstrap" />
         <img data-aos="flip-down"data-aos-delay="600" src={Node} alt="Node" />
         <img data-aos="flip-down"data-aos-delay="600" src={Mongo} alt="Mongo" />
         <img data-aos="flip-down"data-aos-delay="600" src={Github} alt="github" />
         <img data-aos="flip-down"data-aos-delay="600" src={Git} alt="Git" />
         <img data-aos="flip-down"data-aos-delay="600" src={aws} alt="aws" />
        </div>



     
{/* 
            <div className="skill-box">
                <span className="title">HTML</span>
                <div className="skill-bar">
                    <span className="skill-per html">
                        <span className="tooltip">95%</span>
                    </span>
                </div>
            </div>
            <div className="skill-box">
                <span className="title">CSS</span>
                <div className="skill-bar">
                    <span className="skill-per css">
                        <span className="tooltip">80%</span>
                    </span>
                </div>
            </div>
            <div className="skill-box">
                <span className="title">JavaScript</span>
                <div className="skill-bar">
                    <span className="skill-per javascript">
                        <span className="tooltip">60%</span>
                    </span>
                </div>
            </div>
            <div className="skill-box">
                <span className="title">NodeJS</span>
                <div className="skill-bar">
                    <span className="skill-per nodejs">
                        <span className="tooltip">40%</span>
                    </span>
                </div>
            </div>
            <div className="skill-box">
                <span className="title">ReactJS</span>
                <div className="skill-bar">
                    <span className="skill-per reactjs">
                        <span className="tooltip">70%</span>
                    </span>
                </div>
            </div>
            <div className="skill-box">
                <span className="title">ExpressJS</span>
                <div className="skill-bar">
                    <span className="skill-per expressjs">
                        <span className="tooltip">75%</span>
                    </span>
                </div>
            </div> */}
        </div>
      
    
  )
}

export default Skills
