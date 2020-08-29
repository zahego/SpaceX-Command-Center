import React, {useEffect } from 'react';
import { connect } from 'react-redux';
import { thunkDisplaySpaceXAPIAllLanuchesLatest } from '../../../Thunk/SpaceXThunk';
import "../../../Styles/Content.css";
import "../../../Styles/MainContent.css";
import Countdown from "react-countdown";
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';

const MainContentLaunch = ({ SpaceX_API_reducer = [], onOpenLoad }) => {
    useEffect(() => { onOpenLoad() }, [onOpenLoad]);
    if (typeof (SpaceX_API_reducer[0]) !== "undefined") {
        let bg_img=SpaceX_API_reducer[0].links.flickr_images[0];
        if(typeof bg_img==='undefined'){
           bg_img= "https://live.staticflickr.com/65535/50241845831_9a7412e81d_o.jpg";
        }
        return (
            <div className="main-content-launch">
                <div className="main-content-lanuch-banner" style={{backgroundImage:`url(${bg_img})`}}>
                    <div className="count-down">
                <Countdown date={new Date(SpaceX_API_reducer[0].launch_date_unix*1000 ).toLocaleString() } />
                <ArrowDropUpIcon style={{ fontSize: 70 }}/>
                </div>
                </div>
                <h2>New Mission: {SpaceX_API_reducer[0].mission_name}</h2>
                <h4>Rocket Name: {SpaceX_API_reducer[0].rocket.rocket_name}</h4>
                <p>Launch Date: {SpaceX_API_reducer[0].launch_date_utc}</p>
                <h6>Launch Site: {SpaceX_API_reducer[0].launch_site.site_name_long}</h6>
            </div>
        )
    }
    else {
        return (
            <div className="main-content-launch"></div>
        )
    }
}
const mapStateToProps = state => ({
    SpaceX_API_reducer: state.SpaceX_API_reducer.topBanner,
});
//may not need this yet if only read and not change data
const mapDispatchToProps = dispatch => ({
    onOpenLoad: () => dispatch(thunkDisplaySpaceXAPIAllLanuchesLatest("upcoming")),
    
});
export default connect(mapStateToProps, mapDispatchToProps)(MainContentLaunch);