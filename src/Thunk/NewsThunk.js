import {displayNewsAPI} from "../Actions/NewsAPIActions";
import {fetchSearchedNews} from "../API/NewsAPI";


export const thunkDisplayNewsAPI=()=>
    async dispatch=>{
        
        return fetchSearchedNews("spaceX")
        .then((data)=>{
            dispatch(displayNewsAPI(data));
        })
        .catch((e)=>{
            console.log("error from news thunk "+e);
        })
    }
