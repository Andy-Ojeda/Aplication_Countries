import {FILTER, ORDER, SEARCH} from './actions/action_types';

const initialState = {
    myCountries:[],
    
}

const reducer = (state = initialState, action) =>{
    switch(action.type){
        case SEARCH:
            console.log('Estoy en REDUCER!!')
        break;


    // return {...initialState};



        default:
            return {...state};
    }

};

export default reducer;
