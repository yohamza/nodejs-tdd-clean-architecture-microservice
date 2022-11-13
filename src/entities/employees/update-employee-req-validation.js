const updateEmployeeReqValidation = () => {
    return function update(id, { firstName, lastName, age } = {}) {
        if (!id) {
            throw new Error("Please enter ID of employee.");
        }
        if (!firstName || firstName.length < 3) {
            throw new Error('Please enter a valid first name and its length should be atleast 3');
        }
        if (!lastName || lastName.length < 3) {
            throw new Error('Please enter a valid last name and its length should be atleast 3');
        }
        if (age == null) {
            throw new Error('Please enter a valid age');
        }

        return Object.freeze({
            getId: () => id,
            getFirstName: () => firstName,
            getLastName: () => lastName,
            getAge: () => age
        });
    }
}

module.exports = updateEmployeeReqValidation;