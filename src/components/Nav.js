import React from "react";
import img1 from "../assets/pngegg.png"
import "../styles/navbar.css"
export default function Nav(){
    return(
        <nav className="nav">
            <img src={img1} alt="img"></img>
            <h2>My travel journal</h2>
        </nav>
    )
}