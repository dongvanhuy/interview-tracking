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

  static loadDataProfileDetails = data =>
    Observable.fromPromise(
      axios.get(`${API_HOST}/api/interviewees/info/${data}`, {
        data: {},
        headers: {
          "Content-Type": "application/json"
        }
      })
    );

  static patchDataProfileDetails = data =>
    Observable.fromPromise(
      axios.patch(
        `${API_HOST}/api/interviewees/modify/${data.candidate_id}`,
        data,
        {
          data: {},
          headers: {
            "Content-Type": "application/json"
          }
        }
      )
    );

  static postDataProfileDetails = data =>
    Observable.fromPromise(
      axios.post(`${API_HOST}/api/interviewees/create`, data, {
        data: {},
        headers: {
          "Content-Type": "application/json"
        }
      })
    );

    static bookMeetingRoom = (data) => Observable.fromPromise(
      axios.post(`https://graph.microsoft.com/v1.0/me/events`, data , {
        data: {},
        headers: {
          'Content-Type': 'application/json',
          // 'Cache-Control': 'no-cache',
          // Authorization : `Bearer ${accessToken}`,
          Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJub25jZSI6IkFRQUJBQUFBQUFEWHpaM2lmci1HUmJEVDQ1ek5TRUZFZDhpNjl3MnJsQV9nY05SZ3hHckQzUTdXdUwwNWxPQUQ3Sl80VUhBZXFneVR4cUFieUxWcnBQbGdOR3pEN3hjWW1EdFpGWnpLR0pvZFlFeUt4bkUydmlBQSIsImFsZyI6IlJTMjU2IiwieDV0IjoiaTZsR2szRlp6eFJjVWIyQzNuRVE3c3lISmxZIiwia2lkIjoiaTZsR2szRlp6eFJjVWIyQzNuRVE3c3lISmxZIn0.eyJhdWQiOiJodHRwczovL2dyYXBoLm1pY3Jvc29mdC5jb20iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC85M2YzMzU3MS01NTBmLTQzY2YtYjA5Zi1jZDMzMTMzOGQwODYvIiwiaWF0IjoxNTM3Mjc3NTg2LCJuYmYiOjE1MzcyNzc1ODYsImV4cCI6MTUzNzI4MTQ4NiwiYWNjdCI6MCwiYWNyIjoiMSIsImFpbyI6IjQyQmdZUGhXd1RyL2dlN2RsSjJPTysrMFJJZnAzSWhzZkhzdXVMeituVkd1dWM1aDg3VUEiLCJhbXIiOlsicHdkIl0sImFwcF9kaXNwbGF5bmFtZSI6IkdyYXBoIGV4cGxvcmVyIiwiYXBwaWQiOiJkZThiYzhiNS1kOWY5LTQ4YjEtYThhZC1iNzQ4ZGE3MjUwNjQiLCJhcHBpZGFjciI6IjAiLCJmYW1pbHlfbmFtZSI6Ik5ndXllbiIsImdpdmVuX25hbWUiOiJUcmFuZyIsImlwYWRkciI6IjExNi4xMDguMTgzLjQ0IiwibmFtZSI6Ik5ndXllbiwgVHJhbmcgVGhpIiwib2lkIjoiOWJkYmU5NmEtNzgxYS00YTlhLWEyNzItOTZhZDk2OWZiMzkxIiwib25wcmVtX3NpZCI6IlMtMS01LTIxLTI3MTg3MTI4OTMtNDI1Nzg5MzEwMC0zNzg2ODM1NzYtMTQzNjQ3IiwicGxhdGYiOiIzIiwicHVpZCI6IjEwMDNCRkZEOUM4ODkxMDciLCJzY3AiOiJDYWxlbmRhcnMuUmVhZFdyaXRlIENvbnRhY3RzLlJlYWRXcml0ZSBEaXJlY3RvcnkuQWNjZXNzQXNVc2VyLkFsbCBEaXJlY3RvcnkuUmVhZFdyaXRlLkFsbCBGaWxlcy5SZWFkV3JpdGUuQWxsIEdyb3VwLlJlYWRXcml0ZS5BbGwgSWRlbnRpdHlSaXNrRXZlbnQuUmVhZC5BbGwgTWFpbC5SZWFkV3JpdGUgTm90ZXMuUmVhZFdyaXRlLkFsbCBvcGVuaWQgUGVvcGxlLlJlYWQgcHJvZmlsZSBTaXRlcy5SZWFkV3JpdGUuQWxsIFRhc2tzLlJlYWRXcml0ZSBVc2VyLlJlYWRCYXNpYy5BbGwgVXNlci5SZWFkV3JpdGUgVXNlci5SZWFkV3JpdGUuQWxsIGVtYWlsIiwic3ViIjoiQldnVHFVbzVESk1mUjRmLVBSdk4xM29TQ3dPY0lJdkpKNkx5b25nQ0h6cyIsInRpZCI6IjkzZjMzNTcxLTU1MGYtNDNjZi1iMDlmLWNkMzMxMzM4ZDA4NiIsInVuaXF1ZV9uYW1lIjoidG5ndXllbjQ1MEBjc2MuY29tIiwidXBuIjoidG5ndXllbjQ1MEBjc2MuY29tIiwidXRpIjoicEhrUExmb0paRVdONno1UlJzVVFBQSIsInZlciI6IjEuMCIsInhtc19zdCI6eyJzdWIiOiJPZS03RGowdjhvMEphSEs0a3dQWTNaa3VtNGxNTFdqSnowQnhiandnSTVrIn19.FKj9C7bKGpFOaU4lgBTPTzoI5h5iLcF3H0gULhgXN1JoHJ2KUlwPW-lyuDR3GRrCr6xj_n5KJRDSpfuiGdSCwYENkWxJ3Bc-v8ROz_cyrNNv0d4HBM6C0fAhyMxC0cnKMoDaDaMkY1w92sr3Rua2qFtN_lpL8rVo-IPWcRLS52CapF1u9mlc7KysLXgX5PCo_fcuNhtFzzgMu37jqHoJ42cmEKohWQrjkArDs9O0Y44jKXBAdU6gvF7DHzFNcMYFBD2oCHNgISeRatY15CmRxHpvJU8iiKymE6sYphpS0m6pvGsnwDwLEMJ0BlKuq6_CrT6PGplAwi_OKR6ygnqJKw'
        }
      })
    );
}
