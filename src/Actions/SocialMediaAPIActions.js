import { Display_SocialMedia_API_SpaceX } from './AllActionsType';
import { SocialMedia_API_reducer } from '../Reducers/SocialMediaAPIReducers';

export const displaySocialMediaAPI = SocialMedia_API_reducer => ({
    type: Display_SocialMedia_API_SpaceX,
    payload: { SocialMedia_API_reducer }
});