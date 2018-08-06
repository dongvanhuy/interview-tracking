import { createAction } from 'redux-actions';
import { LOGIN_SUCCESS, LOGIN_FAIL } from '../../store/actionTypes';


export const loginSuccess = createAction(LOGIN_SUCCESS);
export const loginFail = createAction(LOGIN_FAIL);
