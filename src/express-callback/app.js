const makeExpressCallback = (controller) => {
    return async (req, res, next) => {
        console.log(req);
        const httpRequest = {
            body: req.body,
            query: req.query,
            params: req.params,
            ip: req.ip,
            method: req.method,
            path: req.path,
            headers: {
                'Content-Type': req.get('Content-Type'),
                Referer: req.get('referer'),
                'User-Agent': req.get('User-Agent'),
                Cookie: req.get('Authorization'),
                'Access-Control-Allow-Origin': '*',
            },
        };
        try {
            let httpResponse = await controller(httpRequest);
            if (httpResponse.headers) {
                res.set('Access-Control-Allow-Origin', '*');
                res.set(httpResponse.headers);
            }
            res.type('json');
            res.status(httpResponse.statusCode).send(httpResponse.body);

        } catch (error) {
            res.sendStatus(500);
        }
    };
};

module.exports = makeExpressCallback;