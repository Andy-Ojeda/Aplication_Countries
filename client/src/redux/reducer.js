import {FILTER, FILTERACTIVITY, ORDER, SEARCH, SEARCH_ALL} from './actions/action_types';
// import { useState, useSelector } from 'react';
//*  ESTADOS GLOBALES
const initialState = {
    // myCountries:[],     
    // searchCountry: '', 
    // views: "0",
    // sorted: "",
    show:[],        //!  LO NUEVO!!!!!!!!!!!!!!
    order:'',
}


// const myCountries = useSelector((state)=>state.myCountries); //! LO NUEVO !!!!!!!!!!!

//  ESTADOS LOCALES
// const [all, setAll] = useState([]); //!  Acá guardo todo lo buscado!!

const reducer = (state = initialState, action) =>{
    switch(action.type){    
        case SEARCH_ALL:     //? Si alguien me manda un type: SEARCHALL...
        // myCountries = action.payload
        return {...state, show: action.payload}; //? ...guardo su payload en el estado global.
        
        case SEARCH:
            // console.log('PAYLOAD...', action.payload);
            return {...state, show: [action.payload]};  //! Tuve que hacerlo string para que me funcione el map del Home
        
        case FILTER:
            return {...state, show: action.payload}
        
        case FILTERACTIVITY:
            return {...state, show: action.payload}
        
        case ORDER:
            return {...state, order: action.payload}
            
        default:
            return state;
    }

};

export default reducer;
