import { handleActions } from 'redux-actions';
import {
    PROFILE_DETAILS_LOAD_SUCCESS,
    PROFILE_DETAILS_LOAD_FAIL,
    PROFILE_DETAILS_UPDATE_SUCCESS,
    PROFILE_DETAILS_UPDATE_FAIL,
    PROFILE_DETAILS_CREATE_SUCCESS,
    PROFILE_DETAILS_CREATE_FAIL,
    RESET_PROFILE_DETAILS_DATA,
    CLOSE_MODAL_SUCCESS,
} from '../../store/actionTypes';

const initialState = {
    dataProfileDetails: [],
    dataProfilePatch: [],
    dataProfilePost: [],
    dataProfileRes: {},
    updateSuccess: false,
    statusCode: {},
};

const actions = {
    [PROFILE_DETAILS_LOAD_SUCCESS]: (state, { payload }) => ({
        ...state,
        dataProfileDetails: payload.data,
    }),

    [PROFILE_DETAILS_LOAD_FAIL]: (state, { payload }) => ({
        ...state,
        statusCode: payload,
    }),

    [PROFILE_DETAILS_UPDATE_SUCCESS]: (state, { payload }) => ({
        ...state,
        dataProfilePatch: payload,
        updateSuccess: true,
    }),

    [PROFILE_DETAILS_UPDATE_FAIL]: (state, { payload }) => ({
        ...state,
        statusCode: payload,
    }),

    [PROFILE_DETAILS_CREATE_SUCCESS]: (state, { payload }) => ({
        ...state,
        dataProfileRes: payload,
        updateSuccess: true,
    }),

    [PROFILE_DETAILS_CREATE_FAIL]: (state, { payload }) => ({
        ...state,
        statusCode: payload,
    }),

    [CLOSE_MODAL_SUCCESS]: state => ({
        ...state,
        updateSuccess: false,
    }),

    [RESET_PROFILE_DETAILS_DATA]: state => ({
        ...state,
        dataProfileDetails: [],
    }),
};

export default handleActions(actions, initialState);
