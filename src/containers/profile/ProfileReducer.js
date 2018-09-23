import { handleActions } from 'redux-actions';
import {
    VIEW_DETAIL_DATA_ID,
    PROFILE_LOAD_SUCCESS,
    PROFILE_LOAD,
    PROFILE_LOAD_FAIL,
    PROFILE_THISWEEK_LOAD_SUCCESS,
    PROFILE_THISWEEK_LOAD_FAIL,
    PROFILE_THISMONTH_LOAD_SUCCESS,
    PROFILE_THISMONTH_LOAD_FAIL,
    PROFILE_THISOTHER_LOAD_SUCCESS,
    PROFILE_THISOTHER_LOAD_FAIL,
    PROFILE_ID_DELETE_SUCCESS,
} from '../../store/actionTypes';

const initialState = {
    dataProfile: [],
    dataProfileThisWeek: [],
    dataProfileThisMonth: [],
    dataProfileThisOther: [],
    profileSelectedId: null,
    dataRes: {},
    isLoadingToday: false,
    isLoadingWeek: false,
    isLoadingMonth: false,
    isLoadingOther: false,
    loadDataFailed: false,
};

const actions = {
    [PROFILE_LOAD]: state => ({
        ...state,
        isLoadingToday: true,
        isLoadingWeek: true,
        isLoadingMonth: true,
        isLoadingOther: true,
    }),

    [PROFILE_LOAD_SUCCESS]: (state, { payload }) => ({
        ...state,
        dataProfile: payload.data,
        isLoadingToday: false,
    }),

    [PROFILE_LOAD_FAIL]: (state, { payload }) => ({
        ...state,
        isLoadingToday: false,
        loadDataFailed: true,
    }),

    [PROFILE_THISWEEK_LOAD_SUCCESS]: (state, { payload }) => ({
        ...state,
        isLoadingWeek: false,
        dataProfileThisWeek: payload.data,
    }),

    [PROFILE_THISWEEK_LOAD_FAIL]: (state, { payload }) => ({
        ...state,
        isLoadingWeek: false,
        loadDataFailed: true,
    }),

    [PROFILE_THISMONTH_LOAD_SUCCESS]: (state, { payload }) => ({
        ...state,
        isLoadingMonth: false,
        dataProfileThisMonth: payload.data,
    }),

    [PROFILE_THISMONTH_LOAD_FAIL]: (state, { payload }) => ({
        ...state,
        isLoadingMonth: false,
        loadDataFailed: true,
    }),

    [PROFILE_THISOTHER_LOAD_SUCCESS]: (state, { payload }) => ({
        ...state,
        isLoadingOther: false,
        dataProfileThisOther: payload.data,
    }),

    [PROFILE_THISOTHER_LOAD_FAIL]: (state, { payload }) => ({
        ...state,
        isLoadingOther: false,
        loadDataFailed: true,
    }),

    [VIEW_DETAIL_DATA_ID]: (state, { payload }) => ({
        ...state,
        profileSelectedId: payload,
    }),

    [PROFILE_ID_DELETE_SUCCESS]: (state, { payload }) => ({
        ...state,
        dataRes: payload,
    }),
};

export default handleActions(actions, initialState);
