const { Pool } = require('pg');

const pool = new Pool({
    user: "postgres",
    password: "postgres",
    database: "postgres",
    host: "localhost",
    port: 5432
});

// host: "10.128.2.114"
// port: 5432
module.exports = pool;
