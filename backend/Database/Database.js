require('dotenv').config()
const { Client } = require('pg');

//client object for database
exports.client = new Client({
    user: process.env.USERNAME,
    host: '0.0.0.0',
    database: 'Mini-project',
    password: process.env.PASSWORD,
    port: 5432,
  });

