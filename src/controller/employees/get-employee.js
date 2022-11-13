const getEmployees = ({ getEmployeesUseCase }) => {
    return async function get(httpRequest) {

        try {

            console.log(httpRequest);

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

            const employees = await getEmployeesUseCase(reqParams);

            return {
                headers: {
                    'Content-Type': 'application/json',
                },
                statusCode: 200,
                body: { employees },
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

module.exports = getEmployees;