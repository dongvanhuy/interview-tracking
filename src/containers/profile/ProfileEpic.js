import { combineEpics } from 'redux-observable';
import { PROFILE_LOAD } from '../../store/actionTypes';
import { loadProfileSuccess } from './ProfileAction';

export const loadProfileEpic = (action$, store, { loadDataCandidateService }) =>
    action$.ofType(PROFILE_LOAD).switchMap(() =>
        loadDataCandidateService()
            .map(res => loadProfileSuccess(res))
            .catch(err => console.log(err)));

export default combineEpics(loadProfileEpic);
