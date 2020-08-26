import {Display_Weather_API} from "../Actions/AllActionsType";

//this will be necessary when need some more loading
const selectorInitialState=[];

export const Weather_API_reducer= (state =selectorInitialState, action)=>{
    const {type, payload }=action;
    switch(type){
        case Display_Weather_API:{
            const {Weather_API_reducer}=payload;
            state=state.concat(Weather_API_reducer);
            return state;
        }
        default: return state;
    }
}