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
const Skills = () => {
  return (
    <div className="Skills" id="Skills">
        <div className="s-left">
        <h1 className="Skills-me">
        Skills And Tools
        </h1>
        <div className="Techs">
        <img src={js} alt="javascript" />
         <img src={Html} alt="Html" />
         <img src={Css} alt="Css" />
         <img src={ReactSkill} alt="react" />
         <img src={Redux} alt="Redux" />
         <img src={mui} alt="Mui" />
         <img src={bootstrap} alt="bootstrap" />
         <img src={Node} alt="Node" />
         <img src={Mongo} alt="Mongo" />
         <img src={Github} alt="github" />
         <img src={Git} alt="Git" />
         <img src={aws} alt="aws" />
        </div>
        </div>
        <div className="s-right">
      <h1 className="skills-head">Skills Acquired</h1>
      <h2>
      <ul className="skills-list">
        <li>Front-end Languages such as javascript,HTML,CSS</li>
        <li>Front-end Frameworks-React.js and Styling libraries Material UI,BootStrap</li>
        <li>Backend Technologies and Frameworks. JavaScript and its environments like NodeJS and ExpressJS</li>
        <li>Database Management Systems using MongoDB,MongoDB Atlas</li>
        <li>Version Control using Git and GitHub</li>
        <li>Web Hosting Platforms such as Netlify,Vercel and Render</li>
      </ul>
      </h2>
    
        </div>
    </div>
  )
}

export default Skills
