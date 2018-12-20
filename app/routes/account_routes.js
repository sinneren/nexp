module.exports = function (app, db) {
    app.get('/account/:id', (app_req, app_res) => {
        const text = 'SELECT * FROM account WHERE id = $1';
        const values = [app_req.params.id];

        db.query(text, values, (db_err, db_res) => {
            if (db_err) {
                app_res.send({ 'error': 'An error has occurred' });
            } else {
                app_res.send(db_res.rows[0])
            }
            db.end();
        });
    });
    app.post('/account', (app_req, app_res) => {
        const text = 'INSERT INTO account(name, password) VALUES($1, $2) RETURNING *';
        const values = [app_req.body.name, app_req.body.password ];

        db.query(text, values, (db_err, db_res) => {
            if (db_err) {
                app_res.send({ 'error': 'An error has occurred' });
            } else {
                app_res.send(db_res.rows[0])
            }
            db.end();
        });
    });
};