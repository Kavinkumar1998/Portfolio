import React, { useContext } from 'react'
import "./Home.css";
import gitIcon from "../Image/gitIcon.png";
import LinkedIn from "../Image/linkedinIcon.png";
import bootstarp from "./homeimages/bootstrap.png";
import react from "./homeimages/react.png";
import basic from  "./homeimages/html.png";
import node from "./homeimages/node.png";
import js from "./homeimages/js.png";
import mongo from "./homeimages/mongodb.png";
import atlas from "./homeimages/atlas.png";
import mui from "./homeimages/mui.png";
import { themeContext } from '../../Context';

function redirect(){
  window.open(
    "https://drive.google.com/file/d/1biLWfq0BJ1nJfkT2-nvplP3VfC8aw1ja/view"
  );
}
const Home = () => {
  
const theme=useContext(themeContext);
const darkMode=theme.state.darkMode;

  return (
    <div className='Home' id="Home">
      <div className='h-left'>
        <div className='h-name'>
            <span  style={{
      background:darkMode?"purple":"",
      color:darkMode?"white":""
    }}>Hi! I Am</span>
            <span>Kavin Kumar</span>
            <span>FullStack Developer</span>
        <div className="h-icons">
            <a href="https://github.com/Kavinkumar1998" target='blank'><img src={gitIcon} alt="GitHub" /></a>
          <a href="https://www.linkedin.com/in/kavin-kumar-060343153/" target='blank'>
          <img src={LinkedIn } alt="LinkedIn"/>
          </a>
        </div>
        </div>
       <button className='button resume-download' onClick={redirect}>RESUME</button>
      </div>
      <div className='h-right'>
      <img src={basic} alt="basic"/>
        <img src={js} alt="js"/>
        <img src={react} alt="react"/>
        <img src={bootstarp} alt="bootstarp"/>
        <img src={mui} alt="mui"/>
        <img src={node} alt="node"/>
        <img src={mongo} alt="mongo"/>
        <img src={atlas} alt="atlas"/>
       
       </div>
    </div>
  )
}

export default Home
