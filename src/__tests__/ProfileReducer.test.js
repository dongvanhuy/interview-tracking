import ProfileReducer from '../containers/profile/ProfileReducer'
import {
    VIEW_DETAIL_DATA_ID,
    PROFILE_LOAD_SUCCESS,
    PROFILE_LOAD,
    PROFILE_LOAD_FAIL,
    PROFILE_THISWEEK_LOAD_SUCCESS,
    PROFILE_THISWEEK_LOAD_FAIL,
    PROFILE_THISMONTH_LOAD_SUCCESS,
    PROFILE_THISMONTH_LOAD_FAIL,
    PROFILE_THISOTHER_LOAD_SUCCESS,
    PROFILE_THISOTHER_LOAD_FAIL,
    PROFILE_ID_DELETE_SUCCESS,
    GET_USERS_FAILED,
} from '../store/actionTypes';

const initialState = {
    dataProfile: [],
    dataProfileThisWeek: [],
    dataProfileThisMonth: [],
    dataProfileThisOther: [],
    profileSelectedId: null,
    dataRes: {},
    isLoadingToday: false,
    isLoadingWeek: false,
    isLoadingMonth: false,
    isLoadingOther: false,
    loadDataFailed: false,
    isDeleted: false,
};

describe('Profile Reducer', () => {
    it('should have initial state', () => {
        expect(ProfileReducer()).toEqual(initialState);
      });   
})