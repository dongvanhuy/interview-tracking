import { AuthenticationContext, adalFetch, withAdalLogin } from 'react-adal';

export const adalConfig = {
    // tenant: '93f33571-550f-43cf-b09f-cd331338d086',
    tenant: '0e96568a-2285-4e46-92e9-ea3859b3a8cc',
    // clientId: '036e0394-cb25-47bc-8102-e21d3e5292a5',
    clientId: '95cdc2b1-0240-4f89-8d5d-dec221844182',
    endpoints: {
        api: '95cdc2b1-0240-4f89-8d5d-dec221844182', // the same client id
    },
    postLogoutRedirectUri: 'https://interview-tracking.azurewebsites.net',
    cacheLocation: 'localStorage',
};

export const authContext = new AuthenticationContext(adalConfig);

export const adalApiFetch = (fetch, url, options) =>
    adalFetch(authContext, adalConfig.endpoints.api, fetch, url, options);

export const withAdalLoginApi = withAdalLogin(
    authContext,
    adalConfig.endpoints.api,
);