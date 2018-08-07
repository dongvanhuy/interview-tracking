import { combineEpics } from 'redux-observable';
import loadProfileEpic from '../containers/profile/ProfileEpic';
import loadLoginEpic from '../containers/login/LoginEpic';

const epics = [
    loadProfileEpic,
    loadLoginEpic,
];

const rootEpic = combineEpics(...epics);


export default rootEpic;
