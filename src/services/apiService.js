import { Observable } from 'rxjs';
import axios from 'axios';

import config from '../config';

const API_HOST = config.apiService.host;
const API_HOST2 = config.apiService2.host;

//
// `${API_HOST}/interviewer`
// export default class ApiService {
//     static loadDataCandidate = () => Observable.fromPromise(
//         axios.get('http://dxc-interviewtracking-api.azurewebsites.net/api/interviewers', {
//             data: {},
//             headers: { 'content-type': 'application/json' },
//         }
//     ));
// }

export default class ApiService {
    static loadDataCandidate = () => Observable.fromPromise(axios.get(`${API_HOST}/getListCandidate`, {data: {}}));
}

export class ApiService2 {
    static checkUser = () => Observable.fromPromise(axios.get(`${API_HOST2}/test`, {data: {}}));
}