import { Observable } from "rxjs";
import axios from "axios";
import config from "../config";
import { getAccessToken } from "../adalConfig";

const accessToken = localStorage.getItem('adal.access.token.key');
console.log('>>> accessToken', accessToken);

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

  static deleteProfileId = data =>
    Observable.fromPromise(
      axios.delete(`${API_HOST}/api/interviewees/info/${data}`, data, {
        data: {},
        headers: {
          "Content-Type": "application/json"
        }
      })
    );

  static getUsers = () =>
    Observable.fromPromise(
      axios.get(`${API_HOST}/api/users`, {
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
          Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJub25jZSI6IkFRQUJBQUFBQUFEWHpaM2lmci1HUmJEVDQ1ek5TRUZFaGRvbWtHSWp4V2l1b2tCZ21sYy1wVDBHU2xhU0dxRzhrcExpeUVWVTQ1dGxPLTV1TlowbzBrQW9KZTFDek1Oakw0VHJVMElhUzYxSjZkUXRlclkzNUNBQSIsImFsZyI6IlJTMjU2IiwieDV0IjoiaTZsR2szRlp6eFJjVWIyQzNuRVE3c3lISmxZIiwia2lkIjoiaTZsR2szRlp6eFJjVWIyQzNuRVE3c3lISmxZIn0.eyJhdWQiOiJodHRwczovL2dyYXBoLm1pY3Jvc29mdC5jb20iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC85M2YzMzU3MS01NTBmLTQzY2YtYjA5Zi1jZDMzMTMzOGQwODYvIiwiaWF0IjoxNTM3NDU0NDY1LCJuYmYiOjE1Mzc0NTQ0NjUsImV4cCI6MTUzNzQ1ODM2NSwiYWNjdCI6MCwiYWNyIjoiMSIsImFpbyI6IjQyQmdZTENTUEgvNmwvYVNzRGErdGZGaEpsZGNYa29uSkQxYjluM1BrV09hcFVaTGhjUUIiLCJhbXIiOlsicHdkIl0sImFwcF9kaXNwbGF5bmFtZSI6IkdyYXBoIGV4cGxvcmVyIiwiYXBwaWQiOiJkZThiYzhiNS1kOWY5LTQ4YjEtYThhZC1iNzQ4ZGE3MjUwNjQiLCJhcHBpZGFjciI6IjAiLCJmYW1pbHlfbmFtZSI6Ik5ndXllbiIsImdpdmVuX25hbWUiOiJUcmFuZyIsImlwYWRkciI6IjExNi4xMDguMTgzLjQ0IiwibmFtZSI6Ik5ndXllbiwgVHJhbmcgVGhpIiwib2lkIjoiOWJkYmU5NmEtNzgxYS00YTlhLWEyNzItOTZhZDk2OWZiMzkxIiwib25wcmVtX3NpZCI6IlMtMS01LTIxLTI3MTg3MTI4OTMtNDI1Nzg5MzEwMC0zNzg2ODM1NzYtMTQzNjQ3IiwicGxhdGYiOiIzIiwicHVpZCI6IjEwMDNCRkZEOUM4ODkxMDciLCJzY3AiOiJDYWxlbmRhcnMuUmVhZFdyaXRlIENvbnRhY3RzLlJlYWRXcml0ZSBEaXJlY3RvcnkuQWNjZXNzQXNVc2VyLkFsbCBEaXJlY3RvcnkuUmVhZFdyaXRlLkFsbCBGaWxlcy5SZWFkV3JpdGUuQWxsIEdyb3VwLlJlYWRXcml0ZS5BbGwgSWRlbnRpdHlSaXNrRXZlbnQuUmVhZC5BbGwgTWFpbC5SZWFkV3JpdGUgTm90ZXMuUmVhZFdyaXRlLkFsbCBvcGVuaWQgUGVvcGxlLlJlYWQgcHJvZmlsZSBTaXRlcy5SZWFkV3JpdGUuQWxsIFRhc2tzLlJlYWRXcml0ZSBVc2VyLlJlYWRCYXNpYy5BbGwgVXNlci5SZWFkV3JpdGUgVXNlci5SZWFkV3JpdGUuQWxsIGVtYWlsIiwic3ViIjoiQldnVHFVbzVESk1mUjRmLVBSdk4xM29TQ3dPY0lJdkpKNkx5b25nQ0h6cyIsInRpZCI6IjkzZjMzNTcxLTU1MGYtNDNjZi1iMDlmLWNkMzMxMzM4ZDA4NiIsInVuaXF1ZV9uYW1lIjoidG5ndXllbjQ1MEBjc2MuY29tIiwidXBuIjoidG5ndXllbjQ1MEBjc2MuY29tIiwidXRpIjoiUzRIblpDWlZKVW1YVFdENUtWTW5BQSIsInZlciI6IjEuMCIsInhtc19zdCI6eyJzdWIiOiJPZS03RGowdjhvMEphSEs0a3dQWTNaa3VtNGxNTFdqSnowQnhiandnSTVrIn0sInhtc190Y2R0IjoiMTM5NjYxNzQyMiJ9.NXTLLifjLjzwK0pav_ZwJ8On7M4kPC-Y_aA73CYe8CMFUTsT8C88KfFpeAAdKQiA8T8UEswdvv3tLnlSVh3nurnp9oqQpLHHwGy_Bj9ic-RUEvPjdlxtezl6jC_tflFrlv5acBWUFahFamVszOjifW5eWsTml1f650x9la2vnOIAmXhvCst9d1ysaMb-NVJSMljzhFaI_n4Wz_BfbbYfKmCxNKoPkbRRHHES_L3WOR3w_UhPFPqLXX2SrPabqTR_JlGIBEUI0KtF2OQa1tt11NWIgJ_7Nf4VNf6nG0_y8-HrCgA5_5fN-EK7vR1nzlobsGTy5sTzyAyRRgLAFIxrvQ'
        }
      })
    );
}
