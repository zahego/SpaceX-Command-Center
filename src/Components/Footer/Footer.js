import React from "react";
import "../../Styles/Footer.css";

//this is ok since html5 syntax is lowercase
export const Footer=()=>{
    return(
        <div className="footer">
            <h1 style={{paddingTop:"40px"}}>SpaceX Command Center</h1>
            <h3>A info site about SpaceX that was developed in a "Command Center" style</h3>
            <h6>Made by Minh Tran with Reactjs</h6>
        </div>
    )
} 