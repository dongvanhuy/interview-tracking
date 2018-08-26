import { AuthenticationContext, adalFetch, withAdalLogin } from 'react-adal';

export const adalConfig = {
    tenant: '93f33571-550f-43cf-b09f-cd331338d086',
    clientId: '036e0394-cb25-47bc-8102-e21d3e5292a5',
    endpoints: {
        api: '036e0394-cb25-47bc-8102-e21d3e5292a5', // the same client id
    },
    postLogoutRedirectUri: 'http://localhost:3000/',
    cacheLocation: 'localStorage',
};

export const authContext = new AuthenticationContext(adalConfig);

export const adalApiFetch = (fetch, url, options) =>
    adalFetch(authContext, adalConfig.endpoints.api, fetch, url, options);

export const withAdalLoginApi = withAdalLogin(authContext, adalConfig.endpoints.api);
