import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import { createEpicMiddleware } from 'redux-observable';
import 'rxjs';
import rootReducer from '../reducers';
import rootEpic from '../epics';
import ajaxSetup from '../ajax';
import ApiService, { ApiService2, ApiServiceProfileDetails, ApiServiceThisWeek } from '../services/apiService';

export const history = createHistory();

const initialState = {};

const enhancers = [];
const middleware = [
    routerMiddleware(history),
    createEpicMiddleware(rootEpic, {
        dependencies: {
            loadDataCandidateService: ApiService.loadDataCandidate,
            checkUserService: ApiService2.checkUser,
            loadProfileDetailsService: ApiServiceProfileDetails.loadDataProfileDetails,
            loadDataProfileThisWeekService: ApiServiceThisWeek.loadDataProfileThisWeek,
        },
    }),
];

if (process.env.NODE_ENV === 'development') {
    const { devToolsExtension } = window;

    if (typeof devToolsExtension === 'function') {
        enhancers.push(devToolsExtension());
    }
}

const composedEnhancers = compose(
    applyMiddleware(...middleware),
    // autoRehydrate(), // FIXME: remove when deploying to production
    ...enhancers,
);

const store = createStore(rootReducer, initialState, composedEnhancers);

ajaxSetup(store);

// persistStore(store); // FIXME: remove when deploying to production

export default store;
