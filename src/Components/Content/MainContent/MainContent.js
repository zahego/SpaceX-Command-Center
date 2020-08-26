import React from "react";


import MainContentLaunch from "./MainContentLaunch";
import MainContentVideo from "./MainContentVideo";
import MainContentGeo from './MainContentGeo';
import MainContentNews from './MainContentNews';
import MainContentJob from './MainContentJob';
import MainContentSocialMedia from './MainContentSocialMedia';
import MainContentWeather from './MainContentWeather';

import "../../../Styles/Content.css";
import "../../../Styles/MainContent.css";

export const MainContent=()=>{
    return(
        <div className="main-content" id="main-content">
            <MainContentLaunch/>
            <MainContentWeather/>
            <MainContentGeo/>
            <MainContentNews/>
            <MainContentVideo />
            <MainContentSocialMedia/>
            <div className="main-content-stock"></div>

            <MainContentJob/>
            <div className="main-content-quiz"></div>
            <div className="main-content-poll"></div>

        </div>
    )
} 