
import { Link, Navigate, Route, Routes } from 'react-router-dom';

//Components
import { HomePage, MovieDetailsPage } from '../movie';

//css
import styles from '../MovieApp.module.css';



export const AppRouter = () => {
    return (
        <div>
            <header>
                <Link to="/">
                    <h1 className={ styles.title }>Movies</h1>
                </Link>
            </header>
            
            <main>
                <Routes>
                    <Route path='/' element={ <HomePage /> } />
                    <Route path='/movie/:movieId' element={ <MovieDetailsPage /> } />

                    <Route path='/*' element={ <Navigate to="/" /> } />
                </Routes>      
            </main>
        </div>
    )
}
