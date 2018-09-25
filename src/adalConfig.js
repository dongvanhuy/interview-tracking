import { AuthenticationContext, adalFetch, withAdalLogin } from 'react-adal';

export const adalConfig = {
    tenant: '0e96568a-2285-4e46-92e9-ea3859b3a8cc',
    // clientId: 'fede1873-aa95-4256-b554-1aa5a89e26ef',
    clientId: '95cdc2b1-0240-4f89-8d5d-dec221844182',
    endpoints: {
        api: '95cdc2b1-0240-4f89-8d5d-dec221844182', // the same client id
    },
    postLogoutRedirectUri: 'https://dxc-interview-tracking-release.azurewebsites.net/',
    cacheLocation: 'localStorage',
    ResponseType: 'token',
};

export const authContext = new AuthenticationContext(adalConfig);

export const adalApiFetch = (fetch, url, options) =>
    adalFetch(authContext, adalConfig.endpoints.api, fetch, url, options);

export const withAdalLoginApi = withAdalLogin(
    authContext,
    adalConfig.endpoints.api,
    // 'https://graph.microsoft.com',
);

export const getAccessToken = authContext.getCachedToken(adalConfig.endpoints.api);
