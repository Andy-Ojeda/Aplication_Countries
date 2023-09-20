import {FILTER, ORDER, SEARCH, SEARCH_ALL} from './action_types';
import axios from 'axios';

// Desde acá despacho todas las funciones a realizar.

export const filter = (value) =>{
    return async (dispatch) => {
        // console.log('Esto es un Filter', value);
        try {
            const {data} = await axios.get('http://localhost:3001/countries/home'); //? Traigo todo de mi DB
            const countries = data.filter((country)=>{
                return country.continent === value;
            })
            console.log('COUNTRIES SON... ', countries[0])
            return dispatch({type:FILTER, payload: countries}) 
            
        } catch (error) {
            console.log('Error en FILTER...', error);
        }
    }

}

export const order = (value) =>{
    return async (dispatch) => {
        try {
            // console.log('Esto es un Order');
            // if (selectOrder === 'ascendente') {

            // }
            return dispatch({type:ORDER, payload:{value}})
        } catch (error) {
            console.log('Error en ORDER...', error);
        }
    }
}

export const search = (textBox) =>{
    return async (dispatch) => {
        try {
            const {data} = await axios.get('http://localhost:3001/countries/home'); //? Traigo todo de mi DB
            const oneCountry = data.find((country)=>{
                return country.name === textBox;
            })

            return dispatch({type:SEARCH, payload: oneCountry}) 
        } catch (error) {
            console.log('Error en SEARCH... ', error);
        }
    }
}

    export const searchID = (idParam) =>{
        return async (dispatch) => {
            try {
                const {data} = await axios.get('http://localhost:3001/countries/home'); //? Traigo todo de mi DB
                const oneCountry = data.find((country)=>{

                    return country.idPais === idParam;
                })
                console.log('SSSSSSSSSSSSSSSS', oneCountry)
                return dispatch({type:SEARCH, payload: oneCountry}) 
            } catch (error) {
                console.log('Error en SEARCH... ', error);
            }
        }
    }

export const search_all = () =>{
    return async (dispatch) => {
        try {       
            const {data} = await axios.get('http://localhost:3001/countries/home'); //? Traigo todo de mi DB
            return dispatch({type: SEARCH_ALL, payload: data});                      //? Lo despacho a data
        } catch (error) {
            console.log('Error en SEARCH_ALL... ', error);
        }
    } 
}




