import { combineEpics } from 'redux-observable';
import { Observable } from 'rxjs/Observable';
import {
    PROFILE_DETAILS_LOAD,
    PROFILE_DETAILS_UPDATE,
    PROFILE_DETAILS_CREATE,
    BOOK_MEETING_ROOM,
    BOOK_MEETING_ROOM_FAILED,
} from '../../store/actionTypes';
import {
    loadProfileDetailsSuccess,
    loadProfileDetailsFail,
    updateProfileDetailsSuccess,
    updateProfileDetailsFail,
    createProfileDetailsSuccess,
    bookMeetingRoomSuccess,
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

// export const bookMeetingRoomEpic = (
//     action$,
//     store,
//     { bookMeetingRoomService },
// ) =>
//     action$.ofType(BOOK_MEETING_ROOM).switchMap(action => {
//         const param = action.payload;
//         return bookMeetingRoomService(param)
//             .map(res => res.data)
//             .map(bookMeetingRoomSuccess)
//             .catch(err => console.log(err));
//     });

export const bookMeetingRoomEpic = (action$, store, { bookMeetingRoomService }) => action$.ofType(BOOK_MEETING_ROOM)
    .switchMap((action) => bookMeetingRoomService(action.payload)
        .map(res => res.data)
        .map(data => bookMeetingRoomSuccess(data))
        .catch(err => Observable.of({ type: BOOK_MEETING_ROOM_FAILED, payload: err.response })));

export default combineEpics(
    loadProfileDetailsEpic,
    updateProfileDetailsEpic,
    createProfileDetailsEpic,
    bookMeetingRoomEpic,
);
