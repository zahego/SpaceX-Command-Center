import { Display_News_API } from './AllActionsType';

export const displayNewsAPI = News_API_reducer => ({
    type: Display_News_API,
    payload: { News_API_reducer }
});