import { combineReducers } from 'redux';
import profileReducer from '../containers/profile/ProfileReducer';
import loginReducer from '../containers/login/LoginReducer';

export default combineReducers({
    profile: profileReducer,
    loginUser: loginReducer,
});
