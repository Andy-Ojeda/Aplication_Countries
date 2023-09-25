// const { Favorite } = require('../src/DB_connection')
// const { Activity } = require('../src/models/Activity');
// const { Country } = require('../src/models/Country');
const { Activity } = require('../src/db');
const { Country } = require('../src/db');


const postActivities = async (req, res) => {
    
    try {
        console.log('PEPITO...', req.body);

        const { countryNames, name, difficulty, season } = req.body; //* Recibo País y datos de la nueva actividad

        
        const countries = await Promise.all(countryNames.map(async (pais)=>{
            const p = await Country.findOne({where: {name: pais}});    //* Busco el país por su Nombre y lo guardo
            
            if (!p) { 
                return res.status(404).json({error: 'País no encontrado!!'});
            }

            const activity = await Activity.create({name, difficulty, season}); //* Creo la actividad
            
            await p.addActivity(activity);    //* Asocio la actividad con el país
        }))

        return res.status(201).json({ message: 'Actividad/es agregada/s al país exitosamente' });
        
        
        


  





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

