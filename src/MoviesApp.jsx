
//Router
import { BrowserRouter } from 'react-router-dom';

//css
import styles from './MovieApp.module.css';

//Components
import { MoviesGrid } from "./ui";
import { AppRouter } from './router/AppRouter';

const MoviesApp = () => {
    return (
        <BrowserRouter>
            <AppRouter />
            
            {/*
                <div>
                    <header>
                        <h1 className={ styles.title }>Movies</h1>
                    </header>

                    <main>
                        <MoviesGrid />
                    </main>
                </div>
            */}
        </BrowserRouter>
    )
}

export default MoviesApp