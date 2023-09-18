import Order from '../../components/Order/Order';
import Searchbar from '../../components/Searchbar/Searchbar';
import Filter from '../../components/Filter/Filter';

import style from './Home.module.css';
import { useEffect, useState } from 'react';

import {useDispatch, useSelector} from 'react-redux';   //? useSelector es para mostrar mi estadoGlobal
import { search_all } from '../../redux/actions/actions';
import Card from '../../components/card/Card';

function Home() {
    // const [countries, setCountries] = useState([]);
    const [page, setPage] = useState(1);
    const [tenCountries, setTenCountries] = useState([]);
    const [oneCountry, setOneCountry] = useState([]);

    // const [searchPage, setSearchPage] = useState(false);
    
    const myCountries = useSelector((state)=>state.myCountries);
    const searchCountry = useSelector((state)=>state.searchCountry);
    const views = useSelector((state)=>state.views);

    const dispatch = useDispatch();

    
    
    const handleButton = (event)=>{
        const buttonName = event.target.name;
        switch (buttonName) {
            case 'izq':
                page>1 && setPage(page-1);
            break;
            case 'der':
                page<25 && setPage(page+1);
            break;
            default:
                console.log("NO SE RECONOCE EL BOTÓN");
        }
    }

    //*  Me guardo todos los países en mi estado global "myCountries"
    useEffect(()=> {
        dispatch(search_all()); 
        // setTenCountries(myCountries.slice((page - 1) * 10, page * 10));
    }, [])


    useEffect(() => {
        // if (views === "1") {
            // const oneCountry = myCountries.find((element)=>{
            //     return element.name === searchCountry;
            // })
        // }
        setTenCountries(myCountries.slice((page - 1) * 10, page * 10));
    }, [page, myCountries]);
    
    useEffect(()=>{
        if (views === "1") {
            setOneCountry(myCountries.find((element)=>{
                return element.name === searchCountry;
            }))
        }
        if (views === "0") {
            dispatch(search_all());
        }

    }, [views, searchCountry])

    
    return (
    <div className={style.contenedor}>

        <div>
            <div className={style.contTitulo}>
                <div><button name='izq' onClick={handleButton}>IZQ</button></div>
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
                <div><button name='der' onClick={handleButton}>DER</button></div>
            </div>

            <div className={style.grid}>
                

                {
                
                views === "0"? (
                    tenCountries.length > 0 ? (
                        tenCountries.map((country) => (
                            <Card key={country.idPais} country={country} />
                        ))
                    ) : 'Cargando...'
                )
                : oneCountry? (
                        <Card key={oneCountry.idPais} country={oneCountry} />
                    ) : 'Cargando...'
                }

                
                
            </div>


        </div>
       
    </div>
  )
}

export default Home