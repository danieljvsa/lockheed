const express = require('express')
const routes = express.Router()


const ProfileController = require('./controllers/ProfileController')



routes.get('/', ProfileController.index)
routes.post('/', ProfileController.search)


module.exports = routes;