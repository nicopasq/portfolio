import { Typography } from "@mui/material";
import React, { useState } from "react";

export default function Carousel({images}){
    const [n, setN]= useState(0)
    const displayImage = images?.map((image, index) => {
        return (
            <div key={index} className='carousel-cell'>
                <div className="pageNum">{index+1}/{images.length}</div>
                <img src={image} className="projectImg"/> 
            </div>
        )
    })

    function changeImage(e){
        if (e.target.name === 'next' && n + 1 < images.length){
           setN(n + 1 )
        } else if (e.target.name === 'back' && n - 1 > -1){
            setN(n - 1)
        }
        
    }

    console.log(n)
    return (
        <>
            <div id="imageCarousel">
                {displayImage[n]}
                <button onClick={e => changeImage(e)} name='back' id="backBtn">Back</button>
                <button onClick={e => changeImage(e)} name='next' id="nextBtn">Next</button>
            </div>
        </>
    )
}