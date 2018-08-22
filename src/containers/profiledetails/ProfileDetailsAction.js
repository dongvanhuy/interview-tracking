import { createAction } from 'redux-actions';
import { PROFILEDETAILS_LOAD, PROFILEDETAILS_LOAD_SUCCESS, PROFILEDETAILS_PATCH } from '../../store/actionTypes';

export const loadProfileDetails = createAction(PROFILEDETAILS_LOAD);
export const loadProfileDetailsSuccess = createAction(PROFILEDETAILS_LOAD_SUCCESS);

export const patchProfileDetails = createAction(PROFILEDETAILS_PATCH);
