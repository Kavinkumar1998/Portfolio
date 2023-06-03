import React from 'react';
import"./Projects.css";
import Bulkmail from "./images/bulkmail.jpg";
import Phonecart from "./images/phone kart.jpg";
import Movieapp from "./images/movie app.jpg";
import CRM from "./images/crm.jpg";
import { themeContext } from '../../Context';
import { useContext } from 'react';
const Projects = () => {

  const projects = [
    {
      id: "Bulk Mail Tool",
      title: "Bulk Mail Tool",
      imgSrc: Bulkmail,
      frontEndSource: "https://github.com/Kavinkumar1998/Bulkemailtool-frontend",
      live: "https://bulkemailtool.netlify.app/",
      backEndSource: "https://github.com/Kavinkumar1998/Bulkemailtool-backend",
    },
    {
      id: "Phone-cart",
      title: "Phone-cart",
      imgSrc: Phonecart,
      frontEndSource: "https://github.com/Kavinkumar1998/Deployment-practice-frontend",
      live: "https://phonecart-app.netlify.app/",
      backEndSource: "https://github.com/Kavinkumar1998/Deployment-practice",
    },
    {
      id: "movie-app",
      title: "Movie Review App",
      imgSrc: Movieapp,
      frontEndSource: "https://github.com/Kavinkumar1998/Passwordresetflow",
      live: "https://passwordresetmovieapp.netlify.app/",
      backEndSource: "https://github.com/Kavinkumar1998/Passwordrestflow-backend",
    },
    {
      id: "CRM",
      title: "CRM app",
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
        <h1 className='project-heading'>Projects</h1>
        <div className='credentials'>
          
        <p style={{
      background:darkMode?"purple":"",
      color:darkMode?"white":""
    }}>credentials</p>
        <p style={{
      background:darkMode?"purple":"",
      color:darkMode?"white":""
    }}>Email : kavinajith1498@gmail.com</p>
          <p  style={{
      background:darkMode?"purple":"",
      color:darkMode?"white":""
    }}>Password : 123456789</p>
    </div>
  
  <div className="row" >
       {projects.map((project) => (
          <div className="container" key={project.id}>
            <img className='img' src={project.imgSrc} alt={`Project ${project.id}`} />
            <h2 className='heading-2'>{project.title}</h2>
            <div className="buttons">
              <button onClick={() => openLink(project.frontEndSource)}>Front End Source </button>

              <button onClick={() => openLink(project.live)}>Live</button>

              <button onClick={() => openLink(project.backEndSource)}> Back End Source </button>
            </div>
          </div>
        ))}
</div>
       
    </div>
  )
}

export default Projects
