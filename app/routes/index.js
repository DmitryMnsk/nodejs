/**
 * Created by d.kondratenko on 21.11.2018.
 */
const noteRoutes = require('./note_routes');
module.exports = function() {
    noteRoutes();
    // Тут, позже, будут и другие обработчики маршрутов
};