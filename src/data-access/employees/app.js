const connection = require('../connection');
const models = require('../sequelize/models');

const query = require('./query');
const employeesDB = query({ connection, models });

module.exports = employeesDB;