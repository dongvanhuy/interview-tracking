import { Observable } from "rxjs";
import axios from "axios";
import config from "../config";
import { getAccessToken } from "../adalConfig";

const accessToken = localStorage.getItem('adal.access.token.key');

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
// https://graph.microsoft.com/v1.0/users || `${API_HOST}/api/users`
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
          // Authorization : sessionStorage.getItem('accessToken'),
          Authorization: 'eyJ0eXAiOiJKV1QiLCJub25jZSI6IkFRQUJBQUFBQUFEWHpaM2lmci1HUmJEVDQ1ek5TRUZFUzF2YVdqSXlpaWtyVXFCdk1QZGY3eDNZS29Ycks5VE9yNmxKNVRFMUtDbzh0N01Oajd0SzVTTUZjWWdzOXZ4VC1hOUtnOHkzaDBPaE5lQ0JGRDU5RHlBQSIsImFsZyI6IlJTMjU2IiwieDV0IjoiaTZsR2szRlp6eFJjVWIyQzNuRVE3c3lISmxZIiwia2lkIjoiaTZsR2szRlp6eFJjVWIyQzNuRVE3c3lISmxZIn0.eyJhdWQiOiJodHRwczovL2dyYXBoLm1pY3Jvc29mdC5jb20iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC85M2YzMzU3MS01NTBmLTQzY2YtYjA5Zi1jZDMzMTMzOGQwODYvIiwiaWF0IjoxNTM4MTI0Njg1LCJuYmYiOjE1MzgxMjQ2ODUsImV4cCI6MTUzODEyODU4NSwiYWNjdCI6MCwiYWNyIjoiMSIsImFpbyI6IjQyQmdZTEMvVS9tOEtQWUg4OUxIY2hFOW5udWFic3llZWlEa3BhYUI4d2toUGJ1akc1SUIiLCJhbXIiOlsicHdkIl0sImFwcF9kaXNwbGF5bmFtZSI6IkdyYXBoIGV4cGxvcmVyIiwiYXBwaWQiOiJkZThiYzhiNS1kOWY5LTQ4YjEtYThhZC1iNzQ4ZGE3MjUwNjQiLCJhcHBpZGFjciI6IjAiLCJmYW1pbHlfbmFtZSI6IkRvbmciLCJnaXZlbl9uYW1lIjoiSHV5IiwiaXBhZGRyIjoiMjAuMTM5LjE0NS42NCIsIm5hbWUiOiJEb25nLCBIdXkgVmFuIiwib2lkIjoiZGE5MGY3MDYtMjk4NC00NWY0LWJiZWYtYzI0YmI0NjE1NzBmIiwib25wcmVtX3NpZCI6IlMtMS01LTIxLTI3MTg3MTI4OTMtNDI1Nzg5MzEwMC0zNzg2ODM1NzYtMTQ4MTA2IiwicGxhdGYiOiIzIiwicHVpZCI6IjEwMDM3RkZFOUUxRkE1OUQiLCJzY3AiOiJDYWxlbmRhcnMuUmVhZFdyaXRlIENvbnRhY3RzLlJlYWRXcml0ZSBEaXJlY3RvcnkuQWNjZXNzQXNVc2VyLkFsbCBEaXJlY3RvcnkuUmVhZFdyaXRlLkFsbCBGaWxlcy5SZWFkV3JpdGUuQWxsIEdyb3VwLlJlYWRXcml0ZS5BbGwgSWRlbnRpdHlSaXNrRXZlbnQuUmVhZC5BbGwgTWFpbC5SZWFkV3JpdGUgTm90ZXMuUmVhZFdyaXRlLkFsbCBvcGVuaWQgUGVvcGxlLlJlYWQgcHJvZmlsZSBTaXRlcy5SZWFkV3JpdGUuQWxsIFRhc2tzLlJlYWRXcml0ZSBVc2VyLlJlYWRCYXNpYy5BbGwgVXNlci5SZWFkV3JpdGUgVXNlci5SZWFkV3JpdGUuQWxsIGVtYWlsIiwic3ViIjoiN1BEX1NPU1NHRUxaZms0X1gzaTlPU1Z3YkttN19QMTFRNF9zYW12SEF2SSIsInRpZCI6IjkzZjMzNTcxLTU1MGYtNDNjZi1iMDlmLWNkMzMxMzM4ZDA4NiIsInVuaXF1ZV9uYW1lIjoiaGRvbmc0QGNzYy5jb20iLCJ1cG4iOiJoZG9uZzRAY3NjLmNvbSIsInV0aSI6ImlKeFV5MFQ4cmtTNzRESEk1ak1QQVEiLCJ2ZXIiOiIxLjAiLCJ4bXNfc3QiOnsic3ViIjoicUtjb2htSThIWWMtX0FMYlpPb1FhazV0NTNiVTRYdVNkWkNNUTNOUVRicyJ9LCJ4bXNfdGNkdCI6IjEzOTY2MTc0MjIifQ.gR317PwcE53CklfOWcUepC0LJ_OpAUZBn85UMEo0bM-ki6JeFLLhcU9P0fb61u-mgmV_hG4qBgzBQ5S8FpaSBrWBP2s7GniioG7UUCzSYX1kwHjtjZWjUp-R1bKB8qRfeWcRP8_m4w4axBmdP0YJJre5_xvWu7hiEEfuK_EQXHyZQci7HJRwIcP450XP1k_-Bya5Br7oxWqZsQ99CiZ_W_be8baNOJPDlyLUA5VOlW52LFgroJ13Gim7qY8Rn-MPNIQPzGw6bhXLn2_PxzkiR-13zahuUzYT43lQmReO_S-r-OVSpaeNToNFCOGOkW3HNiVxvb_6wMMlw_Rn1ye7qA'
        }
      })
    );
}
