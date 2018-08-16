import { Observable } from "rxjs";
import axios from "axios";
import config from "../config";

const API_HOST = config.apiService.host;
const API_HOST2 = config.apiService2.host;

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
}

export class ApiServiceThisWeek {
  static loadDataProfileThisWeek = () =>
    Observable.fromPromise(
      axios.get(`${API_HOST}/api/interviewees/thisweek`, {
        data: {},
        headers: {
          "Content-Type": "application/json"
        }
      })
    );
}

export class ApiServiceThisMonth {
  static loadDataProfileThisMonth = () =>
    Observable.fromPromise(
      axios.get(`${API_HOST}/api/interviewees/thismonth`, {
        data: {},
        headers: {
          "Content-Type": "application/json"
        }
      })
    );
}

export class ApiService2 {
  static checkUser = () =>
    Observable.fromPromise(axios.get(`${API_HOST2}/test`, { data: {} }));
}

export class ApiServiceProfileDetails {
  static loadDataProfileDetails = () => Observable.fromPromise(
    axios.get(`${API_HOST}/api/interviewers`, {
      data: {},
      headers: {
        'Content-Type': 'application/json'
      }
    }))
}
