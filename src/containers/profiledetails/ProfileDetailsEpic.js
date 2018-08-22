import { combineEpics } from 'redux-observable';
import { PROFILEDETAILS_LOAD, PROFILEDETAILS_PATCH } from '../../store/actionTypes';
import { loadProfileDetailsSuccess } from './ProfileDetailsAction';

export const loadProfileDetailsEpic = (action$, store, { loadProfileDetailsService }) =>
    action$.ofType(PROFILEDETAILS_LOAD)
        .switchMap((action) => {
            const param = action.payload;
            return loadProfileDetailsService(param)
                .map(res => loadProfileDetailsSuccess(res))
                .catch(err => console.log(err));
        });
export const pathProfileDetailsEpic = (action$, store, { patchProfileDetailsService }) =>
    action$.ofType(PROFILEDETAILS_PATCH)
        .switchMap((action) => {
            const param = action.payload;
            return patchProfileDetailsService(param)
                .map(res => loadProfileDetailsSuccess(res))
                .catch(err => console.log(err));
        });

export default combineEpics(loadProfileDetailsEpic, pathProfileDetailsEpic);
