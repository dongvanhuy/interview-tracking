import { createAction } from 'redux-actions';
import {
    PROFILE_LOAD,
    PROFILE_LOAD_SUCCESS,
    PROFILE_LOAD_FAIL,
    VIEW_DETAIL_DATA_ID,
    PROFILE_THISWEEK_LOAD,
    PROFILE_THISWEEK_LOAD_SUCCESS,
    PROFILE_THISWEEK_LOAD_FAIL,
    PROFILE_THISMONTH_LOAD,
    PROFILE_THISMONTH_LOAD_SUCCESS,
    PROFILE_THISMONTH_LOAD_FAIL,
    PROFILE_THISOTHER_LOAD,
    PROFILE_THISOTHER_LOAD_SUCCESS,
    PROFILE_THISOTHER_LOAD_FAIL,
    PROFILE_ID_DELETE,
    PROFILE_ID_DELETE_SUCCESS,
} from '../../store/actionTypes';

export const loadProfile = createAction(PROFILE_LOAD);
export const loadProfileSuccess = createAction(PROFILE_LOAD_SUCCESS);
export const loadProfileFail = createAction(PROFILE_LOAD_FAIL);

export const loadProfileThisWeek = createAction(PROFILE_THISWEEK_LOAD);
export const loadProfileThisWeekSuccess = createAction(PROFILE_THISWEEK_LOAD_SUCCESS);
export const loadProfileThisWeekFail = createAction(PROFILE_THISWEEK_LOAD_FAIL);

export const loadProfileThisMonth = createAction(PROFILE_THISMONTH_LOAD);
export const loadProfileThisMonthSuccess = createAction(PROFILE_THISMONTH_LOAD_SUCCESS);
export const loadProfileThisMonthFail = createAction(PROFILE_THISMONTH_LOAD_FAIL);

export const viewDetailDataId = createAction(VIEW_DETAIL_DATA_ID);

export const deleteProfileId = createAction(PROFILE_ID_DELETE);
export const deleteProfileIdSuccess = createAction(PROFILE_ID_DELETE_SUCCESS);

export const loadProfileThisOther = createAction(PROFILE_THISOTHER_LOAD);
export const loadProfileThisOtherSuccess = createAction(PROFILE_THISOTHER_LOAD_SUCCESS);
export const loadProfileThisOtherFail = createAction(PROFILE_THISOTHER_LOAD_FAIL);
