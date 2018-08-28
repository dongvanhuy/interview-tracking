import { handleActions } from 'redux-actions';
import { PROFILEDETAILS_LOAD_SUCCESS, PROFILE_DETAILS_PATCH_SUCCESS, RESET_PROFILE_DETAILS_DATA, PROFILEDETAILS_POST, PROFILEDETAILS_PATCH, CLOSE_MODAL_SUCCESS } from '../../store/actionTypes';

const initialState = {
    dataProfileDetails: [],
    dataProfilePatch: [],
    dataProfilePost: [],
    updateSuccess: false,
};

const actions = {
    [PROFILEDETAILS_LOAD_SUCCESS]: (state, { payload }) => ({
        ...state,
        dataProfileDetails: payload.data,
    }),
    [PROFILE_DETAILS_PATCH_SUCCESS]: (state, { payload }) => ({
        ...state,
        dataProfilePatch: payload,
        updateSuccess: true,
    }),
    [PROFILEDETAILS_POST]: (state, { payload }) => ({
        ...state,
        dataProfilePost: payload,
        updateSuccess: true,
    }),
    [PROFILEDETAILS_PATCH]: (state) => ({
        ...state,
        updateSuccess: true,
    }),
    [CLOSE_MODAL_SUCCESS]: (state) => ({
        ...state,
        updateSuccess: false,
    }),
    [RESET_PROFILE_DETAILS_DATA]: (state) => ({
        ...state,
        dataProfileDetails: [],
    }),
};

export default handleActions(actions, initialState);
