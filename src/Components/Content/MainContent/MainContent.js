import React from "react";

import {MainContentLaunch} from "./MainContentLaunch";

import "../../../Styles/Content.css";
import "../../../Styles/MainContent.css";

export const MainContent=()=>{
    return(
        <div className="main-content">
            <MainContentLaunch/>
            <div className="main-content-weather"></div>
            <div className="main-content-geo"></div>
            <div className="main-content-news"></div>
            <div className="main-content-stock"></div>
            <div className="main-content-tweet"></div>
            <div className="main-content-vid"></div>
            <div className="main-content-job"></div>
            <div className="main-content-quiz"></div>
            <div className="main-content-poll"></div>

        </div>
    )
} 