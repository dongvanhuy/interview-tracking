import { combineEpics } from 'redux-observable';
import { PROFILE_LOAD } from '../../store/actionTypes';
import {PROFILE_LOAD_THISWEEK} from '../../store/actionTypes'
import { loadProfileSuccess } from './ProfileAction';
import {loadProfileThisWeekSuccess} from './ProfileAction'

export const loadProfileEpic = (action$, store, { loadDataCandidateService }) => action$.ofType(PROFILE_LOAD)
    .switchMap(() => loadDataCandidateService()
        .map(res => loadProfileSuccess(res))
        .catch(err => console.log(err)));



export const loadProfileThisWeekEpic = (action$, store, { loadDataProfileThisWeekService }) => action$.ofType(PROFILE_LOAD_THISWEEK)
    .switchMap(() => loadDataProfileThisWeekService()
        .map(res => loadProfileThisWeekSuccess(res))
        .catch(err => console.log(err)));

export default combineEpics(loadProfileEpic, loadProfileThisWeekEpic);