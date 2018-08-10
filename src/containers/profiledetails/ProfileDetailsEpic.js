import { combineEpics } from 'redux-observable';
import { PROFILEDETAILS_LOAD } from '../../store/actionTypes';
import { loadProfileDetailsSuccess } from './ProfileDetailsAction';

export const loadProfileDetailsEpic = (action$, store, { loadProfileDetailsService }) => action$.ofType(PROFILEDETAILS_LOAD)
    .switchMap(() => loadProfileDetailsService()
        .map(res => loadProfileDetailsSuccess(res))
        .catch(err => console.log(err)));

export default combineEpics(loadProfileDetailsEpic);
