import { Display_News_API } from './AllActionsType';
import { News_API_reducer } from './../Reducers/NewsAPIReducers';

export const displayNewsAPI = News_API_reducer => ({
    type: Display_News_API,
    payload: { News_API_reducer }
});