const log = require('./log');
const handleInsert = require('./src/handler/handleInsert')

const handlerFunction = async (event, request) => {
    return await handleInsert(event, request);
};

exports.handler = handlerFunction;