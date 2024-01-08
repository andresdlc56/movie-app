
import { Link } from "react-router-dom";

//Css
import styles from "../css/MovieCard.module.css";

//Image
import placeholder from "../../placeholder.png";


export const MovieCard = ({ movie }) => {

    const imageUrl = (movie.poster_path) 
        ? `https://image.tmdb.org/t/p/w300${ movie.poster_path }` 
        : placeholder

    return (
        <li className={ styles.movieCard }>
            <Link to={`/movie/${ movie.id }`} >
                <img 
                    width={ 230 }
                    height={ 345 }
                    className={ styles.movieImage }
                    src={ imageUrl } 
                    alt={ movie.title } 
                />
                
                <div>
                    { movie.title }
                </div>
            </Link>
        </li>
    )
}
