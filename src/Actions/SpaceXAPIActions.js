//action is just a json object. Each object contain an action name
//and payload which is essentially props
//imagine go to the store, the "action" to get the data out, then change it in "reducers"
import {
    Display_SpaceX_API_All_Launches,
    Display_SpaceX_API_All_Launches_Latest,
    Search_SPaceX_API_Launch,
    Display_SpaceX_API_Rockets,
    Search_SpaceX_API_Rocket
} from './AllActionsType';
import { SpaceX_API_reducer } from './../Reducers/SpaceXAPIReducers';

//pass the payload to reducer for change
//why not just skip the action and deliver the props directly to the reducer for change I wonder?
//probably for better separation. Answer will be discover through experience mostly
export const displaySpaceXAPIALLLaunchesLatest = SpaceX_API_reducer => ({
    type: Display_SpaceX_API_All_Launches_Latest,
    payload: { SpaceX_API_reducer }
});

export const searchSpaceXAPILaunch = SpaceX_API_reducer => ({
    type: Search_SPaceX_API_Launch,
    payload: { SpaceX_API_reducer }
});

export const displaySpaceXAPIALLLaunches = SpaceX_API_reducer => ({
    type: Display_SpaceX_API_All_Launches,
    payload: { SpaceX_API_reducer }
});

export const searchSpaceXAPIRocket = SpaceX_API_reducer => ({
    type: Search_SpaceX_API_Rocket,
    payload: { SpaceX_API_reducer }
});

export const displaySpaceXAPIALLLRocket = SpaceX_API_reducer => ({
    type: Display_SpaceX_API_Rockets,
    payload: { SpaceX_API_reducer }
});