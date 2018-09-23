import { combineEpics } from 'redux-observable';
import {
    PROFILE_LOAD,
    PROFILE_THISWEEK_LOAD,
    PROFILE_THISMONTH_LOAD,
    PROFILE_THISOTHER_LOAD,
    PROFILE_ID_DELETE,
} from '../../store/actionTypes';
import {
    loadProfileSuccess,
    loadProfileFail,
    loadProfileThisWeekSuccess,
    loadProfileThisWeekFail,
    loadProfileThisMonthSuccess,
    loadProfileThisMonthFail,
    loadProfileThisOtherSuccess,
    loadProfileThisOtherFail,
    deleteProfileIdSuccess,
} from './ProfileAction';

export const loadProfileEpic = (action$, store, { loadDataCandidateService }) =>
    action$.ofType(PROFILE_LOAD).switchMap(() =>
        loadDataCandidateService()
            .map(res => loadProfileSuccess(res))
            .catch(err => loadProfileFail(err)));

export const loadProfileThisWeekEpic = (
    action$,
    store,
    { loadDataProfileThisWeekService },
) =>
    action$.ofType(PROFILE_THISWEEK_LOAD).switchMap(() =>
        loadDataProfileThisWeekService()
            .map(res => loadProfileThisWeekSuccess(res))
            .catch(err => loadProfileThisWeekFail(err)));

export const loadProfileThisMonthEpic = (
    action$,
    store,
    { loadDataProfileThisMonthService },
) =>
    action$.ofType(PROFILE_THISMONTH_LOAD).switchMap(() =>
        loadDataProfileThisMonthService()
            .map(res => loadProfileThisMonthSuccess(res))
            .catch(err => loadProfileThisMonthFail(err)));

export const loadProfileThisOtherEpic = (
    action$,
    store,
    { loadDataProfileThisOtherService },
) =>
    action$.ofType(PROFILE_THISOTHER_LOAD).switchMap(() =>
        loadDataProfileThisOtherService()
            .map(res => loadProfileThisOtherSuccess(res))
            .catch(err => loadProfileThisOtherFail(err)));

export const deleteProfileIdEpic = (
    action$,
    store,
    { deleteProfileIdService },
) =>
    action$.ofType(PROFILE_ID_DELETE).switchMap(action => {
        console.log('>>>>>>>>> da vo');
        const param = action.payload;
        return deleteProfileIdService(param)
            .map(res => deleteProfileIdSuccess(res))
            .catch(err => console.log('>>>>>>>>> err', err));
    });

export default combineEpics(
    loadProfileEpic,
    loadProfileThisWeekEpic,
    loadProfileThisMonthEpic,
    loadProfileThisOtherEpic,
    deleteProfileIdEpic,
);
