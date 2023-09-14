// const Country = require('./src/models/Country');
const {Country} = require("./src/db")

const apiToDB = async (apiData)=> {
    
    console.log("API TO DB!!!!!!")
    
    // for (let data of apiData) {
    //     const datos = {
    //         idPais: data.cca3 && data.cca3,
    //         name: data.name?.common,
    //         flagImage: data.flags?.png,
    //         continent: data.continents?.[0], //data?.continents[0],
    //         capital: data.capital?.[0], //data.capital[0],
    //         subregion: data.subregion && data.subregion,
    //         area: data.area && data.area,
    //         population: data.population && data.population
    //     };

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

