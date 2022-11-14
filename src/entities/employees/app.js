const create = require('./create-employee-req-validation');
const patch = require('./update-employee-req-validation');

const createEmployeeReqValidation = create();
const updateEmployeeReqValidation = patch();

const services = Object.freeze({ createEmployeeReqValidation, updateEmployeeReqValidation });

module.exports = services;
module.exports = { createEmployeeReqValidation, updateEmployeeReqValidation };