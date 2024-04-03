import React from "react";
import AboutBlock from "./AboutBlock";
import ProjectDisplay from "./ProjectDisplay";

export default function Home(){
    return (
        <>
        <div id="homeContainer">
            <div id="scrollContainer">

                <h6 id="scrollTextPrimary">NICO PASQUARIELLO: FRONTEND DEV </h6>

                <h6 id="scrollTextSecondary">NICO PASQUARIELLO: FRONTEND DEV </h6>

            </div>
            
            <h5 id='homeText'> 
                Hi, I'm Nico Pasquariello! I'm a frontend web developer with full-stack capabilities and a focus on building React.js applications.
            </h5>

            {/* Professional Photo */}
        </div>
            <AboutBlock/>

        <div id="projectBlock">
            <h6 id="projectBlockMainText">PROJECTS</h6>
        </div>

        <ProjectDisplay 
            title='Rock Hound' 
            textObj={
                {
                    mainContent:'Rock Hound is an e-commerce store design for a user to browse and shop for various jewelry items. Its a full-stack, React.js application that employs Redux for complex state management and utilizes a Ruby on Rails database to manage User and Order data.',
                    features:['User authentication','State updates the page in real time'],
                    creationDate:"11/21/2023",
                    projectLinks:[
                        {repo: 'https://github.com/nicopasq/jewelry_shop_v2'}
                    ]
                }        
            }
            style={
                {
                    backgroundColor: "white",
                    color:"rgb(77, 77, 87)"
                }
        }/>

        <ProjectDisplay
            title="Amp Up"
            textObj={
                {
                    mainContent:'Amp up is a social media for musicians to connect with each other by creating and responding to community discusison posts. Its a full-stack React.js application that uses a Ruby on Rails backend to manipulate Users and Post data.',
                    features:['user auth', 'password protection'],
                    creationDate:'9/27/2023',
                    projectLinks:[
                        {repo: 'https://github.com/nicopasq/amp_up'}
                    ]
                }
            }
            style={
                {
                    backgroundColor:'rgb(77, 77, 87)',
                    color:'white'
                }
            }
            />
        </>
    )
}