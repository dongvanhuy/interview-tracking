import { Observable } from 'rxjs';
import axios from 'axios';

import config from '../config';

const API_HOST = config.apiService.host;

export default class ApiService {
    static loadDataCandidate = () => Observable.fromPromise(axios.get(`${API_HOST}/getListCandidate`, {data: {}}));
}
