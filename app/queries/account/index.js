const getUserByID = (app_req, app_res, db) => {
    const text = 'SELECT * FROM account WHERE id = $1';
    const values = [app_req.params.id];

    db.query(text, values, (db_err, db_res) => {
        if (db_err) {
            console.log('Error Connecting:', db_err);
            return;
        } else {
            app_res.status(200).json(db_res.rows[0]);
        }
    });
}
const setUser = (app_req, app_res, db) => {
    const text = 'INSERT INTO account(name, password) VALUES($1, $2) RETURNING *';
    const values = [app_req.body.name, app_req.body.password];

    db.query(text, values, (db_err, db_res) => {
        if (db_err) {
            console.log('Error Connecting:', db_err);
            return;
        } else {
            app_res.status(201).json(db_res.rows[0].id);
        }
    });
}
const deleteUserByID = (app_req, app_res, db) => {
    const text = 'DELETE FROM account WHERE id = $1';
    const values = [app_req.params.id];

    db.query(text, values, (db_err) => {
        if (db_err) {
            console.log('Error Connecting:', db_err);
            return;
        } else {
            app_res.status(200).send(app_req.params.id);
        }
    });
}
const updateUserByID = (app_req, app_res, db) => {
    const text = 'UPDATE account SET name = $1, password = $2 WHERE id = $3';
    const values = [app_req.body.name, app_req.body.password, app_req.params.id];

    db.query(text, values, (db_err) => {
        if (db_err) {
            console.log('Error Connecting:', db_err);
            return;
        } else {
            app_res.status(200).send(app_req.params.id);
        }
    });
}

module.exports = {
    getUserByID,
    setUser,
    deleteUserByID,
    updateUserByID,
}