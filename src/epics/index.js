import { combineEpics } from 'redux-observable';
import { loadProfileEpic, loadProfileThisWeekEpic, loadProfileThisMonthEpic, loadProfileThisOtherEpic, deleteProfileIdEpic } from '../containers/profile/ProfileEpic';
import { loadProfileDetailsEpic, updateProfileDetailsEpic, createProfileDetailsEpic, bookMeetingRoomEpic, getUsersEpic } from '../containers/profileDetails/ProfileDetailsEpic';


const epics = [
    loadProfileEpic,
    loadProfileThisWeekEpic,
    loadProfileThisMonthEpic,
    loadProfileThisOtherEpic,
    loadProfileDetailsEpic,
    updateProfileDetailsEpic,
    createProfileDetailsEpic,
    bookMeetingRoomEpic,
    getUsersEpic,
    deleteProfileIdEpic,
];

const rootEpic = combineEpics(...epics);


export default rootEpic;
