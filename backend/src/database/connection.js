//const mysql = require('mysql2');
const Sequelize = require('sequelize');
require('dotenv').config()

const {DATABASE_HOST, DATABASE_USER, DATABASE_PASSWORD, DATABASE_NAME, DATABASE_PORT, DATABASE_DIALECT} = process.env;

/*
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'contratos'
});*/

const db = new Sequelize(DATABASE_NAME, DATABASE_USER, DATABASE_PASSWORD, {
    host: DATABASE_HOST, //your server
    port: DATABASE_PORT, //server port
    dialect: DATABASE_DIALECT
  });

module.exports = {db: db}