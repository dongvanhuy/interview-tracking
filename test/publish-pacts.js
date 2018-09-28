/* eslint-disable no-console */
/* eslint-disable arrow-parens */

const path = require('path');
const Broker = require('@pact-foundation/pact-node').default;
const pkg = require('../package.json');

const PACK_BROKER_URL = process.env.PACK_BROKER_URL || 'http://10.214.1.253';
const {
    PACK_BROKER_USERNAME: pactBrokerUsername,
    PACK_BROKER_PASSWORD: pactBrokerPassword,
} = process.env;

const brokerOpts = {
    pactUrls: [path.resolve(process.cwd(), 'pacts')],
    pactBroker: PACK_BROKER_URL,
    pactBrokerUsername,
    pactBrokerPassword,
    consumerVersion: pkg.version,
};

console.log(`Publishing Pacts to: ${PACK_BROKER_URL} as user '${pactBrokerUsername || ''}'`);

Broker.publishPacts(brokerOpts)
    .then(res => {
        console.log('Published successfully.', 'See the response:');
        console.log(JSON.stringify(res, null, 2));
    })
    .catch(() => {
        console.error('Failed to publish Pacts');
        process.exit(1); // Exit with error code
    });
