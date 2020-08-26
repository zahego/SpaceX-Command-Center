import {displayWeatherAPI} from "../Actions/WeatherAPIActions";
import {fetchSearchedWeather} from "../API/WeatherAPI";


export const thunkDisplayWeatherAPI=(area)=>
    async dispatch=>{
        
        return fetchSearchedWeather(area)
        .then((data)=>{
            dispatch(displayWeatherAPI(data));
        })
        .catch((e)=>{
            console.log("error from Weather thunk "+e);
        })
    }
