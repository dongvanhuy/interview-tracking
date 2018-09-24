import { handleActions } from 'redux-actions';
import {
    PROFILE_DETAILS_LOAD,
    PROFILE_DETAILS_LOAD_SUCCESS,
    PROFILE_DETAILS_LOAD_FAIL,
    PROFILE_DETAILS_UPDATE,
    PROFILE_DETAILS_UPDATE_SUCCESS,
    PROFILE_DETAILS_UPDATE_FAIL,
    PROFILE_DETAILS_CREATE,
    PROFILE_DETAILS_CREATE_SUCCESS,
    RESET_PROFILE_DETAILS_DATA,
    CLOSE_MODAL_SUCCESS,
    GET_USERS,
    GET_USERS_SUCCESS,
    GET_USERS_FAILED,
} from '../../store/actionTypes';

const initialState = {
    dataProfileDetails: [],
    dataProfileUpdate: {},
    dataProfilePost: {},
    dataProfileRes: {},
    doSuccessfully: null,
    loadingDetail: false,
    users: [],
};

const actions = {
    [PROFILE_DETAILS_LOAD]: (state) => ({
        ...state,
        loadingDetail: true,
        dataProfileDetails: [],
    }),
    [PROFILE_DETAILS_LOAD_SUCCESS]: (state, { payload }) => ({
        ...state,
        loadingDetail: false,
        dataProfileDetails: payload.data,
    }),

    [PROFILE_DETAILS_LOAD_FAIL]: (state, { payload }) => ({
        ...state,
        loadingDetail: false,
        statusCode: payload,
        dataProfileDetails: [],
    }),

    [PROFILE_DETAILS_UPDATE]: (state) => ({
        ...state,
        doSuccessfully: null,
    }),

    [PROFILE_DETAILS_UPDATE_SUCCESS]: (state, { payload }) => ({
        ...state,
        dataProfileUpdate: payload,
        doSuccessfully: true,
    }),

    [PROFILE_DETAILS_UPDATE_FAIL]: (state, { payload }) => ({
        ...state,
        statusCode: payload,
        doSuccessfully: false,
    }),

    [PROFILE_DETAILS_CREATE]: (state, { payload }) => ({
        ...state,
        doSuccessfully: null,
        dataProfilePost: payload,
    }),
    [PROFILE_DETAILS_CREATE_SUCCESS]: (state, { payload }) => ({
        ...state,
        dataProfileRes: payload,
        doSuccessfully: true,
    }),

    [CLOSE_MODAL_SUCCESS]: state => ({
        ...state,
        doSuccessfully: false,
    }),

    [RESET_PROFILE_DETAILS_DATA]: state => ({
        ...state,
        dataProfileDetails: [],
    }),
    [GET_USERS]: state => ({
        ...state,
        users: [],
    }),
    [GET_USERS_SUCCESS]: (state, { payload }) => ({
        ...state,
        users: payload,
    }),
    [GET_USERS_FAILED]: state => ({
        ...state,
        users: [],
    }),
};

export default handleActions(actions, initialState);
