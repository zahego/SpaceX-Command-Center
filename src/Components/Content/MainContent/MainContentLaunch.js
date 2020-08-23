import React, {useState, useEffect} from "react";

import {fetchSpaceXLaunch} from "../../../API/SpaceXAPI";
import "../../../Styles/Content.css";
import "../../../Styles/MainContent.css";

export const MainContentLaunch=()=>{
    const [launchInfo, setLauchInfo]=useState([]);
    let timeline="latest";

    //useEffect(async()=>{}) doesnt exist
    //if no second argument, useEffect is going to run endlessly
    //if argument provide, only run when second argument change
    useEffect(()=>{
        const fetchAPILaunch=async()=>{
            //return of async function is a promise, not object or anything
            //dont forget the () at await
            setLauchInfo(await fetchSpaceXLaunch(timeline));
        };
        
        fetchAPILaunch();
    },[setLauchInfo]);
    console.log("launch data "+launchInfo.details);
    return(
        <div className="main-content-lanuch">
        </div>
    )
} 