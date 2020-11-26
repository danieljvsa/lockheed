const express = require('express')
const routes = express.Router()


const ProfileController = require('./controllers/ProfileController')



routes.get('/', ProfileController.index)


module.exports = routes;