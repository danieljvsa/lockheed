const express = require('express')
const routes = express.Router()


const ProfileController = require('./controllers/ProfileController')
const ContractsController = require('./controllers/ContractsController')
const CompaniesController = require('./controllers/CompaniesControllers')
const HospitalsController = require('./controllers/HospitalsController')
const SuspectContractsController = require('./controllers/SuspectContractsController')



routes.get('/', ProfileController.index)
routes.post('/', ProfileController.search)



routes.get('/hospitals', ContractsController.hospitals)
routes.get('/companies', ContractsController.companies)

routes.get('/contract-number', CompaniesController.search_max_companies)
routes.get('/contract-number-2008', CompaniesController.search_max_2008_companies)
routes.get('/contract-number-2009', CompaniesController.search_max_2009_companies)
routes.get('/contract-number-2010', CompaniesController.search_max_2010_companies)
routes.get('/contract-number-2011', CompaniesController.search_max_2011_companies)


routes.get('/search-top-10-companies', CompaniesController.search_top_10_companies)
routes.get('/search-top-10-companies-2008', CompaniesController.search_top_10_companies_2008)
routes.get('/search-top-10-companies-2009', CompaniesController.search_top_10_companies_2009)
routes.get('/search-top-10-companies-2010', CompaniesController.search_top_10_companies_2010)
routes.get('/search-top-10-companies-2011', CompaniesController.search_top_10_companies_2011)

routes.get('/search-top-10-hospitals', HospitalsController.search_top_10_hospitals)
routes.get('/search-top-10-hospitals-2008', HospitalsController.search_top_10_hospitals_2008)
routes.get('/search-top-10-hospitals-2009', HospitalsController.search_top_10_hospitals_2009)
routes.get('/search-top-10-hospitals-2010', HospitalsController.search_top_10_hospitals_2010)
routes.get('/search-top-10-hospitals-2011', HospitalsController.search_top_10_hospitals_2011)

routes.get('/contract-number-hospitals', HospitalsController.search_max_hospitals)
routes.get('/contract-number-hospitals-2008', HospitalsController.search_max_2008_hospitals)
routes.get('/contract-number-hospitals-2009', HospitalsController.search_max_2009_hospitals)
routes.get('/contract-number-hospitals-2010', HospitalsController.search_max_2010_hospitals)
routes.get('/contract-number-hospitals-2011', HospitalsController.search_max_2011_hospitals)

routes.post('/contracts/company/', ContractsController.contracts_company)
routes.post('/contracts/hospital/', ContractsController.contracts_hospital)

routes.get('/suspect-contracts-public_works_contracts', SuspectContractsController.public_works_contracts)
routes.get('/suspect-contracts-acquisition_of_real_state', SuspectContractsController.acquisition_of_real_state)
routes.get('/suspect-contracts-purchasing_services', SuspectContractsController.purchasing_services)
routes.get('/suspect-contracts-other_contracts', SuspectContractsController.other_contracts)
routes.get('/suspect-contracts-fundamentos', SuspectContractsController.fundamentos)
routes.get('/suspect-contracts-repeated_contracts', SuspectContractsController.repeated_contracts)

module.exports = routes;