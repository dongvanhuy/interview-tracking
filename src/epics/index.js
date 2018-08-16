import { combineEpics } from 'redux-observable';
import loadProfileEpic from '../containers/profile/ProfileEpic';
import loadLoginEpic from '../containers/login/LoginEpic';
import loadProfileDetailsEpic from '../containers/profileDetails/ProfileDetailsEpic';
import loadProfileThisWeekEpic from '../containers/profile/ProfileEpic';
import loadProfileThisMonthEpic from '../containers/profile/ProfileEpic';


const epics = [
    loadProfileEpic,
    loadProfileThisWeekEpic,
    loadProfileThisMonthEpic,
    loadLoginEpic,
    loadProfileDetailsEpic,
];

const rootEpic = combineEpics(...epics);


export default rootEpic;
