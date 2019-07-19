const LambdaTester = require('lambda-tester');
const apiHandler = require('../api-handler');

describe('API Tests', () => {
    it('Valid Request', async (done) => {
        let response =
            new Promise((resolve, reject) => {
                LambdaTester(apiHandler)
                    .event({ input: 'SomeInput'})
                    .expectResolve((result, additonal) => {
                        resolve(JSON.parse(result.body));
                    });
            });


        response.then((result) => {
            console.log(result);
            expect(result.output).toBe('SomeOutputs');
            done();
        }).catch((err) => {
            console.log(err);
        });
    }, 600000)
});