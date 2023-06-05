import React from 'react'
import  "./Navbar.css";
import Toggle from '../Toogle/Toggle';
import {Link} from "react-scroll";
const Navbar = () => {
  return (
    <div className="navbar">
        <div className='navbar-left'>
            <div className="navbar-name">KAVIN</div>
            <Toggle/>
             </div>
        <div className='navbar-right'> 
        <div className="navbar-list" >
        <ul style={{listStyleType:"none"}}>
          <Link spy={true} to="Home" className='nav-items'  offset={-30} smooth={true}>   <li>Home</li> </Link>
         
            <Link spy={true} to="About" className='nav-items'  offset={50} smooth={true}> <li>About</li></Link>
           
            <Link spy={true} to="Skills" className='nav-items'  offset={-70} smooth={true}> <li>Skills</li></Link>
           
            <Link spy={true} to="Projects"  className='nav-items' offset={-50} smooth={true}> <li>Projects</li></Link>
           
            <Link spy={true} to="Contact"  className='nav-items' offset={40} smooth={true}>  <li>Contact</li></Link>
          
        </ul>
        </div>
        </div>
    </div>
  )
}

export default Navbar
