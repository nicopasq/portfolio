import React from "react";
import AboutBlock from "./AboutBlock";

export default function Home(){
    return (
        <>
        <div id="homeContainer">
            <div id="scrollContainer">

                <h6 id="scrollTextPrimary">NICO PASQUARIELLO: FRONTEND DEV </h6>

                <h6 id="scrollTextSecondary">NICO PASQUARIELLO: FRONTEND DEV </h6>

            </div>
            
            {/* SCROLLING BAR (NICO PASQUARIELLO: FRONTEND DEV) */}
            {/* Brief about blurb */}
            {/* Professional Photo */}
                <h5 id='homeText'> 
                    Hi, I'm Nico Pasquariello! I'm a frontend web developer with full-stack capabilities and a focus on building React.js applications.
                </h5>

        </div>
            <AboutBlock/>

        <div id="projectBlock">
            PROJECTS
        </div>
        </>
    )
}