import React from "react";
import { ReactDOM } from "react";
import Nav from "./components/Nav"
import Main from "./components/Main"
import data from "./data/data"

export default function(){
  const complete = data.map((x)=>{
    return(
      <Main
      key ={x.keyid}
      x={x}/>
    )
  })
  return(
    <div className="contain">
    <Nav />
    {complete}
   
    </div>
  )
}