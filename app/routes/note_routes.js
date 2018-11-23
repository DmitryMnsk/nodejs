/**
 * Created by d.kondratenko on 21.11.2018.
 */
var ObjectID = require('mongodb').ObjectID;
const rest           = require('../services/rest');
module.exports = function() {

    rest.initGetRest('notes');
    rest.initPostRest('notes', ['body', 'title']);
   /* //GET
    app.get('/notes/:id', (req, res) => {
        const id = req.params.id;
        const details = { '_id': new ObjectID(id) };
        db.collection('notes').findOne(details, (err, item) => {
            if (err) {
                res.send({'error':'An error has occurred'});
            } else {
                res.send(item);
            }
        });
    });
    //ADD
    app.post('/notes', (req, res) => {
        const note = { text: req.body.body, title: req.body.title };
        db.collection('notes').insert(note, (err, result) => {
            if (err) {
                res.send({ 'error': 'An error has occurred' });
            } else {
                res.send(result.ops[0]);
            }
        });
    });
    //REMOTE
    app.delete('/notes/:id', (req, res) => {
        const id = req.params.id;
        const details = { '_id': new ObjectID(id) };
        db.collection('notes').remove(details, (err, item) => {
            if (err) {
                res.send({'error':'An error has occurred'});
            } else {
                res.send('Note ' + id + ' deleted!');
            }
        });
    });
    //UPDATE
    app.put ('/notes/:id', (req, res) => {
        const id = req.params.id;
        const details = { '_id': new ObjectID(id) };
        const note = { text: req.body.body, title: req.body.title };
        db.collection('notes').update(details, note, (err, result) => {
            if (err) {
                res.send({'error':'An error has occurred'});
            } else {
                res.send(note);
            }
        });
    });*/
};