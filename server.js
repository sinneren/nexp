const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg');

require('dotenv').config();

const app = express();

const port = process.env.SERVER_PORT || 8000;

const pool = new Pool({
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    host: process.env.DB_HOST,
    database: process.env.DB_DB,
    port: process.env.PORT,
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

pool.connect(function (err, database) {
    if (err) return console.error(err);

    require('./app/routes')(app, database);
    const server = app.listen(port, () => {
        console.log(`Server running -> PORT ${server.address().port}`)
    })
});
