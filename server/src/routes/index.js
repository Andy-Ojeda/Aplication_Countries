//* En las rutas linkeo a qué controlador va a ir...
const { Router } = require("express");
const router = Router();

const getActivities = require('../../Controllers/getActivities');
const getCountries = require('../../Controllers/getCountries');
const getCountriesById = require('../../Controllers/getCountriesById');
const postActivities = require('../../Controllers/postActivities')
const viewHome = require('../../Controllers/viewHome');

const getCountriesActivities = require('../../Controllers/getCountriesActivities');




//? Cuando me hacen una Petición de tipo GET...

router.get("/countries", getCountries); 
router.get("/countries/home", viewHome); 

router.get("/countries/getall", getCountriesActivities);

router.post("/countries/activities", postActivities);
router.get("/countries/:idPais", getCountriesById);
router.get("/countries/activities/:idPais", getActivities);



module.exports = router;
