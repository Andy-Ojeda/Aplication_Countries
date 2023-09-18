const { Country } = require('../src/db');


const viewHome = async (req, res)=>{
    try {
        const countriesFromDB = await Country.findAll();
        console.log('Datos obtenidos de DB');
        res.json(countriesFromDB);
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: 'Error en viewHome' });
  
    }
}



module.exports = viewHome; 