const { Pool } = require('pg')
const config = require('./config');

const pool = new Pool({
    user: config.user,
    host: config.host,
    database: config.database,
    password: config.password,
    port: 5432,
  })
  
module.exports = pool;