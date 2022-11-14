const randomString = require('randomstring'); //for generating random strings

//require employee usecases
const {
  createEmployeeUseCase,
  updateEmployeeUseCase,
  getEmployeesUseCase,
  deleteEmployeeUseCase,
} = require('../../../use-cases/employees/app');

//Changing to test db
beforeAll(() => {
  process.env.NODE_ENV = 'test';
});

describe('Employee Test Suite', () => {
  it('/GET /employees --> should return array of employees', async () => {
    let info = {};
    let res = await getEmployeesUseCase(info);

    return expect(res).toBeDefined();
  });

  it('/GET /employees/:id --> should return employee by id', async () => {
    let info = { id: 1 };
    let res = await getEmployeesUseCase(info);

    return expect(res).toBeDefined();
  });

  it('/POST /employees --> All fields have correct values so this should create an entry for employee in database', async () => {
    let info = {
      firstName: randomString.generate({
        length: 10,
        charset: 'alphabetic',
      }),
      lastName: randomString.generate({
        length: 10,
        charset: 'alphabetic',
      }),
      age: Math.floor(Math.random() * 40) + 18,
    };

    let res = await createEmployeeUseCase(info);

    return expect(res).toBe('Employee added succesfully');
  });

  it('/POST /employees --> Fields missing so this should throw an error', async () => {
    try {
      let info = {
        firstName: randomString.generate({
          length: 10,
          charset: 'alphabetic',
        }),
        lastName: null || '',
        age: Math.floor(Math.random() * 40) + 18,
      };

      let res = await createEmployeeUseCase(info);
    } catch (error) {
      expect(error.message).toBe(
        'Please enter a valid last name and its length should be atleast 3'
      );
    }
  });

  it('/PUT /employees/:id --> All fields have correct values so this should update an entry for employee in database for provided id', async () => {
    let info = {};
    let emp = await getEmployeesUseCase(info);
    let employee = emp[emp.length - 1];

    info = {
      id: employee.id,
      firstName: randomString.generate({
        length: 10,
        charset: 'alphabetic',
      }),
      lastName: randomString.generate({
        length: 10,
        charset: 'alphabetic',
      }),
      age: Math.floor(Math.random() * 40) + 18,
    };

    let res = await updateEmployeeUseCase(info);

    return expect(res).toBe('Employee updated succesfully');
  });

  it('/PUT /employees/:id --> Fields missing so this should throw an error', async () => {
    try {
      let info = {};
      let emp = await getEmployeesUseCase(info);
      let employee = emp[emp.length - 1];

      info = {
        id: employee.id,
        firstName: null || '',
        lastName: randomString.generate({
          length: 10,
          charset: 'alphabetic',
        }),
        age: Math.floor(Math.random() * 40) + 18,
      };

      let res = await updateEmployeeUseCase(info);
    } catch (error) {
      expect(error.message).toBe(
        'Please enter a valid first name and its length should be atleast 3'
      );
    }
  });

  it('/DELETE /employees/:id --> should delete employee entry with specified id', async () => {
    const info = {};
    let emp = await getEmployeesUseCase(info);
    let employee = emp[emp.length - 1];

    let data = {
      id: employee.id,
    };

    let res = await deleteEmployeeUseCase(data);

    return expect(res).toBe('Employee deleted succesfully');
  });

  it("/DELETE /employees/:id --> should throw error when provided with id that doesn't exist", async () => {
    try {
      const info = {};
      let emp = await getEmployeesUseCase(info);
      let employee = emp[emp.length - 1];

      let data = {
        id: employee.id + 10,
      };

      let res = await deleteEmployeeUseCase(data);
    } catch (error) {
      expect(error.message).toBe('Employee doesn\t exist');
    }
  });
});
