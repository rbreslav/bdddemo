module.exports = async (event, context) => {

    return {
        body: JSON.stringify({
            output: 'SomeOutputs'
        })
    }
};