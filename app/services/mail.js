/**
 * Created by d.kondratenko on 22.11.2018.
 */
const mailOptions = require('../../config/mail');
const gmail = require('gmail-send')();

module.exports = {
    sendMail: (opt = {}) => {
        if (!opt.to) {
            console.error('No to');
            return
        }
        gmail(Object.assign({}, mailOptions.defaultValues, opt, mailOptions.options), function (err, res) {
            console.log('* [example 1.1] send() callback returned: err:', err, '; res:', res);
        });
    }
};