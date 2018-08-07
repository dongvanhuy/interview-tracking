import { combineReducers } from 'redux';
import profileReducer from '../containers/profile/ProfileReducer';


export default combineReducers({
    profile: profileReducer,
});
