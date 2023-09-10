const axios = require('axios')

require('dotenv').config();
const { API } = process.env;

const apiToDB = require('../apiToDB');

const getCountries = async (req, res) => {
    console.log("Estoy en la getCountries...!!!!");

    const { pais } = req.query;
    
    //* Si hay Query muestro la Query sino, sigo con lo demás...
    if (pais) { 
        return res.status(200).json({Mensaje: 'Mi QUERY es... ', pais}); 
    }   

    try {
        const response = await axios.get(API);
        // console.log("Response es... ", response.data);
        const apiData = response.data;
        // console.log("apiData Antes...", apiData);
        apiToDB(apiData); //Función que guarda todo en DB


        // const name = response.data[0]//.name.common;
        // console.log("Cantidad de elementos... ", response.data.length)
        // const nameCommon = name.common;
        // console.log("NAME es...", nameCommon);
        res.status(201).json(response.data);
    } catch (error) {
        res.status(500).json({error:error.message})
    }

//    try {
        
        // await Favorite.destroy({where: {id}})
        // const allFavs = await Favorite.findAll()
        // res.status(200).json(allFavs)
//    } catch (error) {
//        res.status(500).json({error:error.message})
//    }
};

module.exports = getCountries;

