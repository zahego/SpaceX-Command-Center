import React from "react";
import "../../Styles/RightNav.css";
import { Link } from "react-scroll";

export const RightNav=()=>{
    return(
        <div className="right-nav">
            <ul>
                <li><Link activeClass="active" to="main-content" smooth={true} spy={true} offset={-70} duration={500}>Main Content</Link></li>
                <li><Link activeClass="active" to="launch-content" smooth={true} spy={true} offset={-70} duration={500}>SpaceX info</Link></li>
                <li><Link activeClass="active" to="geo-content" smooth={true} spy={true} offset={-70} duration={500}>Geolocation</Link></li>
                <li><a href="https://weather.com/weather/hourbyhour/l/3be923e996779bcd5cacbed96ae5ec00a10509d102e79775a7fe822665c9fbd2">Weather</a></li>
                <li><a href="https://www.reddit.com/r/spacex/">Reddit</a></li>
                <li><Link activeClass="active" to="video-content" smooth={true} spy={true} offset={-70} duration={500}>Video</Link></li>
                <li><a href="https://www.bbc.co.uk/news/topics/c5y915pwp89t/spacex">News</a></li>
                <li><a href="https://www.alphavantage.co/query?function=OVERVIEW&symbol=TSL&apikey=88ABEOQGHD8LBYUF&fbclid=IwAR0EuCGB8A2ee-_FWdRmz7eQfTHvi9Pcw7j-m4uFh6As7nXghvcOeppoxek">Stock</a></li>
                <li><a href="https://www.indeed.com/cmp/Spacex/reviews">Job</a></li>
            </ul>
        </div>
    )
} 