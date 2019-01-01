import { handleActions } from 'redux-actions';
import { UPDATE_LOGIN_INFO } from '../../store/actionTypes';

const initialState = {
    email: '',
    userName: '',
    loginSuccess: false,
    accessToken: null,
};

const actions = {
    [UPDATE_LOGIN_INFO]: (state, { payload }) => ({
        ...payload,
    }),
};

export default handleActions(actions, initialState);
