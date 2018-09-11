import { handleActions } from 'redux-actions';
import {
    VIEW_DETAIL_DATA_ID,
    PROFILE_LOAD_SUCCESS,
    PROFILE_LOAD_FAIL,
    PROFILE_THISWEEK_LOAD_SUCCESS,
    PROFILE_THISWEEK_LOAD_FAIL,
    PROFILE_THISMONTH_LOAD_SUCCESS,
    PROFILE_THISMONTH_LOAD_FAIL,
    PROFILE_THISOTHER_LOAD_SUCCESS,
    PROFILE_THISOTHER_LOAD_FAIL,
} from '../../store/actionTypes';

const initialState = {
    dataProfile: [],
    dataProfileThisWeek: [],
    dataProfileThisMonth: [],
    dataProfileThisOther: [],
    profileSelectedId: null,
    statusCode: {},
    isLoad: true,
};

const actions = {
    [PROFILE_LOAD_SUCCESS]: (state, { payload }) => ({
        ...state,
        dataProfile: [],
        statusCode: payload.status,
        isLoad: false,
    }),

    [PROFILE_LOAD_FAIL]: (state, { payload }) => ({
        ...state,
        statusCode: payload,
    }),

    [PROFILE_THISWEEK_LOAD_SUCCESS]: (state, { payload }) => ({
        ...state,
        dataProfileThisWeek: payload.data,
    }),

    [PROFILE_THISWEEK_LOAD_FAIL]: (state, { payload }) => ({
        ...state,
        statusCode: payload,
    }),

    [PROFILE_THISMONTH_LOAD_SUCCESS]: (state, { payload }) => ({
        ...state,
        dataProfileThisMonth: payload.data,
    }),

    [PROFILE_THISMONTH_LOAD_FAIL]: (state, { payload }) => ({
        ...state,
        statusCode: payload,
    }),

    [PROFILE_THISOTHER_LOAD_SUCCESS]: (state, { payload }) => ({
        ...state,
        dataProfileThisOther: payload.data,
    }),

    [PROFILE_THISOTHER_LOAD_FAIL]: (state, { payload }) => ({
        ...state,
        statusCode: payload,
    }),

    [VIEW_DETAIL_DATA_ID]: (state, { payload }) => ({
        ...state,
        profileSelectedId: payload,
    }),
};

export default handleActions(actions, initialState);
