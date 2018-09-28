export default [{
    state: 'i have a account',
    uponReceiving: 'log in',
    withRequest: {
        method: 'POST',
        path: '/login',
        headers: {
            'Content-type': 'application/json',
        },
        body: {
            username: 'Ryan',
            password: 'e4a44abaad62e7cfef8c53bbe5e4db7f',
        },
    },
    willRespondWith: {
        status: 200,
        headers: {
            'Content-Type': 'application/json; charset=UTF-8',
        },
        body: {
            token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVHNzc3NzcyJ9',
        },
    },
},
{
    state: 'i have a account',
    uponReceiving: 'an invalid log in',
    withRequest: {
        method: 'POST',
        path: '/login',
        headers: {
            'Content-type': 'application/json',
        },
        body: {
            username: 'Nga',
            password: 'any',
        },
    },
    willRespondWith: {
        status: 401,
    },
},
];
