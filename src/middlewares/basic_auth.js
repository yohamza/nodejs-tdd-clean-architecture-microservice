const basicAuth = ({ auth, dotenv }) => {
    return async function authenticate(req, res, next) {
        dotenv.config();

        const val = auth(req);
        if (!val) return res.sendStatus(403);
        if (!val.name) return res.sendStatus(403);
        if (!val.pass) return res.sendStatus(403);

        if (val.name !== process.env.name) return res.sendStatus(403);
        if (val.pass !== process.env.pass) return res.sendStatus(403);

        next();
    };
};

module.exports = basicAuth;