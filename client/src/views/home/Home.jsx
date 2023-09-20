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
    
    // const [page, setPage] = useState(1);
    // const [tenCountries, setTenCountries] = useState([]);
    // const [idCard, setIdCard] = useState('');

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

    // const [oneCountry, setOneCountry] = useState([]);
    // const [myCountries, setMyCountries] = useState([]);

    
    const show = useSelector((state)=>state.show); //! LO NUEVO !!!!!!!!!!!
    // const myCountries = useSelector((state)=>state.myCountries);
    // const searchCountry = useSelector((state)=>state.searchCountry);
    // const views = useSelector((state)=>state.views);

    // useEffect(()=>{
    //     const func = () =>{
    //         console.log('PAGE is...', page)
    //     }

    // }, [page])

    
    // const handleButton = (event)=>{
    //     const buttonName = event.target.name;
    //     console.log('PAGE...', page)
    //     switch (buttonName) {
    //         case 'izq':
    //             setTenCountries(show.slice((page - 1) * 10, page * 10)); 
    //             setPage(page>1 && page-1);
    //         break;    
    //         case 'der':
    //             setTenCountries(show.slice((page - 1) * 10, page * 10)); 
    //             setPage(page<25 && page+1);
    //         break;    
                
    //         default:
    //             console.log("NO SE RECONOCE EL BOTÓN");
    //     }
    // }

    //*  Me guardo todos los países en mi estado global "myCountries"
    useEffect(()=> {
        dispatch(search_all()); 
        
        // setTenCountries(show.slice((page - 1) * 10, page * 10));
    }, [])


    
    return (
    <div className={style.contenedor}>

        <div>
            {/* <div className={style.contTitulo}> */}
                {/* Lorem ipsum dolor, sit amet. */}
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
                {/* Lorem ipsum dolor, sit amet. */}
               
            {/* </div> */}
            <div className={style.contGrid}>
                <Grid show={show}/>
            </div>


        </div>
       
    </div>
  )
}

export default Home