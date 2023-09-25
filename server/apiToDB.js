const axios = require('axios');
const {Country, Activity} = require("./src/db")

const apiToDB = async (apiData)=> {
    
    console.log("API TO DB!!!!!!")
    
   

        const bulkData = apiData.map((data) => ({
            idPais: data.cca3 && data.cca3,
            name: data.name?.common,
            flagImage: data.flags?.png,
            continent: data.continents?.[0],
            capital: data.capital?.[0],
            subregion: data.subregion && data.subregion,
            area: data.area && data.area,
            population: data.population && data.population
        }));

        try {
            // const creado = await Country.findOrCreate({where: datos});
            await Country.bulkCreate(bulkData, { ignoreDuplicates: true });
            console.log('Datos guardados en la DB!!!');
            
        } catch (error) {
            console.log("Error............ ", error.message)
        }
        
    




};

module.exports = apiToDB;

