import Order from '../../components/Order/Order';
import Searchbar from '../../components/Searchbar/Searchbar';
import Filter from '../../components/Filter/Filter';
import Grid from '../../components/Grid/Grid';

import style from './Home.module.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import {useDispatch, useSelector} from 'react-redux';   //? useSelector es para mostrar mi estadoGlobal
import { searchID, search_all } from '../../redux/actions/actions';
import Card from '../../components/card/Card';

function Home() {
    const dispatch = useDispatch();
    const {id} = useParams();
    
    useEffect(() => {
        const fetchData = async () =>{
            try {
                await dispatch(searchID(id));
            } catch (error) {
                console.log('ERROR EN HOME ::', error);
            }
        }
        if (id !== undefined) {
            fetchData();
        }
    }, [id, dispatch]);

    
    const show = useSelector((state)=>state.show); //! LO NUEVO !!!!!!!!!!!
    
    //*  Me guardo todos los países en mi estado global "myCountries"
    useEffect(()=> {
        dispatch(search_all()); 
    }, [])


    return (
    <div className={style.contenedor}>
            
            <div className={style.contSelects}>
                <div className={style.searchBar}>
                    <Searchbar />
                </div>
                <div className={style.contOrder}>
                    <Order />
                </div>
                <div className={style.contFilter}>
                    <Filter />
                </div>
                
            </div>
                
            <div className={style.contGrid}>
                <Grid show={show}/>
            </div>

    </div>
  )
}

export default Home