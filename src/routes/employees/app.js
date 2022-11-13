const express = require('express');
const router = express.Router();
const makeExpressCallback = require('../../express-callback/app');

const employeeRoute = require('./routes');

const { validateAuth } = require('../../middlewares/app');

const route = employeeRoute({ router, makeExpressCallback, validateAuth });

const services = Object.freeze({
    route,
});

module.exports = services;
module.exports = { route, };
module.exports = router;