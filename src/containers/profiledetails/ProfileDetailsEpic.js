import { combineEpics } from 'redux-observable';
import { PROFILEDETAILS_LOAD } from '../../store/actionTypes';
import { loadProfileDetailsSuccess } from './ProfileDetailsAction';

export const loadProfileDetailsEpic = (action$, store, { loadProfileDetailsService }) =>
    action$.ofType(PROFILEDETAILS_LOAD)
        .switchMap((action) => {
            const param = action.payload;
            return loadProfileDetailsService(param)
                .map(res => loadProfileDetailsSuccess(res))
                .catch(err => console.log(err));
        });
const pathProfileDetailsEpic = (action$, store, { pathProfileDetailsService }) =>
    action$.ofType(PROFILEDETAILS_LOAD)
        .switchMap((action) => {
            const param = action.payload;
            return pathProfileDetailsService(param)
                .map(res => loadProfileDetailsSuccess(res))
                .catch(err => console.log(err));
        });

export default combineEpics(loadProfileDetailsEpic, pathProfileDetailsEpic);
