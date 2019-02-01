const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg');
const mustacheExpress = require('mustache-express');

require('dotenv').config();

const port = process.env.SERVER_PORT || 8000;

const pool = new Pool({
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    host: process.env.DB_HOST,
    database: process.env.DB_DB,
    port: process.env.PORT,
});

const app = express();

app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', './app/views');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

pool
    .connect()
    .then(client => {
        require('./app/routes')(app, client);
    });

const server = app.listen(port, () => {
    console.log(`Server running -> PORT ${server.address().port}`)
});
