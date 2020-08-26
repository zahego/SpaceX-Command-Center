import {
    displaySpaceXAPIALLLaunches,
    displaySpaceXAPIALLLaunchesLatest,
    searchSpaceXAPILaunch,
    searchSpaceXAPIRocket,
    displaySpaceXAPIALLLRocket
} from "../Actions/SpaceXAPIActions";
import {
    fetchSpaceXLaunch,
    searchSpaceXLaunch,
    searchSpaceXRocket,
    fetchSpaceXRocket
} from "../API/SpaceXAPI";


export const thunkDisplaySpaceXAPIAllLanuches = (timeline) =>
    async dispatch => {

        return fetchSpaceXLaunch(timeline)
            //almost make a mistake with ({data}), possibly because {} syntax is for multiple objects while there is only 1 object return
            .then((data) => {
                dispatch(displaySpaceXAPIALLLaunches(data));
            })
            .catch((e) => {
                console.log("error from thunk " + e);
            })
    }

export const thunkDisplaySpaceXAPIAllLanuchesLatest = (timeline) =>
    async dispatch => {

        return fetchSpaceXLaunch(timeline)
            //almost make a mistake with ({data}), possibly because {} syntax is for multiple objects while there is only 1 object return
            .then((data) => {
                dispatch(displaySpaceXAPIALLLaunchesLatest(data));
            })
            .catch((e) => {
                console.log("error from thunk " + e);
            })
    }

export const thunkSearchSpaceXAPILaunch = ({ data_type, keyword }) =>
    async dispatch => {
        if (keyword === "") {
            return fetchSpaceXLaunch()
                .then((data) => {
                    dispatch(displaySpaceXAPIALLLaunches(data));
                })
                .catch((e) => {
                    console.log("error from thunk " + e);
                })
        }
        else{
        const searchKeywords = { data_type: "mission_name", keyword: keyword };
        return searchSpaceXLaunch(searchKeywords)
            .then((data) => {
                dispatch(searchSpaceXAPILaunch(data));
            })
            .catch((e) => {
                console.log("error from thunk " + e);
            })
        }
    }


export const thunkDisplaySpaceXAPIRocket = () =>
    async dispatch => {

        return fetchSpaceXRocket().then((data) => {
                dispatch(displaySpaceXAPIALLLRocket(data));
            })
            .catch((e) => {
                console.log("error from thunk " + e);
            })
    }

export const thunkSearchSpaceXAPIRocket = ({ data_type, keyword }) =>
    async dispatch => {
        if (keyword === "") {
            return fetchSpaceXRocket()
                .then((data) => {
                    dispatch(displaySpaceXAPIALLLRocket(data));
                })
                .catch((e) => {
                    console.log("error from thunk " + e);
                })
        }
        else{
        const searchKeywords = { data_type: "rocket_name", keyword: keyword };
        return searchSpaceXRocket(searchKeywords)
            .then((data) => {
                dispatch(searchSpaceXAPIRocket(data));
            })
            .catch((e) => {
                console.log("error from thunk " + e);
            })
        }
    }