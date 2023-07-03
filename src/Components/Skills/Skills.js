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
import { LinearProgress } from "@mui/material";
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
<div data-aos="flip-up"data-aos-delay="600" className="skilllist"> <img  className="img-skill" src={js} alt="javascript" /> <LinearProgress sx={{width:"7rem",marginLeft:"10px"}} color="success" variant="determinate" value={80} /></div>
<div data-aos="flip-up"data-aos-delay="600" className="skilllist"> <img  className="img-skill" src={Html} alt="Html" /><LinearProgress sx={{width:"7rem",marginLeft:"10px"}} color="success" variant="determinate" value={80} /> </div>
<div data-aos="flip-up"data-aos-delay="600" className="skilllist"><img  className="img-skill" src={Css} alt="Css" /> <LinearProgress sx={{width:"7rem",marginLeft:"10px"}} color="success" variant="determinate" value={80} /></div>
<div data-aos="flip-up"data-aos-delay="600" className="skilllist"><img  className="img-skill" src={ReactSkill} alt="react" /> <LinearProgress sx={{width:"7rem",marginLeft:"10px"}} color="success" variant="determinate" value={80} /></div>
<div data-aos="flip-up"data-aos-delay="600" className="skilllist"> <img  className="img-skill" src={Redux} alt="Redux" /> <LinearProgress sx={{width:"7rem",marginLeft:"10px"}} color="success" variant="determinate" value={60} /></div>
<div data-aos="flip-up"data-aos-delay="600" className="skilllist"> <img  className="img-skill" src={mui} alt="Mui" /> <LinearProgress sx={{width:"7rem",marginLeft:"10px"}} color="success" variant="determinate" value={80} /></div>
<div data-aos="flip-down"data-aos-delay="600" className="skilllist"> <img  className="img-skill" src={bootstrap} alt="bootstrap" /> <LinearProgress sx={{width:"7rem",marginLeft:"10px"}} color="success" variant="determinate" value={75} /></div>
<div data-aos="flip-down"data-aos-delay="600" className="skilllist"> <img  className="img-skill" src={Node} alt="Node" /><LinearProgress sx={{width:"7rem",marginLeft:"10px"}} color="success" variant="determinate" value={80} /></div>
<div data-aos="flip-down"data-aos-delay="600" className="skilllist"> <img  className="img-skill" src={Mongo} alt="Mongo" /> <LinearProgress sx={{width:"7rem",marginLeft:"10px"}} color="success" variant="determinate" value={70} /></div>
<div data-aos="flip-down"data-aos-delay="600" className="skilllist"><img  className="img-skill" src={Github} alt="github" /> <LinearProgress sx={{width:"7rem",marginLeft:"10px"}} color="success" variant="determinate" value={80} /></div>     
<div data-aos="flip-down"data-aos-delay="600" className="skilllist"> <img  className="img-skill" src={Git} alt="Git" /> <LinearProgress sx={{width:"7rem",marginLeft:"10px"}} color="success" variant="determinate" value={60} /></div>
<div data-aos="flip-down"data-aos-delay="600" className="skilllist"> <img  className="img-skill" src={aws} alt="aws" /> <LinearProgress sx={{width:"7rem",marginLeft:"10px"}} color="success" variant="determinate" value={50} /></div>      
             </div>

        </div>
      
    
  )
}

export default Skills
