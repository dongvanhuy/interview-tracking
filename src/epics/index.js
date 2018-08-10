import { combineEpics } from 'redux-observable';
import loadProfileEpic from '../containers/profile/ProfileEpic';
import loadLoginEpic from '../containers/login/LoginEpic';
import loadProfileDetailsEpic from '../containers/profileDetails/ProfileDetailsEpic';

const epics = [
    loadProfileEpic,
    loadLoginEpic,
    loadProfileDetailsEpic,
];

const rootEpic = combineEpics(...epics);


export default rootEpic;
