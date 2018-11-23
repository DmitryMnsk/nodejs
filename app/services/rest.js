/**
 * Created by d.kondratenko on 21.11.2018.
 */
var ObjectID = require('mongodb').ObjectID,
    appGlobal, dbGlobal, logFileName;
const fs = require('fs');
const dateformat = require('dateformat');
const logService = require('./log');
const mailService = require('./mail');

function getLogTime () {
    return dateformat(new Date(), "yyyy-mm-dd_HH-MM-ss");
}
module.exports = {
    init: (app, db) => {
        appGlobal = app;
        dbGlobal = db;
        var myLogger = function (req, res, next) {
            logService.addRec(`url:${req.originalUrl}`);
            next();
        };
        app.use(myLogger);
    },
    initGetRest: function (coolection) {
        appGlobal.get(`/${coolection}/:id`, (req, res) => {
            const id = req.params.id;
            const details = {'_id': new ObjectID(id)};
            mailService.sendMail({to: '2belarus2@gmail.com', text: 'tratata'});
            dbGlobal.collection(`${coolection}`).findOne(details, (err, item) => {
                if (err) {
                    res.send({'error': 'An error has occurred'});
                } else {
                    res.send(item);
                }
            });
        });
    },
    initPostRest: function (coolection, params) {
        appGlobal.post(`/${coolection}`, (req, res) => {
            const obj = {},
                body = req.body;
            params && params.length && params.forEach((param) => {
                obj[param] = body[param];
            });
            dbGlobal.collection(`${coolection}`).insert(obj, (err, result) => {
                if (err) {
                    res.send({'error': 'An error has occurred'});
                } else {
                    res.send(result.ops[0]);
                }
            });
        });
    },
    initDeleteRest: function (coolection, params) {
        appGlobal.delete(`/${coolection}/:id`, (req, res) => {
            const id = req.params.id;
            const details = { '_id': new ObjectID(id) };
            dbGlobal.collection(`${coolection}`).remove(details, (err, item) => {
                if (err) {
                    res.send({'error': 'An error has occurred'});
                } else {
                    res.send('Object ' + id + ' deleted!');
                }
            });
        });
    },
    initPutRest: function (coolection, params) {
        appGlobal.post(`/${coolection}/:id`, (req, res) => {
            const obj = {},
                body = req.body,
                 details = { '_id': new ObjectID(req.params.id) };
            params && params.length && params.forEach((param) => {
                obj[param] = body[param];
            });
            dbGlobal.collection(`${coolection}`).update(details, obj, (err, result) => {
                if (err) {
                    res.send({'error': 'An error has occurred'});
                } else {
                    res.send(result.ops[0]);
                }
            });
        });
    }
};