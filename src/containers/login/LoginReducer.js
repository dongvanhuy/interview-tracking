import { handleActions } from 'redux-actions';
import { UPDATE_LOGIN_INFO } from '../../store/actionTypes';

const initialState = {
    email: '',
    givenName: '',
    surname: '',
    loginSuccess: false,
};

const actions = {
    [UPDATE_LOGIN_INFO]: (state, { payload }) => {
        return {
            ...payload,
        };
    },
};

export default handleActions(actions, initialState);
