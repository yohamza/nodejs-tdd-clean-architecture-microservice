const query = ({ connection, models }) => {
  return Object.freeze({
    insertNewEmployee,
    checkNameExists,
    selectAll,
    selectOne,
    checkNameExistsUpdate,
    updateEmployee,
    deleteEmployee,
  });

  async function insertNewEmployee({ data }) {
    try {
      const Employees = models.Employees;
      const res = await Employees.create(data);
      return res;
    } catch (error) {
      console.log('error: ', error);
    }
  }

  async function checkNameExists({ data }) {
    try {
      const pool = await connection();
      const { firstName, lastName } = data;

      const res = await new Promise((resolve) => {
        const sql = `SELECT id FROM "Employees" WHERE "firstName" = $1 AND "lastName" = $2`;
        const params = [firstName, lastName];
        pool.query(sql, params, (error, res) => {
          pool.end();

          if (error) resolve(error);
          else resolve(res);
        });
      });

      return res;
    } catch (error) {
      console.log('error:', error);
    }
  }

  async function checkNameExistsUpdate({ data }) {
    try {
      const pool = await connection();
      const { firstName, lastName, id } = data;

      const res = await new Promise((resolve) => {
        const sql = `SELECT id FROM "Employees" WHERE "firstName" = $1 AND "id" != $3 AND "lastName" = $2 AND "id" != $3`;
        const params = [firstName, lastName, id];
        pool.query(sql, params, (error, res) => {
          pool.end();

          if (error) resolve(error);
          else resolve(res);
        });
      });

      return res;
    } catch (error) {
      console.log('error:', error);
    }
  }

  async function selectAll() {
    try {
      const pool = await connection();

      const res = new Promise((resolve) => {
        const sql = `SELECT * FROM "Employees"`;
        pool.query(sql, (error, res) => {
          pool.end();

          if (error) resolve(error);
          else resolve(res);
        });
      });

      return res;
    } catch (error) {
      console.log('error: ', error);
    }
  }

  async function selectOne(id) {
    try {
      const pool = await connection();

      const res = new Promise((resolve) => {
        const sql = `SELECT * FROM "Employees" WHERE "id" = $1`;
        const params = [id];
        pool.query(sql, params, (error, res) => {
          pool.end();

          if (error) resolve(error);
          else resolve(res);
        });
      });

      return res;
    } catch (error) {
      console.log('error: ', error);
    }
  }

  async function updateEmployee({ data }) {
    try {
      const Employees = models.Employees;
      const res = await Employees.update(
        {
          firstName: data.firstName,
          lastName: data.lastName,
          age: data.age,
        },
        {
          where: {
            id: data.id,
          },
        }
      );

      return res;
    } catch (error) {
      console.log('error: ', error);
    }
  }

  async function deleteEmployee(id) {
    try {
      const Employees = models.Employees;
      const res = await Employees.destroy({
        where: {
          id,
        },
      });

      return res;
    } catch (error) {
      console.log('error: ', error);
    }
  }
};

module.exports = query;
