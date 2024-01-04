import { useEffect, useState } from 'react';

//Components
import { MovieCard } from '../../movie';

//Css
import styles from '../css/MoviesGrid.module.css';

//Importando data
import { getMovies } from '../../helpers';


export const MoviesGrid = () => {

    const [movies, setMovies] = useState([]);

    //Helper para cargar las movies desde la api
    const startGetMovies = async() => {
        const { results } = await getMovies();
        setMovies( results );
    }
    
    useEffect(() => {
        startGetMovies();
    }, []);
    
    
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
