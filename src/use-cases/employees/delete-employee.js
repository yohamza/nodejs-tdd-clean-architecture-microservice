const deleteEmployee = ({ employeesDb }) => {
    return async function destroy(info) {

        const { id } = info;

        const checkId = await employeesDb.selectOne(id);
        if (checkId.rowCount == 0) throw new Error('Employee doesn\t exist');

        const res = await employeesDb.deleteEmployee(id);

        let message = 'Employee was not deleted, please try again.';

        if (res == 1) {
            message = 'Employee deleted succesfully';
            return message;
        }
        else {
            throw new Error(message);
        }
    }
}

module.exports = deleteEmployee;