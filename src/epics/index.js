import { combineEpics } from 'redux-observable';
import loadProfileEpic from '../containers/profile/ProfileEpic';

const epics = [
    loadProfileEpic,
];

const rootEpic = combineEpics(...epics);


export default rootEpic;
