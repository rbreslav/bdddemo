const LambdaTester = require('lambda-tester');
const apiHandler = require('../api-handler');

describe('BDD Demo', () => {
    describe('Valid API Request', () => {

        function validApiRequest(inputData) {
            let response =
                new Promise((resolve, reject) => {
                    LambdaTester(apiHandler)
                        .event({ input: inputData})
                        .expectResolve((result, additonal) => {
                            resolve(JSON.parse(result.body));
                        });
                });

            response.then((result) => {
                console.log(result);
                expect(result.output).toBe('SomeOutput');
            }).catch((err) => {
                console.log(err);
            });
        }

        it('Basic Request', async (done) => {
            validApiRequest.apply(this, ['SomeInput']);
            done();
        }, 600000)
    });
});