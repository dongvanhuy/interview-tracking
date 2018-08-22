import { handleActions } from 'redux-actions';
import { PROFILEDETAILS_LOAD_SUCCESS, PROFILEDETAILS_PATCH } from '../../store/actionTypes';

const initialState = {
    dataProfileDetails: [],
    dataProfilePatch: [],
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
};

export default handleActions(actions, initialState);
