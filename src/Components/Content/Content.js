import React from "react";
import "../../Styles/Content.css";
import { MainContent } from "./MainContent/MainContent";
import  LaunchContent from "./LauchContent/LaunchContent";
import  SocialMediaContent  from "./SocialMediaContent/SocialMediaContent";
import GeoContent from "./GeoContent/GeoContent";
import VideoContent from "./VideoContent/VideoContent";
/*import {WeatherContent} from "./WeatherContent/WeatherContent";

import {StockContent} from "./StockContent/StockContent";
import {NewsContent} from "./NewsContent/NewsContent";

import {JobContent} from "./JobContent/JobContent";
import {QuizContent} from "./QuizContent/QuizContent";
import {PollContent} from "./PollContent/PollContent";*/

export const Content = () => {
    return (
        <div className="content">
            <MainContent />
            <LaunchContent />
            <SocialMediaContent/>
            <GeoContent/> 
            <VideoContent/> 
            {/*<WeatherContent/> 
            
            <StockContent/> 
            <NewsContent/> 
            
            <JobContent/> 
            <QuizContent/> 
            <PollContent/>*/}
        </div>
    )
} 