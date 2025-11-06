import React from 'react';
import"./Projects.css";
import Bulkmail from "./images/bulkmail.jpg";
import Phonecart from "./images/phone kart.jpg";
import Movieapp from "./images/movie app.jpg";
import CRM from "./images/crm.jpg";
import { themeContext } from '../../Context';
import { useContext } from 'react';
import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Projects = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  const projects = [
    {
      id: "Bulk Mail Tool",
      title: "Bulk Mail Tool",
      description: "A comprehensive email marketing platform built with React and Node.js, enabling users to send bulk emails efficiently with template management and analytics.",
      imgSrc: Bulkmail,
      frontEndSource: "https://github.com/Kavinkumar1998/Bulkemailtool-frontend",
      live: "https://bulkemailtool.netlify.app/",
      backEndSource: "https://github.com/Kavinkumar1998/Bulkemailtool-backend",
    },
    {
      id: "Phone-cart",
      title: "E-Commerce Phone Store",
      description: "Full-featured e-commerce application with shopping cart, user authentication, and payment integration. Built with React, Node.js, and MongoDB.",
      imgSrc: Phonecart,
      frontEndSource: "https://github.com/Kavinkumar1998/Deployment-practice-frontend",
      live: "https://phonecart-app.netlify.app/",
      backEndSource: "https://github.com/Kavinkumar1998/Deployment-practice",
    },
    {
      id: "movie-app",
      title: "Movie Discovery App",
      description: "Interactive movie browsing application with user authentication, password reset functionality, and personalized movie recommendations.",
      imgSrc: Movieapp,
      frontEndSource: "https://github.com/Kavinkumar1998/Passwordresetflow",
      live: "https://passwordresetmovieapp.netlify.app/",
      backEndSource: "https://github.com/Kavinkumar1998/Passwordrestflow-backend",
    },
    {
      id: "CRM",
      title: "CRM Management System",
      description: "Customer Relationship Management system for tracking leads, managing contacts, and analyzing sales data. Features real-time updates and comprehensive reporting.",
      imgSrc: CRM,
      frontEndSource:"https://github.com/Kavinkumar1998/Webcode-frontend",
      live: "https://crmmangementapp.netlify.app/",
      backEndSource: "https://github.com/Kavinkumar1998/wecodeBackend",
    },
  ];

  const openLink = (link) => {
    console.log("opened");
    window.open(link, "_blank");
  };
  const theme=useContext(themeContext);
  const darkMode=theme.state.darkMode;
  
  return (
    <div  className='projects'id="Projects">
        <h1 data-aos="fade-down"data-aos-delay="300"  className='project-heading'  style={{

  color:darkMode?"#60A5FA":"#2563EB"}}>Projects</h1>
        <p data-aos="fade-down"data-aos-delay="300"  style={{
      color:darkMode?"#CBD5E1":"#475569",
      textAlign: "center",
      fontSize: "1.1rem",
      marginBottom: "2rem",
      maxWidth: "800px",
      margin: "0 auto 2rem auto"
    }}>Here are some of my recent projects showcasing my skills in full-stack development, 
    modern frameworks, and best practices. Each project demonstrates problem-solving abilities 
    and attention to detail.</p>
  
  <div data-aos="fade-up"data-aos-delay="300"  className="row" >
       {projects.map((project) => (
          <div className="container" key={project.id} style={{backgroundColor:darkMode?"#334155":"#F1F5F9", borderColor:darkMode?"#475569":"#E2E8F0"}}>
            <img className='img' src={project.imgSrc} alt={`Project ${project.id}`} />
            <h2 className='heading-2' style={{color:darkMode?"#F8FAFC":"#1E293B"}}>{project.title}</h2>
            <p style={{
              color:darkMode?"#CBD5E1":"#64748B",
              fontSize: "0.9rem",
              padding: "0 1rem",
              textAlign: "center",
              marginTop: "0",
              marginBottom: "1rem",
              lineHeight: "1.6"
            }}>{project.description}</p>
            <div className="buttons">
              <button onClick={() => openLink(project.frontEndSource)}>Frontend</button>
              <button onClick={() => openLink(project.live)}>Live Demo</button>
              <button onClick={() => openLink(project.backEndSource)}>Backend</button>
            </div>
          </div>
        ))}
</div>
       
    </div>
  )
}

export default Projects
