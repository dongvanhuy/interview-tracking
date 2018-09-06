import { combineEpics } from 'redux-observable';
import { PROFILEDETAILS_LOAD, PROFILEDETAILS_PATCH, PROFILEDETAILS_POST } from '../../store/actionTypes';
import { loadProfileDetailsSuccess, patchProfileDetails, postProfileDetails } from './ProfileDetailsAction';

export const loadProfileDetailsEpic = (action$, store, { loadProfileDetailsService }) =>
    action$.ofType(PROFILEDETAILS_LOAD)
        .switchMap((action) => {
            const param = action.payload;
            return loadProfileDetailsService(param)
                .map(res => loadProfileDetailsSuccess(res))
                .catch(err => console.log(err));
        });
export const patchProfileDetailsEpic = (action$, store, { patchProfileDetailsService }) =>
    action$.ofType(PROFILEDETAILS_PATCH)
        .switchMap((action) => {
            const param = action.payload;
            return patchProfileDetailsService(param)
                .map(res => patchProfileDetails(res))
                .catch(err => console.log(err));
        });
export const postProfileDetailsEpic = (action$, store, { postProfileDetailsService }) =>
    action$.ofType(PROFILEDETAILS_POST)
        .switchMap((action) => {
            const param = action.payload;
            return postProfileDetailsService(param)
                .map(res => postProfileDetails(res))
                .catch(err => console.log(err));
        });

export default combineEpics(loadProfileDetailsEpic, patchProfileDetailsEpic, postProfileDetailsEpic);
