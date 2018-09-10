import { combineEpics } from 'redux-observable';
import { loadProfileEpic, loadProfileThisWeekEpic, loadProfileThisMonthEpic, loadProfileThisOtherEpic } from '../containers/profile/ProfileEpic';
import { loadProfileDetailsEpic, patchProfileDetailsEpic, postProfileDetailsEpic } from '../containers/profileDetails/ProfileDetailsEpic';


const epics = [
    loadProfileEpic,
    loadProfileThisWeekEpic,
    loadProfileThisMonthEpic,
    loadProfileThisOtherEpic,
    loadProfileDetailsEpic,
    patchProfileDetailsEpic,
    postProfileDetailsEpic,
];

const rootEpic = combineEpics(...epics);


export default rootEpic;
