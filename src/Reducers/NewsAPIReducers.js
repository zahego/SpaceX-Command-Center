import {Display_News_API} from "../Actions/AllActionsType";

//this will be necessary when need some more loading
const selectorInitialState=[];

export const News_API_reducer= (state =selectorInitialState, action)=>{
    const {type, payload }=action;
    switch(type){
        
        case Display_News_API:{
            const {News_API_reducer}=payload;
            state=state.concat(News_API_reducer);
            return state;
        }
        default: return state;
    }
}