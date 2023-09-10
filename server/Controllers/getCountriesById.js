const { Country } = require('../src/db');

const getCountriesById = async (req, res) => {
    const { idPais } = req.params;
    
    const id = idPais.toUpperCase();
    console.log("Mi ID es... ", id);


    try {
        const country = await Country.findByPk(id);
        if (!country){
            return res.status(404).json({error: 'País no encontrado!!'});
        }
        res.json(country);
        
    } catch (error) {
        res.status(500).json({error:'Error buscando Pais con el ID: ', id});
    }
};

module.exports = getCountriesById;

