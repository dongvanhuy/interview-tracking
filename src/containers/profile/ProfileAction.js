import { createAction } from 'redux-actions';
import { PROFILE_LOAD, PROFILE_LOAD_SUCCESS, VIEW_DETAIL_DATA, ADD_PROFILE } from '../../store/actionTypes';


export const loadProfile = createAction(PROFILE_LOAD);
export const loadProfileSuccess = createAction(PROFILE_LOAD_SUCCESS);
export const viewDetailData = createAction(VIEW_DETAIL_DATA);
export const addProfile = createAction(ADD_PROFILE);
// export const getCandidateId = createAction(GET_CANDIDATE_ID);
