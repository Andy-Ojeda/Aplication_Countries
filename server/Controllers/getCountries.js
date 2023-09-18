const axios = require('axios')

require('dotenv').config();
const { API } = process.env;

const apiToDB = require('../apiToDB');

const getCountries = async (req, res) => {
    const { pais } = req.query;
    
    //* Si hay Query muestro la Query sino, sigo con lo demás...
    if (pais) { 
        return res.status(200).json({Mensaje: 'Mi QUERY es... ', pais}); 
    }   

    try {
        const response = await axios.get(API);  //?   << <<-- AXIOS
        const apiData = response.data;
       
        console.log("Cantidad en API: ", apiData.length);

        const respApiData = apiToDB(apiData); //Función que guarda todo en DB
        
        res.status(201).json(respApiData);

    } catch (error) {
        res.status(500).json({error:error.message}) 
    }

};

module.exports = getCountries;

 