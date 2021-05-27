const db = require('../dynamo/dataModel');
const log = require('../../log');

let responseCode = 200;

module.exports = async function(event, request){
    log('DEBUG|', 'event: ',  JSON.stringify(event));
    event.value = event.value.toFixed(2);
  
    let data = await db.insert(event);
    log('DEBUG|', 'data: ',  JSON.stringify(data));
  
    let responseBody = {
        message: 'Success on insert new data',
        value: event.value,
        date: new Date()
    };

    let response = {
        statusCode: responseCode,
        headers: {
            "device" : event.deviceId
        },
        body: responseBody
    };

    log('DEBUG|', 'response: ', JSON.stringify(response));
    return response;
};