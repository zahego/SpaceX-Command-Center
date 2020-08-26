import { Display_Weather_API } from './AllActionsType';
import { Weather_API_reducer } from '../Reducers/WeatherAPIReducers';

export const displayWeatherAPI = Weather_API_reducer => ({
    type: Display_Weather_API,
    payload: { Weather_API_reducer }
});