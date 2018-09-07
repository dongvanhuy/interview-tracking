import { handleActions } from 'redux-actions';
import { PROFILE_LOAD_SUCCESS, VIEW_DETAIL_DATA_ID, ADD_PROFILE, PROFILE_LOAD_SUCCESS_THISWEEK, PROFILE_LOAD_SUCCESS_THISMONTH } from '../../store/actionTypes';

const initialState = {
    dataProfile: [],
    dataProfileThisWeek: [],
    dataProfileThisMonth: [],
    profileSelectedId: null,
    addProfileDetail: {},
    statusCode: {},
};

const actions = {
    [PROFILE_LOAD_SUCCESS]: (state, { payload }) => ({
        ...state,
        dataProfile: payload.data,
        statusCode: payload.status,
    }),

    [PROFILE_LOAD_SUCCESS_THISWEEK]: (state, { payload }) => ({
        ...state,
        dataProfileThisWeek: payload.data,
    }),

    [PROFILE_LOAD_SUCCESS_THISMONTH]: (state, { payload }) => ({
        ...state,
        dataProfileThisMonth: payload.data,
    }),

    [VIEW_DETAIL_DATA_ID]: (state, { payload }) => ({
        ...state,
        profileSelectedId: payload,
    }),

    [ADD_PROFILE]: (state) => ({
        ...state,
        profileSelected: null,
    }),
};

export default handleActions(actions, initialState);
