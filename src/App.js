import { useContext } from 'react';
import './App.css';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Navbar from './Components/Nav-bar/Navbar';
import Skills from './Components/Skills/Skills';
import { themeContext } from './Context';
import Projects from './Components/Projects/Projects';
function App() {
const theme= useContext(themeContext);
const darkMode = theme.state.darkMode;

  return (
    <div className="App" 
    style={{
      background:darkMode?"purple":"#A6D0DD",
      color:darkMode?"white":""
    }}>
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
