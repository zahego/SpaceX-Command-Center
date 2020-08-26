import {Display_Job_API} from "../Actions/AllActionsType";

//this will be necessary when need some more loading
const selectorInitialState=[];

export const Job_API_reducer= (state =selectorInitialState, action)=>{
    const {type, payload }=action;
    switch(type){
        
        case Display_Job_API:{
            const {Job_API_reducer}=payload;
            state=state.concat(Job_API_reducer);
            return state;
        }
        default: return state;
    }
}