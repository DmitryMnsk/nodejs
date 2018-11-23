/**
 * Created by d.kondratenko on 21.11.2018.
 */
// server.js
const express        = require('express');
const {MongoClient}    = require('mongodb');
const bodyParser     = require('body-parser');
const db             = require('./config/db');
const rest           = require('./app/services/rest');
const log           = require('./app/services/log');
const app            = express();
const port = 8000;
app.use(bodyParser.urlencoded({ extended: true }));
MongoClient.connect(db.url, { useNewUrlParser: true }, (err, database) => {
    if (err) return console.log(err);
    log.init();
    rest.init(app, database.db());
    require('./app/routes')();
    app.listen(port, () => {
        console.log('We are live on ' + port);
    });
});
