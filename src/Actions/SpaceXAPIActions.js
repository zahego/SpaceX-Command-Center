//action is just a json object. Each object contain an action name
//and payload which is essentially props
//imagine go to the store, the "action" to get the data out, then change it in "reducers"
import { Display_SpaceX_API_All_Launches_Latest } from './AllActionsType';
import { SpaceX_API_reducer } from './../Reducers/SpaceXAPIReducers';

//pass the payload to reducer for change
//why not just skip the action and deliver the props directly to the reducer for change I wonder?
//probably for better separation. Answer will be discover through experience mostly
export const displaySpaceXAPIALLLaunchesLatest = SpaceX_API_reducer => ({
    type: Display_SpaceX_API_All_Launches_Latest,
    payload: { SpaceX_API_reducer }
});