const { Country } = require('../src/db');


const viewHome = async (req, res)=>{
    try {
        console.log('Consultando DB');
        const countriesFromDB = await Country.findAll();
        console.log('Resultados... ', countriesFromDB);
        res.json(countriesFromDB);
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: 'Error en viewHome' });
  
    }
}



module.exports = viewHome; 