import {
    Display_SpaceX_API_All_Launches_Latest,
    Search_SPaceX_API_Launch,
    Display_SpaceX_API_All_Launches,
    Display_SpaceX_API_Rockets,
    Search_SpaceX_API_Rocket
} from "../Actions/AllActionsType";

//this will be necessary when need some more loading
const selectorInitialState = { topBanner: [], ownDiv: [], ownDivRocket: [] };

export const SpaceX_API_reducer = (state = selectorInitialState, action) => {
    const { type, payload } = action;
    switch (type) {

        case Display_SpaceX_API_All_Launches_Latest: {
            const { SpaceX_API_reducer } = payload;
            return { ...state, topBanner: state.topBanner.concat(SpaceX_API_reducer) };
        }
        case Search_SPaceX_API_Launch: {
            const { SpaceX_API_reducer } = payload;
            return { ...state, ownDiv: state.ownDiv.filter(ownDivSmall => ownDivSmall.flight_number === SpaceX_API_reducer.flight_number) };
        }
        case Display_SpaceX_API_All_Launches: {
            const { SpaceX_API_reducer } = payload;
            return { ...state, ownDiv: state.ownDiv.concat(SpaceX_API_reducer) };
        }
        case Search_SpaceX_API_Rocket: {
            const { SpaceX_API_reducer } = payload;
            return { ...state, ownDivRocket: state.ownDivRocket.filter(ownDivSmall => ownDivSmall.id === SpaceX_API_reducer.id) };
        }
        case Display_SpaceX_API_Rockets: {
            const { SpaceX_API_reducer } = payload;
            return { ...state, ownDivRocket: state.ownDivRocket.concat(SpaceX_API_reducer) };
        }
        default: return state;
    }
}