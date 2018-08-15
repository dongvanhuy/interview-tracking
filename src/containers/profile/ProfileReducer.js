import { handleActions } from 'redux-actions';
import { PROFILE_LOAD_SUCCESS, VIEW_DETAIL_DATA_ID, ADD_PROFILE } from '../../store/actionTypes';

const initialState = {
    dataProfile: [],
    profileSelectedId: {},
    addProfileDetail: {},
};

const actions = {
    [PROFILE_LOAD_SUCCESS]: (state, { payload }) => ({
        ...state,
        dataProfile: payload.data,
    }),

    [VIEW_DETAIL_DATA_ID]: (state, { payload }) => ({
        ...state,
        profileSelectedId: payload,
    }),

    [ADD_PROFILE]: (state) => ({
        ...state,
        profileSelected: null,
    }),
};

export default handleActions(actions, initialState);
