import React from "react";
import { Link } from "react-router-dom";

export default function Header(){
    const style = {
        marginLeft:'10px'
    }
    return (
        <div>
            <h3 className="mainText">PASQMEDIA</h3>
            <Link to={'/'} style={style} className="subText">Home</Link>
            <Link to={'/about'} style={style} className="subText">About</Link>
            <Link to={'/Contact'} style={style} className="subText">Contact</Link>
        </div>
    )
}