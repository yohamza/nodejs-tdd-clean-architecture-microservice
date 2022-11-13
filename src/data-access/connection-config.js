// connect to database;
const connectionConfig = ({ dotenv, pg }) => {
    return async function connect() {
        dotenv.config();
        const { Pool } = pg;

        const config = {
            user: process.env.PGUSER,
            database: process.env.PGDATABASE,
            port: process.env.PGPORT,
            host: process.env.PGHOST,
        };

        return new Pool(config);
    }
}

module.exports = connectionConfig;