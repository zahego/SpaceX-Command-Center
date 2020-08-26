import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import {
    thunkDisplaySpaceXAPIAllLanuches,
    thunkSearchSpaceXAPILaunch,
    thunkSearchSpaceXAPIRocket,
    thunkDisplaySpaceXAPIRocket
} from '../../../Thunk/SpaceXThunk';
import "../../../Styles/Content.css";
import "../../../Styles/MainContent.css";
import Input from '@material-ui/core/Input';
import SplitButton from './Button';
import Button from '@material-ui/core/Button';
import FlightIcon from '@material-ui/icons/Flight';


const LaunchContent = ({ SpaceX_API_reducer = [], SpaceX_API_reducer_Rocket = [], onOpenLoad, onOpenLoadRocket, onButtonLoad, onButtonLoadRocket }) => {
    const handleInput = (e) => {
        setLaunchInput(e.target.value);
    }
    const handleInputRocket = (e) => {
        setLaunchInputRocket(e.target.value);
    }
    /*
        const handleInputButton = (e) => {
            setLaunchButtonInput(e.target.value);
        }*/

    const options = ["mission_name", "flight_number"]
    const [launchInput, setLaunchInput] = useState("");
    const [launchInputRocket, setLaunchInputRocket] = useState("");
    //const [launchButtonInput, setLaunchButtonInput] = useState("");
    useEffect(() => { onOpenLoad(); onOpenLoadRocket() }, []);
    let nums = [0, 1, 2], nums2 = [0, 1, 2];

    if (SpaceX_API_reducer.length <= 3) {
        nums = [0];
    }
    if (SpaceX_API_reducer_Rocket.length <= 3) {
        nums2 = [0];
    }
    let image = null;
    let image2 = null;
    if (typeof (SpaceX_API_reducer[0]) !== "undefined" && typeof (SpaceX_API_reducer_Rocket[0]) !== "undefined") {
        let image = SpaceX_API_reducer[0].links.flickr_images[0];
        let image2 = SpaceX_API_reducer_Rocket[0].flickr_images[0];
    }
    typeof image === "undefined" || image == null ? image = `https://images2.imgbox.com/57/6a/upI6gwfq_o.png` : image = image
    typeof image2 === "undefined" || image2 == null ? image2 = `https://images2.imgbox.com/40/e3/GypSkayF_o.png` : image2 = image2
    return (
        <div style={{textAlign:"center", paddingTop: "40px"}}>
            <h2><FlightIcon/>  Search for newest launch and rocket information  <FlightIcon/></h2>
            <div className="launch-content" id="launch-content">
                {typeof (SpaceX_API_reducer[0]) !== "undefined" ?
                    <div className="ownDiv-launch">
                        <div style={{ textAlign: "center" }}>
                            <Input onChange={e => { handleInput(e) }} style={{ paddingTop: "10px", marginBottom: "10px" }} />
                            {/*<SplitButton options={options} onClick={e => {handleInputButton(e)}}/>*/}
                            <Button variant="contained" color="primary" onClick={() => onButtonLoad({ data_type: "", keyword: launchInput })}>Submit</Button>
                        </div>
                        {nums.map(num =>
                            <div key={num} >
                                <div>
                                    <img src={image} style={{ height: "150px", width: "150px" }}></img>
                                </div>
                                <p>Mission Name:{SpaceX_API_reducer[num].mission_name}</p>
                                <p>Rocket Name: {SpaceX_API_reducer[num].rocket.rocket_name}</p>
                                <p>Date: {SpaceX_API_reducer[num].launch_date_utc}</p>
                                <p>Location: {SpaceX_API_reducer[num].launch_site.site_name_long}</p>
                            </div>)}
                    </div> : <div />}
                {typeof (SpaceX_API_reducer_Rocket[0]) !== "undefined" ?
                    <div className="ownDiv-rocket">
                        <Input onChange={e => { handleInputRocket(e) }} style={{ paddingTop: "10px", marginBottom: "10px" }} />
                        <Button variant="contained" color="primary" onClick={() => onButtonLoadRocket({ data_type: "", keyword: launchInputRocket })}>Submit</Button>
                        {nums2.map(num =>
                            <div key={num}>
                                <div>
                                    <img src={image2} style={{ height: "150px", width: "150px" }}></img>
                                </div>
                                <p>Rocket Name:{SpaceX_API_reducer_Rocket[num].rocket_name}</p>
                                <p>Height: {SpaceX_API_reducer_Rocket[num].height.meters}m, Mass:{SpaceX_API_reducer_Rocket[num].mass.kg}kg</p>
                                <p>First Flight: {SpaceX_API_reducer_Rocket[num].first_flight}</p>
                                <p>Location: {SpaceX_API_reducer_Rocket[num].country}</p>
                            </div>)}
                    </div> : <div />}
            </div>
        </div>
    )
}
const mapStateToProps = state => (
    console.log(state.SpaceX_API_reducer), {
        SpaceX_API_reducer: state.SpaceX_API_reducer.ownDiv,
        SpaceX_API_reducer_Rocket: state.SpaceX_API_reducer.ownDivRocket,
    });
//may not need this yet if only read and not change data
const mapDispatchToProps = dispatch => ({
    onOpenLoad: () => dispatch(thunkDisplaySpaceXAPIAllLanuches()),
    onOpenLoadRocket: () => dispatch(thunkDisplaySpaceXAPIRocket()),
    onButtonLoad: ({ data_type, keyword }) => dispatch(thunkSearchSpaceXAPILaunch({ data_type, keyword })),
    onButtonLoadRocket: ({ data_type, keyword }) => dispatch(thunkSearchSpaceXAPIRocket({ data_type, keyword })),
});
export default connect(mapStateToProps, mapDispatchToProps)(LaunchContent);



