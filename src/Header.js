import React from "react";
import { Link } from "react-router-dom";

export default function Header(){
    const style = {
        marginLeft:'10px'
    }
    return (
        <div>
            Header
            <Link to={'/'} style={style}>Home</Link>
            <Link to={'/about'} style={style}>About</Link>
            <Link to={'/Contact'} style={style}>Contact</Link>
        </div>
    )
}