/* eslint-disable global-require,no-global-assign */
import Index from './index';

const util = require('util');

it('renders App to DOM', () => {
    expect(util.inspect(Index)).toMatchSnapshot();
});
