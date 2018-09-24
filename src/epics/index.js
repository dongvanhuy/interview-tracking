import { combineEpics } from 'redux-observable';
import profileEpic from '../containers/profile/ProfileEpic';
import profileDetailsEpic from '../containers/profileDetails/ProfileDetailsEpic';


const epics = [
    profileEpic,
    profileDetailsEpic
];

const rootEpic = combineEpics(...epics);


export default rootEpic;
