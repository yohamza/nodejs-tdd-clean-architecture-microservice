const {
    createEmployeeReqValidation,
    updateEmployeeReqValidation } = require('../../entities/employees/app');
const employeesDB = require('../../data-access/employees/app');
const { selectAll } = require('../../data-access/employees/query');

const createEmployee = require('./create-employee');
const updateEmployee = require('./update-employee');
const getEmployee = require('./get-employee');
const deleteEmployee = require('./delete-employee');

const createEmployeeUseCase = createEmployee({ createEmployeeReqValidation, employeesDB });
const updateEmployeeUsecase = updateEmployee({ updateEmployeeReqValidation, employeesDB });
const getEmployeesUseCase = getEmployee({ selectAll });
const deleteEmployeeUsecase = deleteEmployee({ employeesDB });

const services = Object.freeze({
    createEmployeeUseCase,
    updateEmployeeUsecase,
    getEmployeesUseCase,
    deleteEmployeeUsecase
});

module.exports = services;
module.exports = {
    createEmployeeUseCase,
    updateEmployeeUsecase,
    getEmployeesUseCase,
    deleteEmployeeUsecase,
};