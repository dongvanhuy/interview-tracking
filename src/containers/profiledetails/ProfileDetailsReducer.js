import { handleActions } from 'redux-actions';
import { PROFILEDETAILS_LOAD_SUCCESS } from '../../store/actionTypes';

const initialState = {
    dataProfileDetails: [],
};

const actions = {
    [PROFILEDETAILS_LOAD_SUCCESS]: (state, { payload }) => ({
        ...state,
        dataProfileDetails: payload.data,
    }),
};

export default handleActions(actions, initialState);
