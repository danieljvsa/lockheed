const mysql = require('mysql2');
const Sequelize = require('sequelize');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'contratos'
});

const db = new Sequelize('contratos', 'root', '', {
    host: "localhost", //your server
    port: 3306, //server port
    dialect: 'mysql'
  });

module.exports = {connection: connection, db: db}