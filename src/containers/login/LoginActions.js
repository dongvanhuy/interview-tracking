import { createAction } from 'redux-actions';
import { LOGIN_SUCCESS, LOGIN_CHECK } from '../../store/actionTypes';

export const loginCheck = createAction(LOGIN_CHECK);
export const loginSuccess = createAction(LOGIN_SUCCESS);
