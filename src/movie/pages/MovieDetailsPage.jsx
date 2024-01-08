
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

//Data
//import movies from '../../data/movies.json';

import styles from '../css/MovieDetails.module.css';

//Helpers
import { getMovieById } from '../../helpers';
import { Spinner } from '../../ui';

//Image
import placeholder from "../../placeholder.png";


export const MovieDetailsPage = () => {

    const { movieId } = useParams();

    //Bandera para indicar si esta cargando o no
    const [isLoading, setIsLoading] = useState(true);

    const [movie, setMovie] = useState({});

    const startGetMovieById = async( id ) => {
        const data = await getMovieById( id );
        setMovie( data );
        setIsLoading( false );
    }

    useEffect(() => {
        startGetMovieById( movieId );
    }, []);


    const imageUrl = (movie.poster_path) 
        ? `https://image.tmdb.org/t/p/w300${ movie.poster_path }` 
        : placeholder
    
    //Validacion mientras carga las movies desde la api
    if( isLoading ) {
        return (
            <Spinner />
        )
    }

    return (
        <div className={ styles.detailsContainer }>
            <img 
                className={`${ styles.col } ${ styles.movieImage }`}
                src={ imageUrl } 
                alt={ movie?.title } 
            />

            <div
                className={ styles.col }
            >
                <p><strong>Title:</strong> { movie?.title }</p>
                <p><strong>Description:</strong> { movie?.overview }</p>
                
            </div>
        </div>
    )
}
