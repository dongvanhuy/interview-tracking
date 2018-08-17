import { handleActions } from 'redux-actions';
import { PROFILEDETAILS_LOAD_SUCCESS, PROFILEDETAILS_PATH } from '../../store/actionTypes';

const initialState = {
    dataProfileDetails: [],
    dataProfilePath: [],
};

const actions = {
    [PROFILEDETAILS_LOAD_SUCCESS]: (state, { payload }) => ({
        ...state,
        dataProfileDetails: payload.data,
    }),
    [PROFILEDETAILS_PATH]: (state, { payload }) => ({
        ...state,
        dataProfilePath: payload,
    }),
};

export default handleActions(actions, initialState);
