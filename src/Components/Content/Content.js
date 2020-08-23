import React from "react";
import "../../Styles/Content.css";
import { MainContent } from "./MainContent/MainContent";
import { LaunchContent } from "./LauchContent/LaunchContent";
import { TweetContent } from "./TweetContent/TweetContent";
/*import {WeatherContent} from "./WeatherContent/WeatherContent";
import {GeoContent} from "./GeoContent/GeoContent";
import {StockContent} from "./StockContent/StockContent";
import {NewsContent} from "./NewsContent/NewsContent";
import {VideoContent} from "./VideoContent/VideoContent";
import {JobContent} from "./JobContent/JobContent";
import {QuizContent} from "./QuizContent/QuizContent";
import {PollContent} from "./PollContent/PollContent";*/

export const Content = () => {
    return (
        <div className="content">
            <MainContent />
            <LaunchContent />
            <TweetContent />
            {/*<WeatherContent/> 
            <GeoContent/> 
            <StockContent/> 
            <NewsContent/> 
            <VideoContent/> 
            <JobContent/> 
            <QuizContent/> 
            <PollContent/>*/}
        </div>
    )
} 