import { createAction } from 'redux-actions';
import { PROFILE_LOAD, PROFILE_LOAD_SUCCESS, VIEW_DETAIL_DATA_ID, ADD_PROFILE, PROFILE_LOAD_THISWEEK, PROFILE_LOAD_SUCCESS_THISWEEK, PROFILE_LOAD_THISMONTH, PROFILE_LOAD_SUCCESS_THISMONTH, PROFILE_LOAD_THISOTHER, PROFILE_LOAD_SUCCESS_THISOTHER  } from '../../store/actionTypes';


export const loadProfile = createAction(PROFILE_LOAD);
export const loadProfileSuccess = createAction(PROFILE_LOAD_SUCCESS);
export const loadProfileThisWeek = createAction(PROFILE_LOAD_THISWEEK);
export const loadProfileThisWeekSuccess = createAction(PROFILE_LOAD_SUCCESS_THISWEEK);
export const loadProfileThisMonth = createAction(PROFILE_LOAD_THISMONTH);
export const loadProfileThisMonthSuccess = createAction(PROFILE_LOAD_SUCCESS_THISMONTH);
export const loadProfileThisOther = createAction(PROFILE_LOAD_THISOTHER);
export const loadProfileThisOtherSuccess = createAction(PROFILE_LOAD_SUCCESS_THISOTHER);
export const viewDetailDataId = createAction(VIEW_DETAIL_DATA_ID);
export const addProfile = createAction(ADD_PROFILE);
