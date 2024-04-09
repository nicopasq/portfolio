import { Typography } from "@mui/material";
import React from "react";
import gitHub_logo from '../project_images/githubLogo.png'
import linkedIn_logo from '../project_images/linkedInLogo .png'

export default function Footer(){

    return (
        <div className="footer">
            <h3 className="footerTxt">PASQMEDIA</h3>
            <div className="contactMe">
                <h3 >Gmail</h3>
                <h4>nicopasquariello@gmail.com</h4>
            </div>
            <div className="socials">
                <h3>Socials</h3>
                <a href="https://github.com/nicopasq">
                    <img id="github" src={gitHub_logo} alt="github"/>
                </a>
                <a href="https://www.linkedin.com/in/nicohpasq/">
                    <img id="linkedIn" src={linkedIn_logo} alt="LinkedIn"/>
                </a>
            </div>
        </div>
    )
}