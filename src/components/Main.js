import React from "react";
import img1 from "../pictures/mount.jpg"
import tag from "../assets/placeholder.png"
import "../styles/main.css"
export default function Main(){
    return(
        <div classname="container">
            <div classname="container-tittle">
                <img src={img1} height="100px" 
                className="container-image"></img>
                <div className="container-tittle1">
                    <img src={tag}></img>
                    <h2>JAPAN</h2>
                    <h4>view on Googgle Maps</h4>

                </div>

            </div> 

        </div>
    )
}
