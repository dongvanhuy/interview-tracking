import { combineEpics } from 'redux-observable';
import { LOGIN_CHECK } from '../../store/actionTypes';
import { loginSuccess } from './LoginActions';

export const loadLoginEpic = (action$, store, { checkUserService }) =>
    action$.ofType(LOGIN_CHECK).switchMap(() =>
        checkUserService()
            .map(res => loginSuccess(res))
            .catch(err => console.log(err)));

export default combineEpics(loadLoginEpic);
