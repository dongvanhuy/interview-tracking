import { handleActions } from 'redux-actions';
import { PROFILEDETAILS_LOAD_SUCCESS, PROFILEDETAILS_PATCH, PROFILEDETAILS_POST } from '../../store/actionTypes';

const initialState = {
    dataProfileDetails: [],
    dataProfilePatch: [],
    dataProfilePost: [],
};

const actions = {
    [PROFILEDETAILS_LOAD_SUCCESS]: (state, { payload }) => ({
        ...state,
        dataProfileDetails: payload.data,
    }),
    [PROFILEDETAILS_PATCH]: (state, { payload }) => ({
        ...state,
        dataProfilePatch: payload,
    }),
    [PROFILEDETAILS_POST]: (state, { payload }) => ({
        ...state,
        dataProfilePost: payload,
    }),
};

export default handleActions(actions, initialState);
