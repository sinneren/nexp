const noteRoutes = require('./account_routes');
module.exports = function (app, db) {
    noteRoutes(app, db);
};