const { Country, Activity } = require('../src/db');

const getCountriesActivities = async (req, res) =>{
    try {
        //Obtengo todos los paises y sus actividades asociados
        const countries = await Country.findAll({
            include: Activity,  
        });



        res.status(200).json(countries);
    } catch (error) {
        console.log('Error en getCountriesActivities.js...', error);
        res.status(500).json({error: 'Error interno del servidor'});
    }
};

module.exports = getCountriesActivities;