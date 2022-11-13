const getEmployee = (employeesDB) => {

    return async function get(info) {
        let data = [];
        const { id } = info;

        if (id) {
            //if id exists we're going to query for single employee
            const res = await employeesDB.selectOne(id);
            if (res.rowCount > 0) {
                const employeesList = res.rows;

                for (let i = 0; i < employeesList.length; i++) {
                    const employee = employeesList[i];

                    data.push({
                        id: employee.id,
                        firstName: employee.firstName ? employee.firstName : null,
                        lastName: employee.lastName ? employee.lastName : null,
                        age: employee.age ? employee.age : 0,
                        createdAt: employee.createdAt,
                        updatedAt: employee.updatedAt,
                    });
                }
            }
        }
        else {
            //if id doesn't exists we're going to query for all employee
            const res = await employeesDB.selectAll({});
            if (res.rowCount > 0) {
                const employeesList = res.rows;

                for (let i = 0; i < employeesList.length; i++) {
                    const employee = employeesList[i];

                    data.push({
                        id: employee.id,
                        firstName: employee.firstName ? employee.firstName : null,
                        lastName: employee.lastName ? employee.lastName : null,
                        age: employee.age ? employee.age : 0,
                        createdAt: employee.createdAt,
                        updatedAt: employee.updatedAt,
                    });
                }
            }
        }

        return data;
    }

}

module.exports = getEmployee;