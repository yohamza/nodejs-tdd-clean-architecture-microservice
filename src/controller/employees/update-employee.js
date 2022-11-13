
const updateEmployee = ({ updateEmployeeUseCase }) => {
    return async function update(httpRequest) {

        try {

            const { source = {}, ...info } = httpRequest.body;

            source.ip = httpRequest.ip
            source.browser = httpRequest.browser;
            if (httpRequest.headers['Referer']) {
                source.Referer = httpRequest.headers['Referer'];
            }

            const reqParams = {
                ...info,
                source,
                id: httpRequest.params.id, // when id is passed
            };

            const updated = await updateEmployeeUseCase(reqParams);

            return {
                headers: {
                    'Content-Type': 'application/json',
                },
                statusCode: 200,
                body: { updated },
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

module.exports = updateEmployee;