import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';

//Components
import { MovieCard } from '../../movie';

//Css
import styles from '../css/MoviesGrid.module.css';

//Importando data
import { getMovies, getMoviesByName } from '../../helpers';
import { Spinner } from '../';




export const MoviesGrid = () => {

    const location = useLocation();

    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    //Capturando y parsiando los datos obtenidos desde la url
    const { search = '' } = queryString.parse( location.search );

    //Helper para cargar las movies desde la api
    const startGetMovies = async() => {
        setIsLoading( true );
        const { results } = await getMovies();
        setMovies( results );
        setIsLoading( false );
    }

    //Helper para cargar las movies de un determinado title 
    const startGetMoviesByName = async( title ) => {
        setIsLoading( true );
        const { results } = await getMoviesByName( title );
        setMovies( results );
        setIsLoading( false );
    }

    
    useEffect(() => {  
        if( !search ) {
            startGetMovies();
            return
        }
        
        startGetMoviesByName( search );
        return 
    }, [search]);
    

    //Validacion mientras carga las movies desde la api
    if( isLoading ) {
        return (
            <Spinner />
        )
    }
    
    return (
        <ul className={ styles.moviesGrid }>
            {
                movies.map((movie) => (
                    <MovieCard key={ movie.id } movie={ movie } />
                ))
            }
        </ul>
    )
}
