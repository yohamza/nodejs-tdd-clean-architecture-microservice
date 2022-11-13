const createEmployee = ({ createEmployeeUseCase }) => {
    return async function post(httpRequest) {

        try {

            const { source = {}, ...info } = httpRequest.body;

            source.ip = httpRequest.ip
            source.browser = httpRequest.browser;
            if (httpRequest.headers['Referer']) {
                source.Referer = httpRequest.headers['Referer'];
            }

            const posted = await createEmployeeUseCase({ ...info, source });

            return {
                headers: {
                    'Content-Type': 'application/json',
                },
                statusCode: 201,
                body: { posted },
            };

        } catch (error) {

            return {
                headers: {
                    'Content-Type': 'application/json',
                },
                statusCode: error.statusCode,
                body: {
                    error: error,
                    error_message: error.message
                },
            };

        }

    }
}

module.exports = createEmployee;