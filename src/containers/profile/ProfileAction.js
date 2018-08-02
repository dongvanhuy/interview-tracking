import { createAction } from 'redux-actions';
import { PROFILE_LOAD, PROFILE_LOAD_SUCCESS } from '../../store/actionTypes';


export const loadProfile = createAction(PROFILE_LOAD);
export const loadProfileSuccess = createAction(PROFILE_LOAD_SUCCESS);
