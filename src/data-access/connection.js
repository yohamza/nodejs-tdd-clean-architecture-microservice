const dotenv = require('dotenv');
const pg = require('pg');
const connectionConfig = require('./connection-config');
const connection = connectionConfig({ dotenv, pg });
const services = Object.freeze({ connection });

module.exports = services;
module.exports = { connection };