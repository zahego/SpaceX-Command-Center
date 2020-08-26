import {displaySocialMediaAPI} from "../Actions/SocialMediaAPIActions";
import {fetchSearchedSocialMedia} from "../API/SocialMediaAPI";


export const thunkDisplaySocialMediaAPI=()=>
    async dispatch=>{
        
        return fetchSearchedSocialMedia("SpaceX")
        .then((data)=>{
            dispatch(displaySocialMediaAPI(data));
        })
        .catch((e)=>{
            console.log("error from SocialMedia thunk "+e);
        })
    }
