const dbModel = require('./dynamoModel');
const dbEnum = require('./databaseEnum');


const insert = async function(value){
    const db = new dbModel(dbEnum.SMARTHOME_DATA);
    return await db.insert(value);
}

module.exports = {
    insert:insert
}