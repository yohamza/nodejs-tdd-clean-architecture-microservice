const {
    createEmployeeReqValidation,
    updateEmployeeReqValidation } = require('../../entities/employees/app');
const employeesDB = require('../../data-access/employees/app');

const createEmployee = require('./create-employee');
const updateEmployee = require('./update-employee');
const getEmployee = require('./get-employee');
const deleteEmployee = require('./delete-employee');

const createEmployeeUseCase = createEmployee({ createEmployeeReqValidation, employeesDB });
const updateEmployeeUseCase = updateEmployee({ updateEmployeeReqValidation, employeesDB });
const getEmployeesUseCase = getEmployee(employeesDB);
const deleteEmployeeUseCase = deleteEmployee(employeesDB);

const services = Object.freeze({
    createEmployeeUseCase,
    updateEmployeeUseCase,
    getEmployeesUseCase,
    deleteEmployeeUseCase
});

module.exports = services;
module.exports = {
    createEmployeeUseCase,
    updateEmployeeUseCase,
    getEmployeesUseCase,
    deleteEmployeeUseCase,
};