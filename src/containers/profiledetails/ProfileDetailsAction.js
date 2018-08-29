import { createAction } from 'redux-actions';
import { PROFILEDETAILS_LOAD, PROFILEDETAILS_LOAD_SUCCESS, PROFILE_DETAILS_PATCH_SUCCESS, RESET_PROFILE_DETAILS_DATA, PROFILEDETAILS_POST, PROFILEDETAILS_PATCH, CLOSE_MODAL_SUCCESS } from '../../store/actionTypes';

export const loadProfileDetails = createAction(PROFILEDETAILS_LOAD);
export const loadProfileDetailsSuccess = createAction(PROFILEDETAILS_LOAD_SUCCESS);

export const patchProfileDetailsSuccess = createAction(PROFILE_DETAILS_PATCH_SUCCESS);
export const patchProfileDetails = createAction(PROFILEDETAILS_PATCH);
export const postProfileDetails = createAction(PROFILEDETAILS_POST);

export const resetStateProfileDetail = createAction(RESET_PROFILE_DETAILS_DATA);

export const resetModalSuccess = createAction(CLOSE_MODAL_SUCCESS);
