const auth = require('basic-auth');
const dotenv = require('dotenv');

const basicAuth = require('./basic_auth');
const validateAuth = basicAuth({ auth, dotenv });

const service = Object.freeze({
    validateAuth,
});

module.exports = service;
module.exports = { validateAuth };