import React from "react";
import "../../Styles/Navbar.css";
import Input from '@material-ui/core/Input';

export const Navbar=()=>{
    return(
        <div className="nav-bar">
            <span>SPACEX COMMNAND CENTER</span>
            <div>
            <Input style={{color: "rgb(220, 231, 198)"}}/>
            <span>Search</span>
            </div>
        </div>
    )
} 