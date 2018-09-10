import { combineEpics } from 'redux-observable';
import { PROFILE_LOAD, PROFILE_LOAD_THISWEEK, PROFILE_LOAD_THISMONTH, PROFILE_LOAD_THISOTHER } from '../../store/actionTypes';
import { loadProfileSuccess, loadProfileThisWeekSuccess, loadProfileThisMonthSuccess, loadProfileThisOtherSuccess } from './ProfileAction';

export const loadProfileEpic = (action$, store, { loadDataCandidateService }) =>
    action$.ofType(PROFILE_LOAD).switchMap(() =>
        loadDataCandidateService()
            .map(res => loadProfileSuccess(res))
            .catch(err => console.log(err)));

export const loadProfileThisWeekEpic = (
    action$,
    store,
    { loadDataProfileThisWeekService },
) =>
    action$.ofType(PROFILE_LOAD_THISWEEK).switchMap(() =>
        loadDataProfileThisWeekService()
            .map(res => loadProfileThisWeekSuccess(res))
            .catch(err => console.log(err)));

export const loadProfileThisMonthEpic = (
    action$,
    store,
    { loadDataProfileThisMonthService },
) =>
    action$.ofType(PROFILE_LOAD_THISMONTH).switchMap(() =>
        loadDataProfileThisMonthService()
            .map(res => loadProfileThisMonthSuccess(res))
            .catch(err => console.log(err)));

export const loadProfileThisOtherEpic = (
    action$,
    store,
    { loadDataProfileThisOtherService },
) =>
    action$.ofType(PROFILE_LOAD_THISOTHER).switchMap(() =>
        loadDataProfileThisOtherService()
            .map(res => loadProfileThisOtherSuccess(res))
            .catch(err => console.log(err)));

export default combineEpics(
    loadProfileEpic,
    loadProfileThisWeekEpic,
    loadProfileThisMonthEpic,
    loadProfileThisOtherEpic,
);
