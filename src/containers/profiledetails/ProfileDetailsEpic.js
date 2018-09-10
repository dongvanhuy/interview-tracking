import { combineEpics } from 'redux-observable';
import { Observable } from 'rxjs';
import {
    PROFILE_DETAILS_LOAD,
    PROFILE_DETAILS_PATCH,
    PROFILE_DETAILS_POST,
    PROFILE_DETAILS_PATCH_FAIL,
} from '../../store/actionTypes';
import {
    loadProfileDetailsSuccess,
    loadProfileDetailsFail,
    patchProfileDetailsSuccess,
    postProfileDetailsSuccess,
} from './ProfileDetailsAction';

export const loadProfileDetailsEpic = (
    action$,
    store,
    { loadProfileDetailsService },
) =>
    action$.ofType(PROFILE_DETAILS_LOAD).switchMap(action => {
        const param = action.payload;
        return loadProfileDetailsService(param)
            .map(res => loadProfileDetailsSuccess(res))
            .catch(err => loadProfileDetailsFail(err));
    });

export const patchProfileDetailsEpic = (
    action$,
    store,
    { patchProfileDetailsService },
) =>
    action$.ofType(PROFILE_DETAILS_PATCH).switchMap(action => {
        const param = action.payload;
        return patchProfileDetailsService(param)
            .map(res => patchProfileDetailsSuccess(res))
            .catch(err =>
                Observable.of({ type: PROFILE_DETAILS_PATCH_FAIL, payload: err }));
    });

export const postProfileDetailsEpic = (
    action$,
    store,
    { postProfileDetailsService },
) =>
    action$.ofType(PROFILE_DETAILS_POST).switchMap(action => {
        const param = action.payload;
        return postProfileDetailsService(param)
            .map(res => res.data)
            .map(postProfileDetailsSuccess)
            .catch(err => console.log(err));
    });

export default combineEpics(
    loadProfileDetailsEpic,
    patchProfileDetailsEpic,
    postProfileDetailsEpic,
);
