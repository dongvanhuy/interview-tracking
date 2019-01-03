import { combineEpics } from 'redux-observable';
import { Observable } from 'rxjs/Observable';
import {
    PROFILE_DETAILS_LOAD,
    PROFILE_DETAILS_UPDATE,
    PROFILE_DETAILS_CREATE,
    BOOK_MEETING_ACTION,
    BOOK_MEETING_ACTION_FAILED,
    GET_USERS,
    GET_USERS_FAILED,
} from '../../store/actionTypes';
import {
    loadProfileDetailsSuccess,
    loadProfileDetailsFail,
    updateProfileDetailsSuccess,
    updateProfileDetailsFail,
    createProfileDetailsSuccess,
    bookMeetingActionSuccess,
    createProfileDetailsFail,
    getUsersSuccess,
    hideModalBookMeetingAction,
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

export const bookMeetingEpic = (action$, store, { bookMeetingService }) => action$.ofType(BOOK_MEETING_ACTION)
    .switchMap((action) => bookMeetingService(action.payload)
        .map(res => res.data)
        .map(data => bookMeetingActionSuccess(data))
        .map(hideModalBookMeetingAction)
        .catch(err => Observable.of({ type: BOOK_MEETING_ACTION_FAILED, payload: err.response })));

export const getUsersEpic = (action$, store, { getUsersService }) => action$.ofType(GET_USERS)
    .switchMap((action) => getUsersService(action.payload)
        .map(res => res.data)
        .map(data => getUsersSuccess(data))
        .catch(err => Observable.of({ type: GET_USERS_FAILED, payload: err.response })));

export default combineEpics(
    loadProfileDetailsEpic,
    updateProfileDetailsEpic,
    createProfileDetailsEpic,
    bookMeetingEpic,
    getUsersEpic,
);
