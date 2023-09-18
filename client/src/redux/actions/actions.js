import {FILTER, ORDER, SEARCH, SEARCH_ALL} from './action_types';
import axios from 'axios';

// Desde acá despacho todas las funciones a realizar.

export const filter = () =>{
    console.log('Esto es un Filter');
}

export const order = (selectOrder) =>{
    return async (dispatch) => {
        try {
            // console.log('Esto es un Order');
            // if (selectOrder === 'ascendente') {

            // }
            return dispatch({type:ORDER, payload:{selectOrder}})
        } catch (error) {
            console.log('Error en ORDER...', error);
        }
    }
}

export const search = (textBox) =>{
    return async (dispatch) => {
        try {
            // console.log('Mi estadoGlobal...', )
            console.log('Desde Action confirmo que Button-Search fue presionado');
            return dispatch({type:SEARCH, payload: {textBox}}) 
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




