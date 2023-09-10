// const Country = require('./src/models/Country');
const {Country} = require("./src/db")

const apiToDB = async (apiData)=> {
    
    console.log("API TO DB!!!!!!")
    // console.log('NAME: ', apiData[0].name.common);
    const nombre = apiData[0].name.common;
    const bandera = apiData[0].flags.png;
    const continente = apiData[0].continents[0];
    const capital1 = apiData[0].capital[0];
    const subregion1 = apiData[0].subregion;
    const area1 = apiData[0].area;
    const poblacion = apiData[0].population;

    // console.log('===================================');
    // let nameString = typeof nombre === "string"? true : false;
    // console.log("NOMBRE es TRING?? ", nameString);
    
    // console.log('===================================');

    console.log("name: ", nombre);
    console.log("FlagIMAGE: ", bandera);
    console.log("Continent: ", continente);
    console.log("capital: ", capital1);
    console.log("subregion: ", subregion1);
    console.log("area: ", area1);
    console.log("population: ", poblacion);



    
    for (let data of apiData) {
        const datos = {
            idPais: data.cca3 && data.cca3,
            name: data.name?.common,
            flagImage: data.flags?.png,
            continent: data.continents?.[0], //data?.continents[0],
            capital: data.capital?.[0], //data.capital[0],
            subregion: data.subregion && data.subregion,
            area: data.area && data.area,
            population: data.population && data.population
        };
        try {
            const creado = await Country.findOrCreate({where: datos});
            console.log("Acabo de crear... ", creado[0].get());
        } catch (error) {
            console.log("Error............ ", error.message)
        }

    }






    // apiData.forEach((data)=> {
    //     const datos = [];
    //     console.log("Dentro de ForEach!!")
    //     //     const name = data.name.common;
    //     datos.push({name:data.name.common});
    //     datos.push({flagImage: data.flags.png});
    //     datos.push({continent: data.continents});
        
    //     console.log("Datos... ", datos);
    //     const {name, flagImage, continent} = datos;


    //     const algo = await Country.findOrCreate({name, flagImage, continent})
    //     .then((creado)=>{
    //         console.log("Acabo de crear... ", creado);
    //     })
    //     .catch((error)=>{
    //         console.log("Errrrrrroooooorrr... ", error.message);
    //     })
        
    // })
        
        
    
    
    
    //     try {
    //         await Country.create(name);
    //     } catch (error) {
    //         console.log('Error al guardar el país: ', error);
    //     }




};

module.exports = apiToDB;

