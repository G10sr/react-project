const { Pool } = require("pg");
const dns = require("dns");
require("dotenv").config();

// Forzar resolución IPv4
dns.setDefaultResultOrder("ipv4first");

console.log("DATABASE_URL:", process.env.DATABASE_URL);

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    require: true,
    rejectUnauthorized: false,
  },
});

module.exports = pool;