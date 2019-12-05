const { Client } = require('pg')
const config = require('./config');

const client = new Client({
    user: config.user,
    host: config.host,
    database: config.database,
    password: config.password,
    port: 5432,
  })

module.exports = client;