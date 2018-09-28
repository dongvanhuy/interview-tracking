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
          Authorization: 'eyJ0eXAiOiJKV1QiLCJub25jZSI6IkFRQUJBQUFBQUFEWHpaM2lmci1HUmJEVDQ1ek5TRUZFdC1yT1ZHLUVFckdmOVZubnFSU0tTUE85enZWMGQ0WXJ1VDRDeHYwV0ktb2FmRklJLWZtTVVReHhCSnk5eHF1MEY4VnRxVTdKZ1RxYTdWcTZXNGY4TmlBQSIsImFsZyI6IlJTMjU2IiwieDV0IjoiaTZsR2szRlp6eFJjVWIyQzNuRVE3c3lISmxZIiwia2lkIjoiaTZsR2szRlp6eFJjVWIyQzNuRVE3c3lISmxZIn0.eyJhdWQiOiJodHRwczovL2dyYXBoLm1pY3Jvc29mdC5jb20iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC85M2YzMzU3MS01NTBmLTQzY2YtYjA5Zi1jZDMzMTMzOGQwODYvIiwiaWF0IjoxNTM4MTE3MzczLCJuYmYiOjE1MzgxMTczNzMsImV4cCI6MTUzODEyMTI3MywiYWNjdCI6MCwiYWNyIjoiMSIsImFpbyI6IjQyQmdZUENhYXVHbUlkUDZZdmZzZC9rc09YYkthcHpkampkU3puR1Y3dGx6a3Z1OFZ3QUEiLCJhbXIiOlsicHdkIl0sImFwcF9kaXNwbGF5bmFtZSI6IkdyYXBoIGV4cGxvcmVyIiwiYXBwaWQiOiJkZThiYzhiNS1kOWY5LTQ4YjEtYThhZC1iNzQ4ZGE3MjUwNjQiLCJhcHBpZGFjciI6IjAiLCJmYW1pbHlfbmFtZSI6IkRvbmciLCJnaXZlbl9uYW1lIjoiSHV5IiwiaXBhZGRyIjoiMTcxLjI1My4xOTEuMjkiLCJuYW1lIjoiRG9uZywgSHV5IFZhbiIsIm9pZCI6ImRhOTBmNzA2LTI5ODQtNDVmNC1iYmVmLWMyNGJiNDYxNTcwZiIsIm9ucHJlbV9zaWQiOiJTLTEtNS0yMS0yNzE4NzEyODkzLTQyNTc4OTMxMDAtMzc4NjgzNTc2LTE0ODEwNiIsInBsYXRmIjoiMyIsInB1aWQiOiIxMDAzN0ZGRTlFMUZBNTlEIiwic2NwIjoiQ2FsZW5kYXJzLlJlYWRXcml0ZSBDb250YWN0cy5SZWFkV3JpdGUgRGlyZWN0b3J5LkFjY2Vzc0FzVXNlci5BbGwgRGlyZWN0b3J5LlJlYWRXcml0ZS5BbGwgRmlsZXMuUmVhZFdyaXRlLkFsbCBHcm91cC5SZWFkV3JpdGUuQWxsIElkZW50aXR5Umlza0V2ZW50LlJlYWQuQWxsIE1haWwuUmVhZFdyaXRlIE5vdGVzLlJlYWRXcml0ZS5BbGwgb3BlbmlkIFBlb3BsZS5SZWFkIHByb2ZpbGUgU2l0ZXMuUmVhZFdyaXRlLkFsbCBUYXNrcy5SZWFkV3JpdGUgVXNlci5SZWFkQmFzaWMuQWxsIFVzZXIuUmVhZFdyaXRlIFVzZXIuUmVhZFdyaXRlLkFsbCBlbWFpbCIsInN1YiI6IjdQRF9TT1NTR0VMWmZrNF9YM2k5T1NWd2JLbTdfUDExUTRfc2FtdkhBdkkiLCJ0aWQiOiI5M2YzMzU3MS01NTBmLTQzY2YtYjA5Zi1jZDMzMTMzOGQwODYiLCJ1bmlxdWVfbmFtZSI6Imhkb25nNEBjc2MuY29tIiwidXBuIjoiaGRvbmc0QGNzYy5jb20iLCJ1dGkiOiJIUENZaFNiZXNraTdEcXdCS3ZJaUFRIiwidmVyIjoiMS4wIiwieG1zX3N0Ijp7InN1YiI6InFLY29obUk4SFljLV9BTGJaT29RYWs1dDUzYlU0WHVTZFpDTVEzTlFUYnMifSwieG1zX3RjZHQiOiIxMzk2NjE3NDIyIn0.d5oG_zYhiDJbmdl5i9zN32Xy3glod_jJrQiqBt49kux7Audbp4rpO4WiN9Rwip53auBTf0T3c6wLg7AGAKe5hNkJojG8y8I-bMRGBXUSQ9SvTZcpDvXqOzYNnZoC9r4mnLzYy9seqv4o3oTIcUniCSKK5HXWndQnIauF4nDLXyNIVz91AShDjq3FedSf-iRlnusPWdskApZ3nNJXmtVbvEuLRE80GhJFjuIBFKWxI0St_Q8K7P7sUw1cFlodiw9w6zjQdTnJPpMW1PlDunB7s-JW5cKVnJpQ5ppCMxvHhWskQK-7izwjEkEWFQwoFNRm4YkSJbS9fRFxYo4DKddy4A'
        }
      })
    );
}
