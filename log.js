function log(message, message1, message2) {
    if(process.env.DEBUG){
        console.log(message + message1 + message2);
    }
};

module.exports = log;