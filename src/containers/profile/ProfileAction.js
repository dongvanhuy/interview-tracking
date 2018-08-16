import { createAction } from 'redux-actions';
import { PROFILE_LOAD, PROFILE_LOAD_SUCCESS, VIEW_DETAIL_DATA_ID, ADD_PROFILE, PROFILE_LOAD_THISWEEK, PROFILE_LOAD_SUCCESS_THISWEEK } from '../../store/actionTypes';


export const loadProfile = createAction(PROFILE_LOAD);
export const loadProfileSuccess = createAction(PROFILE_LOAD_SUCCESS);
export const loadProfileThisWeek = createAction(PROFILE_LOAD_THISWEEK);
export const loadProfileThisWeekSuccess = createAction(PROFILE_LOAD_SUCCESS_THISWEEK);
export const viewDetailDataId = createAction(VIEW_DETAIL_DATA_ID);
export const addProfile = createAction(ADD_PROFILE);
