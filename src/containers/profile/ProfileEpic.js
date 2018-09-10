import { combineEpics } from 'redux-observable';
import {
    PROFILE_LOAD,
    PROFILE_THISWEEK_LOAD,
    PROFILE_THISMONTH_LOAD,
    PROFILE_THISOTHER_LOAD,
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

export default combineEpics(
    loadProfileEpic,
    loadProfileThisWeekEpic,
    loadProfileThisMonthEpic,
    loadProfileThisOtherEpic,
);
