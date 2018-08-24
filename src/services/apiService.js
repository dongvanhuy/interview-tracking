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

  static checkUser = () =>
    Observable.fromPromise(axios.get(`${API_HOST2}/test`, { data: {} }));

  static loadDataProfileDetails = (data) => Observable.fromPromise(
    axios.get(`${API_HOST}/api/interviewees/info/${data}`, {
      data: {},
      headers: {
        'Content-Type': 'application/json'
      }
    }))

  static patchDataProfileDetails = (data) => Observable.fromPromise(
    axios.patch(`${API_HOST}/api/interviewees/modify/${data.candidate_id}`, data), {
      data: {},
      headers: {
        'Content-Type': 'application/json'
      }
    })
  static postDataProfileDetails = (data) => Observable.fromPromise(
    axios.post(`${API_HOST}/api/interviewees/create`, data), {
      data: {},
      headers: {
        'Content-Type': 'application/json'
      }
    })
}

