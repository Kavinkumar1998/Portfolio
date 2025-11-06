import React from 'react'
import "./Footer.css";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="footer-main">
      <div className="details">© {currentYear} Kavin Kumar. All Rights Reserved.</div>
    </div>
  )
}

export default Footer
