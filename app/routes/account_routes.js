const { getUserByID, setUser, deleteUserByID, updateUserByID } = require('../queries/account/');

module.exports = function (app, db) {
    app.get('/account/:id', (app_req, app_res) => {
        getUserByID(app_req, app_res, db);
    });
    app.put('/account/:id', (app_req, app_res) => {
        updateUserByID(app_req, app_res, db);
    });
    app.delete('/account/:id', (app_req, app_res) => {
        deleteUserByID(app_req, app_res, db);
    });
    app.post('/account', (app_req, app_res) => {
        setUser(app_req, app_res, db);
    });
};