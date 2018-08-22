import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import profileReducer from '../containers/profile/ProfileReducer';
import loginReducer from '../containers/login/LoginReducer';
import profileDetailsReducer from '../containers/profiledetails/ProfileDetailsReducer';
export default combineReducers({
    router: routerReducer,
    profile: profileReducer,
    loginUser: loginReducer,
    profileDetails: profileDetailsReducer,
});
