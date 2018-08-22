import { combineEpics } from 'redux-observable';
import { loadProfileEpic, loadProfileThisWeekEpic, loadProfileThisMonthEpic } from '../containers/profile/ProfileEpic';
import loadLoginEpic from '../containers/login/LoginEpic';
import loadProfileDetailsEpic from '../containers/profiledetails/ProfileDetailsEpic';


const epics = [
    loadProfileEpic,
    loadProfileThisWeekEpic,
    loadProfileThisMonthEpic,
    loadLoginEpic,
    loadProfileDetailsEpic,
];

const rootEpic = combineEpics(...epics);


export default rootEpic;
