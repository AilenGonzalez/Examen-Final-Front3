import React from "react";
import logo from "../assets/images/DH1.png"
import face from "../assets/images/ico-facebook1.png"
import inst from "../assets/images/ico-instagram1.png"
import what from "../assets/images/ico-whatsapp1.png"
import tik from "../assets/images/ico-tiktok1.png"


const Footer = () => {
  return (
    <footer>
      
        <p>Todos los Derechos Reservados por</p>
        <img src={logo} alt="DH1-logo" />
        <div className="iconos"> 
        <img src={face} alt="ico-facebook1" />
        <img src={inst} alt="ico-instagram1" />
        <img src={what} alt="ico-whatsapp1" />
        <img src={tik} alt="ico-tiktok1" />
        </div>
    </footer>
  );
};

export default Footer;
