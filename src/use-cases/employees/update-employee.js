const updateEmployeeUseCase = ({ updateEmployeeReqValidation, employeesDb }) => {
    return async function update(info) {
        let data = await updateEmployeeReqValidation(info);

        data = {
            id: data.getId(),
            firstName: data.getFirstName(),
            lastName: data.getLastName(),
            age: data.getAge(),
        };

        const checkId = await employeesDb.selectOne(data.id);
        if (checkId.rowCount == 0) throw new Error('Employee doesn\t exist');

        const checkIfNameExists = await employeesDb.checkNameExistsUpdate({ data });
        if (checkIfNameExists.rowCount == 0) throw new Error('Employee already exists. Choose other name');

        const res = await employeesDb.updateEmployee({ data });

        let message = 'Employee was not updated. Please check back later';

        if (res[0] == 1) message = 'Employee updated succesfully';

        return message;

    }

}

module.exports = updateEmployeeUseCase;