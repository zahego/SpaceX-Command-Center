import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { thunkDisplayWeatherAPI } from '../../../Thunk/WeatherThunk';
import "../../../Styles/Content.css";
import "../../../Styles/MainContent.css";

const MainContentWeather = ({ Weather_API_reducer = [], onOpenLoad }) => {
    useEffect(() => { onOpenLoad("Hawthorne"); }, []);
    if (typeof (Weather_API_reducer[0]) !== "undefined") {

        return (
            <div className="main-content-weather">
                <img src={Weather_API_reducer[0].current.condition.icon} style={{width: "130px", height: "110px"}}></img>
                <h3>{Weather_API_reducer[0].current.temp_c}˚C</h3>
                <h6>{Weather_API_reducer[0].current.humidity}%</h6>
                <h6>{Weather_API_reducer[0].location.localtime}</h6>
                <p>{Weather_API_reducer[0].location.name}, {Weather_API_reducer[0].location.region}</p>
                
            </div>
        )
    }
    else {
        return (
            <div className="main-content-weather"></div>
        )
    }
}
const mapStateToProps = state => ({
    Weather_API_reducer: state.Weather_API_reducer,
});
//may not need this yet if only read and not change data
const mapDispatchToProps = dispatch => ({
    onOpenLoad: (area) => dispatch(thunkDisplayWeatherAPI(area)),
});
export default connect(mapStateToProps, mapDispatchToProps)(MainContentWeather);