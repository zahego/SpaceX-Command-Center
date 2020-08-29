import React from 'react';
import YouTube from 'react-youtube';
import '../../../Styles/Content.css';
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';

const VideoContent=()=>{
    const opts = {
        height: '400',
        width: '550',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 0,
        },
      };
      const opts2 ={
        height: '250',
        width: '350',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 0,
        }, 
      }
return(
  <div style={{textAlign:"center", color: "rgb(120,82,78)"}}>
    <h2><EmojiEventsIcon/>  Prepare for your future <EmojiEventsIcon/></h2>
  <div className="video-content" id="video-content">
<YouTube videoId='uqKGREZs6-w' opts={opts2}/>
<YouTube videoId="wbSwFU6tY1c" opts={opts}/>
<YouTube videoId="uD4izuDMUQA" opts={opts2}/>
<h1>Yeaf</h1>
</div>
</div>
)
}

export default VideoContent;