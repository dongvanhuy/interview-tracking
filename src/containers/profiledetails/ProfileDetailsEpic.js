import { combineEpics } from 'redux-observable';
import {
    PROFILE_DETAILS_LOAD,
    PROFILE_DETAILS_UPDATE,
    PROFILE_DETAILS_CREATE,
} from '../../store/actionTypes';
import {
    loadProfileDetailsSuccess,
    loadProfileDetailsFail,
    updateProfileDetailsSuccess,
    updateProfileDetailsFail,
    createProfileDetailsSuccess,
    createProfileDetailsFail,
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

export const updateProfileDetailsEpic = (
    action$,
    store,
    { updateProfileDetailsService },
) =>
    action$.ofType(PROFILE_DETAILS_UPDATE).switchMap(action => {
        const param = action.payload;
        return updateProfileDetailsService(param)
            .map(res => updateProfileDetailsSuccess(res))
            .catch(res => updateProfileDetailsFail(res));
    });

export const createProfileDetailsEpic = (
    action$,
    store,
    { createProfileDetailsService },
) =>
    action$.ofType(PROFILE_DETAILS_CREATE).switchMap(action => {
        const param = action.payload;
        return createProfileDetailsService(param)
            .map(res => res.data)
            .map(createProfileDetailsSuccess)
            .catch(err => createProfileDetailsFail(err.response));
    });

export default combineEpics(
    loadProfileDetailsEpic,
    updateProfileDetailsEpic,
    createProfileDetailsEpic,
);
