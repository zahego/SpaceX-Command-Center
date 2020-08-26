import React from 'react';
import YouTube from 'react-youtube';
import '../../../Styles/MainContent.css';

const MainContentVideo=()=>{
    const opts = {
        height: '445',
        width: '645',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 0,
        },
      };
return(
  <div className="main-content-video"   >
<YouTube
  videoId="W36QKRS_t5k"           
  opts={opts}  
                   
/>
<h1></h1>
</div>
)
}

export default MainContentVideo;