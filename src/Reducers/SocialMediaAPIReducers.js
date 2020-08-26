import {Display_SocialMedia_API_SpaceX} from "../Actions/AllActionsType";

//this will be necessary when need some more loading
const selectorInitialState=[];

export const SocialMedia_API_reducer= (state =selectorInitialState, action)=>{
    const {type, payload }=action;
    switch(type){
        case Display_SocialMedia_API_SpaceX:{
            const {SocialMedia_API_reducer}=payload;
            state=state.concat(SocialMedia_API_reducer);
            return state;
        }
        default: return state;
    }
}