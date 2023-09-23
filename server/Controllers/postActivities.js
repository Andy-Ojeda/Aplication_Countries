// const { Favorite } = require('../src/DB_connection')
// const { Activity } = require('../src/models/Activity');
// const { Country } = require('../src/models/Country');
const { Activity } = require('../src/db');
const { Country } = require('../src/db');


const postActivities = async (req, res) => {
    
    try {
        
        const { countryName, name, difficulty, season } = req.body; //* Recibo País y datos de la nueva actividad
        console.log("Datos recibidos...", { countryName, name, difficulty, season });
        
        // console.log('countryName........ ', countryName);
        
        const country = await Country.findOne({where: {name: countryName}});    //* Busco el país por su Nombre y lo guardo
        // console.log('PAIS........ ', country);
        // return res.status(202).json(country);

        if (!country) { 
            return res.status(404).json({error: 'País no encontrado!!'});
        }

        const activity = await Activity.create({name, difficulty, season}); //* Creo la actividad
        await country.addActivity(activity);    //* Asocio la actividad con el país

        return res.status(201).json({ message: 'Actividad agregada al país exitosamente' });
  





//         if(![name, difficulty, season].every(Boolean)) return res.status(401).send('Faltan DATOS');

//         //* Guardo en la tabla 'Activities' de la DB...
//         await Activity.findOrCreate({where: {name, difficulty, season}}) 

//         //* Recupero todo de la tabla para chequear que se crearon...
//         const allActivities = await Activity.findAll()

//         return res.status(200).json(allActivities);

    } catch (error) {
        console.log('Error al buscar el país:', error);
  res.status(500).json({ error: 'Error interno del servidor' });
    }
 };

module.exports = postActivities;

