import React from "react";
import AboutBlock from "./AboutBlock";
import ProjectDisplay from "./ProjectDisplay";
import ContactForm from "./ContactForm";
import rh_home from '../project_images/rockHoundImgs/home.png'
import rh_cart from '../project_images/rockHoundImgs/Cart.png'
import rh_confirmation from '../project_images/rockHoundImgs/confirmation.png'
import rh_profile from '../project_images/rockHoundImgs/profile.png'
import rh_shop from '../project_images/rockHoundImgs/RingShop.png'
import rh_success from '../project_images/rockHoundImgs/successPage.png'
import au_home from '../project_images/amp_up_images/home.png'
import au_login from '../project_images/amp_up_images/Login.png'
import au_profile from '../project_images/amp_up_images/profile.png'
import au_startDiscussion from '../project_images/amp_up_images/startDiscussion.png'

export default function Home(){
    return (
        <>
        <div id="homeContainer">
            
            <div id="banner">
                <div className="banner-slide">
                    <h1 className="bannerText">NICO PASQUARIELLO: FRONTEND DEV</h1>
                    <h1 className="bannerText" style={{color:'red'}}>NICO PASQUARIELLO: FRONTEND DEV</h1>
                </div>
                <div className="banner-slide">
                    <h1 className="bannerText">NICO PASQUARIELLO: FRONTEND DEV</h1>
                    <h1 className="bannerText" style={{color:'red'}}>NICO PASQUARIELLO: FRONTEND DEV</h1>
                </div>
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
                    mainContent:'Rock Hound is an e-commerce store designed for a user to browse and shop for various jewelry items. Its a full-stack, React.js application that employs Redux for complex state management and utilizes a Ruby on Rails database to manage User and Order data.',
                    features:['User authentication','State updates the page in real time'],
                    creationDate:"11/21/2023",
                    projectLinks:[
                        {repo: 'https://github.com/nicopasq/jewelry_shop_v2'}
                    ]
                }        
            }
            projectImages={
                {
                    rockHound:{
                        home:rh_home,
                        cart:rh_cart,
                        confirmation:rh_confirmation,
                        profile:rh_profile,
                        shop:rh_shop,
                        success:rh_success
                    }
                }
            }
            style={
                {
                    backgroundColor: "white",
                    color:"rgb(77, 87, 77)"
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
            projectImages={
                {
                    ampUp:{
                        home:au_home,
                        login:au_login,
                        profile:au_profile,
                        startDiscussion:au_startDiscussion
                    }
                }
            }
            style={
                {
                    backgroundColor:'rgb(77, 87, 77)',
                    color:'white'
                }
            }
            />

            <ContactForm/>

        </>
    )
}