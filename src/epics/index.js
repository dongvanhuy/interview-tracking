import { combineEpics } from 'redux-observable';
import { loadProfileEpic, loadProfileThisWeekEpic, loadProfileThisMonthEpic, loadProfileThisOtherEpic } from '../containers/profile/ProfileEpic';
import { loadProfileDetailsEpic, updateProfileDetailsEpic, createProfileDetailsEpic, bookMeetingRoomEpic } from '../containers/profileDetails/ProfileDetailsEpic';


const epics = [
    loadProfileEpic,
    loadProfileThisWeekEpic,
    loadProfileThisMonthEpic,
    loadProfileThisOtherEpic,
    loadProfileDetailsEpic,
    updateProfileDetailsEpic,
    createProfileDetailsEpic,
    bookMeetingRoomEpic,
];

const rootEpic = combineEpics(...epics);


export default rootEpic;
