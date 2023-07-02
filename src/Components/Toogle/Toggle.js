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
    <div className="toggle" style={{border:darkMode?"":"3px solid #FFEEBB"}} onClick={handleClick}>
        <Moon  style={{color:darkMode?"":"#FFEEBB"}} />
        <Sun  style={{color:darkMode?"":"#FFEEBB"}}/>
      <div className="t-button"
    style={darkMode ? {left: "2px"} : {right: "2px", backgroundColor: darkMode ? "" : "#FFEEBB"}}></div>
    </div>
  )
}

export default Toggle
