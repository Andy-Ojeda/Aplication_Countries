import {FILTER, ORDER, SEARCH, SEARCH_ALL} from './actions/action_types';

//*  ESTADOS GLOBALES
const initialState = {
    myCountries:[],     //?  Países buscados
    searchCountry: '',     //?  Valor buscado
    views: "0",
    sorted: "",
}

const reducer = (state = initialState, action) =>{
    switch(action.type){    
        case SEARCH_ALL:     //? Si alguien me manda un type: SEARCHALL...
        // console.log('Estoy en REDUCER!!')
            return {...state, myCountries: action.payload, views: "0"}; //? ...guardo su payload en el estado global.
        case SEARCH:
            console.log('ActionPayload: ', action.payload);
            // const {textBox} = action.payload;
            // return {...state, searchCountry: textBox, views: "1"};
        case ORDER:
            const {selectOrder} = action.payload;
            selectOrder === '' && {...state, sorted: ''}
            selectOrder === 'ascendente' && {...state, sorted: ''}
            selectOrder === 'descendente' && {...state, sorted: ''}
            // console.log('LO HICE!!!!!!!!!!!!!!!!!!!', selectOrder)
            // return {...state, sorted:}
        
            default:
            return state;
    }

};

export default reducer;
