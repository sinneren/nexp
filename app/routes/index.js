const accountRoutes = require('./account_routes');
const viewtRoutes = require('./view_routes');
module.exports = function (app, db) {
    accountRoutes(app, db);
    viewtRoutes(app);
};