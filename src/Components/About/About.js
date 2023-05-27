import React from 'react'
import "./About.css";
import wb1 from "./About-images/wb 1.png";
import wb2 from "./About-images/wb 2.png";
import wb3 from "./About-images/wb 3.png";
import wb4 from "./About-images/wb 4.png";
import wb5 from "./About-images/wb 5.png";
import wb6 from "./About-images/wb 6.png";
const About = () => {
  return (
    <div className="About" id="About">
       <div className="a-left">
      <h1 className="About-me">
          About Me
        </h1>
        <h2>
        Hi, im a well Qualified FullStack Developer Familiar with knowlwdge of HTML,CSS and Advanced JavaScript.
Knowledgeble of Frontend and Backend Development with Database Management.Handles any part of the process with ease.
As a Collaborative team player with a willingness to learn in and grow with the organization.
I am committed to staying up-to-date with the latest industry trends and technologies, 
and I am confident that my dedication and proficiency will allow me to excel in my role and 
contribute to the success of the team.
        </h2>
         </div>
      <div className="a-right"> 
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
