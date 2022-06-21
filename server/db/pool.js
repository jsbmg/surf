const { Pool } = require('pg')

require('dotenv').config();

const pool = new Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PW,
  database: process.env.DB_NAME,
  host: process.env.DB_HOST
})

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback)
  },
}
