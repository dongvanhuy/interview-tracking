import { createAction } from 'redux-actions';
import {
    PROFILE_DETAILS_LOAD,
    PROFILE_DETAILS_LOAD_SUCCESS,
    PROFILE_DETAILS_LOAD_FAIL,
    PROFILE_DETAILS_PATCH,
    PROFILE_DETAILS_PATCH_SUCCESS,
    PROFILE_DETAILS_PATCH_FAIL,
    PROFILE_DETAILS_POST,
    PROFILE_DETAILS_POST_SUCCESS,
    PROFILE_DETAILS_POST_FAIL,
    RESET_PROFILE_DETAILS_DATA,
    CLOSE_MODAL_SUCCESS,
} from '../../store/actionTypes';

export const loadProfileDetails = createAction(PROFILE_DETAILS_LOAD);
export const loadProfileDetailsSuccess = createAction(PROFILE_DETAILS_LOAD_SUCCESS);
export const loadProfileDetailsFail = createAction(PROFILE_DETAILS_LOAD_FAIL);

export const patchProfileDetails = createAction(PROFILE_DETAILS_PATCH);
export const patchProfileDetailsSuccess = createAction(PROFILE_DETAILS_PATCH_SUCCESS);
export const patchProfileDetailsFail = createAction(PROFILE_DETAILS_PATCH_FAIL);

export const postProfileDetails = createAction(PROFILE_DETAILS_POST);
export const postProfileDetailsSuccess = createAction(PROFILE_DETAILS_POST_SUCCESS);
export const postProfileDetailsFail = createAction(PROFILE_DETAILS_POST_FAIL);

export const resetStateProfileDetail = createAction(RESET_PROFILE_DETAILS_DATA);

export const resetModalSuccess = createAction(CLOSE_MODAL_SUCCESS);
