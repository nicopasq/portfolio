import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Header(){
    const navigate = useNavigate()
    const style = {
        marginRight:'60px',
        color:'black',
        textDecoration:'none',
        textStretch:'compact',
    }
    return (
        <div id="header">
            <h3 className="mainText" id='title' onClick={() => navigate('/')}>PASQMEDIA</h3>
            <div id="links">
                <Link to={'/'} style={style} id="homeBtn" className="subText">Home</Link>
                <Link to={'/about'} style={style} className="subText">About</Link>
                <Link to={'/Contact'} style={style} className="subText">Contact</Link>
            </div>
        </div>
    )
}