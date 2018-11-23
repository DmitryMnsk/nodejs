/**
 * Created by d.kondratenko on 22.11.2018.
 */
const fs = require('fs');
const dateformat = require('dateformat');
var logFileName = './app/logs/server_log_' + getLogTime () + '.txt';
function getLogTime () {
    return dateformat(new Date(), "yyyy-mm-dd_HH-MM-ss");
}
module.exports = {
    init: () => {
        fs.writeFile(logFileName, 'startServer - ' + getLogTime ());
    },
    addRec: (text) => {
        fs.appendFile(logFileName, `\n${getLogTime()} - ` + text);
    }
};