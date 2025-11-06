import React ,{useContext} from 'react'
import "./Toggle.css"
import Sun from "@iconscout/react-unicons/icons/uil-sun";
import Moon from "@iconscout/react-unicons/icons/uil-moon";
import { themeContext } from '../../Context';
const Toggle = () => {

const theme=useContext(themeContext);
const darkMode=theme.state.darkMode;
const handleClick = ()=>{
  theme.dispatch({type:"toggle"});
}
  return (
    <div className="toggle" style={{border:darkMode?"3px solid #475569":"3px solid #2563EB"}} onClick={handleClick}>
        <Moon  style={{color:darkMode?"#60A5FA":"#2563EB"}} />
        <Sun  style={{color:darkMode?"#60A5FA":"#2563EB"}}/>
      <div className="t-button"
    style={darkMode ? {left: "2px", backgroundColor: "#3B82F6"} : {right: "2px", backgroundColor: "#2563EB"}}></div>
    </div>
  )
}

export default Toggle
