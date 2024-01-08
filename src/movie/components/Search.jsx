import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import queryString from 'query-string';
import { FaSearch } from "react-icons/fa";


//Css
import styles from '../css/search.module.css';




export const Search = () => {

    const navigate = useNavigate();
    const location = useLocation();
    
    const [searchText, setSearchText] = useState('');

    //Capturando y parsiando los datos obtenidos desde la url
    const { search = '' } = queryString.parse( location.search );
    
    useEffect(() => {
        if( !search ) {
            setSearchText('');
            return    
        }

        return
    }, [search])
    

    const handleSubmit = (e) => {
        e.preventDefault();
        
        //Agregar datos de busqueda a la url
        navigate(`/?search=${ searchText }`);
    }

    return (
        <form onSubmit={ handleSubmit } className={ styles.searchContainer }>
            <div className={ styles.searchBox }>

                <input
                    className={ styles.searchInput } 
                    type="text" 
                    value={ searchText }
                    onChange={ (e) => {
                        //Capturando el valor del input 
                        const value = e.target.value
                        setSearchText( value );

                        //Agregar datos de busqueda a la url
                        navigate(`/?search=${ value }`);
                    } }
                />

                <FaSearch size={ 20 } color="black" className={ styles.searchButton } />                
            </div>
        </form>
    )
}
