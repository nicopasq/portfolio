import { Paper } from '@mui/material';
import image from '../project_images/placeHolderImg.jpg'
import React from "react";
import Carousel from './Carousel';

export default function ProjectDisplay({title = 'TITLE', projectImages, textObj = {}, style = {}}){
    const projectFeatures = textObj.features?.map((feature, index) => (<h4 key={index} className='list'>* {feature}</h4>))
    const creationDate = textObj.creationDate
    const links = textObj.projectLinks?.map( (linkObj) => (
        <a key={Object.keys(linkObj)[0]} href={Object.values(linkObj)[0]} style={{textDecoration:"none"}}>
            <h3 className='list'>
                {Object.keys(linkObj)[0]}
            </h3>
        </a>
    ))

    return (
        <div className="projectDisplay" style={style}>
            <div className='displayContainer'>
            
            <div className="projectTitle">
                <h1>{title}</h1>
            </div>
            <div className="projectImgContainer">
                <Carousel  images={projectImages}/> 
            </div>

            <div className="projectTextBlock">
                <div className="description">
                    {textObj.mainContent}
                </div>
                <div className="features">
                    <h3>Features</h3>
                    <ul>
                        {projectFeatures}
                    </ul>
                </div>
                <div className="created">
                    <h3>Created</h3>
                    <h4 className='date'>{creationDate}</h4>
                </div>
                <div className="projectLinks">
                    <h3>Project Links</h3>
                    <ul className="projectLinkList">
                        {links}
                    </ul>
                </div>
            </div>

            </div>
        </div>
    )
}