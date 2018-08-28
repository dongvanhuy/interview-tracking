import { AuthenticationContext, adalFetch, withAdalLogin } from 'react-adal';

export const adalConfig = {
    tenant: '93f33571-550f-43cf-b09f-cd331338d086',
    clientId: 'fede1873-aa95-4256-b554-1aa5a89e26ef',
    endpoints: {
        api: 'fede1873-aa95-4256-b554-1aa5a89e26ef', // the same client id
    },
    postLogoutRedirectUri: 'https://dxc-interview-tracking-release.azurewebsites.net/',
    cacheLocation: 'localStorage',
};

export const authContext = new AuthenticationContext(adalConfig);

export const adalApiFetch = (fetch, url, options) =>
    adalFetch(authContext, adalConfig.endpoints.api, fetch, url, options);

export const withAdalLoginApi = withAdalLogin(
    authContext,
    adalConfig.endpoints.api,
);
