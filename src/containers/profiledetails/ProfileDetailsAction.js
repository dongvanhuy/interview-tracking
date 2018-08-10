import { createAction } from 'redux-actions';
import { PROFILEDETAILS_LOAD, PROFILEDETAILS_LOAD_SUCCESS } from '../../store/actionTypes';

export const loadProfileDetails = createAction(PROFILEDETAILS_LOAD);
export const loadProfileDetailsSuccess = createAction(PROFILEDETAILS_LOAD_SUCCESS);
