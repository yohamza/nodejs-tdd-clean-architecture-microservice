const {
    createEmployeeController,
    getEmployeeController,
    updateEmployeeController,
    deleteEmployeeController
} = require('../../controller/employees/app');

const employeeRoute = ({ router, makeExpressCallback, validateAuth }) => {

    //GET
    router.get('/', validateAuth, makeExpressCallback(getEmployeeController));
    router.get('/:id', validateAuth, makeExpressCallback(getEmployeeController));

    //CREATE
    router.post('/', validateAuth, makeExpressCallback(createEmployeeController));

    //UPDATE
    router.put('/:id', validateAuth, makeExpressCallback(updateEmployeeController));

    //DELETE
    router.delete('/:id', validateAuth, makeExpressCallback(deleteEmployeeController));

    return router;
}

module.exports = employeeRoute;