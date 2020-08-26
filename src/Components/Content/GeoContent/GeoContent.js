import React from "react";
import "../../../Styles/Content.css";
import MapRendering from './MapRendering';
import PublicIcon from '@material-ui/icons/Public';
const GeoContent=()=>{
    return(
        <div className="geo-content" id="geo-content">
            <h2><PublicIcon />  Adventuring right throught your screen  <PublicIcon/></h2>
            <MapRendering />
        </div>
    )
} 
export default GeoContent;