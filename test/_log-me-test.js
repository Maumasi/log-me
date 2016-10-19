const expect = require('chai');
const log = require('./../index.js');
describe('log-me', () => {
  process.env.DEBUG = true;
  const error = new Error();
  log(error, 'test/_log-me-test.js', 'Message', 'Description');
  it('should print out the message', () => {
    process.env.DEBUG = true;
    const error = new Error();
    log(error, 'test/_log-me-test.js', 'Message', 'Description', 2);
  });
});
