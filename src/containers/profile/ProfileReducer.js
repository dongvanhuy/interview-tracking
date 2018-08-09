import { handleActions } from 'redux-actions';
import { PROFILE_LOAD_SUCCESS } from '../../store/actionTypes';

const initialState = {
    dataUser: [],
};

const actions = {
    [PROFILE_LOAD_SUCCESS]: (state, { payload }) => ({
        ...state,
        dataProfile: payload.data,
    }),
};

export default handleActions(actions, initialState);
