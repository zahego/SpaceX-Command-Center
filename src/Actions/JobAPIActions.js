import { Display_Job_API } from './AllActionsType';
import { Job_API_reducer } from './../Reducers/JobAPIReducers';

export const displayJobAPI = Job_API_reducer => ({
    type: Display_Job_API,
    payload: { Job_API_reducer }
});