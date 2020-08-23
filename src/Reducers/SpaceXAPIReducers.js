import {Display_SpaceX_API_All_Launches} from "../Actions/AllActionsType";

//this will be necessary when need some more loading
const selectorInitialState=[];

export const SpaceX_API_reducer= (state =selectorInitialState, action)=>{
    const {type, payload }=action;

    switch(type){
        case Display_SpaceX_API_All_Launches:{
            const {reduceTodo}=payload;
            return state.concat(reduceTodo);
        }
        default: return state;
    }
}