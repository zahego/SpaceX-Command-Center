import {displayJobAPI} from "../Actions/JobAPIActions";
import {fetchSearchedJob} from "../API/JobAPI";


export const thunkDisplayJobAPI=()=>
    async dispatch=>{
        
        return fetchSearchedJob("SpaceX")
        .then((data)=>{
            dispatch(displayJobAPI(data));
        })
        .catch((e)=>{
            console.log("error from job thunk "+e);
        })
    }
