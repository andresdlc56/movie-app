import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';

//Components
import InfiniteScroll from 'react-infinite-scroll-component';
import { MovieCard } from '../../movie';

//Css
import styles from '../css/MoviesGrid.module.css';

//Importando data
import { getMovies, getMoviesByName } from '../../helpers';
import { Spinner } from '../';




export const MoviesGrid = ({ search = '' }) => {

    //Estado para almacenar las movies encontradas 
    const [movies, setMovies] = useState([]);
    
    //Estado para indicar si esta cargando las movies o no
    const [isLoading, setIsLoading] = useState(true);

    //Estado para indicar la pagina actual
    const [page, setPage] = useState(1);

    const [hasMore, setHasMore] = useState( true );


    //Helper para cargar las movies desde la api
    const startGetMovies = async( page ) => {
        setIsLoading( true );
        const data = await getMovies( page );
        //console.log( data.results );

        let prevMovies = [ ...movies ];

        setMovies( prevMovies.concat(data.results) );

        setHasMore( data.page < data.total_pages );        

        //setMovies( data.results );
        setIsLoading( false );
    }

    //Helper para cargar las movies de un determinado title 
    const startGetMoviesByName = async( title, page = 1 ) => {
        setIsLoading( true );
        const data = await getMoviesByName( title, page );
        //console.log( data.results );

        let prevMovies = [ ...movies ];

        setMovies( prevMovies.concat(data.results) );

        setHasMore( data.page < data.total_pages );

        setIsLoading( false );
    }

    
    //Efecto que se va a ejecutar cada vez que el search o la pagina cambie
    useEffect(() => {  
        (search) ? (startGetMoviesByName( search, page )) : (startGetMovies( page ))
    }, [search, page]);
    

    
    
    return (
        <InfiniteScroll
            dataLength={movies.length} //This is important field to render the next data
            next={ () => setPage( prevPage => prevPage + 1 ) }
            hasMore={ hasMore }
            loader={ <Spinner /> }
        >
            <ul className={ styles.moviesGrid }>
                {
                    movies.map((movie) => (
                        <MovieCard key={ movie.id } movie={ movie } />
                    ))
                }
            </ul>
        </InfiniteScroll>
    )
}
