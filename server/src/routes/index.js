//* En las rutas linkeo a qué controlador va a ir...
const { Router } = require("express");
const router = Router();

const getActivities = require('../../Controllers/getActivities');
const getCountries = require('../../Controllers/getCountries');
const getCountriesById = require('../../Controllers/getCountriesById');
const postActivities = require('../../Controllers/postActivities')





//? Cuando me hacen una Petición de tipo GET...
// console.log("Estoy en ROUTES!!");
// router.get("/", getCountries); //? ...voy a getCountries
router.get("/countries", getCountries); //? ...voy a getCountries
router.get("/countries/:idPais", getCountriesById);
router.post("/countries/activities", postActivities);
router.get("/countries/activities/:idPais", getActivities);




module.exports = router;
