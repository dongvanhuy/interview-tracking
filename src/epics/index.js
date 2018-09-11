import { combineEpics } from 'redux-observable';
import { loadProfileEpic, loadProfileThisWeekEpic, loadProfileThisMonthEpic, loadProfileThisOtherEpic } from '../containers/profile/ProfileEpic';
import { loadProfileDetailsEpic, updateProfileDetailsEpic, createProfileDetailsEpic } from '../containers/profileDetails/ProfileDetailsEpic';


const epics = [
    loadProfileEpic,
    loadProfileThisWeekEpic,
    loadProfileThisMonthEpic,
    loadProfileThisOtherEpic,
    loadProfileDetailsEpic,
    updateProfileDetailsEpic,
    createProfileDetailsEpic,
];

const rootEpic = combineEpics(...epics);


export default rootEpic;
