import { handleActions } from 'redux-actions';
import { LOGIN_SUCCESS } from '../../store/actionTypes';

const initialState = {
    dataLogin: [],
};

const actions = {
    [LOGIN_SUCCESS]: (state, { payload }) => ({
        ...state,
        dataLogin: payload.data,
    }),
};

export default handleActions(actions, initialState);
