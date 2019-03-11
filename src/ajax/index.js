import axios from 'axios';

let store;
/**
 * Setup headers
 * @param {Object} config axios request config
 */
function request(config) {
    const state = store.getState();
    const { rsaToken } = state.loginUser;
    const { headers } = config;

    Object.assign(headers, {
        'Content-Type': 'application/json',
    });

    // if (rsaToken) {
    //     Object.assign(headers, {
    //         rsaToken,
    //     });
    // }
    return config;
}


/**
 * Handle AJAX error response
 * @param {Object} res response
 */
function responseError(err) {
    return Promise.reject(err);
}

/**
 * Handle AJAX success response
 * @param {Object} res response
 */
function response(res) {
    return res;
}

/**
 * Setup ajax interceptors
 * @param {Store} reduxStore A global redux store
 */
export default function setup(reduxStore) {
    store = reduxStore;
    return {
        request: axios.interceptors.request.use(request),
        response: axios.interceptors.response.use(response, responseError),
    };
}
