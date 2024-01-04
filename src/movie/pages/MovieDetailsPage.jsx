
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

//Data
//import movies from '../../data/movies.json';

import styles from '../css/MovieDetails.module.css';

//Helpers
import { getMovieById } from '../../helpers';


export const MovieDetailsPage = () => {

    const { movieId } = useParams();

    const [movie, setMovie] = useState({});

    const startGetMovieById = async( id ) => {
        const data = await getMovieById( id );
        setMovie( data );
    }

    useEffect(() => {
        startGetMovieById( movieId );
    }, []);


    const imageUrl = `https://image.tmdb.org/t/p/w500${ movie.poster_path }`;
    

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
