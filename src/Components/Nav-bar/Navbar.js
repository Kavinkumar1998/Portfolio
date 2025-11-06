import React from 'react'
import  "./Navbar.css";
import Toggle from '../Toogle/Toggle';
import {Link} from "react-scroll";
import { themeContext } from '../../Context';
import { useContext } from 'react';
const Navbar = () => {
  const theme=useContext(themeContext);
  const darkMode=theme.state.darkMode;
  
  return (
    <div className="navbar">
        <div className='navbar-left'>
            <div className="navbar-name" style={{

  color:darkMode?"#F8FAFC":"#F8FAFC"}}>KAVIN</div>
            <Toggle/>
             </div>
        <div className='navbar-right'> 
        <div className="navbar-list" >
        <ul style={{listStyleType:"none"}}>
          <Link spy={true} to="Home" className='nav-items'    offset={-30} smooth={true}  style={{

  color:darkMode?"#F8FAFC":"#F8FAFC"}}>   <li>Home</li> </Link>
         
            <Link spy={true} to="About" className='nav-items'  offset={-30} smooth={true} style={{

  color:darkMode?"#F8FAFC":"#F8FAFC"}}> <li>About</li></Link>
           
            <Link spy={true} to="Skills" className='nav-items'  offset={-70} smooth={true} style={{

  color:darkMode?"#F8FAFC":"#F8FAFC"}}> <li>Skills</li></Link>
           
            <Link spy={true} to="Projects"  className='nav-items' offset={-50} smooth={true} style={{

  color:darkMode?"#F8FAFC":"#F8FAFC"}}> <li>Projects</li></Link>
           
            <Link spy={true} to="Contact"  className='nav-items' offset={40} smooth={true} style={{

  color:darkMode?"#F8FAFC":"#F8FAFC"}}>  <li>Contact</li></Link>
          
        </ul>
        </div>
        </div>
    </div>
  )
}

export default Navbar
