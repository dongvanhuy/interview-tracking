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

  // static loadDataProfileDetails = (data) => Observable.fromPromise(
  //   axios.put(`${API_HOST}/api/interviewees/info/`, data))

  static pathDataProfileDetails = (data) => Observable.fromPromise(
    axios.patch(`${API_HOST}/api/interviewees/mofidy/${data.candidate_id}`, data))

  static loadDataProfileDetails = () => Observable.fromPromise(
    axios.get(`${API_HOST}/api/interviewees`, {
      data: {},
      headers: {
        'Content-Type': 'application/json'
      }
    }))
}

