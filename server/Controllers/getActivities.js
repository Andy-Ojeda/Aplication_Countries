const { Country, Activity } = require('../src/db');
const { Op } = require('sequelize');


const getActivities = async (req, res) => {
    
    try {
        const { idPais } = req.params; // Supongamos que el nombre del país se pasa como parámetro en la URL
    
        const country = await Country.findOne({
          where: { name: idPais },
          include: Activity, // Esto cargará las actividades asociadas al país
        });
    
        if (!country) {
          return res.status(404).json({ error: 'En getActivities.js - País no encontrado' });
        }
    
        const activities = country.Activities; // Esto te dará todas las actividades asociadas al país
    
        return res.status(200).json(activities);
      } catch (error) {
        console.log('Error al buscar actividades:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
      }
    



};

module.exports = getActivities;

