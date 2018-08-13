import { Observable } from "rxjs";
import axios from "axios";
import config from "../config";

const API_HOST = config.apiService.host;
const API_HOST2 = config.apiService2.host;

export default class ApiService {
  static loadDataCandidate = () =>
    Observable.fromPromise(
      axios.get(`${API_HOST}/api/interviewers`, {
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
  static loadDataProfileDetails = () =>
    Observable.fromPromise(
      //`${API_HOSTPROFILEDETAILS}/api/interviewers`
      axios.get(
        "https://5b61807107412d00142ace28.mockapi.io/apiv1/interviewers",
        {
          data: {},
          headers: {
            "Content-Type": "application/json"
          }
        }
      )
    );
}
