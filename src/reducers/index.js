import { combineReducers } from 'redux';
import profileReducer from '../containers/profile/ProfileReducer';
import loginReducer from '../containers/login/LoginReducer';
import profileDetailsReducer from '../containers/profileDetails/ProfileDetailsReducer';

export default combineReducers({
    profile: profileReducer,
    loginUser: loginReducer,
    profileDetails: profileDetailsReducer,
});
