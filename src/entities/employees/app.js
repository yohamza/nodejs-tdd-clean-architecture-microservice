const create = require('./create-employee-req-validation');
const patch = require('./update-employee-req-validation');

const createEmployee = create();
const patchEmployee = patch();

const services = Object.freeze({ createEmployee, patchEmployee });

module.exports = services;
module.exports = { createEmployee, patchEmployee };