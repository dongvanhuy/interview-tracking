import { Observable } from "rxjs";
import axios from "axios";
import config from "../config";

const API_HOST = config.apiService.host;
export default class ApiService {
  static loadDataCandidate = () =>
    Observable.fromPromise(
      axios.get(`${API_HOST}/api/interviewees/today`, {
        data: {}
      })
    );

  static loadDataProfileThisWeek = () =>
    Observable.fromPromise(
      axios.get(`${API_HOST}/api/interviewees/thisweek`, {
        data: {}
      })
    );

  static loadDataProfileThisMonth = () =>
    Observable.fromPromise(
      axios.get(`${API_HOST}/api/interviewees/thismonth`, {
        data: {}
      })
    );

  static loadDataProfileThisOther = () =>
    Observable.fromPromise(
      axios.get(`${API_HOST}/api/interviewees/listall-without-thismonth`, {
        data: {}
      })
    );

  static loadDataProfileDetails = data =>
    Observable.fromPromise(
      axios.get(`${API_HOST}/api/interviewees/info/${data}`, {
        data: {}
      })
    );

  static patchDataProfileDetails = data =>
    Observable.fromPromise(
      axios.patch(
        `${API_HOST}/api/interviewees/modify/${data.candidate_id}`,
        data,
        {
          data: {},
        }
      )
    );

  static postDataProfileDetails = data =>
    Observable.fromPromise(
      axios.post(`${API_HOST}/api/interviewees/create`, data, {
        data: {}
      })
    );

  static deleteProfileId = data =>
    Observable.fromPromise(
      axios.delete(`${API_HOST}/api/interviewees/info/${data}`, data, {
        data: {}
      })
    );
// https://graph.microsoft.com/v1.0/users || `${API_HOST}/api/users`
  static getUsers = () =>
    Observable.fromPromise(
      axios.get(`${API_HOST}/api/users`, {
        data: {},
      })
    );

    // https://outlook.office.com/api/v2.0/me/events
    // https://graph.microsoft.com/v1.0/me/events
    static bookMeeting = (data) => Observable.fromPromise(
      axios.post(`https://graph.microsoft.com/v1.0/me/events`, data , {
        data: {}
      })
    );
}
