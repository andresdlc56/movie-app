import { useEffect, useState } from 'react';

//Components
import { MovieCard } from '../../movie';

//Css
import styles from '../css/MoviesGrid.module.css';

//Importando data
import { getMovies } from '../../helpers';
import { Spinner } from '../';


export const MoviesGrid = () => {

    const [movies, setMovies] = useState([]);

    const [isLoading, setIsLoading] = useState(true);

    //Helper para cargar las movies desde la api
    const startGetMovies = async() => {
        const { results } = await getMovies();
        setMovies( results );
        setIsLoading( false );
    }
    
    useEffect(() => {
        startGetMovies();
    }, []);
    

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
