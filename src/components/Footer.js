import React, { useContext } from "react";
import { MyContext } from '../context/MyContext';
import "./Footer.css"

export default function Footer() {

    const { iconFacebook, iconTwitter, iconPinterest, iconInstagram } = useContext(MyContext);

  return (
    <div className="footer-container">

        <div className="footer-imprint">
            <p>Imprint</p>
            <p>|</p>
            <p>Terms & Conditions</p>
            <p>|</p>
            <p>Privacy Notice</p>
            <p>|</p>
            <p>Data preferences</p>
        </div>

        <div className="footer-icons">
            <span>{iconFacebook}</span> 
            <span>{iconTwitter}</span>
            <span>{iconInstagram}</span>
            <span>{iconPinterest}</span>
        </div>
    </div>
  )
}
