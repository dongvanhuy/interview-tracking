import { Observable } from "rxjs";
import axios from "axios";
import config from "../config";
import { getAccessToken } from "../adalConfig";

const accessToken = localStorage.getItem('adal.idtoken');
// const accessToken = getAccessToken;
console.log('>>>>> accessToken', accessToken);

const API_HOST = config.apiService.host;
export default class ApiService {
  static loadDataCandidate = () =>
    Observable.fromPromise(
      axios.get(`${API_HOST}/api/interviewees/today`, {
        data: {},
        headers: {
          "Content-Type": "application/json"
        }
      })
    );

  static loadDataProfileThisWeek = () =>
    Observable.fromPromise(
      axios.get(`${API_HOST}/api/interviewees/thisweek`, {
        data: {},
        headers: {
          "Content-Type": "application/json"
        }
      })
    );

  static loadDataProfileThisMonth = () =>
    Observable.fromPromise(
      axios.get(`${API_HOST}/api/interviewees/thismonth`, {
        data: {},
        headers: {
          "Content-Type": "application/json"
        }
      })
    );

    static loadDataProfileThisOther = () =>
    Observable.fromPromise(
      axios.get(`${API_HOST}/api/interviewees/listall-without-thismonth`, {
        data: {},
        headers: {
          "Content-Type": "application/json"
        }
      })
    );

  static loadDataProfileDetails = (data) => Observable.fromPromise(
    axios.get(`${API_HOST}/api/interviewees/info/${data}`, {
      data: {},
      headers: {
        'Content-Type': 'application/json'
      }
    }));

  static patchDataProfileDetails = (data) => Observable.fromPromise(
    axios.patch(`${API_HOST}/api/interviewees/modify/${data.candidate_id}`, data), {
      data: {},
      headers: {
        'Content-Type': 'application/json'
      }
    });

  static postDataProfileDetails = (data) => Observable.fromPromise(
    axios.post(`${API_HOST}/api/interviewees/create`, data , {
      data: {},
      headers: {
        'Content-Type': 'application/json'
      }
    })
  );

  static bookMeetingRoom = (data) => Observable.fromPromise(
    axios.post(`https://graph.microsoft.com/v1.0/me/events`, data , {
      data: {},
      headers: {
        'Content-Type': 'application/json',
        // 'Cache-Control': 'no-cache',
        Authorization : `Bearer ${accessToken}`,
      }
    })
  );
}

