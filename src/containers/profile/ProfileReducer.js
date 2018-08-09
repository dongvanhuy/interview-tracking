import { handleActions } from 'redux-actions';
import { PROFILE_LOAD_SUCCESS, VIEW_DETAIL_DATA, ADD_PROFILE } from '../../store/actionTypes';

const initialState = {
    dataProfile: [],
    profileSelected: {},
    addProfileDetail:{},
};

const actions = {
    [PROFILE_LOAD_SUCCESS]: (state, { payload }) => ({
        ...state,
        dataProfile: payload.data,
    }),
    [VIEW_DETAIL_DATA]: (state,  data) => {
        console.log('>>>> data redu', data);
        return ({
            ...state,
            profileSelected: data.payload,
        });
    },

    [ADD_PROFILE]: (state) => {

        return ({
            ...state,
            profileSelected: null,
        });
    },
};

export default handleActions(actions, initialState);
