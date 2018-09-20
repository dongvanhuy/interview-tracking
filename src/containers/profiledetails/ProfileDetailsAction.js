import { createAction } from 'redux-actions';
import {
    PROFILE_DETAILS_LOAD,
    PROFILE_DETAILS_LOAD_SUCCESS,
    PROFILE_DETAILS_LOAD_FAIL,
    PROFILE_DETAILS_UPDATE,
    PROFILE_DETAILS_UPDATE_SUCCESS,
    PROFILE_DETAILS_UPDATE_FAIL,
    PROFILE_DETAILS_CREATE,
    PROFILE_DETAILS_CREATE_SUCCESS,
    PROFILE_DETAILS_CREATE_FAIL,
    RESET_PROFILE_DETAILS_DATA,
    CLOSE_MODAL_SUCCESS,
    BOOK_MEETING_ROOM,
    BOOK_MEETING_ROOM_SUCCESS,
    BOOK_MEETING_ROOM_FAILED,
    GET_USERS,
    GET_USERS_SUCCESS,
    GET_USERS_FAILED,
} from '../../store/actionTypes';

export const loadProfileDetails = createAction(PROFILE_DETAILS_LOAD);
export const loadProfileDetailsSuccess = createAction(PROFILE_DETAILS_LOAD_SUCCESS);
export const loadProfileDetailsFail = createAction(PROFILE_DETAILS_LOAD_FAIL);

export const updateProfileDetails = createAction(PROFILE_DETAILS_UPDATE);
export const updateProfileDetailsSuccess = createAction(PROFILE_DETAILS_UPDATE_SUCCESS);
export const updateProfileDetailsFail = createAction(PROFILE_DETAILS_UPDATE_FAIL);

export const createProfileDetails = createAction(PROFILE_DETAILS_CREATE);
export const createProfileDetailsSuccess = createAction(PROFILE_DETAILS_CREATE_SUCCESS);
export const createProfileDetailsFail = createAction(PROFILE_DETAILS_CREATE_FAIL);

export const resetStateProfileDetail = createAction(RESET_PROFILE_DETAILS_DATA);

export const resetModalSuccess = createAction(CLOSE_MODAL_SUCCESS);

export const bookMeetingRoom = createAction(BOOK_MEETING_ROOM);
export const bookMeetingRoomSuccess = createAction(BOOK_MEETING_ROOM_SUCCESS);
export const bookMeetingRoomFailed = createAction(BOOK_MEETING_ROOM_FAILED);

export const getUsers = createAction(GET_USERS);
export const getUsersSuccess = createAction(GET_USERS_SUCCESS);
export const getUsersFailed = createAction(GET_USERS_FAILED);
