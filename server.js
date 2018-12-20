const express = require('express');
const bodyParser = require('body-parser');
const { Pool, Client } = require('pg');

const app = express();

const port = 8000;

const client = new Client({
    user: 'odmin',
    host: 'localhost',
    database: 'react_exp',
    password: 'odmin',
    port: 5432,
})

app.use(bodyParser.urlencoded({ extended: true }));

client.connect(function (err, database) {
    if (err) return console.error(err);

    require('./app/routes')(app, database);
    app.listen(port, () => {
        console.log('We are live on ' + port);
    });
});
