import React from "react";
import img1 from "../pictures/mount.jpg"
import tag from "../assets/placeholder.png"
import "../styles/main.css"
import"../data/data.js"
import { getValue } from "@testing-library/user-event/dist/utils";
export default function Main(props){
    return(
        <div className="container">
            <div className="container-tittle">
                <img src={props.x.image} height="100px" className="container-image"></img>
                 <div className="all">
                   <div className="container-tittle1">
                     <img src={tag}></img>
                     <h2>{props.x.location}</h2>
                     <h4 href={getValue.toString()}>view on Googgle Maps</h4>
                   </div>
                    <div className="container-tittle2">
                     <h1 >{props.x.title}</h1>
                    </div>
                    <div className="container-date">
                     <h3>{props.x.startDate}</h3>
                    </div>
                    <div className="container-info">
                  <p >{props.x.description}.
                 </p></div>
                 </div>

            </div> 

        </div>
    )
}
/*
        title: "Mount Fuji",
        location: "Japan",
        googleMapsUrl: "https://goo.gl/maps/1DGM5WrWnATgkSNB8",
        startDate: "12 Jan, 2021",
        endDate: "24 Jan, 2021",
        description: "Mount Fuji
         is the tallest mountain in Japan,
          standing at 3,776 meters (12,380 feet).
           Mount Fuji is the single most popular 
           tourist site in Japan, for both Japanese
            and foreign tourists.",*/