const {
    createEmployeeUseCase,
    getEmployeesUseCase,
    deleteEmployeeUseCase,
    updateEmployeeUseCase
} = require('../../use-cases/employees/app');

const createEmployee = require('./create-employee');
const getEmployee = require('./get-employee');
const deleteEmployee = require('./delete-employee');
const updateEmployee = require('./update-employee');

const createEmployeeController = createEmployee({ createEmployeeUseCase });
const getEmployeeController = getEmployee({ getEmployeesUseCase });
const deleteEmployeeController = deleteEmployee({ deleteEmployeeUseCase });
const updateEmployeeController = updateEmployee({ updateEmployeeUseCase });

const service = Object.freeze({
    createEmployeeController,
    getEmployeeController,
    deleteEmployeeController,
    updateEmployeeController,
})

module.exports = service;
module.exports = {
    createEmployeeController,
    getEmployeeController,
    deleteEmployeeController,
    updateEmployeeController,
}

