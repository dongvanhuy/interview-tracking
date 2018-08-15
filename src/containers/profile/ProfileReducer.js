import { handleActions } from 'redux-actions';
import { PROFILE_LOAD_SUCCESS, VIEW_DETAIL_DATA, ADD_PROFILE, GET_CANDIDATE_ID } from '../../store/actionTypes';

const initialState = {
    dataProfile: [],
    profileSelected: {},
    addProfileDetail: {},
    getCandidateId: {},
};

const actions = {
    [PROFILE_LOAD_SUCCESS]: (state, { payload }) => ({
        ...state,
        dataProfile: payload.data,
    }),

    [VIEW_DETAIL_DATA]: (state, data) => ({
        ...state,
        profileSelected: data.payload,
    }),

    [ADD_PROFILE]: (state) => ({
        ...state,
        profileSelected: null,
    }),

    [GET_CANDIDATE_ID]: (state, {payload}) => ({
        ...state,
        getCandidateId: payload,
    })
};

export default handleActions(actions, initialState);
